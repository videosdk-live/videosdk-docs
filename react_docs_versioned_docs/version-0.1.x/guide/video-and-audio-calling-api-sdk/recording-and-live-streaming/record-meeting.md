---
title: Record Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Record Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Record Meeting
pagination_label: Record Meeting
keywords:
  - Start Recording meeting
  - Stop Recording meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-meeting
---

# Record Meeting

VideoSDK allows you to record video & audio during the meeting. The recording files are available in developer dashboard or you can also choose to store them in your own cloud storage.

VideoSDK also allows you to configure the recording layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the recording according to your layout choice.

- Any participant can start / stop recording any time during the meeting.

This guide will provide an overview of how to implement start and stop Meeting Recording.

### `startRecording()`

`startRecording()` can be used to start a recording of the meeting which can be accessed from the `useMeeting` hook. These method accepts there parameters:

- `webhookUrl`: These would the webhook URL where you would like to listen to event happening for the recording like starting and stopping of recording. It will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook)

  - These parameter can be `null`.

- `awsDirPath`: These parameter accepts the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](/docs/tutorials/user-dashboard/recording-storage-config)

  - These parameter can be `null`.

- `config`: This parameter will define how the recording should be recorded.
  - `config: mode` is used to either record video-and-audio both or only audio. And by default it will be video-and-audio.
  - `config: quality` is only applicable to video-and-audio.
  - Here is the complete available configuration options.
    - **config**:
      - **layout**:
        - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
        - **priority**: _"SPEAKER"_ | _"PIN"_
        - **gridSize**: Number _`max 4`_
      - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
      - **mode**: _"video-and-audio"_ | _"audio"_
      - **quality**: _"low"_ | _"med"_ | _"high"_
      - **orientation**: _"landscape"_ | _"portrait"_
  - These parameter can be `null`.

### `stopRecording()`

- `stopRecording()` is used to stop the meeting recording which can be accessed from the `useMeeting` hook.

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { startRecording, stopRecording } = useMeeting();

  const handleStartRecording = () => {
    // Start Recording
    startRecording("YOUR WEB HOOK URL", "AWS Directory Path", {
      layout: {
        type: "GRID",
        priority: "SPEAKER",
        gridSize: 4,
      },
      theme: "DARK",
      mode: "video-and-audio",
      quality: "high",
      orientation: "landscape",
    });
  };

  const handleStopRecording = () => {
    // Start Recording
    stopRecording();
  };

  return (
    <>
      <button onClick={handleStartRecording}>Start Recording</button>
      <button onClick={handleStopRecording}>Stop Recording</button>
    </>
  );
};
```

### Event associated with Recording

- **onRecordingStateChanged** - Whenever meeting recording state changes, then `onRecordingStateChanged` event will trigger.

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

const Constants = VideoSDK.Constants;

function onRecordingStateChanged(data) {
  const { status } = data;

  if (status === Constants.recordingEvents.RECORDING_STARTING) {
    console.log("Meeting recording is starting");
  } else if (status === Constants.recordingEvents.RECORDING_STARTED) {
    console.log("Meeting recording is started");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPING) {
    console.log("Meeting recording is stopping");
  } else if (status === Constants.recordingEvents.RECORDING_STOPPED) {
    console.log("Meeting recording is stopped");
  } else {
    //
  }
}

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onRecordingStateChanged,
});
```

### Storage Configuration

While recording your meetings, you can choose to store them on the VideoSDK's storage or you can also configure your own **`AWS S3 Storage or Azure Blob`** to store the meeting recordings directly on your storage.

You can configure your own **`AWS S3 Storage or Azure Blob`** from the [VideoSDK Dashboard's API section](https://app.videosdk.live/api-keys).

You can also go through these [guide to setup](/docs/tutorials/user-dashboard/recording-storage-config) the storage or watch these [video to configure](https://www.loom.com/share/23a2617f824a4a5da004d14d1a541a9d) your storage.

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to record the meetings. In order to use the custom template, you need to create a template for which you can [follow these guide](/docs/tutorials/customized-layout). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-recording) the recording with the `templateURL` parameter.
