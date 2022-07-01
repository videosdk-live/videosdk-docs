---
title: Set Viewport
hide_title: false
hide_table_of_contents: false
sidebar_label: Set Viewport
pagination_label: Set Viewport
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-viewport
---

When you are working with Video Calling, video quality is the most important part of communication. When a participant is shown on the screen, consuming multiple high quality although not required, will result in more memory and CPU usage of the device, eventually degrading quality.

The way to optimze around these situation is to consume the video quality which is required to fit the view of a particular participant, resulting in better quality, less usage of network bandwith and providing a better experience.

Viewport is the size of window or visible area in which video for the participant is shown. We can optimize the consuming video quality based on the viewport size of the participant. For example if the viewport size of a particular participant view is `480x360`, VideoSDK will download a `480x360` stream. If a participant on screen is present in bigger size, VideoSDK will provide a higher quality video for that particular participant only.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/img/viewport_illustration.mp4' width={"100%"}/>

</div>

### setViewPort()

`setViewPort()` can be used to achieve the best optimization of the video. This method is called with the `width` and `height` of the participant view and VideoSDK will handle the rest.

##### Parameters

- `width`

  - type: `int`
  - Width of the participant view for which the quliaty of video is to be adjusted.

- `height`
  - type: `int`
  - Height of the participant view for which the quliaty of video is to be adjusted.

### Example

```js
const { isLocal, webcamStream, setViewPort } = useParticipant(
  participantId,
  {}
);

//update your RTCView with onLayout as shown below
<RTCView
  onLayout={(event) => {
    const { width, height } = event.nativeEvent.layout;
    if (!isLocal && webcamStream) {
      setViewPort(width, height);
    }
  }}
  streamURL={new MediaStream([webcamStream.track]).toURL()}
  objectFit={"cover"}
  style={{
    flex: 1,
  }}
/>;
```

The complete usage of this method can be seen here in the [code sample](https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example/blob/master/src/components/ParticipantView.js#L129)
