---
title: Display Audio and Video | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Display Audio and Video
pagination_label: Display Audio and Video
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-audio-video
---

# Display Audio and Video

In this guide we will take a look at how to render the participant's audio and video on the screen.

## Rendering Participant

The theree steps are involve to achieve this process.

1. Get Mic and Webcam Status
2. Rendering Video
3. Rendering Audio

### `1. Get Mic and Webcam Status`

We must determine whether the participant's audio or video is on or off before rendering him or her. Hence, if the webcam is not turned on, we will begin by rendering the participant's frames with their name in them; otherwise, we will render the video.

**`Step 1:`** Let's get every `participants` from `useMeeting` and create a straightforward box with each person's name.

```js
const MeetingView = () => {
  //Getting all the participants
  const { participants } = useMeeting();

  //Looping over the participants and rendering a simple
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {[...participants.keys()].map((participantId, index) => (
        <ParticipantView key={index} participantId={participantId} />
      ))}
    </div>
  );
};

// These will render a single participant's view
const ParticipantView = ({ participantId }) => {
  const { displayName } = useParticipant(participantId);
  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      //highlight-start
      <p>{displayName}</p>
      //highlight-end
    </div>
  );
};
```

**`Step 2:`** To display the status of each participant's microphone and webcam in the grid, you can use the `micOn` and `webcamOn` properties of the `useParticipant` hook.

Here's a code code snippet of rendering mic and webcam status:

```js
const ParticipantView = ({ participantId }) => {
  //Getting the micOn and webcamOn property
  const { displayName, micOn, webcamOn } = useParticipant(participantId);
  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      <p>{displayName}</p>
      //highlight-start
      <p>
        Webcam:{webcamOn ? "On" : "Off"} Mic: {micOn ? "On" : "Off"}
      </p>
      //highlight-end
    </div>
  );
};
```

### `2. Rendering Video`

The status of the `webcam` and `mic` is now displayed. If the webcam is turned `on`, we will require the participant's `webcamStream` which we will obtain from the `useParticipant` hook, in order to display the participant's video.

**`Step 1:`** Let's get the `webcamStream` and define a `<video>` tag which will render the video of the participant. We will use the `useRef` to create a reference to this video tag.

```js
import { useRef } from "react";

const ParticipantView = ({ participantId }) => {
  //Getting the webcamStream property
  const { displayName, micOn, webcamOn, webcamStream } =
    useParticipant(participantId);

  //highlight-next-line
  const webcamRef = useRef(null);

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      <p>...</p>
      //highlight-start
      <video width={"100%"} height={"100%"} ref={webcamRef} autoPlay />
      //highlight-end
    </div>
  );
};
```

<center>

![participant status](/img/participant-status.png)

</center>

**`Step 2:`** Now that we have our `<video>` element in place, we will add a `useEffect` so that, when the `webcamStream` is discovered, it will immediately add to the `<video>` element.

```js
const ParticipantView = ({ participantId }) => {
  //Getting the webcamStream property
  const { displayName, micOn, webcamOn, webcamStream } =
    useParticipant(participantId);

  const webcamRef = useRef(null);

  //highlight-start
  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn && webcamStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);
  //highlight-end

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      ...
    </div>
  );
};
```

<center>

![participant grid](/img/participant-grid.png)

</center>

#### `2.1 Maintaining the aspect ratio`

If you wish to maintain the aspect ratio of the video, meaning showing vertical video and not making it fill the complete space of the view, you can set the `object-fit: contain`.

If you wish to always fill the view irrespective of the video resolution you can set the `object-fit:cover`.

```js
const ParticipantView = ({ participantId }) => {
  //... Other video configurations

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
        //highlight-next-line
        objectFit: "contain",
      }}
    >
      ...
    </div>
  );
};
```

<center>

![object fit image](/img/object-fit.png)

</center>

#### `2.2 Mirror Local Video View`

If you wish to show the mirror view of the local participant, you can apply the transformation style to the participant's view.

```js
const ParticipantView = ({ participantId }) => {
  const { isLocal } = useParticipant(participantId);

  //... Other video configurations

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
        //highlight-next-line
        objectFit: "contain",
      }}
    >
      ...
      <video
        width={"100%"}
        height={"100%"}
        ref={webcamRef}
        autoPlay
        //highlight-start
        style={
          isLocal
            ? { transform: "scaleX(-1)", WebkitTransform: "scaleX(-1)" }
            : {}
        }
        //highlight-end
      />
    </div>
  );
};
```

##### Sample video of mirror view video

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/mirror-sample.mp4' width={"100%"}/>

</div>

### `3. Rendering Audio`

Now we have displayed the webcam and mic status along with the video of the particiapnt. If the mic is turned `on` we will need the `micStream` of the participant which we will obtain from the `useParticipant` hook, in order to play the participant's audio.

**`Step 1:`** Let's get the `micStream` and define a `<audio>` tag which will render the audio of the participant. We will use the `useRef` to create a reference to this audio tag.

```js
import { useRef } from "react";

const ParticipantView = ({ participantId }) => {
  //Getting the micStream property
  const { displayName, micOn, webcamOn, webcamStream, micStream } =
    useParticipant(participantId);

  const audioRef = useRef(null);

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      <p>...</p>
      //highlight-start
      <audio ref={audioRef} autoPlay />
      //highlight-end
    </div>
  );
};
```

**`Step 2:`** Now that we have our `<audio>` element in place, we will add a useEffect so that, when the `micStream` is discovered, it will immediately add to the `<audio>` element.

```js
const ParticipantView = ({ participantId }) => {
  //Getting the webcamStream property
  const { displayName, micOn, webcamOn, webcamStream } =
    useParticipant(participantId);

  // ... webcam stream dispalying here

  const micRef = useRef(null);

  //highlight-start
  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);
  //highlight-end

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      ...
    </div>
  );
};
```

:::caution
While rendering the audio, we should **not render the audio of local participant** as it will create the echo.
So to solve that we will `mute the audio` of the `localParticipant`

```js
const ParticipantView = ({ participantId }) => {
  //highlight-start
  //Getting the isLocal property
  const { displayName, micOn, webcamOn, webcamStream, micStream, isLocal } =
    useParticipant(participantId);
  //highlight-end

  const audioRef = useRef(null);

  return (
    <div
      style={{
        height: "300px",
        background: "#C0C2C9",
      }}
    >
      <p>...</p>
      //highlight-start
      <audio ref={audioRef} autoPlay muted={isLocal} />
      //highlight-end
    </div>
  );
};
```

:::

## Autoplay Audio and Video

`autoplay` refers to the parameter which is passed to `<audio>` and `<video>` whose media should be played automatically without user clicking on the video or hitting the play button.

While building a audio-video calling app, it is necessary to mae sure that `autoplay` flag is set to `true` so that any media loaded is played although the `play()` was not called.

You can learn more about the `autoplay flag` at the [**official documentation**](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide).

## API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
