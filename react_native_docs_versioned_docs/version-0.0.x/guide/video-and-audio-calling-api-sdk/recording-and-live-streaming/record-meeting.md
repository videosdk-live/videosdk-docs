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

# Record Meeting

VideoSDK allows you to record video & audio during the meeting. The recording files are available in developer dashboard or you can also choose to store them in your own cloud storage.

VideoSDK also allows you to configure the recording layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the recording according to your layout choice.

This guide will provide an overview of how to implement start and stop Meeting Recording.

### `startRecording()`

`startRecording()` can be used to start a recording of the meeting which can be accessed from the `useMeeting` hook. This method accepts three parameters:

- `1. webhookUrl (optional)`: This would the webhook URL where you would like to listen to event happening for the recording like starting and stopping of recording. It will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook)

- `2. awsDirPath (optional)`: This parameter accepts the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](/docs/tutorials/user-dashboard/recording-storage-config)

- `3. config (optional)`: This parameter will define how the recording should be recorded.

  :::caution

  If you don't have a value for `webhookUrl` or `awsDirPath` and want to use the `config` property, you should pass `null` in place of the missing value. otherwise, configurtion will not reflect in the recording.
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
    orientation: "portrait", // "portrait",  Default : "landscape"
  };

  startRecording(null, null, config);
  ```

### `stopRecording()`

- `stopRecording()` is used to stop the meeting recording which can be accessed from the `useMeeting` hook.

#### Example

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  const { startRecording, stopRecording } = useMeeting();

  const handleStartRecording = () => {
    // Start Recording
    // If you don't have a `webhookUrl` or `awsDirPath`, you should pass null.
    startRecording("YOUR WEB HOOK URL", "AWS Directory Path", {
      layout: {
        type: "GRID",
        priority: "SPEAKER",
        gridSize: 4,
      },
      theme: "DARK",
      mode: "video-and-audio",
      quality: "high",
      orientation: "portrait",
    });
  };

  const handleStopRecording = () => {
    // Stop Recording
    stopRecording();
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleStartRecording();
        }}
      >
        <Text>Start Recording</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          handleStopRecording();
        }}
      >
        <Text>Stop Recording</Text>
      </TouchableOpacity>
    </>
  );
};
```

### Event associated with Recording

- **onRecordingStateChanged** - Whenever meeting recording state changes, then `onRecordingStateChanged` event will trigger.

```js
import { Constants, useMeeting } from "@videosdk.live/react-native-sdk";

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

You can also go through this [guide to setup](/docs/tutorials/user-dashboard/recording-storage-config) the storage or watch this [video to configure](https://www.loom.com/share/23a2617f824a4a5da004d14d1a541a9d) your storage.

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to record the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-recording) the recording with the `templateURL` parameter.

## API Reference

The API references for all the methods utilised in this guide are provided below.

- [startRecording](/react-native/api/sdk-reference/use-meeting/methods#startrecording)
- [stopRecording](/react-native/api/sdk-reference/use-meeting/methods#stoprecording)
- [onRecordingStateChanged](/react-native/api/sdk-reference/use-meeting/events#onrecordingstatechanged)
