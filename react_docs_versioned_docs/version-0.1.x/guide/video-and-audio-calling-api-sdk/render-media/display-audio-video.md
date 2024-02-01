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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-audio-video
---

# Display Audio and Video - React

This guide elaborates on how to render a participant's audio and video on the screen.

## Rendering Participant

The steps involved in rendering the audio and video of a participant are as follows.

1. [Get Mic and Webcam Status](#1-get-mic-and-webcam-status)
2. [Rendering Video](#2-rendering-video)
3. [Rendering Audio](#3-rendering-audio)

### `1. Get Mic and Webcam Status`

To render a participant, it is essential to determine whether their audio or video is on or off. If the webcam is not turned on, start by rendering the participant's frames with their name; otherwise, render the video.

**`Step 1:`** First, retrieve every `participant` from the `useMeeting` hook and create a simple box with each of their names.

```js
const MeetingView = () => {
  //Getting all the participants
  const { participants } = useMeeting();

  //Looping over the participants and rendering a simple box
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {[...participants.keys()].map((participantId, index) => (
        <ParticipantView key={index} participantId={participantId} />
      ))}
    </div>
  );
};

// This will render a single participant's view
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

Here's a code snippet of rendering mic and webcam status:

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

<center>

![participant status](/img/participant-status.png)

</center>

### `2. Rendering Video`

The status of the `webcam` and `mic` is now displayed. Now whenever a participant's webcam is turned `on`, to display their video, you will require their  `webcamStream` which can be obtained from the `useParticipant` hook.

**`Step 1:`** Obtain the `webcamStream` and define a `<video>` tag which will render the video of the participant. You need to use the `useRef` hook to create a reference to this video tag.

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

**`Step 2:`** Now that you have the `<video>` element in place, you need to add a `useEffect` hook so that, when the `webcamStream` is discovered, it will be immediately added to the `<video>` element.

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

If you want to maintain the aspect ratio of the video, displaying it vertically without filling the entire view, you can use `object-fit:contain`.

However, if you prefer to always fill the view regardless of the video resolution you can use `object-fit:cover`.

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

If you want to display the mirror view of the local participant, you can apply the transformation style to the participant's view.

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

##### Sample of mirror view video

![mirror view](/img/mirror-view.jpg)

### `3. Rendering Audio`

You have succesfully displayed the webcam and mic status along with the participant's video. Now, whenever a participant's mic is turned `on`, to play their audio. you will require their `micStream` which can be obtained from the `useParticipant` hook 

**`Step 1:`** Obtain the `micStream` and define a `<audio>` tag which will render the audio of the participant. You need to use the `useRef` hook to create a reference to this audio tag.

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

**`Step 2:`** Now that you have the `<audio>` element in place, you need to add a `useEffect` hook so that, when the `micStream` is discovered, it will  be immediately added to the `<audio>` element.

```js
const ParticipantView = ({ participantId }) => {
  //Getting the micStream property
  const { displayName, micOn, webcamOn, webcamStream } =
    useParticipant(participantId);

  // ... mic stream dispalying here

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
While rendering the audio, you should **not render the audio of the local participant** as it will create echo.
So to avoid that, `mute the audio` of the `localParticipant`, by setting the `muted` property as follows.

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

`autoplay` is a parameter passed to `<audio>` and `<video>` elements, indicating that their media should play automatically without requiring the user to click on the video or hit the play button.

When developing an audio-video calling app, ensure that the `autoplay` flag is set to `true`, allowing any loaded media to play even if the `play()` method was not explicitly called.

You can learn more about the `autoplay flag` in the [**official documentation**](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
