---
title: Quick Start with iOS
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Start a Voice / Video Call
pagination_label: Quick Start with iOS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables opportunity to integrate video & audio calling to Web, Android, IOS applications. it provides Programmable SDKs and REST APIs to build up scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

## Prerequisites

Before proceeding, ensure that your development environment meets the following requirements:

* iOS development environment
* A valid VideoSDK account.
* An active VideoSDK project with temporary token. For details, see [Signup & Create API Key](/android/guide/video-and-audio-calling-api-sdk/signup-and-create-api).

## Project Setup

Follow the steps to create the environment necessary to add video call into your app.

1. Create a new XCode project.

2. Initialize the CocoaPods by following command.

```bash
$ pod init
```

3. Install the VideoSDK with CocoaPods.

```bash
$ pod 'VideoSDKRTC'
```
OR 
```bash
$ pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

4. Add the permissions for the microphone and camera.

```xml title="info.plist"
<key>NSCameraUsageDescription</key>
<string>Allow camera access to start video.</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow microphone access to start audio.</string>
```

5. With this the project setup is done. Let's get started with the implementation of the VideoSDK.

## Implementing Meeting with VideoSDK

### Creating Joining Screen

The Joining screen will consist of:
1. Create Button - This button will create a new meeting for you.
2. TextField for Meeting ID - This textfield will contain the meeting ID you want to join.
3. Join Button - This buttom will join the meeting with which the you will be joined.

1. Create a new `APIService.swift` file which will include the API call for creating the meeting. Update your token in the `AUTH_TOKEN`.

```js title="APIService.swift"
class APIService {

    //Replace with the token you generated from VideoSDK Dashboard
    let AUTH_TOKEN = "YOUR TOKEN HERE";

    class func createMeeting(token: String, completion: @escaping (Result<String, Error>) -> Void) {
        var url = URL(string: "https://api.videosdk.live/v1/api")!
        url = url.appendingPathComponent("create-meeting")

        let params = ["token": AUTH_TOKEN]

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = try? JSONSerialization.data(withJSONObject: params, options: [])
        request.addValue(AUTH_TOKEN, "Autorization")

        URLSession.shared.dataTask(with: request) { data, response, error in
            if let data = data, let meetingId = data.toJSON()["meetingId"] as? String {
                completion(.success(meetingId))
            } else if let err = error {
                completion(.failure(err))
            }
        }
        .resume()
    }
}
```

2. We will update the create and join button events in the join screen.

### Creating the MeetingView

1. Lets start with the basic UI of the Meeting view.

2. Declare the variables to store the `Meeting` and keep track of the local participants video and mic status.

```js
// meeting
private var meeting: Meeting?

/// keep track of mic
private var micEnabled = true

/// keep track of video
private var videoEnabled = true
```

2. We will initialize the meeting with the required configuration.

```js
// Configure authentication token got earlier
VideoSDK.config(token: <Authentication-token>)

// create a new meeting instance
meeting = VideoSDK.initMeeting(
    meetingId: <meetingId>, // required
    participantName: 'John Doe', // required
    micEnabled: micEnabled, // optional, default: true
    webcamEnabled: videoEnabled // optional, default: true
)

 // listener
meeting?.addEventListener(self)

// join
meeting?.join()

```

3. Once our meeting is initialized we will add the `MeetingEventListener`

```js
// MARK: - MeetingEventListener

extension MeetingViewController: MeetingEventListener {

    /// Meeting started
    func onMeetingJoined() {

        // handle for local participant
        if let localParticipant = self.meeting?.localParticipant {
            // event listener for self
            localParticipant.addEventListener(self)

            // add to list
            participants.append(localParticipant)

            // show in ui
            // ex. add to collecionView
            // addParticipantToGridView()
        }
    }

    // called after user leaves the meeting
    func onMeetingLeft() {
        // cleanup: remove listeners
        meeting?.localParticipant.removeEventListener(self)
        meeting?.removeEventListener(self)

        // dismiss meeting controller
    }

    /// A new participant joined
    func onParticipantJoined(_ participant: Participant) {
        // add new participant to list
        participants.append(participant)

        // add listener
        participant.addEventListener(self)

        // show in ui
        // ex. add to collectionView
        // addParticipantToGridView()
    }

    /// A participant left from the meeting
    /// - Parameter participant: participant object
    func onParticipantLeft(_ participant: Participant) {
        // remove listener
        participant.removeEventListener(self)

        // remove from list and update ui
        guard let index = self.participants.firstIndex(where: { $0.id == participant.id }) else {
            return
        }

        // remove participant from list
        participants.remove(at: index)

        // hide from ui
        // ex. remove from collectionview
        // removeParticipantFromGridView(at: index)
    }
}
```

4. Now we will add the `ParticipantEventListener` to listen for the chnages in the stream of the participants.

```js
// MARK: - ParticipantEventListener

extension MeetingViewController: ParticipantEventListener {

    /// Participant has enabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: enabled stream object
    ///   - participant: participant object
    func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {

        switch stream.kind {
        case .audio:
            // update ui to show that participant's mic is enabled
            // ex. update collectionView cell

            if participant.isLocal {
                // update mic flag for local participant
                micEnabled = true
            }

        case .video:
            // show track in videoView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.add(videoView)
            }

            if participant.isLocal {
                // update video flag for local participant
                videoEnabled = true
            }

        case .share:
            // show track in screenShareView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.add(screenShareView)
            }

            if participant.isLocal {
                // update screenShare flag for local participant
                screenShareEnabled = true
            }
        }
    }

    /// Participant has disabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: disabled stream object
    ///   - participant: participant object
    func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {

        switch stream.kind {
        case .audio:
            // update ui to show that participant's mic is disabled
            // ex. update collectionView cell

            if participant.isLocal {
                // update mic flag for local participant
                micEnabled = false
            }

        case .video:
            // remove track from videoView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.remove(videoView)
            }

            if participant.isLocal {
                // update video flag for local participant
                videoEnabled = false
            }

        case .share:
            // remove track from screenShareView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.remove(screenShareView)
            }

            if participant.isLocal {
                // update screenShare flag for local participant
                screenShareEnabled = false
            }
        }
    }
}
```

5.  We will handle the click handles for the toggle and leave buttons.

```js
@IBAction func leaveMeetingButtonTapped(_ sender: Any) {
    // leave meeting
    self.meeting?.leave()

    // end meeting for everyone
    self.meeting?.end()
}

@IBAction func videoButtonTapped(_ sender: Any) {
    if !videoEnabled {
        // enable webcam/camera
        self.meeting?.enableWebcam()
    } else {
        // disable webcam/camera
        self.meeting?.disableWebcam()
    }
}

@IBAction func micButtonTapped(_ sender: Any) {
    if !micEnabled {
        // enable/unmute mic
        self.meeting?.unmuteMic()
    } else {
        // disable/mute mic
        self.meeting?.muteMic()
    }
}
```

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example) on GitHub

:::

### Run and Test

The app is all set to test. Make sure to update the `AUTH_TOKEN` in `APIService`

Your app should look like this after the implementation.

![VideoSDK iOS Quick Start Join Screen](/img/quick-start/ios-join-screen.png) ![VideoSDK iOS Quick Start Meeting Screen](/img/quick-start/ios-meeting-screen.png)

:::caution
For this tutorial purpose we used a static token intialize and join the meeting. But for the production version of the app, we recommend you use an Authentication Server which will generate and pass on the token to the Client App. For more details checkout [how to do server setup](/ios/guide/video-and-audio-calling-api-sdk/server-setup).
:::