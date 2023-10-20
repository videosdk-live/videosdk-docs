---
sidebar_label: Noise Suppresion (BETA)
pagination_label: Noise Suppresion (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Noise Suppresion (BETA) - Javascript

Noise Suppresion identifies and filter out background noise from an audio input, during a meeting or call. This features can be particularly useful in noisy environments or when participants are using low-quality microphones.

:::important

This feature is in Beta release, so feel free to reach out to us on Discord. We'd love to hear feedback from you.

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

With the library installed lets create an instance of the `VideoSDKNoiseSuppressor`.

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

We will get the processed stream using the `getNoiseSuppressedAudioStream` which will take `MediaStream` as input and give back the noise suppressed stream.

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

Now that we have the processed stream you can pass it in the `enableWebcam()`, `changeWebcam()` or `toggleWebcam()`.

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

You can use the stop the noise suppression by replacing the audio stream with a new plain audio stream.

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

You can also pass this processed stream during initialization of the meeting as well

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
