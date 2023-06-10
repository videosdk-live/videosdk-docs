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

# Display Audio and Video

In this guide, we will take a look at how to render the participant's audio and video on the screen.

## Rendering Participant

The three steps are involve to achieve this process.

1. [Create Container](#1-create-container)
2. [Rendering Video](#2-rendering-video)
3. [Rendering Audio](#3-rendering-audio)

### `1. Create Container`

First you will need to create container `div` in your UI where all the videos will get added.

```html
<!DOCTYPE html>
<html>
  <body>
    ...

    <!-- render Video -->
    <div id="videoContainer"></div>
  </body>
</html>
```

### `2. Rendering Video`

On every participant's `stream-enabled` stream, you will get a `stream` object as a parameter, and by using that, you can create video elements in a div container.

```js
const videoContainer = document.getElementById("videoContainer");

// local participant video
meeting.localParticipant.on("stream-enabled", (stream) => {
  createVideoElement(stream, meeting.localParticipant);
});

// remote participant video
participant.on("stream-enabled", (stream) => {
  if (stream.kind == "video") {
    createVideoElement(stream, participant);
  }
});

// creating video element
function createVideoElement(stream, participant) {
  const pId = participant.id;
  const name = participant.displayName;

  let videoFrame = document.createElement("div");
  videoFrame.setAttribute("id", `f-${pId}`);

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");

  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  videoElement.srcObject = mediaStream;
  videoElement
    .play()
    .catch((error) => console.error("videoElem.current.play() failed", error));

  videoFrame.appendChild(videoElement);

  let displayName = document.createElement("div");
  displayName.innerHTML = `Name : ${name}`;

  videoFrame.appendChild(displayName);

  videoContainer.appendChild(videoElement);
}
```

<center>

![participant grid](/img/js-participant-video.png)

</center>

#### `Mirror Local Video View`

If you wish to show the mirror view of the local participant, you can apply the transformation style to the participant's view.

```js
function createVideoElement(stream, participant) {
  // ...

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");
  //highlight-start
  if (pId === meeting.localParticipant.id) {
    videoElement.style.transform = "scaleX(-1)";
    videoElement.style.WebkitTransform = "scaleX(-1)";
  }
  //highlight-end
  // ...
}
```

##### Sample of mirror view video

![mirror view](/img/mirror-view.jpg)

### `3. Rendering Audio`

On every participant's `stream-enabled` stream, you will get a `stream` object as a parameter, and by using that, you can create audio elements.

```js
const participants = meeting.participants;
const participant = participants.get("<participant-id>");

participant.on("stream-enabled", (stream) => {
  if (stream.kind == "audio") {
    createAudioElement(stream, participant);
  }
});

// creating audio element
function createAudioElement(stream, participant) {
  const pId = participant.id;

  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";

  const mediaStream = new MediaStream();
  mediaStream.addTrack(stream.track);
  audioElement.srcObject = mediaStream;
  audioElement
    .play()
    .catch((error) => console.error("audioElem.play() failed", error));
}
```

:::caution
While rendering the audio, we should **not render the audio of local participant** as it will create the echo.
So to solve that you should not create audio element for local participant
:::

## Autoplay Audio and Video

`autoplay` refers to the parameter which is passed to `<audio>` and `<video>` whose media should be played automatically without user clicking on the video or hitting the play button.

While building a audio-video calling app, it is necessary to mae sure that `autoplay` flag is set to `true` so that any media loaded is played although the `play()` was not called.

You can learn more about the `autoplay flag` at the [**official documentation**](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide).

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [stream-enabled](/javascript/api/sdk-reference/participant-class/events#stream-enabled)
