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

![VideoSDK-HLS](/img/VideoSDK-HLS.png)

</center>

VideoSDK also allows you to configure the interactive livestream layouts in numerous ways like by simply setting different prebuilt layouts in the configuration or by providing your own custom template to do the livestream according to your layout choice.

This guide will provide an overview of how to implement start and stop Interactive live streaming (HLS).

### `startHLS()`

`startHLS()` can be used to start a interactive livestream of the meeting which can be accessed from the `useMeeting` hook. This method accepts one parameter:

- `config (optional)`: This parameter will define how the interactive livestream layout should look like.

  ```js

  let config: HLSConfig = HLSConfig(

    // highlight-next-line
    // Layout Configuration
    layout: HLSLayout(
      type: .GRID, // .SPOTLIGHT | .SIDEBAR,  Default : .GRID
      priority: .SPEAKER, // .PIN, Default : .SPEAKER
      gridSize: 4 // MAX : 25
    ), 

    // highlight-next-line
    // Theme of livestream
    theme: .DARK, //  .LIGHT | .DEFAULT

    // highlight-next-line
    // `mode` is used to either interactive livestream video & audio both or only audio.
    mode: .video_and_audio, // .audio, Default : .video_and_audio

    // highlight-next-line
    // Quality of livestream and is only applicable to `video-and-audio` type mode.
    quality: .high,  // .low | .med,  Default : .med

    //highlight-start
    // This mode refers to orientation of recording.
    // landscape : Livestream the meeting in horizontally
    // portrait : Livestream the meeting in vertically (Best for mobile view)
    //highlight-end
    orientation: .portrait  // .portrait,  Default : .landscape
  )

  startHLS(config: config)
  ```

### `stopHLS()`

- `stopHLS()` is used to stop interactive livestream of the meeting which can be accessed from the `meeting` object.

#### Example

```js

stopHLS()

```

:::note
If you want to learn more about the Interactive Livestream and how you can implement it in your own platform, you can checkout this guide.
:::

### Event associated with HLS

- **onHlsStateChanged** - Whenever meeting HLS state changes, then `onHlsStateChanged` event will trigger.

- You can get the `downstreamUrl` of the HLS to play it on the Viewer side when the state changes to `HLSState.HLS_STARTED`

```js

func onHlsStateChanged(state: HLSState, hlsUrl: HLSUrl?) {
    switch(state) {
        case .HLS_STARTING:
            print("HLS Starting")
            
        case .HLS_STARTED:
            self.hlsStreamStarted = true
            print("HLS Started")
            
        case .HLS_PLAYABLE:
            print("HLS Playable")
            
        case .HLS_STOPPING:
            print("HLS Stopping")
            
        case .HLS_STOPPED:
            self.hlsStreamStarted = false
            print("HLS Stopped")
        }
}

```

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [startHLS](/ios/api/sdk-reference/meeting-class/methods#starthls)
- [stopHLS](/ios/api/sdk-reference/meeting-class/methods#stophls)
- [onHlsStateChanged](/ios/api/sdk-reference/meeting-class/events#onhlsstatechanged)
