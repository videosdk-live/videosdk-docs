---
title: Display Local & Remote Participants - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This tutorial describes the way to display local and remote partcipants on the screen with their audio, video and screen.
sidebar_label: Display Local & Remote Participants
pagination_label: Display Local & Remote Participants
keywords:
  - Local Partcipants
  - Remote Participants
  - Media Streams
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-local-and-remote-participants
---

# Display local & remote participants
After creating local tracks and successfully joining a channel, you can use [`meeting.participants`](/javascript/api/sdk-reference/meeting-class/properties#participants) to display remote partcipants on the screen. 

## Local Participant
Local participant can directly be accessible from the `meeting` object. a Meeting instance contains `streams` map to for audio, video and screen. 
```js
const localParticipant = meeting.localParticipant;
const streams = localParticipant.streams
streams.forEach((stream) => {
  if (stream.kind == "video") {
    // play video
  }
  if (stream.kind == "audio") {
    // play audio
  }
  if (stream.kind == "screen") {
    // play screen video
  }
});
```

## Remote Participants
`meeting.participants` map contains collection of all the remote participants. 

```js
const remoteParticipants = meeting.participants;
remoteParticipants.forEach((participant) => {
    participant.streams.forEach((stream) => {
      if (stream.kind == "video") {
        // play video
      }
      if (stream.kind == "audio") {
        // play audio
      }
      if (stream.kind == "screen") {
        // play screen video
      }
    });
});
```

## Active speaker and presenter
You can also display larger screen of active speaker or shared screen. 

### Speaker changed
```js
meeting.on("speaker-changed", (activeSpeakerId) => {
  const activeSpeaker = meeting.participants[activeSpeakerId];
});
```

### Presenter changed  
```js
meeting.on("presenter-changed", (activePresenterId) => {
  const activePresenter = meeting.participants[activePresenterId];
});
```

## Play Audio and Video tracks
We have to use`MediaStream` API to play video and audio using `MediaStreamTrack`. 

#### Play Audio
```js
// Create audio element and set default attributes
let audioElement = document.createElement("audio");
audioElement.setAttribute("autoPlay", "false");
audioElement.setAttribute("playsInline", "true");
audioElement.setAttribute("controls", "false");
audioElement.setAttribute("id", `a-${participant.id}`);

// Add track using MediaStream
const mediaStream = new MediaStream();
mediaStream.addTrack(stream.track);
audioElement.srcObject = mediaStream;
audioElement
  .play()
  .catch((error) => console.error("audioElem.play() failed", erro);
```

#### Play Video
```js
// Create video element and set attributes
let videoElement = document.createElement("video");
videoElement.setAttribute("id", `v-${participant.id}`);

// Add track using MediaStream
const mediaStream = new MediaStream();
mediaStream.addTrack(stream.track);
videoElem.srcObject = mediaStream;
videoElem
  .play()
  .catch((error) => console.error("videoElem.current.play( failed", error));
```

## API Reference
- [localParticipant](/javascript/api/sdk-reference/meeting-class/properties#localparticipant)
- [remoteParticipants](/javascript/api/sdk-reference/meeting-class/properties#participants)
- [Stream Class](/javascript/api/sdk-reference/stream-class/introduction)
- [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)
- [on("speaker-changed")](/javascript/api/sdk-reference/meeting-class/events#speaker-changed)
- [on("presenter-changed")](/javascript/api/sdk-reference/meeting-class/events#presenter-changed)


