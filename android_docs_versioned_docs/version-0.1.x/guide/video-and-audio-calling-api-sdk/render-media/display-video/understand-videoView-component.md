---
title: VideoView Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: VideoView component quick integrate in Android with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Understand VideoView Componenet
pagination_label: Understand VideoView Componenet
keywords:
  - SurfaceViewRender
  - VideoView
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: understand-videoView-component
---

# What is SurfaceViewRender ?

`SurfaceViewRender` is a very powerful component of `WebRTC` since it is used to display the video stream on a SurfaceView. You can use `SurfaceViewRender` to show video of participant in your screen.

Here's the lifecycle of a SurfaceViewRenderer:

<div style={{textAlign: 'center'}}>

<img style={{height: '200px'}} src="/img/android/VideoView/life-cycle.png" />

</div>

Which means:

1. The SurfaceViewRenderer must be first initialised after being created and before it can be use at all. It starts a render thread.

2. `addSink()` needs to be called when you are having VideoTrack to render. addSink is method of `VideoTrack` that you want to add to it. You have to pass `surfaceViewRender` as parameter.

3. `removeSink()` should only be called when you're done showing the video. Another method of `VideoTrack`, and it takes the `surfaceViewRenderer` as a parameter.

4. Release at last to allow the render thread to terminate. This function should be called before the activity is destroyed and/or before init it again.

#### Mistakes you might make and stuck :

###### 1. Not initialised surfaceViewRender

The video never appears since a render thread was never start and you will see black view.

###### 2. Init it again before releasing it.

If you are not releasing surfaceViewRender before calling `init()` again, you will get this error.

```js
java.lang.IllegalStateException: svrParticipant Already initialized
        at org.webrtc.EglRenderer.init(EglRenderer.java:212)
```

###### 3. Two videos render on same SurfaceViewRender

If you called `addSink()` on the same `SurfaceViewRenderer` for two different tracks and did not call `removeSink` before that, then you will see two different videos on same SurfaceViewRenderer with flickers which would look like this :

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer controls url="/img/android/VideoView/android-flicker.mp4" height="500px" width={"100%"} />

</div>

<br/>

Too complicated right? However, VideoSDK makes it simple for you. You can use `VideoView` instead of `SurfaceViewRenderer`.

:::info

- If you want to use `VideoView`, please update SDK version to `0.1.13` or higher.

:::

### VideoView

`VideoView` provides a better abstraction to render live video and handles edge cases like managing init state, render more than one videos on same surfaceViewRender.

### Methods

1. **addTrack(VideoTrack videoTrack)** - `addTrack` will initialised SurfaceViewRender for you and render videoTrack that you provided.

2. **removeTrack()** - `removeTrack` should only be called when you're done showing the video.

3. **releaseSurfaceViewRenderer()** - `releaseSurfaceViewRenderer` should be called before the activity is destroyed.

#### How to use VideoView ?

##### Layout

```js
// <org.webrtc.SurfaceViewRenderer
//        android:id="@+id/svrParticipant"
//        android:layout_width="match_parent"
//        android:layout_height="match_parent" />

<live.videosdk.rtc.android.VideoView
  android:id="@+id/participantView"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
/>
```

##### Initalising and adding video track

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// svrParticipant.init(PeerConnectionUtils.getEglContext(), null)
// var track = stream.getTrack() as VideoTrack
// track!!.addSink(svrParticipant)

val track = stream.track as VideoTrack
participantView!!.addTrack(track);
```

</TabItem>

<TabItem value="Java">

```js
// svrParticipant.init(PeerConnectionUtils.getEglContext(), null);
// VideoTrack track = (VideoTrack) stream.getTrack();
// track.addSink(svrParticipant);

VideoTrack track = (VideoTrack) stream.getTrack();
participantView.addTrack(track);
```

</TabItem>

</Tabs>

##### removeTrack

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// var track = stream.track as VideoTrack
// track!!.removeSink(svrParticipant);

participantView.removeTrack();
```

</TabItem>

<TabItem value="Java">

```js
// VideoTrack track = (VideoTrack) stream.getTrack();
// if (track != null) track.removeSink(svrParticipant);

participantView.removeTrack();
```

</TabItem>

</Tabs>

#### release

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onDestroy() {
        participantView.releaseSurfaceViewRenderer()
        super.onDestroy()
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onDestroy() {
    participantView.releaseSurfaceViewRenderer();
    super.onDestroy();
}
```

</TabItem>

</Tabs>
