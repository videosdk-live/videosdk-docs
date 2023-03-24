---
title: Setup HLS Player | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interatice livestreaming.
sidebar_label: Setup HLS Player
pagination_label: Setup HLS Player
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup-hls-player
---

# Setup HLS Player

In this guide we will create a new Component which will be responsible for playing the HLS stream.
Before starting this guide make sure you have a VideoSDK meetings setup allowing you to join the room. To learn more about setting up a VideoSDK meeting, follow this quick start guide.

To play the HLS stream we will be using the [`hls.js`] library.

### `1. Setup Component with HLS events`

**`Step 1:`** Let us first start by creating the new component named `HLSPlayer` which will be placed inside the `MeetingProvider` so we can access the VideoSDK hooks.

```js
function MeetingContainer() {
  return <HLSPlayer />;
}

function HLSPlayer() {
  return <div style={{ height: "100vh", width: "100vw" }}></div>;
}
```

**`Step 2:`** Now lets add the `onHlsStateChanged` callback which will give us the state of the HLS as well as the downstream URL to play.

```js
function HLSPlayer() {
  // States to store downstream url and current HLS state
  const [downstreamUrl, setDownstreamUrl] = useState(null);
  const [hlsState, setHlsState] = useState("STOPPED");

  const mMeeting = useMeeting({
    onHlsStateChanged: (data) => {
      if (
        data.status === Constants.hlsEvents.HLS_STARTED ||
        data.status === Constants.hlsEvents.HLS_STOPPED
      ) {
        //Update the Downstream URL on HLS start and stop events
        setDownstreamUrl(
          data.status === Constants.hlsEvents.HLS_STARTED
            ? data.downstreamUrl
            : null
        );
      }

      //Update the current state of the HLS
      if (data.status === Constants.hlsEvents.HLS_STARTED) {
        setHlsState("STARTED");
      }

      if (data.status === Constants.hlsEvents.HLS_STOPPED) {
        setHlsState("STOPPED");
      }
    },
  });

  return <div></div>;
}
```

### `2. Playing HLS stream`

**`Step 1:`** We will using the HLS state we declared before to show a placeholder which will be shown while the HLS is not started or has been stopped.

```js
function HLSPlayer(){
  //highlight-next-line
  ...

  return (
    <div>
      {hlsState == STOPPED ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        <div>Play the HLS</div>
      )}
    </div>
  );
}
```

**`Step 2:`** We will be using the [`hls.js`](https://www.npmjs.com/package/hls.js) library to play the HLS stream. So let's start by installing the library.

```bash
npm install "hls.js"
```

**`Step 3:`** Next we will be adding a `<video>` element which will play our livestream. We will also add a state which will be responsible to identifying if the HLS stream is playable at or not.

```js
function HLSPlayer(){
  //highlight-next-line
  ...

  const [canPlay, setCanPlay] = useState(false);
  const playerRef = useRef(null);

  return (
    <div>
      {hlsState == STOPPED && !canPlay ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        <div>
          <video
            ref={playerRef}
            id="hlsPlayer"
            autoPlay={true}
            controls
            style={{ width: "100%", height: "100%" }}
            playsinline
            playsInline
            muted={true}
            playing
            onError={(err) => {
              console.log(err, "hls video error");
            }}
          ></video>
        </div>
      )}
    </div>
  );
}
```

**`Step 4:`** Now that video player is ready, lets add the logic to see if the HLS is playable or not.

```js
function HLSPlayer(){
  //highlight-next-line
  ...

  //This will keep trying to check if the hls video is available for playback or not every 1 second.
  async function waitForHLSPlayable(downstreamUrl, maxRetry) {
    return new Promise(async (resolve, reject) => {
      if (maxRetry < 1) {
        return reject(false);
      }

      let status;

      try {
        const res = await fetch(downstreamUrl, {
          method: "GET",
        });
        status = res.status;
      } catch (err) {}

      if (status === 200) {
        return resolve(true);
      }

      await sleep(1000);

      return resolve(
        await waitForHLSPlayable(downstreamUrl, maxRetry - 1).catch((err) => {})
      );
    });
  }

  const checkHLSPlayable = async (downstreamUrl) => {
    const canPlay = await waitForHLSPlayable(downstreamUrl, 20);

    if (canPlay) {
      setCanPlay(true);
    } else {
      setCanPlay(false);
    }
  };

  //This will check if downstream url is present, then is it playable
  //and it will update the state accordingly
  //highlight-start
  useEffect(async () => {
    if (downstreamUrl) {
      checkHLSPlayable(downstreamUrl);
    } else {
      setCanPlay(false);
    }
  }, [downstreamUrl]);
  //highlight-end

  return (
    <div>
    //highlight-next-line
      ...
    </div>
  );
}
```

**`Step 4:`** Now once the HLS is playable we will use the `hls.js` to play the stream.

```js
function HLSPlayer() {
  //highlight-next-line
  ...

  useEffect(() => {
    if (downstreamUrl && canPlay) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          autoStartLoad: true,
          defaultAudioCodec: "mp4a.40.2",
        });

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(downstreamUrl);
        hls.attachMedia(player);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {});
        hls.on(Hls.Events.ERROR, function (err) {
          console.log(err);
        });
      } else {
        if (typeof playerRef.current?.play === "function") {
          playerRef.current.src = downstreamUrl;
          playerRef.current.play();
        }
      }
    }
  }, [downstreamUrl, canPlay]);

  return <div>...</div>;
}
```

With This the player is all setup to play the HLS.

## API Reference

The API references for all the methods utilised in this guide are provided below.

- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
