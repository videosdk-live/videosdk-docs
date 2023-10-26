---
sidebar_label: Noise Suppresion (BETA)
pagination_label: Noise Suppresion (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Noise Suppresion (BETA) - React

This feature allows participant to removes background noise from meetings and keep only particpant voice in the communication.

:::important

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

### 2. Instantiate Noise Suppressor Processor

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();
```

### 3. Implement Noise suppressor with SDK

- `getNoiseSuppressedAudioStream` - This method accepts source of [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream), return processed `MediaStream`.

```js
import {
  useMeeting,
  createMicrophoneAudioTrack,
} from "@videosdk.live/react-sdk";
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

const {
  //...
  changeMic,
  //...
} = useMeeting({});

const onNoiseSuppressor = async () => {
  try {
    // Instantiate VideoSDKNoiseSuppressor Class
    const noiseProcessor = new VideoSDKNoiseSuppressor();

    // Getting stream from mic
    const stream = await createMicrophoneAudioTrack({});
    const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
      stream
    );

    // Pass `processedStream` in VideoSDKs `changeMic` method
    changeMic(processedStream);
  } catch (error) {
    console.log(error);
  }
};
```

For disabling noise suppression, you can pass mic stream in VideoSDKs `changeMic` method.

```js
import {
  useMeeting,
  createMicrophoneAudioTrack,
} from "@videosdk.live/react-sdk";

const {
  //...
  changeMic,
  //...
} = useMeeting({});

const disableNoiseSuppressor = async () => {
  // Pass mic MediaStream in VideoSDK `changeMic` method
  const stream = await createMicrophoneAudioTrack({});
  changeMic(stream);
};
```

### Extras

You can also pass this processed stream during initialization of the meeting as well

```js
import { useState, useEffect } from "react";
import {
  MeetingProvider,
  createMicrophoneAudioTrack,
} from "@videosdk.live/react-sdk";
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

const [mediastream, setMediaStream] = useState(null);

useEffect(async () => {
  try {
    // Instantiate VideoSDKNoiseSuppressor Class
    const noiseProcessor = new VideoSDKNoiseSuppressor();

    // Getting stream from mic
    const stream = await createMicrophoneAudioTrack({});
    const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
      stream
    );

    setMediaStream(processedStream);
  } catch (error) {
    console.log(error);
  }
}, []);

return (
  mediastream && (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "TestUser",
        customMicrophoneAudioTrack: mediastream, // Pass processed MediaStream in VideoSDK
      }}
      //...
    >
      <></>
    </MeetingProvider>
  )
);
```
