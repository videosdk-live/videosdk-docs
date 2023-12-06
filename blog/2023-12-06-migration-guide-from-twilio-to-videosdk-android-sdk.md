---
title: Migration Guide Twilio to Video SDK - Android
description: Explore the seamless transition from Twilio to Video SDK for android with our comprehensive migration guide. Elevate your video communication with expert insights and step-by-step instructions.
keywords:
  - Twilio to Video SDK migration guide for Android
  - Twilio to Video SDK migration guide
  - Twilio to Video SDK migration tutorial
slug: migration-guide-from-twilio-to-videosdk-android-sdk
# authors:
#   - name: Joel Marcey
#     title: Co-creator of Docusaurus 1
#     url: https://github.com/JoelMarcey
#     image_url: https://github.com/JoelMarcey.png
#   - name: Sébastien Lorber
#     title: Docusaurus maintainer
#     url: https://sebastienlorber.com
#     image_url: https://github.com/slorber.png
# tags: [hello, docusaurus-v2]
hide_table_of_contents: false
---

## Overview

This migration guide provides a seamless transition from Twilio to VideoSDK, offering a simplified and intuitive comparison of key elements. Whether you're already familiar with Twilio or new to both platforms, this guide ensures a smooth migration process.

We're here to help you switch from Twilio to VideoSDK. We'll use the Twilio Quickstart sample app as a starting point. You can find the code for the sample app here: [https://github.com/twilio/video-quickstart-android/tree/master/quickstartKotlin](https://github.com/twilio/video-quickstart-android/tree/master/quickstartKotlin)

## Concept

1.  **Meeting / Room:**
    - This is like a virtual place where people can have real-time conversations using voice, video, and screen sharing.
    - Think of it as a virtual room where participants interact.
    - Each meeting or room has a unique ID (meetingId or roomId).
2.  **Participant:**
    - Both VideoSDK and Twilio Video includes the concepts of **Participant.**
    - There are two types:
      - **Local Participant:** This is you on your device. You control your own audio and video.
      - **Remote Participant:** This is someone else in the meeting. They receive your audio and video and can send their own.
3.  **MediaStream & Track:**
    - **MediaStream:** Think of it as a bundle of audio and video tracks that are shared in real-time between participants.
    - **Track:** This is like a continuous flow of audio or video. For example, your video feed from the camera is a video track, and the audio from the microphone is an audio track.
4.  **Session:**
    - A session is like a specific instance of an ongoing meeting or room.
    - Imagine a meeting happening right now as a session.
    - Each session has its own ID (sessionId).

If you want to learn about this concept in depth you can refer this guide [Concept and Architecture](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/concept-and-architecture)

## VideoSDK Setup

### API Key

In Twilio you have to create API key manually(using CLI or from Dashboard), in VideoSDK the default API key is automatically created in [VideoSDK dashboard](https://app.videosdk.live).

### Token

In Twilio, you can generate a token using CLI or the Twilio helper library in the backend environment.

For VideoSDK, there are two ways to generate a token. You can [generate it from the VideoSDK Dashboard](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/authentication-and-token#1-generating-token-from-dashboard) or [in your backend](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/authentication-and-token#2-generating-token-in-your-backend).

In Twilio, you need to provide a different token for each participant, which can be complex during development. In VideoSDK, it is optional to specify the same token for different participants. You can also restrict a specific token for a specific meetingID or participantID.

## **Room Creation**

Before integration, create a room using the [REST API Rooms resource](https://docs.videosdk.live/api-reference/realtime-communication/create-room). Refer to the docs for details.

```js
cURL -XPOST https://api.videosdk.live/v2/rooms \
		 -H 'Authorization: $VIDEOSDK_TOKEN' \ 
		 -H 'Content-Type: application/json'
```

## Step 1 : Integrate Video SDK

```js title="settings.gradle"
dependencyResolutionManagement{
  repositories {
    // ...
    google()
    mavenCentral()
    maven { url "https://maven.aliyun.com/repository/jcenter" }
  }
}
```

- Add the following dependency in your app's `app/build.gradle`.

```js title="app/build.gradle"
dependencies {
    ...
//    implementation <strong>"com.twilio:audioswitch:1.1.8"
//    implementation <strong>"com.twilio:video-android:7.6.4"
    implementation "live.videosdk:rtc-android-sdk:0.1.25"
}
```

On the top right of your Android studio, click Sync Now after making these changes.


## Step 2 : Connect to a room

- In Twilio, You can initiate a connection to a video room using **`video.connect()`**. This method sets up a connection by specifying the room name, access token, and optionally including local audio, video, and data tracks.

- In VideoSDK, the process begins with setting up the SDK by initializing it and providing authentication through a token. After that you can initialize the meeting with required params such as `meetingId`, `participantName`, `micEnabled`, `webcamEnabled` and [more](https://docs.videosdk.live/android/api/sdk-reference/initMeeting). To join the meeting/room, you can simply call the **`meeting.join()`** method.


```js

/* Twilio Code :
private fun connectToRoom() {
    room = connect(this, accessToken, roomListener) {
        roomName("<Room-Name>")
        audioTracks(listOf(localAudioTrack))
        videoTracks(listOf(localVideoTrack))
        preferAudioCodecs(listOf(audioCodec))
        preferVideoCodecs(listOf(videoCodec))
        encodingParameters(encodingParameters)
        enableAutomaticSubscription(enableAutomaticSubscription)
    }
}
*/

private fun connectToRoom() {

	// 1. Initialize VideoSDK
    VideoSDK.initialize(applicationContext);

	// 2. Configuration VideoSDK with Token
    VideoSDK.config(VIDEOSDK_ACCESS_TOKEN);
    
    var meetingId:String = "<Meeting-Id>";

    // 3. Initialize VideoSDK Meeting
    meeting = VideoSDK.initMeeting(
        this@VideoActivity, meetingId, "John",
        true, true ,null, null, false, null, null)

    // 4. Join VideoSDK Meeting
    meeting!!.join();
        
}
```

## Step 3: Handle Room Events

- In both Twilio and VideoSDK, you can utilize event listeners attached to the room or meeting object to capture crucial moments during a video conference. This listener include the meeting being connected or disconnected and participants joining or leaving the meeting events.

```js

/* Twilio Code :
private val roomListener = object : Room.Listener {
  override fun onConnected(room: Room) {}

  override fun onDisconnected(room: Room, e: TwilioException?) {}

  override fun onParticipantConnected(room: Room, participant: RemoteParticipant) {}

  override fun onParticipantDisconnected(room: Room, participant: RemoteParticipant) {}
}
*/

private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    override fun onMeetingJoined() {}

    override fun onMeetingLeft() {}

    override fun onParticipantJoined(participant: Participant) {}

    override fun onParticipantLeft(participant: Participant) {}
}

```

- Below is a list of all Twilio events and VideoSDK’s equivalents.

| **Twillio Event**           | **VideoSDK event**        |
|-----------------------------|---------------------------|
| onConnected()               | onMeetingJoined()         |
| onDisconnected()            | onMeetingLeft()           |
| onParticipantConnected()    | onParticipantJoined()     |
| onParticipantDisconnected() | onParticipantLeft()       |
| onDominantSpeakerChanged()  | onSpeakerChanged()        |
| onRecordingStarted()        | onRecordingStateChanged() |
| onRecordingStopped()        | onRecordingStateChanged() |


## Step 4 : Set up local media

### Capture local media

- In Twilio, to capture local participant's audio data, you need to create a `LocalAudioTrack`, and for video, you add a `LocalVideoTrack` with an associated `VideoCapturer`.

- In VideoSDK, capturing tracks for a local participant is more straightforward. The Android SDK automatically captures both audio and video when you set `micEnabled` and `webCamEnabled` to `true` in the `initMeeting()` method. There's no need for explicit track creation; the SDK handles it automatically based on the provided configuration.

### Render local participant’s video

- Twilio provides a `VideoView` component to display participants' video feeds. 
    - To display the video from the local participant, you have to link the `LocalVideoTrack` to the `VideoView` using the `addSink` method: **`localVideoTrack.addSink(localVideoView)`**. 
    - If you want to stop displaying the local participant's video in the `VideoView`, you can remove the track using **`localVideoTrack.removeSink(localVideoView)`**.

- Similarly, VideoSDK offers a [VideoView](https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/understand-videoView-component) component to display participants' video stream. 
    - To display the local participant's video, you have to add the track to the `VideoView` using the `addTrack` method: **`localVideoView.addTrack(track)`**. 
    - When you want to stop displaying the local participant's video in the `VideoView`, you can remove the track using **`localVideoView.removeTrack()`** method.

- In Twilio , `LocalVideoTrack` is used to render a local participant’s video. However, VideoSDK have events `onStreamEnabled` and `onStreamDisabled` in `ParticipantEventListener`  from which you can get track of audio, video.

    - **onStreamEnabled()** - `onStreamEnabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.
    - **onStreamDisabled()** -  `onStreamDisabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.


```js title="VideoActivity.xml"

/* Twilio Code :
	<com.twilio.video.VideoView
	  android:id="@+id/localVideoView"
	  android:layout_width="wrap_content"
	  android:layout_height="wrap_content"
	/>
*/

<live.videosdk.rtc.android.VideoView
  android:id="@+id/localVideoView"
  android:layout_width="wrap_content"
  android:layout_height="wrap_content"
/>

```

```js

/* Twilio Code :
private var localVideoTrack: LocalVideoTrack = //...

private fun addLocalParticipantVideo() {
  with(localVideoTrack){
      this?.addSink(localVideoView)
  }
}

private fun removeLocalParticipantVideo(){
	with(localVideoTrack) {
      this?.removeSink(localVideoView)
  }
}
*/

private fun setLocalListeners() {
  meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
      override fun onStreamEnabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) {
              val track = stream.track as VideoTrack
              localVideoView.addTrack(track)
          }
      }

      override fun onStreamDisabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) {
              localVideoView.removeTrack()
          }
      }
  })
}
```

## Step 5 : Working with Remote Participants

### Get Connected Participants

- In Twilio , you can get the all the connected remote participants through `getRemoteParticipants()` method of `Room` class.

- Similarly, In VideoSDK you can get all the connected participant using `getParticipants()` method of `Meeting` class.

```js
/* Twilio Code :
	// Get the first participant from the room
	val participant = room.remoteParticipants[0]
  Log.i("RemoteParticipants", participant.identity + " is in the room.")
*/

// Get the first participant from the meeting
val participant = meeting!!.participants[0]
Log.i("RemoteParticipants", participant.displayName + " is in the room.")
```

### Display a Remote Participant's Video

- In Twilio, you receive events `onVideoTrackSubscribed` and `onVideoTrackUnsubscribed` whenever a remote participant enabled or disabled their webcam. These events notify you when a participant starts or stops sharing their video.

- Similarly, in VideoSDK, you have `onStreamEnabled` and `onStreamDisabled` events. These events serve a similar purpose for both local and remote participants, triggered whenever participant enabled or disabled their webcam respectively.

```js
/* Twilio Code :
private fun roomListener(): Room.Listener? {
  return object : Room.Listener {
      override fun onParticipantConnected(room: Room, participant: RemoteParticipant) {
          participant.setListener(remoteParticipantListener())
      }
  }
}

private fun remoteParticipantListener(): RemoteParticipant.Listener? {
  return object : RemoteParticipant.Listener {
      override fun onVideoTrackSubscribed(
          participant: RemoteParticipant,
          remoteVideoTrackPublication: RemoteVideoTrackPublication,
          remoteVideoTrack: RemoteVideoTrack
      ) {
          remoteVideoTrack.addSink(participantVideoView)
      }
      

      override fun onVideoTrackUnsubscribed(
          remoteParticipant: RemoteParticipant,
          remoteVideoTrackPublication: RemoteVideoTrackPublication,
          remoteVideoTrack: RemoteVideoTrack
      ) {
          remoteVideoTrack.removeSink(participantVideoView)
      }
  }
}
*/


private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    override fun onParticipantJoined(participant: Participant) {
				participant.addEventListener(participantEventListener)
		}
}

private val participantEventListener: ParticipantEventListener =
  object : ParticipantEventListener() {
      override fun onStreamEnabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) { 
              val track = stream.track as VideoTrack
							participantVideoView.addTrack(track)
          }
          
      }

      override fun onStreamDisabled(stream: Stream) {
          if (stream.kind.equals("video", ignoreCase = true)) {
              val track: VideoTrack = stream.track as VideoTrack
							participantVideoView.removeTrack()
          }
      } 
  }
```


## Features

### Toggle Mic of Local participant

- In Twilio, you can **mute/unmute** your LocalAudioTracks (microphone) by the setting `enable` property to `true/false`.
- In VideoSDK, you can **mute/unmute** Local participant’s microphone through `muteMic()` and `unmuteMic()` method of `Meeting` object.

```js
private fun muteClickListener(): View.OnClickListener {
    return View.OnClickListener {
        /* Twilio Code :
                localAudioTrack?.let {
            val enable = !it.isEnabled
            it.enable(enable)
            }
        */
        if(micEnabled){
            meeting!!.muteMic()
        } else {
            meeting!!.unmuteMic()
        }
        micEnabled=!micEnabled
    }
}
```

### Toggle Webcam of Local participant

- In Twilio, you can **enable/disable** your LocalVideoTracks (WebCam) by the setting enable property to `true/false`.
- In VideoSDK, you can **enable/disable** Local participant’s WebCam by calling `enableWebcam()` and `disableWebcam()` method of `Meeting` object.

```js
private fun localVideoClickListener(): View.OnClickListener {
    return View.OnClickListener {
        /* Twilio Code :
            localVideoTrack?.let {
                val enable = !it.isEnabled
                it.enable(enable)
            }
        */
        if (webcamEnabled) {
            meeting!!.disableWebcam()
        } else {
            meeting!!.enableWebcam()
        }
        webcamEnabled=!webcamEnabled
    }
}
```

### Disconnect from a Room

- In Twilio, you have the ability to disconnect from a room in which you are currently participating. Other Participants will receive a `onParticipantDisconnected` event.
- In VideoSDK, you can also disconnect from a room you are currently participating in. Other Participants will receive a `onParticipantLeft` event, while the local participant will receive a `onMeetingLeft` event.

```js

/* Twilio Code :

private fun roomListener(): Room.Listener? {
  return object : Room.Listener {
      override fun onDisconnected(room: Room, e: TwilioException?) {
          Log.d(TAG, "Disconnected from " + room.name)
      }
  }
}

// To disconnect from a Room
room?.disconnect();

*/


private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    override fun onMeetingLeft() {}
}

// To leave the meeting without removing all the participant 
// you need to call leave() of the Meeting class.
meeting?.leave();


// To leave the meeting by removing all the participant 
// you need to call end() of the Meeting class.
meeting?.end();

```

## Conclusion

As you conclude this migration journey, you've successfully adapted your application from Twilio to VideoSDK. The [developed project](https://github.com/videosdk-live/migration-to-X/tree/main/Twilio/android-quickstart) showcases the implementation of VideoSDK in action, emphasizing its simplicity and efficiency.

Key Takeaways:

- Automatic API key generation streamlines the setup process.
- Token generation is simplified, offering flexibility for participants.
- Granular control over participant tokens enhances security.
- Global scalability and minimal latency ensure a seamless user experience.

Feel free to explore the developed project's codebase for a hands-on understanding of VideoSDK integration. As you transition, VideoSDK empowers your application with robust real-time communication features, providing a foundation for future scalability and innovation.

## Contact Us

For any further assistance, questions, or community engagement, we welcome you to join our [Discord channel](https://discord.com/invite/Gpmj6eCq5u). Connect with fellow developers, share insights, and stay updated on the latest developments.

If you require developer support or need personalized assistance, you can schedule a session with our team through our [Developer Support portal](https://bookings.videosdk.live/#/customer/discovery). We are here to ensure a smooth integration and address any queries you may have. Your success with VideoSDK is our priority.
