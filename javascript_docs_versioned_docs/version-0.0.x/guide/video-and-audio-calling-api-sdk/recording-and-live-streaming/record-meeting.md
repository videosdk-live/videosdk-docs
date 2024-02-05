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
slug: record-meeting
---

# Record Meeting - Javascript

VideoSDK enables you to record video and audio during meetings, and you can access the recorded files in the developer dashboard or opt to store them in your own cloud storage.

Additionally, VideoSDK offers flexibility in configuring recording layouts. You can achieve this by selecting various prebuilt layouts in the configuration or by providing your own custom template for recording, tailored to your layout preferences.

This guide provides an overview of implementing the start and stop functionality for meeting recording.

:::important

To initiate automatic recording at the beginning of a `session`, simply provide the `autoStartConfig` feature, `recording` during `room` creation. For more information on configuring the `autoStartConfig`, please refer to the provided documentation **[<u>here</u>](/api-reference/realtime-communication/create-room#autoStartConfig)**.

:::

### `startRecording()`

The `startRecording()` method, accesible from the `meeting` object, is used to initiate the recording of a meeting. This method accepts the following three parameters:

- `1. webhookUrl (optional)`: This is the webhook URL where you can listen to events related to the recording, such as the start and stop of recording. It triggers when the recording is completed and stored on the server. You can learn more about webhooks [here](https://en.wikipedia.org/wiki/Webhook)

- `2. awsDirPath (optional)`: This parameter specifies the path to your S3 bucket where you intend to store the recordings. To enable the storage of recordings in your S3 bucket with VideoSDK, follow this guide ([VideoSDK AWS S3 Integration](/docs/tutorials/user-dashboard/recording-storage-config))

- `3. config (optional)`: This parameter defines how the recording should be conducted

  :::caution

  If you don't have a value for `webhookUrl` or `awsDirPath` and wish to utilize the `config` property, you should pass `null` in place of the missing values. Failing to do so may result in the configuration not being applied to the recording.
  :::

  ```js
  const config = {
    // highlight-next-line
    // Layout Configuration
    layout: {
      type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
      priority: "SPEAKER", // "PIN", Default : "SPEAKER"
      gridSize: 4, // MAX : 4
    },

    // highlight-next-line
    // Theme of recording
    theme: "DARK", //  "LIGHT" | "DEFAULT"

    // highlight-next-line
    // `mode` is used to either record video & audio both or only audio.
    mode: "video-and-audio", // "audio", Default : "video-and-audio"

    // highlight-next-line
    // Quality of recording and is only applicable to `video-and-audio` type mode.
    quality: "high", // "low" | "med",  Default : "med"

    //highlight-start
    // This mode refers to orientation of recording.
    // landscape : Record the meeting in horizontally
    // portrait : Record the meeting in vertically (Best for mobile view)
    //highlight-end
    orientation: "landscape", // "portrait",  Default : "landscape"
  };
  ```

### `stopRecording()`

- The `stopRecording()` method, accesible from the `meeting` object, is used to stop the recording of a meeting.

#### Example

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const startRecordingBtn = document.getElementById("startRecordingBtn");
startRecordingBtn.addEventListener("click", () => {
  // Start Recording
  meeting?.startRecording("YOUR WEB HOOK URL", "AWS Directory Path", {
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
});

const stopRecordingBtn = document.getElementById("stopRecordingBtn");
stopRecordingBtn.addEventListener("click", () => {
  // Stop Recording
  meeting?.stopRecording();
});
```

### Event associated with Recording

- **onRecordingStateChanged** - The `recording-state-changed` event is triggered whenever the state of meeting recording changes.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const Constants = VideoSDK.Constants;

meeting.on("recording-state-changed", (data) => {
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
});
```

### Storage Configuration

While recording your meetings, you have the flexibility to store them either on VideoSDK's storage or configure your own storage solution such as **`AWS S3 Storage, Azure Blob or GCP Cloud Storage`**. To set up your own storage, you can navigate to the [API section](https://app.videosdk.live/api-keys) in the VideoSDK Dashboard.

For detailed instructions on configuring storage or a step-by-step guide, you can refer to this [documentation](/docs/tutorials/user-dashboard/recording-storage-config) or watch the accompanying [video tutorial](https://www.loom.com/share/23a2617f824a4a5da004d14d1a541a9d).

### Custom Template

With VideoSDK, you have the option to employ your own custom-designed layout template for meeting recordings. To use a custom template, [follow this guide](javascript/guide/interactive-live-streaming/custom-template) to create and set up the template. Once the template is configured, you can initiate recording using the [REST API](/api-reference/realtime-communication/start-recording), specifying the `templateURL` parameter.

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [startRecording()](/javascript/api/sdk-reference/meeting-class/methods#startrecording)
- [stopRecording()](/javascript/api/sdk-reference/meeting-class/methods#stoprecording)
- [recording-state-changed](/javascript/api/sdk-reference/meeting-class/events#recording-state-changed)
- [autoStartConfig](/api-reference/realtime-communication/create-room#autoStartConfig)
