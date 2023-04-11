---
title: Reactions with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Reactions
pagination_label: Reactions
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: reactions
---

# Reactions

When doing a livestream, one of the way to increase the interaction in between the viewer and speaker is by showing the viewers reaction to all. You might have seen emojis flying around during the livestream happening on instagram.

Lets create a similar flying emoji by using the VideoSDK PubSub mechanism.

### Step 1: Creating a button to send reaction

We will create a button to send reaction to all the users. When this button is clicked we will send the emoji name to all the participants using the VideoSDK PubSub mechanism and also to the local participant using the browser `CustomEvents`.

```js title="ILSView.js"
import { usePubSub } from "@videosdk.live/react-sdk";

function ILSView() {
  const { publish } = usePubSub("REACTION");
  //highlight-start
  function sendEmoji(emoji) {
    // Dispatch custom event here so the local user can see their own emoji
    window.dispatchEvent(
      new CustomEvent("reaction_added", { detail: { emoji } })
    );
  }
  //highlight-end
  return (
    <>
      <button
        onClick={() => {
          sendEmoji("confetti");
          publish("confetti");
        }}
      >
        Send 🎉 Reaction
      </button>

      <button
        onClick={() => {
          sendEmoji("clap");
          publish("clap");
        }}
      >
        Send 👏 Reaction
      </button>
    </>
  );
}
```

### Step 2: Displaying the Reactions to all the users

We will be using the `FlyingEmojiOverlay.js` to show the reactions. Here we will listen to the browser event that we send on the button click and show the flying emoji, as well as we will show all the reactions that are send by other participants.

- Listening to local event and adding the `FlyingEmojiOverlay` to `ILSView`;

```js title="ILSView.js"
function ILSView(){
  ...

  return <>
  <FlyingEmojiOverlay/>
  ...
  </>
}
```

```js title="FlyingEmojiOverlay.js"
const EMOJI_MAP = {
  confetti: "🎉",
  clap: "👏",
};

const FlyingEmojisOverlay = ({}) => {
  const overlayRef = useRef();
  // Listen to window events to show local user emojis and send the emoji to all participants on the call
  //highlight-start
  useEffect(() => {
    function handleSendFlyingEmoji(e) {
      const { emoji } = e.detail;

      if (emoji) {
        pubsubDataRef.current.publish(emoji);
      }
    }

    window.addEventListener("reaction_added", handleSendFlyingEmoji);
    return () =>
      window.removeEventListener("reaction_added", handleSendFlyingEmoji);
  }, [handleDisplayFlyingEmoji]);
  //highlight-end

  return <div className="flying-emojis" ref={overlayRef}></div>;
};

export default FlyingEmojisOverlay;
```

- Now let us display and remove the flying emojis by using some simple css animations.

```js title="FlyingEmojiOverlay.js"
function FlyingEmojiOverlay(){
  ...

  //Handler to remove the flying emoji once animation is completed
  //highlight-start
  const handleRemoveFlyingEmoji = useCallback((node) => {
    if (!overlayRef.current) return;
    overlayRef.current.removeChild(node);
  }, []);
  //highlight-end


  // Hanlder to dispaly the emoji and start is animations
  //highlight-start
  const handleDisplayFlyingEmoji = useCallback(
    (emoji) => {
      if (!overlayRef.current) {
        return;
      }
      const node = document.createElement("div");
      node.appendChild(document.createTextNode(EMOJI_MAP[emoji]));
      //Randomly choosing the animations of wiggle, rotation and position
      node.className =
        Math.random() * 1 > 0.5 ? "emoji wiggle-1" : "emoji wiggle-2";
      node.style.transform = `rotate(${-30 + Math.random() * 60}deg)`;
      node.style.left = `${Math.random() * 100}%`;
      node.src = "";
      overlayRef.current.appendChild(node);

      node.addEventListener("animationend", (e) => {
        handleRemoveFlyingEmoji(e.target);
      });
    },
    [handleRemoveFlyingEmoji]
  );
  //highlight-end

  // Remove all event listeners on unmount to prevent console warnings
  useEffect(
    () => () =>
      overlayRef.current?.childNodes.forEach((n) =>
        n.removeEventListener("animationend", handleRemoveFlyingEmoji)
      ),
    [handleRemoveFlyingEmoji]
  );

  return <>...</>
}
```

- Let us add the animations in the `index.css`

```css
.flying-emojis {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  z-index: 99;
}
.emoji {
  position: absolute;
  bottom: 0px;
  left: 50%;
  font-size: 48px;
  line-height: 1;
  width: 48px;
  height: 48px;
}
.emoji.wiggle-1 {
  animation: emerge 3s forwards, wiggle-1 1s ease-in-out infinite alternate;
}
.emoji.wiggle-2 {
  animation: emerge 3s forwards, wiggle-2 1s ease-in-out infinite alternate;
}
@keyframes emerge {
  to {
    bottom: 85%;
    opacity: 0;
  }
}
@keyframes wiggle-1 {
  from {
    margin-left: -50px;
  }
  to {
    margin-left: 50px;
  }
}
@keyframes wiggle-2 {
  from {
    margin-left: 50px;
  }
  to {
    margin-left: -50px;
  }
}
```

- Let us add listener to our PubSub topic so reaction from other participants is also shown.

```js title="FlyingEmojiOverlay.js"
function FlyingEmojiOverlay(){
  ...

  //Subscribing to the PubSub topic REACTION to recive other participants reactions.
  //highlight-start
  const pubsubData = usePubSub("REACTION", {
    onMessageReceived: ({ message }) => {
      handleReceiveFlyingEmoji(message);
    },
  });
  //highlight-end

  const pubsubDataRef = useRef(pubsubData);

  useEffect(() => {
    pubsubDataRef.current = pubsubData;
  }, [pubsubData]);

  //Showing other participants reactions
  //highlight-start
  const handleReceiveFlyingEmoji = useCallback(
    (message) => {
      if (!overlayRef.current) {
        return;
      }
      handleDisplayFlyingEmoji(message);
    },
    [handleDisplayFlyingEmoji]
  );
  //highlight-end

  return <> ... </>
}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_ils_reactions.mp4" height="500px" width={"100%"} />

</div>

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
