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

# Start HLS

Before starting the HLS, the prequisite steps require you to have a VideoSDK Meeting running which you want to use for interactive livestream. To learn more about setting up a meeting, you can follow the steps [here in the quick start guide.](/react/guide/video-and-audio-calling-api-sdk/quick-start)

## Starting HLS

Once the user has joined the meeting, `startHls()` can be used to start a interactive livestream of the meeting which can be accessed from the `useMeeting` hook. This method accepts one parameter:

- `config (optional)`: This parameter will define how the livestream layout should look like.

```js
 const config = {
   // highlight-next-line
   // Layout Configuration
   layout: {
     type: "GRID", // "SPOTLIGHT" | "SIDEBAR",  Default : "GRID"
     priority: "SPEAKER", // "PIN", Default : "SPEAKER"
     gridSize: 4, // MAX : 25
   },
​
   // highlight-next-line
   // Theme of interactive livestream layout
   theme: "DARK", //  "LIGHT" | "DEFAULT"
​
   // highlight-next-line
   // `mode` is used to either interactive livestream video & audio both or only audio.
   mode: "video-and-audio", // "audio", Default : "video-and-audio"
​
   // highlight-next-line
   // Quality of interactive livestream and is only applicable to `video-and-audio` type mode.
   quality: "high", // "low" | "med",  Default : "med"
​
   //highlight-start
   // This mode refers to orientation of interactive livestream.
   // landscape : Start interactive livestream of the meeting in horizontally
   // portrait : Start interactive livestream of the meeting in vertically (Best for mobile view)
   //highlight-end
   orientation: "landscape", // "portrait",  Default : "landscape"
 };
​
 startHls(config);
```

:::note
If you want only the conference participants to be seen in the livestream, you can `pin` all the participants in the conference mode and start the livestream with the `SPOTLIGHT` layout and `pin` as the `PRIORITY`.
:::

### Example

```js
import { useMeeting } from "@videosdk.live/react-sdk";

const MeetingView = () => {
  const { startHls, stopHls } = useMeeting();

  const handleStartHls = () => {
    // Start Hls
    startHls({
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

  return (
    <>
      <button onClick={handleStartHls}>Start Hls</button>
    </>
  );
};
```

## Understanding Layouts

##### 1. GRID Layout

This layout is default layout if no participants are pinned, it will look same as a normal meeting grid layout, when any participant is pinned that participant will be moved on top of the main screen grid above all non pinned participants

While screenshare as well the main view will contain only screenshare media but the side panel view of participant grid will maintain same order of pinned and unpinned participants.

|                    Simple Grid                    |                     Grid with Screenshare                     |
| :-----------------------------------------------: | :-----------------------------------------------------------: |
| ![prebuilt-grid](/img/prebuilt/prebuilt-grid.png) | ![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png) |

##### 2. SIDEBAR Layout

This layout will have one main screen view and other sidebar grid layout. Only pinned participant will be visible in this layout, all unpinned participants will not be visible in this layout. If more than one participant is pinned then the first participant who was pinned will appear in main screen layout and all other remaining pinned particiapants will be visible in sidebar.

If any pinned participant started screenshare then the screenshare media will be visible in main screen layout and all other pinned participants webcam view will be visible in sidebar

|                     Simple Sidebar                      |                      Sidebar with Screenshare                       |
| :-----------------------------------------------------: | :-----------------------------------------------------------------: |
| ![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png) | ![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png) |

##### 3. SPOTLIGHT Layout

This layout will only contain main screen layout, multiple pinned participants will be visible in main screen view. Same as `SIDEBAR` layout only pinned participants will be visible in main screen.

If any pinned participant started screenshare then only screenshare view will be visible in main screen, no webcam view will be visible when any pinned participant started screenshare.

|                      Simple Spotlight                       |                       Spotlight with Screenshare                        |
| :---------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png) | ![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png) |

## Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.
- **onHlsPlayableStateChanged** - Whenever meeting HLS becomes playable, then `onHlsPlayableStateChanged` event will trigger. You can use these event to start showing the HLS video to the viewers.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `Constants.hlsEvents.HLS_STARTED`

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

const Constants = VideoSDK.Constants;

function onHlsStateChanged(data) {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    //highlight-start
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    //highlight-end
    console.log("Meeting Hls is started");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
}

function onHlsPlayableStateChanged(data){
  const {isPlayable} = data;
  if(isPlayable){
    console.log("Start playing HLS");
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  onHlsPlayableStateChanged,
  ...
});

```

## Custom Template

With VideoSDK, you can also use your own custom designed layout template to livestream the meetings. In order to use the custom template, you need to create a template for which you can [follow this guide](/docs/tutorials/customized-layout). Once you have setup the template, you can use the [REST API to start](/api-reference/realtime-communication/start-livestream) the livestream with the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/react/api/sdk-reference/use-meeting/methods#starthls)
- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
- [onHlsPlayableStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsplayablestatechanged)
