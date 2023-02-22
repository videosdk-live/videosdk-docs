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

In these guide we will take a look at how to render the participant's audio and video on the screen.

## Rendering Participant

### Mic and Webcam Status

Before rendering the participant we must know if the participant has his audio or video turned on or off. So we will start by rendering the frames of the participant with there name in it if the webcam is turned off else we will render the video.

1. Lets get all the `participants` from the `useMeeting` and render the simple boxs with there name.

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
      <p>
        Webcam:{webcamOn ? "On" : "Off"} Mic: {micOn ? "On" : "Off"}
      </p>
      //highlight-end
    </div>
  );
};
```

2. Now that we have displayed the participants in the grid, with each tile showing the name of participant. Lets see how we can get the status of mic and webcam.

**Mic and Webcam status can be accessed from `micOn` and `webcamOn` property of the `useParticipant` hook respectively.**

Lets show the status in the grid we built.

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

### Rendering Video

Now we have displayed the webcam and mic status. If the webcam is turned on we will need the `webcamStream` of the participant which we will get from the `useParticipant` hook to display the video of the participant.

1. Let's get the `webcamStream` and define a `<video>` which will render the video of the participant. We will use the `useRef` to create a reference to these video tag.

```js
const ParticipantView = ({ participantId }) => {
  //Getting the webcamStream property
  const { displayName, micOn, webcamOn, webcamStream } =
    useParticipant(participantId);

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

2. With our `<video>` in place, now we will add an `useEffect` which will automatically add the `webcamStream` to the `<video>` element when the webcamStream is found.

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

##### Maintaining the aspect ratio

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

##### Mirror Local Video View

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

### Rendering Audio

Now we have displayed the webcam and mic status along with the video of the particiapnt. If the mic is turned on we will need the `micStream` of the participant which we will get from the `useParticipant` hook to listen to the participant.

1. Let's get the `micStream` and define a `<audio>` which will render the audio of the participant. We will use the `useRef` to create a reference to these audio tag.

```js
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

2. With our `<audio>` in place, now we will add an `useEffect` which will automatically add the `micStream` to the `<audio>` element when the micStream is found.

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

## API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
