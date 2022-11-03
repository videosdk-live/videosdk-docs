---
sidebar_label: Noise Suppresion (BETA)
pagination_label: Noise Suppresion (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Noise Suppresion (BETA)

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

### 2. Implement Noise suppressor with SDK

- `getNoiseSuppressedAudioStream` - This method accepts source of [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream), return processed `MediaStream`.

```js
// Meeting Initializer
meeting = window.VideoSDK.initMeeting({...});

const onNoiseSuppressor = async () => {
  try {
    // Instantiate VideoSDKNoiseSuppressor Class
    const noiseProcessor = new window.VideoSDKNoiseSuppressor();

    // Getting stream from mic
    const stream = await window.VideoSDK.createMicrophoneAudioTrack({});
    const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
      stream
    );

    // Pass `processedStream` in VideoSDKs `changeMic` method
    meeting.changeMic(processedStream);
  } catch (error) {
    console.log(error);
  }
};
```

For disabling noise suppression, you can pass mic stream in VideoSDKs `changeMic` method.

```js
const disableNoiseSuppressor = async () => {
  // Pass mic MediaStream in VideoSDK `changeMic` method
  const stream = await window.VideoSDK.createMicrophoneAudioTrack({});
  changeMic(stream);
};
```
