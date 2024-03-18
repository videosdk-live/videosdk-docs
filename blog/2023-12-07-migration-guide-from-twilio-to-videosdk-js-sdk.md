---
title: JavaScript - Migration Guide From Twilio Video to Video SDK
description: Explore the seamless transition from Twilio to Video SDK for javascript with our comprehensive migration guide. Elevate your video communication with expert insights and step-by-step instructions.
keywords:
  - Twilio to Video SDK migration guide for Javascript
  - Twilio to Video SDK migration guide
  - Twilio to Video SDK migration tutorial
slug: migration-guide-from-twilio-to-videosdk-js-sdk
# authors:
#   - name: Joel Marcey
#     title: Co-creator of Docusaurus 1
#     url: https://github.com/JoelMarcey
#     image_url: https://github.com/JoelMarcey.png
tags: [Migration Guide, Twilio, JavaScript]
hide_table_of_contents: false
---

<!-- truncate -->

## Overview

**Welcome to your smooth transition to VideoSDK with JavaScript!**

This comprehensive guide empowers you to seamlessly migrate from Twilio to VideoSDK in Javascript. We understand that adapting to new technology can be challenging, which is why we've designed this guide to be clear, concise, and informative.

We've created a straightforward comparison of Twilio and VideoSDK elements, making it easy to identify key differences and understand their corresponding counterparts. Whether you're a seasoned Twilio user or new to both platforms, this guide caters to your level of expertise, ensuring a smooth learning curve.

This migration guide provides a seamless transition from Twilio to VideoSDK, offering a simplified and intuitive comparison of key elements. Whether you're already familiar with Twilio or new to both platforms, this guide ensures a smooth migration process.

## Getting Started

To facilitate the transition, we'll leverage the familiar Twilio Quickstart sample app as a starting point. You can find the code for the app readily available here:[https://github.com/twilio/video-quickstart-js](https://github.com/twilio/video-quickstart-js)

## Concept

1.  **Meeting / Room:**
    - This is like a virtual place where people can have real-time conversations using voice, video, and screen sharing.
    - Think of it as a virtual room where participants interact.
    - Each meeting or room has a unique ID (meetingId or roomId).
2.  **Participant:**
    - Both VideoSDK and Twilio Video includes the concepts of **Participant.**
    - There are two types:
      - **Local Participant:** This is you on your device. You control your own audio and video.
      - **Remote Participant:** This is someone else in the meeting. They receive your audio and video and can send their own.
3.  **MediaStream & Track:**
    - **MediaStream:** Think of it as a bundle of audio and video tracks that are shared in real-time between participants.
    - **Track:** This is like a continuous flow of audio or video. For example, your video feed from the camera is a video track, and the audio from the microphone is an audio track.
4.  **Session:**
    - A session is like a specific instance of an ongoing meeting or room.
    - Imagine a meeting happening right now as a session.
    - Each session has its own ID (sessionId).

If you want to learn about this concept in depth you can refer this guide [Concept and Architecture](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/concept-and-architecture)

## VideoSDK Setup

### API Key

