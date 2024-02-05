---
title: Optimize Audio Track | VideoSDK Docs
hide_title: false
hide_table_of_contents: false
description: Optimize Audio Tracks features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Optimize Audio Track
pagination_label: Optimize Audio Track
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

# Optimize Audio Track - Android

While optimizing for the best listening experience, it is necessary to fine-tune the audio track that is being used during the calls.

For the best fine-tuning experience, we have introduced the ability to pass a custom audio track for the participant's media before and during the meeting.

## Custom Audio Track

This feature can be used to create a custom Audio track for the Audio of the participants with different encoder configuration and send it to other participants.

### `How to Create Custom Audio Track ?`

- You can create a Audio Track using `createAudioTrack()` method of `VideoSDK`.

- This method can be used to create audio track using different encoding parameters.

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("speech_standard",this)
// `high_quality` | `music_standard`,  Default : `speech_standard`
```

</TabItem>

<TabItem value="Java">

```js
CustomStreamTrack audioCustomTrack=VideoSDK.createAudioTrack("speech_standard", this);
// `high_quality` | `music_standard`,  Default : `speech_standard`
```

</TabItem>

</Tabs>

- `speech_standard` : This config is optimised for normal voice communication.

- `high_quality` : This config is used for getting RAW audio, where you can apply your `noiseConfig`.

- `music_standard` : This config is optimised for communication, where sharing of musical notes such as songs or instrumental sounds, is important.

### `How to Setup Custom Audio Track ?`

The custom track can be set up both before and after the initialization of the meeting.

1. [Setting up a Custom Track during the initialization of a meeting](#1-setup-custom-track-while-initialization-of-the-meeting)
2. [Setting up a Custom Track with methods](#2-setup-custom-track-with-methods)

##### 1. Setting up a Custom Track during the initialization of a meeting

If you are passing `micEnabled: true` in the `initMeeting` of `VideoSDK` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

:::caution
Custom Track will not apply on `micEnabled: false` configuration.
:::

##### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
  //..

  val customTracks: MutableMap<String, CustomStreamTrack> = HashMap()

  //highlight-start
  val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("high_quality", this)
  customTracks["mic"] = audioCustomTrack  //Key must be "mic"
  //highlight-end

  // create a new meeting instance
  val meeting = VideoSDK.initMeeting(
    this@MainActivity,meetingId,participantName,
    //MicEnabled , If true, it will use the passed custom track to turn mic on
    true,
    //WebcamEnabled
    true,
    //ParticipantId
    null,
    //Mode
    null,
    //MultiStream
    false,
    //Pass the custom tracks here
    //highlight-next-line
    customTracks,
    //MetaData
    null
  )
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onCreate(Bundle savedInstanceState) {
  //..

  Map<String, CustomStreamTrack> customTracks = new HashMap<>();

  //highlight-start
  CustomStreamTrack audioCustomTrack = VideoSDK.createAudioTrack("high_quality", this);
  customTracks.put("mic", audioCustomTrack);  //Key must be "mic"
  //highlight-end

  // create a new meeting instance
  Meeting meeting = VideoSDK.initMeeting(
      MainActivity.this, meetingId, participantName,
      //MicEnabled , If true, it will use the passed custom track to turn mic on
      true,
      //WebcamEnabled
      true,
      //ParticipantId
      null,
      //Mode
      null,
      //MultiStream
      false,
      //Pass the custom tracks here
      //highlight-next-line
      customTracks,
      //MetaData
      null
  );
}
```

</TabItem>

</Tabs>

#### 2. Setting up a Custom Track with methods

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `unmuteMic()` method of `Meeting`.

You can also pass custom track in `changeMic()` method of `Meeting`.

:::tip
Make sure to call `muteMic()` before you create a new track as it may lead to unexpected behavior.
:::

##### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
try {
  val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("high_quality", this)
  meeting!!.unmuteMic(audioCustomTrack)

  //or
  meeting!!.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH, audioCustomTrack)
} catch (e: JSONException) {
  e.printStackTrace()
}
```

</TabItem>

<TabItem value="Java">

```js
try {
  CustomStreamTrack audioCustomTrack = VideoSDK.createAudioTrack("high_quality", this);
  meeting.unmuteMic(audioCustomTrack);

  //or
  meeting.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH,audioCustomTrack);
}catch (JSONException e) {
  e.printStackTrace();
}
```

</TabItem>

</Tabs>

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Custom Audio Track](/react/api/sdk-reference/custom-tracks#custom-audio-track)
