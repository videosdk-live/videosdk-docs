---
sidebar_label: Virtual Background (BETA)
pagination_label: Virtual Background (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Background (BETA)

This feature allows participants to blur own Video Background or set custom image backgrounds for increasing best productivity and protect personal privacy during Video communication.

:::important

- Currently, This feature is only available on Google Chrome, Safari, Firefox and Brave browser.
- This feature is in Beta release, so feel free to reach out to us on Discord. We'd love to hear feedback from you.

:::

### 1. Install VideoSDK Media Processor package

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install --save @videosdk.live/videosdk-media-processor-web
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/videosdk-media-processor-web
```

</TabItem>
</Tabs>

### 2. Instantiate Virtual Background Processor

```js
// Import package
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();
```

### 3. Start, Update and Stop Virtual Background

Three major method is used for handling Virtual Background Processor.

- #### Start

This method accepts two parameters `MediaStram` and `config`, return processed `MediaStream`.

1. **MediaStream** : Source of [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream).

2. **config** : This object accepts `type` and `imageUrl` property. `type` property accepts filter type `image` or `blur`. `imageUrl` is the path of the image and will ignore on `blur` filter type.

   **NOTE** : If you want to display specific background image, do make sure it is uploaded on CDN.

```js
import { useMeeting, createCameraVideoTrack } from "@videosdk.live/react-sdk";
import { VirtualBackgroundProcessor } from "@videosdk.live/videosdk-media-processor-web";

const {
  //...
  changeWebcam,
  //...
} = useMeeting({});

// Instantiate VirtualBackgroundProcessor Class
const videoProcessor = new VirtualBackgroundProcessor();

const startVirtualBackground = async () => {
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

  // Pass `processedStream` in VideoSDKs `changeWebcam` method
  changeWebcam(processedStream);
};
```

- #### Update Processor

This method is used for updating filter as well as virtual background image during meeting.

```js
const config = {
  type: "image", // "blur"
  imageUrl: "https://cdn.videosdk.live/virtual-background/cloud.jpeg",
};

videoProcessor.updateProcessorConfig(config);
```

- #### Stop

This method is used to stop virtual background processor.

```js
import { useMeeting, createCameraVideoTrack } from "@videosdk.live/react-sdk";

const {
  //...
  changeWebcam,
  //...
} = useMeeting({});

const videoProcessor = new VirtualBackgroundProcessor();

const stopVirtualBackground = async () => {
  videoProcessor.stop();

  // Pass webcam MediaStream in VideoSDK `changeWebcam` method
  const stream = await createCameraVideoTrack({});
  changeWebcam(stream);
};
```

### Extras

You can also pass this processed stream during initialization of the meeting as well

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
