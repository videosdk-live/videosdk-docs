---
sidebar_label: Virtual Background (BETA)
pagination_label: Virtual Background (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Background (BETA) - React

Virtual backgrounds enhance the video call or meeting experience by enabling participants to replace their physical background with a digital image or video. This feature offers several benefits, including maintaining privacy, reducing visual distractions, and adding an element of creativity or fun to the meeting. Users can choose from preloaded images or upload their own backgrounds.

:::important

- Currently, this feature is only available on Google Chrome, Firefox and Brave browser.
- This feature is in Beta release, so feel free to reach out to us on Discord. We'd love to hear your feedback.

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

After installing the library, initialize an instance of the `VirtualBackgroundProcessor`. 

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

const MeetingView = () => {
  //highlight-start
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();
  //highlight-end

  const handleStartVirtualBackground = () => {};

  const handleStopVirtualBackground = () => {};

  const handleChangeConfig = () => {};

  return (
    <>
      <button onClick={handleStartVirtualBackground}>
        Start Virtual Background
      </button>
      <button onClick={handleChangeConfig}>Change Virtual Background</button>
      <button onClick={handleStopVirtualBackground}>
        Stop Virtual Background
      </button>
    </>
  );
};
```

### Using Virtual Background

Utilize the processor by first initializing it, then start processing a stream, and finally, pass the processed video stream to VideoSDK.

#### Initializing

The first step is to initialize the virtual background processor if it's not already prepared.

```js
const MeetingView = () =>{
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();

  const handleStartVirtualBackground = () => {
    //highlight-start
    // Initialize processor if not ready
    if (!videoProcessor.ready) {
      await videoProcessor.init();
    }
    //highlight-end
  }
  const handleStopVirtualBackground = () => {
    ...
  }
  return <>...</>;
}
```

### Starting the Processor

To initiate the processing of a video stream, you need to provide a `MediaStream` that you want to process and a `config` to be used for processing. Once these parameters are passed to the processor, it will return a `MediaStream`.

1. **MediaStream** : [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) is essentially a video stream captured from the camera. You can use the `createCameraVideoTrack` method to generate a `MediaStream`.
2. **config** : This object accepts `type` and `imageUrl` property. `type` property accepts filter type `image` or `blur`. `imageUrl` is the path of the image and it will be ignored on `blur` filter type.

   **NOTE** : If you intend to display a specific background image, make sure it is uploaded on a CDN.

```js
import { useMeeting, createCameraVideoTrack } from "@videosdk.live/react-sdk";
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

const MeetingView = () => {
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();

  const { changeWebcam } = useMeeting({});

  const handleStartVirtualBackground = async () => {
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
    const stream = await createCameraVideoTrack({});
    const processedStream = await videoProcessor.start(stream, config);
    //highlight-end
  };
  return <>...</>;
};
```

### Passing Processed Stream to VideoSDK

Once you have the processed stream, you can pass it to functions like `enableWebcam()`, `changeWebcam()` or `toggleWebcam()` to apply the virtual background effect during your meeting.

```js
const MeetingView = () => {
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();

  const { changeWebcam } = useMeeting({});

  const handleStartVirtualBackground = async () => {
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
    const stream = await createCameraVideoTrack({});
    const processedStream = await videoProcessor.start(stream, config);

    //highlight-start
    changeWebcam(processedStream);
    //highlight-end
  };
  return <>...</>;
};
```

### Updating Video Processor Configuration

If you want to change the background while the Video Processor is running, you can call the `updateProcessorConfig` method to modify the filters or processing type. 

```js
const MeetingView = () => {
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();

  const { changeWebcam } = useMeeting({});

  const handleChangeConfig = async () => {
    //highlight-start
    const config = {
      type: "image", // "blur"
      imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
    };

    videoProcessor.updateProcessorConfig(config);
    //highlight-end
  };
  return <>...</>;
};
```

### Stopping Virtual Background Processor

Additionally, you can use the `stop()` method on the processor to halt the background processing and replace the video stream with a new plain video stream.

```js
const MeetingView = () => {
  // Instantiate VirtualBackgroundProcessor Class
  const videoProcessor = new VirtualBackgroundProcessor();

  const { changeWebcam } = useMeeting({});

  const handleStopVirtualBackground = async () => {
    //highlight-start
    videoProcessor.stop();

    // Pass webcam MediaStream in VideoSDK `changeWebcam` method
    const stream = await createCameraVideoTrack({});
    changeWebcam(stream);
    //highlight-end
  };
  return <>...</>;
};
```

### Extras

You can also pass the processed stream during initialization of the meeting.

```js
import { useState, useEffect } from "react";
import {
  MeetingProvider,
  createCameraVideoTrack,
} from "@videosdk.live/react-sdk";
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

const [mediastream, setMediaStream] = useState(null);

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

useEffect(async () => {
  const stream = await createCameraVideoTrack({});

  if (!videoProcessor.ready) {
    await videoProcessor.init();
  }
  const processedStream = await videoProcessor.start(stream, {
    type: "image", // "blur"
    imageUrl: `https://cdn.videosdk.live/virtual-background/cloud.jpeg`,
  });
  setMediaStream(processedStream);
}, []);

return (
  mediastream && (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "TestUser",
        customCameraVideoTrack: mediastream, // Pass processed MediaStream in VideoSDK
      }}
      //...
    >
      <></>
    </MeetingProvider>
  )
);
```

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [createCameraVideoTrack](/react/api/sdk-reference/custom-tracks#custom-video-track)
- [enableWebcam()](/react/api/sdk-reference/use-meeting/methods#enablewebcam)
- [disableWebcam()](/react/api/sdk-reference/use-meeting/methods#disablewebcam)
- [toggleWebcam()](/react/api/sdk-reference/use-meeting/methods#togglewebcam)
