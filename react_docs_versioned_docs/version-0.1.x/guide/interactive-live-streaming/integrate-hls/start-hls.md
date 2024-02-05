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

# Start HLS - React

Before initiating HLS, it is essential to have a VideoSDK Meeting in progress, which you intend to utilize for interactive live streaming. For detailed instructions on setting up interactive live streaming, please refer to the steps outlined in the [quick start guide here.](/react/guide/video-and-audio-calling-api-sdk/quick-start-ILS)

## Starting HLS

Once the user has joined the meeting, the `startHls()` method, accesible from the `useMeeting` hook, is used to initiate interactive livestream of a meeting. This method accepts the following parameter:

- `config (optional)`: This parameter defines how the interactive livestream layout should look like.

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
If you wish for only the conference participants to be visible in the livestream, you can `pin` all participants in the conference mode and commence the livestream with the `SPOTLIGHT` layout, prioritizing pinned participants.
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

This layout serves as the default layout when no participants are pinned, resembling a typical meeting grid layout. However, when a participant is pinned, that individual takes precedence and is showcased prominently at the top of the main screen grid, surpassing all non-pinned participants.

During screenshare, the main view exclusively displays screenshare media, while the side panel maintains the same order of pinned and unpinned participants.

|                       Grid                        |                     Grid with Screenshare                     |
| :-----------------------------------------------: | :-----------------------------------------------------------: |
| ![prebuilt-grid](/img/prebuilt/prebuilt-grid.png) | ![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png) |

##### 2. SIDEBAR Layout

This layout contains a primary screen view and an accompanying sidebar grid layout. Only pinned participants are visible, with all unpinned participants excluded from this view. If more than one participant is pinned, the first participant to be pinned takes the main screen layout, and any remaining pinned participants appear in the sidebar.

In case a pinned participant initiates screenshare, the screenshare media will be visible in the main screen layout, and the webcam views of other pinned participants will be visible in the sidebar.

|                         Sidebar                         |                      Sidebar with Screenshare                       |
| :-----------------------------------------------------: | :-----------------------------------------------------------------: |
| ![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png) | ![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png) |

##### 3. SPOTLIGHT Layout

This layout solely features the main screen view, where multiple pinned participants are visible. Similar to the `SIDEBAR` layout, only pinned participants are visible in the main screen.

If a pinned participant begins screenshare, only the screenshare view will be visible on the main screen, and no webcam views of pinned participants will be displayed during screenshare.

|                          Spotlight                          |                       Spotlight with Screenshare                        |
| :---------------------------------------------------------: | :---------------------------------------------------------------------: |
| ![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png) | ![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png) |

## Event associated with HLS

- **onHlsStateChanged** - The `onHlsStateChanged()` event is triggered whenever the state of meeting HLS changes.

- You can get the `downstreamUrl` of the HLS to play on the Viewer side when the state changes to `Constants.hlsEvents.HLS_PLAYABLE` as well as from the `hlsUrls` from the `useMeeting` hook.

```js
import { Constants, useMeeting } from "@videosdk.live/react-sdk";

function onHlsStateChanged(data) {
  const { status } = data;

  if (status === Constants.hlsEvents.HLS_STARTING) {
    console.log("Meeting Hls is starting");
  } else if (status === Constants.hlsEvents.HLS_STARTED) {
    console.log("Meeting Hls is started");
  }else if (status === Constants.hlsEvents.HLS_PLAYABLE) {
    //highlight-start
    // on hlsStateChanged started you will receive downstreamUrl
    const { downstreamUrl } = data;
    //highlight-end
    console.log("Meeting Hls is Playable");
  } else if (status === Constants.hlsEvents.HLS_STOPPING) {
    console.log("Meeting Hls is stopping");
  } else if (status === Constants.hlsEvents.HLS_STOPPED) {
    console.log("Meeting Hls is stopped");
  } else {
    //
  }
}

const {
  meetingId
  ...
} = useMeeting({
  onHlsStateChanged,
  ...
});

```

## Custom Template

With VideoSDK, you have the option to employ your own custom-designed layout template for meeting recordings. To use a custom template, [follow this guide](/react/guide/interactive-live-streaming/custom-template) to create and set up the template. Once the template is configured, you can initiate recording using the [REST API](/api-reference/realtime-communication/start-livestream), specifying the `templateURL` parameter.

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHls](/react/api/sdk-reference/use-meeting/methods#starthls)
- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
- [hlsUrls](/react/api/sdk-reference/use-meeting/properties#hlsurls)
- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
