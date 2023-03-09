---
sidebar_label: Noise Suppresion (BETA)
pagination_label: Noise Suppresion (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Noise Suppresion (BETA)

Noise Suppresion identifies and filter out background noise from an audio input, during a meeting or call. These features can be particularly useful in noisy environments or when participants are using low-quality microphones.

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

const MeetingView = () => {
  // Instantiate VideoSDKNoiseSuppressor Class
  const noiseProcessor = new VideoSDKNoiseSuppressor();

  const handleStartNoiseSuppression = () => {};
  const handleStopNoiseSuppression = () => {};

  return (
    <>
      <button onClick={handleStartNoiseSuppression}>
        Start Noise Suppression
      </button>
      <button onClick={handleStopNoiseSuppression}>
        Stop Noise Suppression
      </button>
    </>
  );
};
```

### Getting Processed Stream

We will get the processed stream using the `getNoiseSuppressedAudioStream` which will take `MediaStream` as input and give back the noise suppressed stream.

```js
// Import package
import {
  useMeeting,
  createMicrophoneAudioTrack,
} from "@videosdk.live/react-sdk";
import { VideoSDKNoiseSuppressor } from "@videosdk.live/videosdk-media-processor-web";

const MeetingView = () =>{
  // Instantiate VideoSDKNoiseSuppressor Class
  const noiseProcessor = new VideoSDKNoiseSuppressor();
  const { changeMic } = useMeeting({});

  const handleStartNoiseSuppression = () => {
    //highlight-start
    // Getting stream from mic
    const stream = await createMicrophoneAudioTrack({});
    const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
      stream
    );
    //highlight-end
  };

  const handleStopNoiseSuppression = () => {};
  return <>...</>;
}
```

### Passing Processed Stream to VideoSDK

Now that we have the processed stream you can pass it in the `enableWebcam()`, `changeWebcam()` or `toggleWebcam()`.

```js
const MeetingView = () =>{
  // Instantiate VideoSDKNoiseSuppressor Class
  const noiseProcessor = new VideoSDKNoiseSuppressor();
  const { changeMic } = useMeeting({});
  const handleStartNoiseSuppression = () => {
    // Getting stream from mic
    const stream = await createMicrophoneAudioTrack({});
    const processedStream = await noiseProcessor.getNoiseSuppressedAudioStream(
      stream
    );
    //highlight-start
    changeMic(processedStream);
    //highlight-end
  };
  const handleStopNoiseSuppression = () => {};
  return <>...</>;
}
```

### Stopping Noise Suppression

You can use the stop the noise suppression by replacing the audio stream with a new plain audio stream.

```js
const MeetingView = () =>{
  // Instantiate VideoSDKNoiseSuppressor Class
  const noiseProcessor = new VideoSDKNoiseSuppressor();

  const { changeMic } = useMeeting({});

  const handleStopNoiseSuppression = () => {
    //highlight-start
    // Pass mic MediaStream in VideoSDK `changeMic` method
    const stream = await createMicrophoneAudioTrack({});
    changeMic(stream);
    //highlight-end
  };

  return <>...</>;
}
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

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [createMicrophoneAudioTrack](/react/api/sdk-reference/custom-tracks#custom-audio-track)
- [unmuteMic()](/react/api/sdk-reference/use-meeting/methods#unmutemic)
- [muteMic()](/react/api/sdk-reference/use-meeting/methods#mutemic)
- [toggleMic()](/react/api/sdk-reference/use-meeting/methods#togglemic)
