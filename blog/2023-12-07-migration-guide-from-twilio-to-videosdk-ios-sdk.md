---
title: Migration Guide From Twilio Video to Video SDK - iOS
description: Explore the seamless transition from Twilio to Video SDK for iOS with our comprehensive migration guide. Elevate your video communication with expert insights and step-by-step instructions.
keywords:
  - Twilio to Video SDK migration guide for iOS
  - Twilio to Video SDK migration guide
  - Twilio to Video SDK migration tutorial
slug: migration-guide-from-twilio-to-videosdk-ios-sdk
# authors:
#   - name: Joel Marcey
#     title: Co-creator of Docusaurus 1
#     url: https://github.com/JoelMarcey
#     image_url: https://github.com/JoelMarcey.png
tags: [Migration Guide, Twilio, iOS]
hide_table_of_contents: false
---

<!-- truncate -->

## Overview

This migration guide provides a seamless transition from Twilio to VideoSDK, offering a simplified and intuitive comparison of key elements. Whether you're already familiar with Twilio or new to both platforms, this guide ensures a smooth migration process.

We're here to help you switch from Twilio to VideoSDK. We'll use the Twilio Quickstart sample app as a starting point. You can find the code for the sample app here: [https://github.com/twilio/video-quickstart-ios](https://github.com/twilio/video-quickstart-ios)

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

If you want to learn about this concept in depth you can refer this guide [Concept and Architecture](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/concept-and-architecture)

## VideoSDK Setup

### API Key

In Twilio you have to create API key manually(using CLI or from Dashboard), in VideoSDK the default API key is automatically created in [VideoSDK dashboard](https://app.videosdk.live).

### Token

In Twilio, you can generate a token using CLI or the Twilio helper library in the backend environment.

For VideoSDK, there are two ways to generate a token. You can [generate it from the VideoSDK Dashboard](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#1-generating-token-from-dashboard) or [in your backend](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#2-generating-token-in-your-backend).

In Twilio, you need to provide a different token for each participant, which can be complex during development. In VideoSDK, it is optional to specify the same token for different participants. You can also restrict a specific token for a specific meetingID or participantID.

## Room Creation

Before integration, create a room using the [REST API Rooms resource](https://docs.videosdk.live/api-reference/realtime-communication/create-room). Refer to the docs for details.

```jsx
cURL -XPOST <https://api.videosdk.live/v2/rooms> \\
		 -H 'Authorization: $VIDEOSDK_TOKEN' \\
		 -H 'Content-Type: application/json'
```

## Step 1 : Integrate Video SDK

There is two ways to implement the VideoSDK dependency into your application:

1. **SPM (Swift Package Manager):**

   - Select **File** → **Add Package** Dependencies and search below url and press **Add Package** button.

   ```js
   https://github.com/videosdk-live/videosdk-rtc-ios-spm
   ```

2. **Cocoa pods:**

   - You can add the dependency in the podfile.

   ```js
   use_frameworks!

   target 'VideoSDK_Example' do

   	// write below line for adding the dependency of VideoSDK
   	pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'

   end
   ```

   run `pod install` command in terminal at location of the application to install the dependency in the application.

## Step 2 : Connect to a room

- In Twilio, You can initiate a connection to a video room using `TwilioVideoSDK.connect()`. This method sets up a connection by specifying the connection options and delegate of the meeting.
- In VideoSDK, the process begins with setting up the SDK by initializing it and providing authentication through a token. After that you can initialize the meeting with required params such as `meetingId`, `participantId`, `participantName`,  `micEnabled`,  `webcamEnabled` and more. To join the meeting/room, you can simply call the `meeting.join()` method.

```jsx
/* Twilio Code :
@IBAction func createARoom(sender: AnyObject) {
    let connectOptions = ConnectOptions(token: accessToken) { (builder) in
        builder.roomName = "my-room"
    }
    room = TwilioVideoSDK.connect(options: connectOptions, delegate: self)
}

// MARK: RoomDelegate

func roomDidConnect(room: Room) {
    print("Did connect to Room")

    if let localParticipant = room.localParticipant {
        print("Local identity \(localParticipant.identity)")

        // Set the delegate of the local particiant to receive callbacks
        localParticipant.delegate = self
    }
}*/

// meeting
private var meeting: Meeting?

override func viewDidLoad() {
    super.viewDidLoad()

    // Configure authentication token got earlier
    VideoSDK.config(token: VIDEOSDK_ACCESS_TOKEN)

    // create a new meeting instance
    meeting = VideoSDK.initMeeting(
        meetingId: meetingId, // required
        participantName: participantName, // required
        micEnabled: <flag-to-enable-mic>, // optional, default: true
        webcamEnabled: <flag-to-enalbe-camera> // optional, default: true
    )

		// join
		meeting?.join();
}
```

## Step 3 : Handle Connected Participants

- In both Twilio and VideoSDK, you can utilise event listeners attached to the room or meeting object to capture crucial moments during a video conference. This listener include the meeting being connected or disconnected and participants joining or leaving the meeting events.

```jsx
/* Twilio Code :

// MARK: RoomDelegate

func roomDidConnect(room: Room) { ... }

func participantDidConnect(room: Room, participant: RemoteParticipant) { ... }

func participantDidDisconnect(room: Room, participant: RemoteParticipant) { ... }

func roomDidDisconnect(room: Room, error: Error?) { ... }

*/

// MARK: - MeetingEventListener [RoomDelegate]

extension YourViewController: MeetingEventListener {

		// [roomDidConnect]
    func onMeetingJoined() { ... }

		// [roomDidDisconnect]
    func onMeetingLeft() { ... }

    // [participantDidConnect]
    func onParticipantJoined(_ participant: Participant) { ... }

		// [participantDidDisconnect]
    func onParticipantLeft(_ participant: Participant) { ... }
}
```

#### Mapping Twilio’s events to VideoSDK

Below is a list of all Twilio events used in this demo and VideoSDK’s equivalents.

| Twilio Events            | VideoSDK Events                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| roomDidConnect()         | [onMeetingJoined()](https://docs.videosdk.live/ios/api/sdk-reference/meeting-class/events#onmeetingjoined)         |
| roomDidDisconnect()      | [onMeetingLeft()](https://docs.videosdk.live/ios/api/sdk-reference/meeting-class/events#onmeetingleft)             |
| participantDidConnect()  | [onParticipantJoined()](https://docs.videosdk.live/ios/api/sdk-reference/meeting-class/events#onparticipantjoined) |
| participantDidDisconnect | [onParticipantLeft()](https://docs.videosdk.live/ios/api/sdk-reference/meeting-class/events#onparticipantleft)     |

## Step 4 : Set up local media

### Capture local media

- In Twilio, to capture local participant's audio data, you need to provide track for audio and video while connecting the meeting.
- In VideoSDK, capturing tracks for a local participant is more straightforward. The iOS SDK automatically captures both audio and video when you set `micEnabled` and `webCamEnabled`to `true` in the `initMeeting()` method. There's no need for explicit track creation; the SDK handles it automatically based on the provided configuration.

### Render local participant’s video

- Twilio provides a `LocalVideoTrack` component to display participants' video feeds.
  - To display the video from the local participant, you have to link the `LocalVideoTrack` to the `TVIVideoView` using the `addRenderer` method: `videoTrack.addRenderer(renderer)`.
- Similarly, VideoSDK offers a VideoView component to display participants' video stream.
  - To display the local participant's video, you have to add the track to the `RTCMTLVideoView` using the add method: `videotrack.add(videoView)`.
  - When you want to stop displaying the local participant's video in the `RTCMTLVideoView`, you can remove the track using `videotrack.remove(videoView)` method.
- In Twilio , `LocalVideoTrack` is used to render a local participant’s video. However, VideoSDK have events `onStreamEnabled` and `onStreamDisabled` in `ParticipantEventListener` from which you can get track of audio, video.
  - onStreamEnabled() - `onStreamEnabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is enabled.
  - onStreamDisabled() - `onStreamDisabled()` is a callback which gets triggered whenever a participant's video, audio or screen share stream is disabled.

```jsx
/* Twilio Code :
// Use CameraSource to produce video from the device's front camera.

if let camera = CameraSource(delegate: self),
    let videoTrack = LocalVideoTrack(source: camera) {

    // VideoView is a VideoRenderer and can be added to any VideoTrack.
    let renderer = VideoView(frame: view.bounds)

if let camera = TVICameraCapturer(source: .frontCamera),
    let videoTrack = TVILocalVideoTrack(capturer: camera) {

    // TVIVideoView is a TVIVideoRenderer and can be added to any TVIVideoTrack.
    let renderer = TVIVideoView(frame: view.bounds)

    // Add renderer to the video track
    videoTrack.addRenderer(renderer)

    self.localVideoTrack = videoTrack
    self.camera = camera
    self.view.addSubview(renderer)
} else {
    print("Couldn't create CameraCapturer or LocalVideoTrack")
}
*/

// MARK: - ParticipantEventListener

extension YourViewController: ParticipantEventListener {

    /// Participant has enabled mic, video or screenshare
    func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {

        if stream.kind == .state(value: .video)  {
            // show stream in cell
            if let cell = self.cellForParticipant(participant) {
                cell.updateView(forStream: stream, enabled: true)
            }
        } else { ... }

    }

    /// Participant has disabled mic, video or screenshare
    func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {

				if stream.kind == .state(value: .video) {
	          // hide stream in cell
	          if let cell = self.cellForParticipant(participant) {
	              cell.updateView(forStream: stream, enabled: false)
            }
        } else { ... }

    }
}
```

## Step 5 : Working with Remote Participants

### Get Connected Participants

- In Twilio, you can get the all the connected remote participants through `remoteParticipants` property of `Room` class.
- Similarly, In VideoSDK you can get all the connected participant using  `participants` property of `Meeting` class.

```jsx
/* Twilio Code :
  // MARK: RoomDelegate

	func roomDidConnect(room: Room) {
	    //...
	    // Connected participants already in the room
	    print("Number of connected Participants \(room.remoteParticipants.count)")
	
	    // Set the delegate of the remote participants to receive callbacks
	    for remoteParticipant in room.remoteParticipants {
	      remoteParticipant.delegate = self
	    }
	}
*/

// Get the first participant from the meeting
let participant = meeting.participants.first?.value;
print("(participant.displayName) is in the room.");
```

### Display a Remote Participant's Video

- In Twilio, you receive events `didSubscribeToVideoTrack` whenever a remote participant enabled their webcam. These events notify you when a participant starts sharing their video.
- Similarly, in VideoSDK, you have `onStreamEnabled` and `onStreamDisabled` events. These events serve a similar purpose for both local and remote participants, triggered whenever participant enabled or disabled their webcam respectively.

```js
/* Twilio code:
// MARK: RemoteParticipantDelegate

/*
 * In the Participant Delegate, we can respond when the Participant adds a Video
 * Track by rendering it on screen.
 */
func didSubscribeToVideoTrack(videoTrack: RemoteVideoTrack,
                              publication: RemoteVideoTrackPublication,
                              participant: RemoteParticipant) {

    print("Participant \(participant.identity) added a video track.")

    if let remoteView = VideoView.init(frame: self.view.bounds,
                                       delegate:self) {

        videoTrack.addRenderer(remoteView)
        self.view.addSubview(remoteView)
        self.remoteView = remoteView
    }
}

// MARK: VideoViewDelegate

// Lastly, we can subscribe to important events on the VideoView
func videoViewDimensionsDidChange(view: VideoView, dimensions: CMVideoDimensions) {
    print("The dimensions of the video track changed to: \(dimensions.width)x\(dimensions.height)")
    self.view.setNeedsLayout()
}
*/

// MARK: - MeetingEventListener

extension YourViewController: MeetingEventListener {
    func onParticipantJoined(_ participant: Participant) {
        // add listener
        participant.addEventListener(self)
     }
}

// MARK: - ParticipantEventListener

extension YourViewController: ParticipantEventListener {

    /// Participant has enabled mic, video or screenshare
    func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {

        if stream.kind == .state(value: .video)  {
            // show stream in cell
            if let cell = self.cellForParticipant(participant) {
                cell.updateView(forStream: stream, enabled: true)
            }
        } else {
            if let cell = self.cellForParticipant(participant) {
                cell.updateView(forStream: stream, enabled: true)
            }
        }

    }

    /// Participant has disabled mic, video or screenshare
    func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {

        if stream.kind == .state(value: .video) {
	          // hide stream in cell
	          if let cell = self.cellForParticipant(participant) {
	              cell.updateView(forStream: stream, enabled: false)
            }
        } else {
            if let cell = self.cellForParticipant(participant) {
                cell.updateView(forStream: stream, enabled: false)
            }
        }

    }
}
```

### Disconnect from a Room

- In Twilio, you have the ability to disconnect from a room in which you are currently participating. Other Participants will receive a `participantDisconnected` event.
- In VideoSDK, you can also disconnect from a room you are currently participating in. Other Participants will receive a `onParticipantLeft` event, while the local participant will receive a `onMeetingLeft` event.

```js
/* Twilio Code :

// To disconnect from a Room, we call:
room?.disconnect()
// This results in a callback to RoomDelegate#roomDidDisconnect(room: Room, error: Error?)
// MARK: RoomDelegate
func roomDidDisconnect(room: Room, error: Error?) {
    print("Disconnected from room \(room.name)")
}
*/

// MARK: - MeetingEventListener [RoomDelegate]

extension YourViewController: MeetingEventListener {

    // event after meeting?.end()
    func onMeetingLeft() { ... }

	// event after meeting?.leave()
    func onParticipantLeft(_ participant: Participant) { ... }
}

// To leave the meeting without removing all the participant
// you need to call leave() of the Meeting class.
meeting?.leave()


// To leave the meeting by removing all the participant
// you need to call end() of the Meeting class.
meeting?.end();
```

## Conclusion

As you conclude this migration journey, you've successfully adapted your application from Twilio to VideoSDK.

Feel free to explore the developed project's codebase for a hands-on understanding of VideoSDK integration. As you transition, VideoSDK empowers your application with robust real-time communication features, providing a foundation for future scalability and innovation.

## Contact Us

For any further assistance, questions, or community engagement, we welcome you to join our [Discord channel](https://discord.com/invite/Gpmj6eCq5u). Connect with fellow developers, share insights, and stay updated on the latest developments.

If you require developer support or need personalized assistance, you can schedule a session with our team through our [Developer Support portal](https://bookings.videosdk.live/#/customer/discovery). We are here to ensure a smooth integration and address any queries you may have. Your success with VideoSDK is our priority.
