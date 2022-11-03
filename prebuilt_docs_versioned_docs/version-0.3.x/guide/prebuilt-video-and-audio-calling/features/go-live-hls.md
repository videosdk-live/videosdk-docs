---
title: Prebuilt Go Live On HLS Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Go Live On HLS features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Go Live On HLS
pagination_label: Go Live On HLS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - live on HLS
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-hls
---

# Go Live On HLS

HLS allows participant to broadcast live streaming to other participants.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

### HLS attributes

- `mode`: It should be any of `VIEWER` or `CONFERENCE`, by default is set to `CONFERENCE`
- `toggleHLS` : When set to `true` it will enable you to click on `Start HLS` button.
- `hls.enabled` : When set to `true` , you can see `Start HLS` button.
- `hls.autoStart`: If it is `true` then HLS will start automatically when the meeting starts, default value is false (You can't start HLS during the meeting).
- `hls.theme`: It will HLS the meeting based on theme you are passing. it can be a either DARK , LIGHT or DEFAULT.
- `hls.playerControlsVisible` : If it is `true` then participant can view controls for the interactive meeting player.
- `toggleParticipantMode`: When set to `true`, you can toggle other partcipant mode from an ongoing meeting by clicking on `Add as a Cohost` Icon button.

:::note

`hls.playerControlsVisible` parameter will only work if the mode is set to `viewer`, for `conference` mode there will not be any interactive meeting player hence `hls.playerControlsVisible` will be ignored if mode is set to `conference`.

:::

## Better Understanding of Modes

### 1. CONFERENCE Mode

This mode is default mode if you do not give any mode, it will look similar as a normal meeting. when you pass `hls.enabled` true you can see `Start HLS` button. if you want to toggle the button then in `permission` config pass other parameter `toggleHLS` true so you can toggle button.

![Go live on Videosdk](/img/prebuilt/prebuilt-join-as-cohost.png)

In `CONFERENCE` mode you can toggle other participant mode also. like you can add other participant as a co-host. for that you need to pass parameter `toggleParticipantMode` true in `permission` config.

You can click on more button to see add as co-host icon.

![Go live on Videosdk](/img/prebuilt/More.png)

![Go live on Videosdk](/img/prebuilt/Add-as-a-cohost.png)

When you click on `Add as a Co-host` button other participant recive popup. whethere participant can accept or deny. if you accept than only participant add as a cohost.

![Go live on Videosdk](/img/prebuilt/prebuilt-mode-popup.png)

```js title="conference.html"
const config = {
  // ...
  hls: {
    enabled: true,
    autoStart: false,
    theme: "DARK", // DARK || LIGHT || DEFAULT
  },
  permissions: {
    //  ...other permissions
    toggleParticipantMode: true,
    toggleHls: true,
  },
  mode: "CONFERENCE", // VIEWER || CONFERENCE
  // ...
};
```

### 2. VIEWER Mode

You can join meeting as a viewer. in this mode when you join the meeting you can see the waiting screen.

![Go live on Videosdk](/img/prebuilt/prebuilt-join-as-viewer.png)

when host start HLS you can get hls stream in your player and you can see that stream. as a viewer you can do raise hand, chat and leave the meeting.

![Go live on Videosdk](/img/prebuilt/prebuilt-join-as-viewer-view.png)

```js title="viewer.html"
const config = {
  // ...
  hls: {
    playerControlsVisible: true,
  },
  mode: "VIEWER", // VIEWER || CONFERENCE
  // ...
};
```
