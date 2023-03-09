---
title: Canvas Drawing with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Canvas Drawing using PubSub
pagination_label: Canvas Drawing using PubSub
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: canvas-drawing-using-pubsub
---

# Canvas Drawing using PubSub

When in a meeting, it can be very handy to just draw and share your views with all the collaborators. In order to do so, you will need a drawing board which is shared in realtime which you can develope using the publish-subscribe mechanism. If you are not familiary with the PubSub mechanism and `usePubSub`hook, you can [follow this guide](./pubsub).

## Implementing Canvas Drawing

To implement the Canvas Drawing feature, we will be using a thrid-party library which prodvides easy solution to draw and render canvas.

1. Lets first install dependency.

```bash
npm i "@shawngoh87/react-sketch-canvas"
```

2. With our dependency installed, let us make a new `Canvas` component which will be placed in the `MeetingView` and also add the basic canvas to it.

:::note

As we presume you are familiar with the basics of setting up a VideoSDK meeting, we have not provided Meeting Initialiser code in this guide.
:::

```js
import { ReactSketchCanvas } from "@shawngoh87/react-sketch-canvas";

const MeetingView = () => {
  return (
    <div>
      <WhiteboardView />
    </div>
  );
};

const WhiteboardView = () => {
  //We will define a refernce for our canvas
  const canvasRef = useRef();

  //We will define the props required by the canvas element that we are using
  const canvasProps = {
    width: "100%",
    height: "500px",
    backgroundImage:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg",
    preserveBackgroundImageAspectRatio: "none",
    strokeWidth: 4,
    eraserWidth: 5,
    strokeColor: "#000000",
    canvasColor: "#FFFFFF",
    allowOnlyPointerType: "all",
    withViewBox: false,
  };
  return (
    <div>
      //Adding the actual canvas object
      <ReactSketchCanvas ref={canvasRef} {...canvasProps} />
    </div>
  );
};
```

2. With this, your canvas should be ready to draw. If you draw something on your board, other participants won't be see those drawings, so lets use the `usePubSub` hook to accomplish this. We will be getting `publish()` from the `usePubSub` hook for the topic `WHITEBOARD` to send our drawings to all the participants in the meeting.

- The data we need to send to all the participants is the strokes which we are drawing, so we will `send a stringified json to all` the participants in the message.

```js
import { usePubSub } from "@videosdk.live/react-sdk";

const WhiteboardView = () => {
  //.. other declarations

  const { publish } = usePubSub("WHITEBOARD");

  // This callback from the canvas component will give us the stroke json we need to share
  const onStroke = (stroke, isEraser) => {
    // We will be setting the `persist:true` so that all the strokes
    // are available for the participants who have recently joined
    publish(JSON.stringify(stroke), { persist: true });
  };

  return (
    <div>
      //highlight-next-line
      <ReactSketchCanvas ref={canvasRef} onStroke={onStroke} {...canvasProps} />
    </div>
  );
};
```

3. Even after publishing the drawings wont be appearing to the other participants because they have to re-draw the strokes received from the other participants from the `onMessageReceived` event and from the `onOldMessagesReceived` event.

- The data we we will recieve in the events will be `stringified json` which we will have to **`parse`** first before drawing.

- Also we don't want to re-draw the strokes drown by us, so we will put an extra check to see if the stroke was drawn by localParticipant or not.

```js
//highlight-next-line
import { useMeeting,usePubSub } from "@videosdk.live/react-sdk";

const WhiteboardView = () => {
  //.. other declarations

  const { localParticipant } = useMeeting();

  //highlight-start
  const { publish } = usePubSub("WHITEBOARD", {
    onMessageReceived: (message) => {
      //Check if the stroke is from remote participant only
      if (message.senderId !== localParticipant.id) {
        canvasRef.current.loadPaths(JSON.parse(message.message));
      }
    },
    onOldMessagesReceived: (messages) => {
      messages.map((message) => {
        canvasRef.current.loadPaths(JSON.parse(message.message));
      });
    },
  });
  //highlight-end

  //This callback from the canvas component will give us the stroke json we need to share
  const onStroke = (stroke, isEraser) => {
    //highlight-next-line
    ...
  };

  return (
    <div>
      <ReactSketchCanvas ref={canvasRef} onStroke={onStroke} {...canvasProps} />
    </div>
  );
};
```

Here is a video of how the canvas drawing will look like after teh implementation.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/canvas-drawing.mp4' width={"100%"}/>

</div>

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
