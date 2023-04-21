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

`startRecording()` can be used to start a recording of the meeting which can be accessed from the `Meeting` class. This method accepts three parameters:

- `1. webhookUrl`: This would the webhook URL where you would like to listen to event happening for the recording like starting and stopping of recording. It will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook)

- `2. awsDirPath`: This parameter accepts the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](/docs/tutorials/user-dashboard/recording-storage-config)

- `3. config`: This parameter will define how the recording should be recorded.

:::note

If you don't have a value for `webhookUrl`,`awsDirPath` or `config`, you should pass `null` in place of the missing value. If you pass `null` in `awsDirPath` parameter then by default recordings will be store on the VideoSDK's storage.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val config = JSONObject()

//highlight-next-line
// Layout Configuration
val layout = JSONObject()
JsonUtils.jsonPut(layout, "type", "GRID") // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
JsonUtils.jsonPut(layout, "priority", "SPEAKER") // "PIN", Default : "SPEAKER"
JsonUtils.jsonPut(layout, "gridSize", 4) // MAX : 4
JsonUtils.jsonPut(config, "layout", layout)

//highlight-next-line
// Theme of recording
JsonUtils.jsonPut(config, "theme", "DARK") //  "LIGHT" | "DEFAULT"

//highlight-next-line
// `mode` is used to either record video & audio both or only audio.
JsonUtils.jsonPut(config, "mode", "video-and-audio") // "audio", Default : "video-and-audio"

//highlight-next-line
// Quality of recording and is only applicable to `video-and-audio` type mode.
JsonUtils.jsonPut(config, "quality", "high") // "low" | "med",  Default : "med"

//highlight-start
// This mode refers to orientation of recording.
// landscape : Record the meeting in horizontally
// portrait : Record the meeting in vertically (Best for mobile view)
//highlight-end
JsonUtils.jsonPut(config, "orientation", "portrait") // "landscape",  Default : "landscape"

meeting!!.startRecording(null,null,config)
```

</TabItem>

<TabItem value="Java">

```js
JSONObject config = new JSONObject();

//highlight-next-line
// Layout Configuration
JSONObject layout = new JSONObject();
JsonUtils.jsonPut(layout, "type", "GRID"); // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
JsonUtils.jsonPut(layout, "priority", "SPEAKER");  // "PIN", Default : "SPEAKER"
JsonUtils.jsonPut(layout, "gridSize", 4); // MAX : 4
JsonUtils.jsonPut(config, "layout", layout);

//highlight-next-line
// Theme of recording
JsonUtils.jsonPut(config, "theme", "DARK"); //  "LIGHT" | "DEFAULT"

//highlight-next-line
// `mode` is used to either record video & audio both or only audio.
JsonUtils.jsonPut(config, "mode", "video-and-audio"); // "audio", Default : "video-and-audio"

//highlight-next-line
// Quality of recording and is only applicable to `video-and-audio` type mode.
JsonUtils.jsonPut(config, "quality", "high"); // "low" | "med",  Default : "med"

//highlight-start
// This mode refers to orientation of recording.
// landscape : Record the meeting in horizontally
// portrait : Record the meeting in vertically (Best for mobile view)
//highlight-end
JsonUtils.jsonPut(config, "orientation", "portrait"); // "landscape",  Default : "landscape"

meeting.startRecording(null,null,config);
```

</TabItem>

</Tabs>

### `stopRecording()`

- `stopRecording()` is used to stop the meeting recording which can be accessed from the `Meeting` class.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// keep track of recording
val recording = false

findViewById<View>(R.id.btnRecording).setOnClickListener { view: View? ->
    if (!recording) {
      //highlight-start
      val config = JSONObject()
      val layout = JSONObject()
      JsonUtils.jsonPut(layout, "type", "GRID")
      JsonUtils.jsonPut(layout, "priority", "SPEAKER")
      JsonUtils.jsonPut(layout, "gridSize", 4)
      JsonUtils.jsonPut(config, "layout", layout)
      JsonUtils.jsonPut(config, "theme", "DARK")
      JsonUtils.jsonPut(config, "mode", "video-and-audio")
      JsonUtils.jsonPut(config, "quality", "high")
      JsonUtils.jsonPut(config, "orientation", "portrait")
      //highlight-end

      // Start Recording
      // If you don't have a `webhookUrl` or `awsDirPath`, you should pass null.
      //highlight-next-line
      meeting!!.startRecording("YOUR WEB HOOK URL", "AWS Directory Path",config)
    } else {
      // Stop Recording
      //highlight-next-line
      meeting!!.stopRecording()
    }
}
```

