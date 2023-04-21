---
title: RTMP Livestream - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: RTMP Livestream
pagination_label: RTMP Livestream
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: rtmp-livestream
---

# RTMP Livestream

RTMP is a popular protocol for live streaming video content from a VideoSDK to platforms such as YouTube, Twitch, Facebook, and others.

By providing the platform-specific stream key and stream URL, the VideoSDK can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK allows you to livestream your meeting to platform which support RTMP ingestion just by providing the platform-specific stream key and stream URL, we can connect to the platform's RTMP server and transmit the live video stream.

VideoSDK also allows you to configure the livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop RTMP Livestreaming.

### `startLivestream()`

`startLivestream()` can be used to start a RTMP livestream of the meeting which can be accessed from the `Meeting` class. This method accepts two parameters:

- `1. outputs`: This parameter accepts an list of `LivestreamOutput` objects which contains the RTMP `url` and `streamKey` of the platforms you want to start the livestream.

- `2. config`: This parameter will define how the livestream layout should look like. You can pass `null` for default layout.

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
// Theme of livestream layout
JsonUtils.jsonPut(config, "theme", "DARK") //  "LIGHT" | "DEFAULT"

val outputs: MutableList<LivestreamOutput> = ArrayList()
outputs.add(LivestreamOutput(RTMP_URL, RTMP_STREAM_KEY))

meeting!!.startLivestream(outputs,config)
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
// Theme of livestream layout
JsonUtils.jsonPut(config, "theme", "DARK"); //  "LIGHT" | "DEFAULT"

List<LivestreamOutput> outputs = new ArrayList<>();
outputs.add(new LivestreamOutput(RTMP_URL, RTMP_STREAM_KEY));

meeting.startLivestream(outputs,config);
```

</TabItem>

</Tabs>

### `stopLivestream()`

- `stopLivestream()` is used to stop the meeting livestream which can be accessed from the `Meeting` class.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// keep track of livestream status
val liveStream = false

findViewById<View>(R.id.btnLiveStream).setOnClickListener { view: View? ->
  if (!liveStream) {
    //highlight-start
    val config = JSONObject()
    val layout = JSONObject()
    JsonUtils.jsonPut(layout, "type", "GRID")
    JsonUtils.jsonPut(layout, "priority", "SPEAKER")
    JsonUtils.jsonPut(layout, "gridSize", 4)
    JsonUtils.jsonPut(config, "layout", layout)
    JsonUtils.jsonPut(config, "theme", "DARK")
    //highlight-end

    val outputs: MutableList<LivestreamOutput> = ArrayList()
    //highlight-next-line
    outputs.add(LivestreamOutput(RTMP_URL, RTMP_STREAM_KEY))

    // Start LiveStream
    //highlight-next-line
    meeting!!.startLivestream(outputs,config)
  } else {
    // Stop LiveStream
    //highlight-next-line
    meeting!!.stopLivestream()
  }
}
```

</TabItem>

<TabItem value="Java">

```js
// keep track of livestream status
boolean liveStream = false;

findViewById(R.id.btnLiveStream).setOnClickListener(view -> {
  if (!liveStream) {
    //highlight-start
    JSONObject config = new JSONObject();
    JSONObject layout = new JSONObject();
    JsonUtils.jsonPut(layout, "type", "GRID");
    JsonUtils.jsonPut(layout, "priority", "SPEAKER");
    JsonUtils.jsonPut(layout, "gridSize", 4);
    JsonUtils.jsonPut(config, "layout", layout);
    JsonUtils.jsonPut(config, "theme", "DARK");
    //highlight-end

    List<LivestreamOutput> outputs = new ArrayList<>();
    //highlight-next-line
    outputs.add(new LivestreamOutput(RTMP_URL, RTMP_STREAM_KEY));

    // Start LiveStream
    //highlight-next-line
    meeting.startLivestream(outputs,config);
  } else {
    // Stop LiveStream
    //highlight-next-line
    meeting.stopLivestream();
  }
});
```

</TabItem>

</Tabs>

### Event associated with Livestream

- **onLivestreamStateChanged** - Whenever meeting livestream state changes, then `onLivestreamStateChanged` event will trigger.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onLivestreamStateChanged(livestreamState: String?) {
    when (livestreamState) {
      "LIVESTREAM_STARTING" -> Log.d( "LivestreamStateChanged",
          "Meeting livestream is starting"
      )
      "LIVESTREAM_STARTED" -> Log.d( "LivestreamStateChanged",
          "Meeting livestream is started"
      )
      "LIVESTREAM_STOPPING" -> Log.d("LivestreamStateChanged",
          "Meeting livestream is stopping"
      )
      "LIVESTREAM_STOPPED" -> Log.d("LivestreamStateChanged",
          "Meeting livestream is stopped"
      )
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
  public void onLivestreamStateChanged(String livestreamState) {
    switch (livestreamState) {
      case "LIVESTREAM_STARTING":
          Log.d("LivestreamStateChanged", "Meeting livestream is starting");
          break;
      case "LIVESTREAM_STARTED":
          Log.d("LivestreamStateChanged", "Meeting livestream is started");
          break;
      case "LIVESTREAM_STOPPING":
          Log.d("LivestreamStateChanged", "Meeting livestream is stopping");
          break;
      case "LIVESTREAM_STOPPED":
          Log.d("LivestreamStateChanged", "Meeting livestream is stopped");
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

- [startLivestream()](/android/api/sdk-reference/meeting-class/methods#startlivestream)
- [stopLivestream()](/android/api/sdk-reference/meeting-class/methods#stoplivestream)
- [onLivestreamStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onlivestreamstatechanged)
