---
title: Custom Audio Track
hide_title: false
hide_table_of_contents: false
description: Custom Audio Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Audio Track
pagination_label: Custom Audio Track
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

# Custom Audio Track

We have introduced the ability to pass a custom Audio track for the Audio of the participants with different encoder configuration.

## Creating a Custom Audio Track

- You can create a Audio Track using `createAudioTrack()` method of `VideoSDK`.
- This method can be used to create audio track using different encoding parameters.
### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `true`
  - default: `speech_standard`
  - Allowed values : `speech_low_quality` | `speech_standard` | `music_standard` | `standard_stereo` | `high_quality` | `high_quality_stereo`  
  - It will be the encoder configuration you want to use for Audio Track.

- **context**

  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

#### Returns

- `CustomStreamTrack`

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
try {
  val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("high_quality",this)
} catch (e: JSONException) {
   e.printStackTrace()
}        
```

</TabItem>

<TabItem value="Java">

```js
try {
  CustomStreamTrack audioCustomTrack=VideoSDK.createAudioTrack("high_quality", this);
}catch (JSONException e) {
  e.printStackTrace();
}          
```

</TabItem>

</Tabs>

## Using Custom Audio Track

### Custom Track while initializing the meeting

If you are passing `micEnabled: true` in the `initMeeting` of `VideoSDK` and want to use custom tracks from start of the meeting, you can pass custom track in the `initMeeting` as shown below.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
    //..

    val customTracks: MutableMap<String, CustomStreamTrack> = HashMap()

    val audioCustomTrack: CustomStreamTrack = VideoSDK.createAudioTrack("high_quality", this)
    customTracks["mic"] = audioCustomTrack  //Key must be "mic"

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
      //Pass the custom tracks here
      customTracks
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

    CustomStreamTrack audioCustomTrack = VideoSDK.createAudioTrack("high_quality", this);
    customTracks.put("mic", audioCustomTrack);  //Key must be "mic"

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
        //Pass the custom tracks here
        customTracks
    );

}
```

</TabItem>

</Tabs>

### Custom Track with `unmuteMic()`

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `unmuteMic()` method of `Meeting`.

You can also pass custom track in `changeMic()` method of `Meeting`.

:::note

Make sure to call `muteMic()` before you create a new track as it may lead to unexpected behaviour.

:::

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
