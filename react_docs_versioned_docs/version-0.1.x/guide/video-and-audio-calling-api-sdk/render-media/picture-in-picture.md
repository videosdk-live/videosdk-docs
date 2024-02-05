---
title: Picture-in-Picture Mode | Video SDK
hide_title: true
hide_table_of_contents: false
description: Picture-in-picture (PiP) is a feature that is commonly used in video conferencing software. It allows you to continue your video conference while also performing other tasks on your device.
sidebar_label: Picture-in-Picture Mode
pagination_label: Picture-in-Picture Mode
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: picture-in-picture
---

# Picture-in-Picture Mode - React

Picture-in-picture (PiP) is a commonly used feature in video conferencing software, enabling users to simultaneously engage in a video conference and perform other tasks on their device. With PiP, you can keep the video conference window open, resize it to a smaller size, and continue working on other tasks while still seeing and hearing the other participants in the conference. This feature proves beneficial when you need to take notes, send an email, or look up information during the conference.

In this guide, we will walk through the steps to implement a Picture-in-Picture feature using VideoSDK.

### PiP Video

All modern day browsers support popping a video stream out from the `HTMLVideoElement`. You can achieve this either directly from the controls shown on the video element or by using the Browser API method [`requestPictureInPicture()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture) on the video element.


import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/simple_video_pip.mp4' width={"100%"} />

<br/>

:::important
Chrome, Edge, and Safari support this browser Web API, however, Firefox has no programmatic way of triggering PiP.
:::

### Customize Video PiP with multiple video streams

**`Step 1:`** Create a button that toggles the Picture-in-Picture (PiP) mode during the meeting. This button should invoke the `togglePipMode()` method when clicked.


```js
function Controls() {
  const togglePipMode = async () => {};
  return (
    <div>
      <button onClick={() => togglePipMode()}>start Pip</button>
    </div>
  );
}
```

**`Step 2:`** The first step is to check if the browser supports PiP mode; if not, display a message to the user.

```js
function Controls() {
  const togglePipMode = async () => {
    //Check if browser supports PiP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {

    } else {
      alert("PiP is not supported by your browser");
    }
  };
  return ...;
}
```

**`Step 3:`** Now, if the browser supports PiP mode, create a `Canvas` element and a `Video` element. Generate a Stream from the Canvas and play it in the video element. Request PiP mode for the video element once the metadata has been loaded.

```js
function Controls() {

  //highlight-next-line
  const pipWindowRef = useRef();

  const togglePipMode = async () => {
    //Check if browser supports PiP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {
      //highlight-start
      //Create a Canvas which will render the PiP Stream
      const source = document.createElement("canvas");
      const ctx = source.getContext("2d");

      //Create a Video tag which will popout for PiP
      const pipVideo = document.createElement("video");
      pipWindowRef.current = pipVideo;
      pipVideo.autoplay = true;

      //Create a stream from canvas which will play
      const stream = source.captureStream();
      pipVideo.srcObject = stream;

      //Do initial Canvas Paint
      drawCanvas()

      //When Video is ready, start PiP mode
      pipVideo.onloadedmetadata = () => {
        pipVideo.requestPictureInPicture();
      };
      await pipVideo.play();
      //highlight-end
    } else {
      alert("PiP is not supported by your browser");
    }
  };
  return ...;
}
```

**`Step 4:`** The next step is to paint the canvas with the Participant Grid, which will be visible in the PiP window.

```js
function Controls() {

  const getRowCount = (length) => {
    return length > 2 ? 2 : length > 0 ? 1 : 0;
  };
  const getColCount = (length) => {
    return length < 2 ? 1 : length < 5 ? 2 : 3;
  };

  const togglePipMode = async () => {
    //Check if browser supports PiP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {

      //Stream playing here
      //...

      //highlight-start
      //When the PiP mode starts, draw the canvas with PiP view
      pipVideo.addEventListener("enterpictureinpicture", (event) => {
        drawCanvas();
      });

      //When PiP mode exits, dispose the tracks that were created earlier
      pipVideo.addEventListener("leavepictureinpicture", (event) => {
        pipWindowRef.current = null;
        pipVideo.srcObject.getTracks().forEach((track) => track.stop());
      });

      //This will draw all the video elements in to the Canvas
      function drawCanvas() {
        //Getting all the video elements in the document
        const videos = document.querySelectorAll("video");
        try {
          //Perform initial black paint on the canvas
          ctx.fillStyle = "black";
          ctx.fillRect(0, 0, source.width, source.height);

          //Drawing the participant videos on the canvas in the grid format
          const rows = getRowCount(videos.length);
          const columns = getColCount(videos.length);
          for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
              if (j + i * columns <= videos.length || videos.length == 1) {
                ctx.drawImage(
                  videos[j + i * columns],
                  j < 1 ? 0 : source.width / (columns / j),
                  i < 1 ? 0 : source.height / (rows / i),
                  source.width / columns,
                  source.height / rows
                );
              }
            }
          }
        } catch (error) {}

        //If pip mode is on, keep drawing the canvas when ever new frame is requested
        if (document.pictureInPictureElement === pipVideo) {
          requestAnimationFrame(drawCanvas);
        }
      }
      //highlight-end

    } else {
      alert("PiP is not supported by your browser");
    }
  };
  return ...;
}
```

:::note
Only the participants who have their video turned on, will be shown in the PiP mode.
:::

**`Step 5:`** Exit the PiP mode if it is alreay active.

```js
function Controls() {
  const togglePipMode = async () => {

    //highlight-start
    //Check if PiP Window is active or not
    //If active we will turn it off
    if (pipWindowRef.current) {
      await document.exitPictureInPicture();
      pipWindowRef.current = null;
      return;
    }
    //highlight-end

    //Check if browser supports PiP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {
      //highlight-next-line
      ...
    } else {
      alert("PiP is not supported by your browser");
    }
  };
  return ...;
}
```

Here is the output of the PiP implementation:

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/custom_video_pip.mp4' width={"100%"} />

You can get the code sample for this feature in [our github repository](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/meeting/components/BottomBar.js#L47).
