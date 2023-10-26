---
title: Interactive Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Interactive Livestream (HLS)
pagination_label: Interactive Livestream (HLS)
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: interactive-livestream
---

# Interactive Livestream (HLS)

Interactive live streaming (HLS) refers to a type of live streaming where viewers can actively engage with the content being streamed and with other viewers in real-time.

In an interactive live stream (HLS), viewers can take part in a variety of activities like live polling, Q&A sessions, and even sending virtual gifts to the content creator or each other.

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/mobile_hls.png' />

</center>

VideoSDK also allows you to configure the interactive livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop Interactive live streaming (HLS).

:::important

To initiate automatic Interactive live streaming (HLS) at the beginning of a `session`, simply provide the `autoStartConfig` feature `hls` during `room` creation. For more information on configuring the `autoStartConfig`, please refer to the provided documentation **[<u>here</u>](/api-reference/realtime-communication/create-room#autoStartConfig)**.

:::

### `startHls()`

`startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `Meeting` class. This method accepts one parameter:

- `config`: This parameter will define how the interactive livestream layout should look like.

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
JsonUtils.jsonPut(layout, "gridSize", 4) // MAX : 25
JsonUtils.jsonPut(config, "layout", layout)

//highlight-next-line
// Theme of interactive livestream layout
JsonUtils.jsonPut(config, "theme", "DARK") //  "LIGHT" | "DEFAULT"

//highlight-next-line
// `mode` is used to either interactive livestream video & audio both or only audio.
JsonUtils.jsonPut(config, "mode", "video-and-audio") // "audio", Default : "video-and-audio"

//highlight-next-line
// Quality of interactive livestream and is only applicable to `video-and-audio` type mode.
JsonUtils.jsonPut(config, "quality", "high") // "low" | "med",  Default : "med"

//highlight-start
// This mode refers to orientation of interactive livestream.
// landscape : Start interactive livestream of the meeting in horizontally
// portrait : Start interactive livestream of the meeting in vertically (Best for mobile view)
//highlight-end
JsonUtils.jsonPut(config, "orientation", "portrait") // "landscape",  Default : "landscape"

meeting!!.startHls(config)
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
JsonUtils.jsonPut(layout, "gridSize", 4); // MAX : 25
JsonUtils.jsonPut(config, "layout", layout);

//highlight-next-line
// Theme of interactive livestream layout
JsonUtils.jsonPut(config, "theme", "DARK"); //  "LIGHT" | "DEFAULT"

//highlight-next-line
// `mode` is used to either interactive livestream video & audio both or only audio.
JsonUtils.jsonPut(config, "mode", "video-and-audio"); // "audio", Default : "video-and-audio"

//highlight-next-line
// Quality of interactive livestream and is only applicable to `video-and-audio` type mode.
JsonUtils.jsonPut(config, "quality", "high"); // "low" | "med",  Default : "med"

//highlight-start
// This mode refers to orientation of interactive livestream.
// landscape : Start interactive livestream of the meeting in horizontally
// portrait : Start interactive livestream of the meeting in vertically (Best for mobile view)
//highlight-end
JsonUtils.jsonPut(config, "orientation", "portrait"); // "landscape",  Default : "landscape"

meeting.startHls(config);
```

</TabItem>

</Tabs>

### `stopHls()`

- `stopHls()` is used to stop interactive livestream of the meeting which can be accessed from the `Meeting` class.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// keep track of hls
val hls = false

findViewById<View>(R.id.btnHls).setOnClickListener { view: View? ->
  if (!hls) {
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

    // Start Hls
    //highlight-next-line
    meeting!!.startHls(config)
  } else {
    // Stop Hls
    //highlight-next-line
    meeting!!.stopHls()
  }
}
```

</TabItem>

<TabItem value="Java">

```js
// keep track of hls
boolean hls = false;

findViewById(R.id.btnHls).setOnClickListener(view -> {
  if (!hls) {
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

    // Start Hls
    //highlight-next-line
    meeting.startHls(config);
  } else {
    // Stop Hls
    //highlight-next-line
    meeting.stopHls();
  }
});
```

</TabItem>

</Tabs>

:::tip
If you want to learn more about the Interactive Livestream and how you can implement it in your own platform, you can checkout this [guide](/android/guide/interactive-live-streaming/integrate-hls/overview).
:::

### Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLS_PLAYABLE`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onHlsStateChanged(HlsState: JSONObject) {
    when (HlsState.getString("status")) {
        "HLS_STARTING" -> Log.d("onHlsStateChanged", "Meeting hls is starting")
        "HLS_STARTED" -> Log.d("onHlsStateChanged", "Meeting hls is started")
        "HLS_PLAYABLE" -> {
            Log.d("onHlsStateChanged", "Meeting hls is playable now")
            //highlight-start
            // on hls playable you will receive downstreamUrl
            val downStreamUrl = HlsState.getString("downstreamUrl")
            //highlight-end
        }
        "HLS_STOPPING" -> Log.d("onHlsStateChanged", "Meeting hls is stopping")
        "HLS_STOPPED" -> Log.d("onHlsStateChanged", "Meeting hls is stopped")
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
  public void onHlsStateChanged(JSONObject HlsState) {
      switch (HlsState.getString("status")) {
          case "HLS_STARTING":
              Log.d("onHlsStateChanged", "Meeting hls is starting");
              break;
          case "HLS_STARTED":
              Log.d("onHlsStateChanged", "Meeting hls is started");
              break;
          case "HLS_PLAYABLE":
              Log.d("onHlsStateChanged", "Meeting hls is playable now");
              //highlight-start
              // on hls playable you will receive downstreamUrl
              String downStreamUrl = HlsState.getString("downstreamUrl");
              //highlight-end
              break;
          case "HLS_STOPPING":
              Log.d("onHlsStateChanged", "Meeting hls is stopping");
              break;
          case "HLS_STOPPED":
              Log.d("onHlsStateChanged", "Meeting hls is stopped");
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

### Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

### API Reference

The API references for all the methods utilised in this guide are provided below.

- [startHls()](/android/api/sdk-reference/meeting-class/methods#starthls)
- [stopHls()](/android/api/sdk-reference/meeting-class/methods#stophls)
- [onHlsStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)
- [autoStartConfig](/api-reference/realtime-communication/create-room#autoStartConfig)
