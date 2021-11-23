---
title: Javascript
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications in Javascript SDK using Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Javascript"
pagination_label: "Javascript"
keywords:
  - javascitp sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: javascript
---

## What is Participant?

A participant is refered as a single user in a meeting, it can be you or can be remote user.
In Video SDK we have categorise participant in two types.

1. [Local Participant (Self | You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript#1-local-participant-self--you)
2. [Remote Participants (Except You)](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript#2-remote-participants-except-you)

### 1. Local Participant (Self | You)

Local participant is used to consume your video & audio streams.
local participant object contains properties such as displayName, id, quality and streams Map.

### 2. Remote Participants (Except You)

Remote participants Map is used to get all the participants (except you) in the meeting at any given time.

Remote participants Map contains same properties as **LocalParticipant**.

### Accessing Participants

```js title="participant.js"
// Access localParticipant
const localParticipant = meeeting.localParticipant;

// Access otherParticipant
const participants = meeeting.participants;
```

### Participant object properties

| Property Name | Type                                                                                                                          | Description                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| id            | string                                                                                                                        | Unique id of the participant.                          |
| displayName   | string                                                                                                                        | The name you define during the meeting initialization. |
| local         | boolean                                                                                                                       | Indicates the participant is local or not.             |
| quality       | string                                                                                                                        | Indicates the participant streams quality.             |
| Streams       | Map of [Stream](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript#stream-object-properties) | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| id            | string | Unique id                                  |
| codec         | string | Video/Audio codec.                         |
| kind          | string | Stream Kind such as audio, video and share |
| track         | string | MediaStreamTrack                           |

## How to Access Single Participant?

You can get single participant object by passing id.

```js title="participant.js"
// Access single participant using id
const participant = meeeting.participants.get("<participant-id>");
```

## How to Render Local (Self) Participant?

### 1. Create Elements

After join, we will create Video elements for rendering streams.

```js title="participant.js"
let videoElement = createVideoElement(meeting.localParticipant.id);

// creating video element
function createVideoElement(pId) {
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  return videoElement;
}
```

### 2. Set Tracks on Created Elements

Whenever local participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return Stream Object.

In `stream-enabled` event, we will set local participant MediaStream tracks on created elements.

```js title="participant.js"
let videoElement = createVideoElement(meeting.localParticipant.id);

//setting up tracks
function setTrack(stream, element) {
  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  element.srcObject = mediaStream;
  element
    .play()
    .catch((error) => console.error("videoElem.current.play() failed", error));
}

meeting.localParticipant.on("stream-enabled", (stream) => {
  if (stream.kind == "video") {
    setTrack(stream, videoElement);
  }
});
```

### 3. Append Elements in Container

After setting up tracks in elements, we have to append this elements in container.

We will create container in html file, then call in javascript side by using getElementById method and append it.

```js title="index.html"
<html>
  <body>
    <div id="participantContainer"></div>
  </body>
</html>
```

```js title="participant.js"
// Get Container
let participantContainer = document.getElementById("participantContainer");
let videoElement = createVideoElement(meeting.localParticipant.id);

/*{
    ...
    ...
    ...
}*/

// Append Elements in Container
participantContainer.appendChild(videoElement);
```

## How to Render Remote Participant?

### 1. Handle Participant Join Event and Create Elements

- **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the [Participant object](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript#participant-object-properties).

In `participant-joined` event, we will create Video and Audio elements for rendering streams.

```js title="participant.js"
meeting.on("participant-joined", (participant) => {
  let videoElement = createVideoElement(participant.id);
  let audioElement = createAudioElement(participant.id);
});

// creating video element
function createVideoElement(pId) {
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  return videoElement;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  return audioElement;
}
```

### 2. Set Tracks on Elements

After that we have to manage streams for specific participant who used to toggle mic and webcam.

Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return [Stream Object](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/javascript#stream-object-properties).

In `stream-enabled` event, we will set participant MediaStream tracks on created video and audio elements.

```js title="participant.js"
//setting up tracks
function setTrack(stream, element) {
  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  element.srcObject = mediaStream;
  element
    .play()
    .catch((error) => console.error("videoElem.current.play() failed", error));
}

meeting.on("participant-joined", (participant) => {
  let videoElement = createVideoElement(participant.id);
  let audioElement = createAudioElement(participant.id);

  participant.on("stream-enabled", (stream) => {
    if (stream.kind == "video") {
      setTrack(stream, videoElement);
    }
    if (stream.kind == "audio") {
      if (participant.id == meeting.localParticipant.id) return;
      setTrack(stream, audioElement);
    }

    if (stream.kind == "share") {
      setTrack(stream, screenShareElement); // You have to create screenShareElement by yourself
    }
  });
});
```

### 3. Append Elements in Container

After setting up tracks in elements (Video & Audio), we have to append this elements in container.
We will create container in html file, then call in javascript side by using `getElementById` method and append it.

```js title="index.html"
<html>
  <body>
    <div id="participantContainer"></div>
  </body>
</html>
```

```js title="participant.js"
// Get Container
let participantContainer = document.getElementById("participantContainer");

//setting up tracks
function setTrack(stream, element) {
  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  element.srcObject = mediaStream;
  element
    .play()
    .catch((error) => console.error("videoElem.current.play() failed", error));
}

// Events
meeting.on("participant-joined", (participant) => {
  let videoElement = createVideoElement(participant.id);
  let audioElement = createAudioElement(participant.id);

  participant.on("stream-enabled", (stream) => {
    if (stream.kind == "video") {
      setTrack(stream, videoElement);
    }
    if (stream.kind == "audio") {
      if (participant.id == meeting.localParticipant.id) return;
      setTrack(stream, audioElement);
    }

    if (stream.kind == "share") {
      setTrack(stream, screenShareElement);
    }
  });
  // Append Elements in Container
  participantContainer.appendChild(videoElement);
  participantContainer.appendChild(audioElement);
});
```

### 4. Handle Participant Left Event

- **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeeting is running with Alice and Bob, then Bob leave that meeting, after that `participant-left` event trigger and return the participant object.

In `participant-left` event, we will remove left participant Video and Audio elements.

```js title="participant.js"
// participants left
meeting.on("participant-left", (participant) => {
  let videoElement = document.getElementById(`v-${participant.id}`);
  vElement.parentNode.removeChild(vElement);

  let audioElement = document.getElementById(`a-${participant.id}`);
  aElement.parentNode.removeChild(aElement);
});
```

## Events

You can follow this [Participant Related Events](/docs/guide/video-and-audio-calling-api-sdk/features/manage-participants/participant-events).
