---
sidebar_label: Virtual Background (BETA)
pagination_label: Virtual Background (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Background (BETA)

Virtual backgrounds allow participants in a video call or meeting to replace their actual background with a digital image or video, which can be either preloaded images or user-uploaded images. This feature can be useful for a variety of reasons, such as maintaining privacy by hiding potentially distracting or private elements in the background, reducing visual clutter to help focus on the speaker or content, and adding an element of fun or creativity to a meeting.

:::important

- Currently, this feature is only available on Google Chrome, Firefox and Brave browser.
- This feature is in Beta release, so feel free to reach out to us on Discord. We'd love to hear feedback from you.

:::

![virtual-background](/img/virtual-background.png)

### Install VideoSDK Media Processor package

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install --save "@videosdk.live/videosdk-media-processor-web"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/videosdk-media-processor-web"
```

</TabItem>
</Tabs>

### Instantiate Virtual Background Processor

With the library installed lets create an instance of the `VirtualBackgrouProcessor`.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();
```

### Using Virtual Background

To use the virtual background processor, you will be first initializing it, then you will start processing a stream and finally pass the processed video stream to the VideoSDK.

#### Initializing

First thing to do is initialize the virtual background processor if its not already ready.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const StartVirtualBackgroundBtn = document.getElementById(
  "StartVirtualBackgroundBtn"
);
StartVirtualBackgroundBtn.addEventListener("click", async () => {
  //highlight-start
  // Initialize processor if not ready
  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }
  //highlight-end
});
```

### Starting the Processor

To start processsing a video stream you will need `MediaStram` which you want to process and `config` which should be used from processing. When the required parameters are passed to the processor, it will return `MediaStream`.

1. **MediaStream** : [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) is just a video stream which is being capture from the camera. You can use the `createCameraVideoTrack` to create a `MediaStream`.

2. **config** : This object accepts `type` and `imageUrl` property. `type` property accepts filter type `image` or `blur`. `imageUrl` is the path of the image and it will be ignored on `blur` filter type.

   **NOTE** : If you want to display specific background image, do make sure it is uploaded on CDN.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const StartVirtualBackgroundBtn = document.getElementById(
  "StartVirtualBackgroundBtn"
);
StartVirtualBackgroundBtn.addEventListener("click", async () => {
  // Initialize processor if not ready
  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }

  //highlight-start
  // Configuration for starting processor
  const config = {
    type: "image", // "blur"
    imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
    // Here is a list of background images you can use for your project.
    // imageUrl: "https://cdn.videosdk.live/virtual-background/beach.jpeg",
    // imageUrl: "https://cdn.videosdk.live/virtual-background/san-fran.jpeg",
    // imageUrl: "https://cdn.videosdk.live/virtual-background/paper-wall.jpeg",
  };

  // Getting stream from webcam
  const stream = await VideoSDK.createCameraVideoTrack({});
  const processedStream = await videoProcessor.start(stream, config);
  //highlight-end
});
```

### Passing Processed Stream to VideoSDK

Now that we have the processed stream you can pass it in the `enableWebcam()` or `changeWebcam()`.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const StartVirtualBackgroundBtn = document.getElementById(
  "StartVirtualBackgroundBtn"
);
StartVirtualBackgroundBtn.addEventListener("click", async () => {
  // Initialize processor if not ready
  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }

  // Configuration for starting processor
  const config = {
    type: "image", // "blur"
    imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
    // Here is a list of background images you can use for your project.
    // imageUrl: "https://cdn.videosdk.live/virtual-background/beach.jpeg",
    // imageUrl: "https://cdn.videosdk.live/virtual-background/san-fran.jpeg",
    // imageUrl: "https://cdn.videosdk.live/virtual-background/paper-wall.jpeg",
  };

  // Getting stream from webcam
  const stream = await VideoSDK.createCameraVideoTrack({});
  const processedStream = await videoProcessor.start(stream, config);

  //highlight-start
  meeting?.changeWebcam(processedStream);
  //highlight-end
});
```

### Updating Video Processor Configuration

If you wish to change the background while the Video Processor is running, you can call the `updateProcessorConfig` method and change the filters or processing type.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const updateVirtualBackgroundBtn = document.getElementById(
  "updateVirtualBackgroundBtn"
);
updateVirtualBackgroundBtn.addEventListener("click", async () => {
  //highlight-start
  const config = {
    type: "image", // "blur"
    imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
  };

  videoProcessor.updateProcessorConfig(config);
  //highlight-end
});
```

### Stopping Virtual Background Processor

You can use the `stop()` on the processor to stop the background processing and then replace the video stream with a new plain video stream.

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const stopVirtualBackgroundBtn = document.getElementById(
  "stopVirtualBackgroundBtn"
);
stopVirtualBackgroundBtn.addEventListener("click", async () => {
  //highlight-start
  videoProcessor.stop();

  // Pass webcam MediaStream in VideoSDK `changeWebcam` method
  const stream = await VideoSDK.createCameraVideoTrack({});
  meeting?.changeWebcam(stream);
  //highlight-end
});
```

### Extras

You can also pass this processed stream during initialization of the meeting as well

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";
const videoProcessor = new VirtualBackgroundProcessor();

const stream = await VideoSDK.createCameraVideoTrack({});
if (!videoProcessor.ready) {
  await videoProcessor.init();
}
const processedStream = await videoProcessor.start(stream, {
  type: "image", // "blur"
  imageUrl: `https://cdn.videosdk.live/virtual-background/cloud.jpeg`,
});

let meeting;
meeting = VideoSDK.initMeeting({
  meetingId: "meetingId",
  micEnabled: true,
  webcamEnabled: true,
  name: "TestUser",
  customCameraVideoTrack: processedStream, // Pass processed MediaStream in VideoSDK
});
```

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [enableWebcam()](/javascript/api/sdk-reference/meeting-class/methods#enablewebcam)
- [disableWebcam()](/javascript/api/sdk-reference/meeting-class/methods#disablewebcam)