</TabItem>

<TabItem value="Java">

```js
// keep track of recording
boolean recording = false;

findViewById(R.id.btnRecording).setOnClickListener(view -> {
    if (!recording) {
      //highlight-start
      JSONObject config = new JSONObject();
      JSONObject layout = new JSONObject();
      JsonUtils.jsonPut(layout, "type", "GRID");
      JsonUtils.jsonPut(layout, "priority", "SPEAKER");
      JsonUtils.jsonPut(layout, "gridSize", 4);
      JsonUtils.jsonPut(config, "layout", layout);
      JsonUtils.jsonPut(config, "theme", "DARK");
      JsonUtils.jsonPut(config, "mode", "video-and-audio");
      JsonUtils.jsonPut(config, "quality", "high");
      JsonUtils.jsonPut(config, "orientation", "portrait");
      //highlight-end

      // Start Recording
      // If you don't have a `webhookUrl` or `awsDirPath`, you should pass null.
      //highlight-next-line
      meeting.startRecording("YOUR WEB HOOK URL", "AWS Directory Path",config);
    } else {
      // Stop Recording
      //highlight-next-line
      meeting.stopRecording();
    }
});
```

</TabItem>

</Tabs>

### Event associated with Recording

- **onRecordingStateChanged** - Whenever meeting recording state changes, then `onRecordingStateChanged` event will trigger.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onRecordingStateChanged(recordingState: String) {
    when (recordingState) {
        "RECORDING_STARTING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is starting")
        }
        "RECORDING_STARTED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is started")
        }
        "RECORDING_STOPPING" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopping")
        }
        "RECORDING_STOPPED" -> {
            Log.d("onRecordingStateChanged", "Meeting recording is stopped")
        }
    }
  }
}

override fun onCreate(savedInstanceState: Bundle?) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting!!.addEventListener(meetingEventListener)
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onRecordingStateChanged(String recordingState) {
      switch (recordingState) {
          case "RECORDING_STARTING":
              Log.d("onRecordingStateChanged", "Meeting recording is starting");
              break;
          case "RECORDING_STARTED":
              Log.d("onRecordingStateChanged", "Meeting recording is started");
              break;
          case "RECORDING_STOPPING":
              Log.d("onRecordingStateChanged", "Meeting recording is stopping");
              break;
          case "RECORDING_STOPPED":
              Log.d("onRecordingStateChanged", "Meeting recording is stopped");
              break;
      }
  }
}

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting.addEventListener(meetingEventListener);
}
```

</TabItem>

</Tabs>

### Storage Configuration

While recording your meetings, you can choose to store them on the VideoSDK's storage or you can also configure your own **`AWS S3 Storage or Azure Blob`** to store the meeting recordings directly on your storage.

You can configure your own **`AWS S3 Storage or Azure Blob`** from the [VideoSDK Dashboard's API section](https://app.videosdk.live/api-keys).

You can also go through this [guide to setup](/docs/tutorials/user-dashboard/recording-storage-config) the storage or watch this [video to configure](https://www.loom.com/share/23a2617f824a4a5da004d14d1a541a9d) your storage.

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to record the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-recording) the recording with the `templateURL` parameter.

### API Reference

The API references for all the methods utilised in this guide are provided below.

- [startRecording()](/android/api/sdk-reference/meeting-class/methods#startrecording)
- [stopRecording()](/android/api/sdk-reference/meeting-class/methods#stoprecording)
- [onRecordingStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onrecordingstatechanged)
