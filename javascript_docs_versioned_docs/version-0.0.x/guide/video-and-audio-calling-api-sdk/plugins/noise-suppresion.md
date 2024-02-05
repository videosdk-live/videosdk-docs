---
sidebar_label: Noise Suppresion (BETA)
pagination_label: Noise Suppresion (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Noise Suppresion (BETA) - Javascript

Noise suppression is a feature that identifies and filters out background noise from an audio input during a meeting or call. This feature can be particularly useful in noisy environments or when participants are using low-quality microphones.

:::important

This feature is in Beta release, so feel free to reach out to us on Discord. We'd love to hear your feedback.

:::

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

### Instantiate `VideoSDKNoiseSuppressor`

After installing the library, initialize an instance of the `VideoSDKNoiseSuppressor`. 

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();
```

### Getting Processed Stream

You can obtain the processed stream using the `getNoiseSuppressedAudioStream` method, which takes a `MediaStream` as input and returns the noise-suppressed stream.

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();

const startNoiseSuppressionBtn = document.getElementById(
  "startNoiseSuppressionBtn"
);
startNoiseSuppressionBtn.addEventListener("click", async () => {
  //highlight-start
  // Getting stream from mic
  const stream = await VideoSDK.createMicrophoneAudioTrack({});
  const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
    stream
  );
  //highlight-end
});
```

### Passing Processed Stream to VideoSDK

Once you have the processed stream, you can pass it to functions like `enableMic()`, `changMic()` or `toggleMic()` to apply the noise suppresion effect during your meeting.

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();

const startNoiseSuppressionBtn = document.getElementById(
  "startNoiseSuppressionBtn"
);
startNoiseSuppressionBtn.addEventListener("click", async () => {
  // Getting stream from mic
  const stream = await createMicrophoneAudioTrack({});
  const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
    stream
  );

  //highlight-start
  meeting?.changeMic(processedStream);
  //highlight-end
});
```

### Stopping Noise Suppression

You can stop the noise suppression by replacing the audio stream with a new plain audio stream.

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();

const stopNoiseSuppressionBtn = document.getElementById(
  "stopNoiseSuppressionBtn"
);
stopNoiseSuppressionBtn.addEventListener("click", async () => {
  //highlight-start
  // Pass mic MediaStream in VideoSDK `changeMic` method
  const stream = await VideoSDK.createMicrophoneAudioTrack({});
  meeting?.changeMic(stream);
  //highlight-end
});
```

### Extras

You can also pass this processed stream during initialization of the meeting.

```js
// Import package
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";
// Instantiate VideoSDKNoiseSuppressor Class
const noiseProcessor = new VideoSDKNoiseSuppressor();

// Getting stream from mic
const stream = await VideoSDK.createMicrophoneAudioTrack({});
const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
  stream
);

let meeting;
meeting = VideoSDK.initMeeting({
  meetingId: "meetingId",
  micEnabled: true,
  webcamEnabled: true,
  name: "TestUser",
  customMicrophoneAudioTrack: processedStream, // Pass processed MediaStream in VideoSDK
});
```

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [unmuteMic()](/javascript/api/sdk-reference/meeting-class/methods#unmutemic)
- [muteMic()](/javascript/api/sdk-reference/meeting-class/methods#mutemic)
