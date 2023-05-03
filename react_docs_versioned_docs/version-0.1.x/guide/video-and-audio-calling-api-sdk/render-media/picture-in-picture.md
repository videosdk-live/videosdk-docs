---
title: Picture-in-Picture Mode | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
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

# Picture-in-Picture Mode

Picture-in-picture (PiP) is a feature that is commonly used in video conferencing software. It allows you to continue your video conference while also performing other tasks on your device. With PiP, you can keep the video conference window open and resize it to a smaller size, allowing you to work on other tasks while still being able to see and hear the other participants in the conference. This can be very helpful if you need to take notes, send an email, or look up information during the conference.

In this guide, we will go through how you can create a Picture-in-Picture feature with VideoSDK.

### PiP Video

All the mordern browsers supports poping a videostream our from the `HTMLVideoElement`. You can do it using directly from the controls show on the video element or use the Browser API method [`requestPictureInPicture()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture) on the video element.

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/simple_video_pip.mp4' width={"100%"} />

<br/>

:::important
Chrome, Edge, and Safari support this browser Web API, however, Firefox has no programmatic way of triggering PiP.
:::

### Customize Video PiP with multiple video streams

**`Step 1:`** Let us create a button which will toggle the PiP mode when in the Meeting. This button will call the `togglePipMode()` method on when clicked.

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

**`Step 2:`** First thing we will do it check if the browser supports the PiP mode else show a message to the user.

```js
function Controls() {
  const togglePipMode = async () => {
    //Check if browser supports PIP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {

    } else {
      alert("PIP is not supported by your browser");
    }
  };
  return ...;
}
```

**`Step 3:`** Now, when the browser supports the PiP mode, we will create a `Canvas` element and a `Video` element. And create a Stream from the Canvas and play it in the video element. We will request the PiP mode on the video element when the metadata has been loaded.

```js
function Controls() {

  //highlight-next-line
  const pipWindowRef = useRef();

  const togglePipMode = async () => {
    //Check if browser supports PIP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {
      //highlight-start
      //Creating a Canvas which will render our PIP Stream
      const source = document.createElement("canvas");
      const ctx = source.getContext("2d");

      //Create a Video tag which we will popout for PIP
      const pipVideo = document.createElement("video");
      pipWindowRef.current = pipVideo;
      pipVideo.autoplay = true;

      //Creating stream from canvas which we will play
      const stream = source.captureStream();
      pipVideo.srcObject = stream;

      //Do initial Canvas Paint
      drawCanvas()

      //When Video is ready we will start PIP mode
      pipVideo.onloadedmetadata = () => {
        pipVideo.requestPictureInPicture();
      };
      await pipVideo.play();
      //highlight-end
    } else {
      alert("PIP is not supported by your browser");
    }
  };
  return ...;
}
```

**`Step 4:`** We will paint the canvas with the Participant Grid which will be visible in the PiP window.

```js
function Controls() {

  const getRowCount = (length) => {
    return length > 2 ? 2 : length > 0 ? 1 : 0;
  };
  const getColCount = (length) => {
    return length < 2 ? 1 : length < 5 ? 2 : 3;
  };

  const togglePipMode = async () => {
    //Check if browser supports PIP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {

      //Stream playing here
      //...

      //highlight-start
      //When the PIP mode starts, we will start drawing canvas with PIP view
      pipVideo.addEventListener("enterpictureinpicture", (event) => {
        drawCanvas();
      });

      //When PIP mode exits, we will dispose the track we created earlier
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
      alert("PIP is not supported by your browser");
    }
  };
  return ...;
}
```

:::note
We will be showing only the participants who have their video turned on in the PiP mode.
:::

**`Step 5:`** We will exit the PiP mode if it is alreay active.

```js
function Controls() {
  const togglePipMode = async () => {

    //highlight-start
    //Check if PIP Window is active or not
    //If active we will turn it off
    if (pipWindowRef.current) {
      await document.exitPictureInPicture();
      pipWindowRef.current = null;
      return;
    }
    //highlight-end

    //Check if browser supports PIP mode else show a message to user
    if ("pictureInPictureEnabled" in document) {
      //highlight-next-line
      ...
    } else {
      alert("PIP is not supported by your browser");
    }
  };
  return ...;
}
```

Here is the output of the PiP implementation we did.

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/custom_video_pip.mp4' width={"100%"} />

You can get the code sample for this feature in [our github repository](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example/blob/main/src/meeting/components/BottomBar.js#L47).
