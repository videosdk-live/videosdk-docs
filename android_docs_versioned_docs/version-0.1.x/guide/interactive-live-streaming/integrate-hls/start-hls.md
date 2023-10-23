---
title: Start HLS | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Start HLS
pagination_label: Start HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-hls
---

# Start HLS - Android

Before starting the HLS, the prequisite steps require you to have a VideoSDK Meeting running which you want to use for interactive livestream. To learn more about setting up a interactive live streaming, you can follow the steps [here in the quick start guide.](/android/guide/video-and-audio-calling-api-sdk/quick-start-ILS)

## Starting HLS

Once the user has joined the meeting, `startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `Meeting` class. This method accepts one parameter:

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

:::note
If you want only the conference participants to be seen in the livestream, you can `pin` all the participants in the conference mode and start the livestream with the `SPOTLIGHT` layout and `pin` as the `PRIORITY`.
:::

### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// keep track of hls
findViewById<View>(R.id.btnStartHls).setOnClickListener { view: View? ->
    //highlight-start
    val config = JSONObject()
    val layout = JSONObject()
    JsonUtils.jsonPut(layout, "type", "SPOTLIGHT")
    JsonUtils.jsonPut(layout, "priority", "PRIORITY")
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
}
```

</TabItem>

<TabItem value="Java">

```js
findViewById(R.id.btnStartHls).setOnClickListener(view -> {
    //highlight-start
    JSONObject config = new JSONObject();
    JSONObject layout = new JSONObject();
    JsonUtils.jsonPut(layout, "type", "SPOTLIGHT");
    JsonUtils.jsonPut(layout, "priority", "PRIORITY");
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
});
```

</TabItem>

</Tabs>

## Understanding Layouts

##### 1. GRID Layout

This layout is default layout if no participants are pinned, it will look same as a normal meeting grid layout, when any participant is pinned that participant will be moved on top of the main screen grid above all non pinned participants

While screenshare as well the main view will contain only screenshare media but the side panel view of participant grid will maintain same order of pinned and unpinned participants.

|                       Grid                        |                     Grid with Screenshare                     |
| :-----------------------------------------------: | :-----------------------------------------------------------: |
| ![prebuilt-grid](/img/prebuilt/prebuilt-grid.png) | ![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png) |

##### 2. SIDEBAR Layout

This layout will have one main screen view and other sidebar grid layout. Only pinned participant will be visible in this layout, all unpinned participants will not be visible in this layout. If more than one participant is pinned then the first participant who was pinned will appear in main screen layout and all other remaining pinned particiapants will be visible in sidebar.

If any pinned participant started screenshare then the screenshare media will be visible in main screen layout and all other pinned participants webcam view will be visible in sidebar

|                         Sidebar                         |                      Sidebar with Screenshare                       |
| :-----------------------------------------------------: | :-----------------------------------------------------------------: |
| ![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png) | ![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png) |

##### 3. SPOTLIGHT Layout

This layout will only contain main screen layout, multiple pinned participants will be visible in main screen view. Same as `SIDEBAR` layout only pinned participants will be visible in main screen.

If any pinned participant started screenshare then only screenshare view will be visible in main screen, no webcam view will be visible when any pinned participant started screenshare.

|                          Spotlight                          |                       Spotlight with Screenshare                        |
| :---------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png) | ![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png) |

## Event associated with HLS

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

## Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/react/guide/interactive-live-streaming/custom-template). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls()](/android/api/sdk-reference/meeting-class/methods#starthls)
- [stopHls()](/android/api/sdk-reference/meeting-class/methods#stophls)
- [onHlsStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)