In Twilio you have to create API key manually(using CLI or from Dashboard), in VideoSDK the default API key is automatically created in [VideoSDK dashboard](https://app.videosdk.live).

### Token

In Twilio, you can generate a token using CLI or the Twilio helper library in the backend environment.

For VideoSDK, there are two ways to generate a token. You can [generate it from the VideoSDK Dashboard](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#1-generating-token-from-dashboard) or [in your backend](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#2-generating-token-in-your-backend).

In Twilio, you need to provide a different token for each participant, which can be complex during development. In VideoSDK, it is optional to specify the same token for different participants. You can also restrict a specific token for a specific meetingID or participantID.

## Installation

You can install the VidoeSDK library using [NPM](https://www.npmjs.com/).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"server-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/js-sdk
```

</TabItem>
</Tabs>

You can also include it in your application using our CDN.

```jsx
<script src="<https://sdk.videosdk.live/js-sdk/0.0.82/videosdk.js>"></script>
```

Using this method, VideoSDK will set a browser global:

```jsx
const VideoSDK = window.VideoSDK;
```

## Room Creation

Before integration, create a room using the [REST API Rooms resource](https://docs.videosdk.live/api-reference/realtime-communication/create-room). Refer to the docs for details.

```jsx
cURL -XPOST <https://api.videosdk.live/v2/rooms> \\
		 -H 'Authorization: $VIDEOSDK_TOKEN' \\
		 -H 'Content-Type: application/json'
```

## Step 1 : Connect to a Room

- In Twilio, you can connect to a room using the `video.connect()` method, which accepts the `token` and `connectOptions` as parameters.
- In VideoSDK, you need to first configure the token using `VideoSDK.config('TOKEN')`, and then initialize VideoSDK using the `initMeeting` method, which accepts parameters such as the meetingId and participant name. You can refer to other parameters from this [reference](https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#initmeeting).
- When joining and leaving a room, the Twilio Local Participant receives the `connected` and `disconnected` events of the room.
- On the other hand, the VideoSDK Local Participant receives the `meeting-joined` and `meeting-left` events of the meeting when joining and leaving the room.

<Tabs
defaultValue="Twilio"
groupId={"Twilio"}
values={[{label: 'Twilio', value: 'Twilio'},]}>

<TabItem value="Twilio">

```js
const video = Twilio.Video;
function initializeMeeting() {
  connect("$TOKEN", { name: "my-new-room" }).then(
    (room) => {
      console.log(`Successfully joined a Room: ${room}`);
      room.on("connected", (participant) => {
        console.log(`Local Participant Joined Successfully`);
      });
      room.on("disconnected", (participant) => {
        console.log(`Local Participant Left the Room`);
      });
    },
    (error) => {
      console.error(`Unable to connect to Room: ${error.message}`);
    }
  );
}
```

</TabItem>

</Tabs>

<Tabs
defaultValue="VideoSDK"
groupId={"VideoSDK"}
values={[{label: 'VideoSDK', value: 'VideoSDK'}]}>

<TabItem value="VideoSDK">

```js
let meeting = null; // Declare global variable

function initializeMeeting() {
  window.VideoSDK.config("$TOKEN");

  let meetingId = "abcd-efgh-ijkl"; // You can replace the meetingId

  meeting = window.VideoSDK.initMeeting({
    meetingId: meetingId, // required
    name: "The Migrator", // required
    micEnabled: true, // optional, default: true
    webcamEnabled: true, // optional, default: true
  });

  meeting.join();

  meeting.on("meeting-joined", () => {
    console.log(`Local Participant Joined Successfully`);
  });

  meeting.on("meeting-left", () => {
    console.log(`Local Participant Left the Room`);
  });
}
```

</TabItem>

</Tabs>

## Step 2 : Render Local Participant

- In Twilio and VideoSDK, you can access the localParticipant by using `room.localParticipant` and `meeting.localParticipant` respectively.
- To get the MediaStream in VideoSDK, listen for the `stream-enabled` event of the Participant class and set the audio and video tracks accordingly.
- In the code snippet below, we have defined the magic functions `createVideoElement`, `createAudioElement`, and `setTrack` to help render the Local and Remote Participants easily.
- VideoSDK automatically detaches the MediaStream Tracks when you leave the meeting. Additionally, you can pause and resume the participant stream using the [pause()](https://docs.videosdk.live/javascript/api/sdk-reference/stream-class/methods#pause) and [resume()](https://docs.videosdk.live/javascript/api/sdk-reference/stream-class/methods#resume) methods of the [Stream](https://docs.videosdk.live/javascript/api/sdk-reference/stream-class/introduction) Class.

<Tabs
defaultValue="Twilio"
groupId={"Twilio"}
values={[{label: 'Twilio', value: 'Twilio'},]}>

<TabItem value="Twilio">

```js
function setupParticipantContainer(participant, room) {
  const { identity, sid } = participant;

  // Add a container for the Participant's media.
  const $container =
    $(`<div class="participant" data-identity="${identity}" id="${sid}">
    <audio autoplay ${
      participant === room.localParticipant ? "muted" : ""
    } style="opacity: 0"></audio>
    <video autoplay muted playsinline style="opacity: 0"></video>
  </div>`);

  // Add the Participant's container to the DOM.
  $participants.append($container);
}

function participantConnected(participant, room) {
  // Set up the Participant's media container.
  setupParticipantContainer(participant, room);

  // Handle the TrackPublications already published by the Participant.
  participant.tracks.forEach((publication) => {
    trackPublished(publication, participant);
  });

  // Handle theTrackPublications that will be published by the Participant later.
  participant.on("trackPublished", (publication) => {
    trackPublished(publication, participant);
  });
}

function trackPublished(publication, participant) {
  // If the TrackPublication is already subscribed to, then attach the Track to the DOM.
  if (publication.track) {
    attachTrack(publication.track, participant);
  }

  // Once the TrackPublication is subscribed to, attach the Track to the DOM.
  publication.on("subscribed", (track) => {
    attachTrack(track, participant);
  });

  // Once the TrackPublication is unsubscribed from, detach the Track from the DOM.
  publication.on("unsubscribed", (track) => {
    detachTrack(track, participant);
  });
}

function attachTrack(track, participant) {
  // Attach the Participant's Track to the thumbnail.
  const $media = $(`div#${participant.sid} > ${track.kind}`, $participants);
  $media.css("opacity", "");
  track.attach($media.get(0));

  // If the attached Track is a VideoTrack that is published by the active
  // Participant, then attach it to the main video as well.
  if (track.kind === "video" && participant === activeParticipant) {
    track.attach($activeVideo.get(0));
    $activeVideo.css("opacity", "");
  }
}

function detachTrack(track, participant) {
  // Detach the Participant's Track from the thumbnail.
  const $media = $(`div#${participant.sid} > ${track.kind}`, $participants);
  const mediaEl = $media.get(0);
  $media.css("opacity", "0");
  track.detach(mediaEl);
  mediaEl.srcObject = null;

  // If the detached Track is a VideoTrack that is published by the active
  // Participant, then detach it from the main video as well.
  if (track.kind === "video" && participant === activeParticipant) {
    const activeVideoEl = $activeVideo.get(0);
    track.detach(activeVideoEl);
    activeVideoEl.srcObject = null;
    $activeVideo.css("opacity", "0");
  }
}
```

</TabItem>

</Tabs>

<Tabs
defaultValue="VideoSDK"
groupId={"VideoSDK"}
values={[{label: 'VideoSDK', value: 'VideoSDK'}]}>

<TabItem value="VideoSDK">

```js
function initializeMeeting() {
  // ...

  // Handle the LocalParticipant's media.
  // participantConnected(room.localParticipant, room);

  // creating local participant
  createLocalParticipant();

  // setting local participant stream
  meeting.localParticipant.on("stream-enabled", (stream) => {
    setTrack(stream, null, meeting.localParticipant, true);
  });

  // ...
}

// creating video element
function createVideoElement(pId, name) {
  let videoFrame = document.createElement("div");
  videoFrame.setAttribute("id", `f-${pId}`);

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");
  videoFrame.appendChild(videoElement);

  let displayName = document.createElement("div");
  displayName.innerHTML = `Name : ${name}`;

  videoFrame.appendChild(displayName);
  return videoFrame;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";
  return audioElement;
}

// creating local participant
function createLocalParticipant() {
  let localParticipant = createVideoElement(
    meeting.localParticipant.id,
    meeting.localParticipant.displayName
  );
  videoContainer.appendChild(localParticipant);
}

// setting media track
function setTrack(stream, audioElement, participant, isLocal) {
  if (stream.kind == "video") {
    isWebCamOn = true;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    let videoElm = document.getElementById(`v-${participant.id}`);
    videoElm.srcObject = mediaStream;
    videoElm
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (isLocal) {
      isMicOn = true;
    } else {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(stream.track);
      audioElement.srcObject = mediaStream;
      audioElement
        .play()
        .catch((error) => console.error("audioElem.play() failed", error));
    }
  }
}
```

</TabItem>

</Tabs>

## Step 3 : Handle Connected Participants

- To receive notifications when a remote participant joins or leaves a call in Twilio, you can use the `participantConnected` and `participantDisconnected` events of the room.
- Similarly, in VideoSDK, you can use the `participant-joined` and `participant-left` events of the meeting to be notified when a remote participant joins or leaves the call.
- In addition, the `stream-enabled` event of the Participant class is used to manage the media track of a specific participant by associating it with the appropriate video or audio element.

<Tabs
defaultValue="Twilio"
groupId={"Twilio"}
values={[{label: 'Twilio', value: 'Twilio'},]}>

<TabItem value="Twilio">

```js
function initializeMeeting() {
  // ...

  // Subscribe to the media published by RemoteParticipants already in the Room.
  room.participants.forEach((participant) => {
    participantConnected(participant, room);
  });

  // Subscribe to the media published by RemoteParticipants joining the Room later.
  room.on("participantConnected", (participant) => {
    participantConnected(participant, room);
  });

  // Handle a disconnected RemoteParticipant.
  room.on("participantDisconnected", (participant) => {
    participantDisconnected(participant, room);
  });
}

function participantDisconnected(participant, room) {
  // Remove the Participant's media container.
  $(`div#${participant.sid}`, $participants).remove();
}
```

</TabItem>

</Tabs>

<Tabs
defaultValue="VideoSDK"
groupId={"VideoSDK"}
values={[{label: 'VideoSDK', value: 'VideoSDK'}]}>

<TabItem value="VideoSDK">

```js
function initializeMeeting() {
  // ...

  // participant joined
  meeting.on("participant-joined", (participant) => {
    let videoElement = createVideoElement(
      participant.id,
      participant.displayName
    );
    let audioElement = createAudioElement(participant.id);

    participant.on("stream-enabled", (stream) => {
      setTrack(stream, audioElement, participant, false);
    });
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(audioElement);
  });

  // participants left
  meeting.on("participant-left", (participant) => {
    let vElement = document.getElementById(`f-${participant.id}`);
    vElement.remove(vElement);

    let aElement = document.getElementById(`a-${participant.id}`);
    aElement.remove(aElement);
  });

  // ...
}
```

</TabItem>

</Tabs>

#### Mapping Twilio’s events to VideoSDK

Below is a list of all Twilio events used in this demo and VideoSDK’s equivalents.

| Twilio Events           | VideoSDK Events                                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- |
| participantConnected    | [participant-joined](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#participant-joined) |
| participantDisconnected | [participant-left](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#participant-left)     |
| connected               | [meeting-joined](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#meeting-joined)         |
| disconnected            | [meeting-left](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#meeting-left)             |
| dominantSpeakerChanged  | [speaker-changed](https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#speaker-changed)       |

## Step 4 : Mute and UnMute Your Local Media

- In Twilio, you can mute or unmute your LocalAudioTracks (microphone) and LocalVideoTracks (camera) by calling the disable or enable method.
- In VideoSDK, you can use the `muteMic` function for the microphone and the `disableWebcam` function for the camera.

<Tabs
defaultValue="Twilio"
groupId={"Twilio"}
values={[{label: 'Twilio', value: 'Twilio'},]}>

<TabItem value="Twilio">

```js
room.localParticipant.audioTracks.forEach((publication) => {
  publication.track.disable(); // Disable Mic in Meeting
  publication.track.enable(); // Enable Mic in Meeting
});

room.localParticipant.videoTracks.forEach((publication) => {
  publication.track.disable(); // Disable Webcam in Meeting
  publication.track.enable(); // Enable Webcam in Meeting
});
```

</TabItem>

</Tabs>

<Tabs
defaultValue="VideoSDK"
groupId={"VideoSDK"}
values={[{label: 'VideoSDK', value: 'VideoSDK'}]}>

<TabItem value="VideoSDK">

```js
meeting.muteMic(); // Disable Mic in Meeting

meeting.unmuteMic(); // Enable Mic in Meeting

meeting.disableWebcam(); // Disable Webcam in Meeting

meeting.enableWebcam(); // Enable Webcam in Meeting
```

</TabItem>

</Tabs>

## Step 5 : Disconnect from a Room

- In Twilio, you have the ability to disconnect from a Room in which you are currently participating. Other Participants will receive a `participantDisconnected` event.
- In VideoSDK, you can also disconnect from a Room you are currently participating in. Other Participants will receive a `participant-left` event, while the local participant will receive a `meeting-left` event.

<Tabs
defaultValue="Twilio"
groupId={"Twilio"}
values={[{label: 'Twilio', value: 'Twilio'},]}>

<TabItem value="Twilio">

```js
room.on("disconnected", (room) => {
  // Detach the local media elements
  room.localParticipant.tracks.forEach((publication) => {
    const attachedElements = publication.track.detach();
    attachedElements.forEach((element) => element.remove());
  });
});

// To disconnect from a Room
room.disconnect();
```

</TabItem>

</Tabs>

<Tabs
defaultValue="VideoSDK"
groupId={"VideoSDK"}
values={[{label: 'VideoSDK', value: 'VideoSDK'}]}>

<TabItem value="VideoSDK">

```js
meeting.on("meeting-left", () => {
  //Meeting Left
});

// To leave the meeting without removing all the participant
// you need to call leave() which is the part of the meeting object.
meeting?.leave();

// To leave the meeting by removing all the participant
// you need to call end() which is the part of the meeting object.
meeting?.end();
```

</TabItem>

</Tabs>

## Conclusion

As you conclude this migration journey, you've successfully adapted your application from Twilio to VideoSDK. The [developed project](https://github.com/videosdk-live/migration-to-X/tree/main/Twilio/js-quickstart) showcases the implementation of VideoSDK in action, emphasizing its simplicity and efficiency.

Key Takeaways:

- Automatic API key generation streamlines the setup process.
- Token generation is simplified, offering flexibility for participants.
- Granular control over participant tokens enhances security.
- Global scalability and minimal latency ensure a seamless user experience.

Feel free to explore the developed project's codebase for a hands-on understanding of VideoSDK integration. As you transition, VideoSDK empowers your application with robust real-time communication features, providing a foundation for future scalability and innovation.

## Contact Us

For any further assistance, questions, or community engagement, we welcome you to join our [Discord channel](https://discord.com/invite/Gpmj6eCq5u). Connect with fellow developers, share insights, and stay updated on the latest developments.

If you require developer support or need personalized assistance, you can schedule a session with our team through our [Developer Support portal](https://bookings.videosdk.live/#/customer/discovery). We are here to ensure a smooth integration and address any queries you may have. Your success with VideoSDK is our priority.
