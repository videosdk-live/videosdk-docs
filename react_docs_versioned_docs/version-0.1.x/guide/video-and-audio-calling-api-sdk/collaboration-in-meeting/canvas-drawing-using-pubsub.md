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

# Canvas Drawing using PubSub - React

When in a meeting, it can be very handy to draw and share your views with all the collaborators. To achieve this, you can develop a drawing board shared in real-time using the publish-subscribe mechanism. If you are not familiar with the PubSub mechanism and the `usePubSub hook`, you can [follow this guide](./pubsub).

### Implementing Canvas Drawing

To implement the Canvas Drawing feature, you need to use a third-party library that provides an easy solution for drawing and rendering on the canvas.

1. First install all the dependencies.

```bash
npm i "@shawngoh87/react-sketch-canvas"
```

2. With the dependencies installed, make a new `Canvas` component which will be placed in the `MeetingView` component, and also add a basic canvas to it.

:::note

It is presumed that you are familiar with the basics of setting up a VideoSDK meeting, thus we have not provided Meeting Initialiser code in this guide.
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
  //Define a refernce for the canvas
  const canvasRef = useRef();

  //Define the props required by the canvas element used
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

2. With this, your canvas is ready for drawing. If you draw something on your board, other participants won't be able to see those drawings yet. To share your drawings with others, use the `usePubSub` hook. Get the `publish()` method from the `usePubSub` hook for the topic `WHITEBOARD` to send your drawings to all the participants in the meeting.

- The data you need to send to all the participants is the strokes you are drawing, so you will send a stringified JSON to everyone in the message.

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

3. Even after publishing, the drawings won't appear to other participants because they need to redraw the strokes received from others. This involves handling the `onMessageReceived` event and the `onOldMessagesReceived` event. 

- The data received in these events will be a `stringified JSON`, which needs to be parsed before drawing.

- Additionally, to avoid redrawing the strokes created by the local participant, an extra check is implemented to determine whether the stroke was drawn by the local participant or not.

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

Here is a video showcasing the canvas drawing feature after its implementation.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/video/canvas-drawing.mp4' width={"100%"}/>

</div>

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [usePubSub()](/react/api/sdk-reference/use-pubsub)
