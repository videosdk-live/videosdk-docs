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
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

# Quick Start

VideoSDK enables the opportunity to integrate video & audio calling to Web, Android, iOS applications. It provides Programmable SDKs and REST APIs to build scalable video conferencing applications.

This guide will get you running with the VideoSDK video & audio calling in minutes.

### Prerequisites

- iOS 11.0+
- Xcode 12.0+
- Swift 5.0+

### App Architecture

This App will contain two screen :

1. `Join Screen` : This screen allows user to either create meeting or join predefined meeting.

2. `Meeting Screen` : This screen basically contain local and remote participant view and some meeting controls such as Enable / Disable Mic & Camera and Leave meeting.

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_architecture.png' />

</center>

## Getting Started With the Code

#### Create App

`Step 1:` Create a new application by selecting `Create a new Xcode project`

`Step 2:` Choose **App** then click Next

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_app_selection.png' style={{height: '600px'}}/>

</center>

`Step 3:` Add **Product Name** and Save the project.

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_add_product_name.png' style={{height: '600px'}}/>

</center>

## VideoSDK Installation

To install VideoSDK, you must initialise the pod on the project by running the following command.

```js
pod init
```

it will create the Podfile in your project folder, open that file and add the dependency for the VideoSDK like below:

```js
pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_podfile.png' style={{height: '500px'}}/>

</center>

then run the below code to install the pod:

```js
pod install
```

then declare the permissions in Info.plist :

```js
<key>NSCameraUsageDescription</key>
<string>Camera permission description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone permission description</string>
```

## Project Structure

```js
iOSQuickStartDemo
   ├── Models
		├── RoomStruct.swift
	    └── MeetingData.swift
   ├── ViewControllers
		├── StartMeetingViewController.swift
	    └── MeetingViewController.swift
   ├── AppDelegate.swift // Default
   ├── SceneDelegate.swift // Default
   └── APIService
		   └── APIService.swift
   ├── Main.storyboard // Default
   ├── LaunchScreen.storyboard // Default
   └── Info.plist // Default
 Pods
	 └── Podfile
```

## Main.storyboard Design

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_storyboard.png' style={{height: '600px'}}/>

</center>

## Create models

Create swift file for `MeetingData` and `RoomStruct` class model for setting data in object pattern.

```js title="MeetingData.swift"
import Foundation
struct MeetingData {
    let token: String
    let name: String
    let meetingId: String
    let micEnabled: Bool
    let cameraEnabled: Bool
}
```

```js title="RoomStruct.swift"
import Foundation
struct RoomsStruct: Codable {
    let createdAt, updatedAt, roomID: String?
    let links: Links?
    let id: String?
    enum CodingKeys: String, CodingKey {
        case createdAt, updatedAt
        case roomID = "roomId"
        case links, id
    }
}
// MARK: - Links
struct Links: Codable {
    let getRoom, getSession: String?
    enum CodingKeys: String, CodingKey {
        case getRoom = "get_room"
        case getSession = "get_session"
    }
}
```

## Step 1 : Get started with APIClient

Before jumping to anything else, we have to write API to generate unique
meetingId. You will require **Auth token**, you can generate it using either
using [videosdk-server-api-example](https://github.com/videosdk-live/videosdk-rtc-api-server-examples) or generate it from the [Video SDK Dashboard](https://app.videosdk.live/api-keys) for developer.

```js title="APIService.swift"
import Foundation

let TOKEN_STRING: String = "<AUTH_TOKEN>";

class APIService {

    class func createMeeting(token: String, completion: @escaping (Result<String, Error>) -> Void) {
        let url = URL(string: "https://api.videosdk.live/v2/rooms")!

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue(TOKEN_STRING, forHTTPHeaderField: "authorization")

        URLSession.shared.dataTask(with: request, completionHandler: { (data: Data?, response: URLResponse?, error: Error?) in
            DispatchQueue.main.async {
                if let data = data, let utf8Text = String(data: data, encoding: .utf8)
                {
                    do{
                        let dataArray = try JSONDecoder().decode(RoomsStruct.self,from: data)
                        completion(.success(dataArray.roomID ?? ""))
                    } catch {
                        print("Error while creating a meeting: \(error)")
                        completion(.failure(error))
                    }
                }
            }
        }).resume()
    }
}
```

## Step 2 : Implement Join Screen

Join screen will work as medium to either schedule new meeting or to join existing meeting.

```js title="StartMeetingViewController.swift"
import Foundation
import UIKit

class StartMeetingViewController: UIViewController, UITextFieldDelegate {

		private var serverToken = ""

		/// MARK: outlet for create meeting button
		@IBOutlet weak var btnCreateMeeting: UIButton!

		/// MARK: outlet for join meeting button
		@IBOutlet weak var btnJoinMeeting: UIButton!

		/// MARK: outlet for meetingId textfield
		@IBOutlet weak var txtMeetingId: UITextField!

		/// MARK: Initialize the private variable with TOKEN_STRING &
		/// setting the meeting id in the textfield
		override func viewDidLoad() {
		    txtMeetingId.delegate = self
		    serverToken = TOKEN_STRING
		    txtMeetingId.text = "PROVIDE-STATIC-MEETING-ID"
		}

		/// MARK: method for joining meeting through seague named as "StartMeeting"
		/// after validating the serverToken in not empty
		func joinMeeting() {
		    txtMeetingId.resignFirstResponder()

		    if !serverToken.isEmpty {
		        DispatchQueue.main.async {
		            self.dismiss(animated: true) {
		                self.performSegue(withIdentifier: "StartMeeting", sender: nil)
		            }
		        }
		    } else {
				print("Please provide auth token to start the meeting.")
		    }
		}

		/// MARK: outlet for create meeting button tap event
		@IBAction func btnCreateMeetingTapped(_ sender: Any) {
				print("show loader while meeting gets connected with server")
		    joinRoom()
		}

		/// MARK: outlet for join meeting button tap event
		@IBAction func btnJoinMeetingTapped(_ sender: Any) {
		    if((txtMeetingId.text ?? "").isEmpty){

						print("Please provide meeting id to start the meeting.")
		        txtMeetingId.resignFirstResponder()
		    } else {
		        joinMeeting()
		    }
		}

		// MARK: - method for creating room api call and getting meetingId for joining meeting

		func joinRoom() {

		   APIService.createMeeting(token: self.serverToken) { result in
            if case .success(let meetingId) = result {
                DispatchQueue.main.async {
                    self.txtMeetingId.text = meetingId
                    self.joinMeeting()
                }
            }
        }
		}

		/// MARK: preparing to animate to meetingViewController screen
		override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

		    guard let navigation = segue.destination as? UINavigationController,
		          let meetingViewController = navigation.topViewController as? MeetingViewController else {
		          return
		      }

		    meetingViewController.meetingData = MeetingData(
		        token: serverToken,
		        name: txtMeetingId.text ?? "Guest",
		        meetingId: txtMeetingId.text ?? "",
		        micEnabled: true,
		        cameraEnabled: true
		    )
		}
}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_join_screen.png' style={{height: '500px'}}/>

</center>

## Step 3 : Initialize and Join Meeting

Using the provided `token` and `meetingId`, we will configure and initialise the meeting in `viewDidLoad()`.

Then, we'll add **@IBOutlet** for `localParticipantVideoView` and `remoteParticipantVideoView`, which can render local and remote participant media respectively.

```js title="MeetingViewController.swift"

class MeetingViewController: UIViewController {

import UIKit
import VideoSDKRTC
import WebRTC
import AVFoundation

class MeetingViewController: UIViewController {

    // MARK: - Properties
    // outlet for local participant container view
    @IBOutlet weak var localParticipantViewContainer: UIView!

    // outlet for label for meeting Id
    @IBOutlet weak var lblMeetingId: UILabel!

    // outlet for local participant video view
    @IBOutlet weak var localParticipantVideoView: RTCMTLVideoView!

    // outlet for remote participant video view
    @IBOutlet weak var remoteParticipantVideoView: RTCMTLVideoView!

    // outlet for remote participant no media label
    @IBOutlet weak var lblRemoteParticipantNoMedia: UILabel!

    // outlet for remote participant container view
    @IBOutlet weak var remoteParticipantViewContainer: UIView!

    // outlet for local participant no media label
    @IBOutlet weak var lblLocalParticipantNoMedia: UILabel!

    /// Meeting data - required to start
    var meetingData: MeetingData!

    /// current meeting reference
    private var meeting: Meeting?

    // MARK: - video participants including self to show in UI
    private var participants: [Participant] = []

		// MARK: - Lifecycle Events

		override func viewDidLoad() {
        super.viewDidLoad()
        // configure the VideoSDK with token
        VideoSDK.config(token: meetingData.token)

        // init meeting
        initializeMeeting()

        // set meeting id in button text
        lblMeetingId.text = "Meeting Id: \(meetingData.meetingId)"
	  }

	  override func viewWillAppear(_ animated: Bool) {
	      super.viewWillAppear(animated)
	      navigationController?.navigationBar.isHidden = true
	  }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        navigationController?.navigationBar.isHidden = false
        NotificationCenter.default.removeObserver(self)
    }

		// MARK: - Meeting

		private func initializeMeeting() {

		    // Initialize the VideoSDK
		    meeting = VideoSDK.initMeeting(
		        meetingId: meetingData.meetingId,
		        participantName: meetingData.name,
		        micEnabled: meetingData.micEnabled,
		        webcamEnabled: meetingData.cameraEnabled
		    )

		    // Adding the listener to meeting
		    meeting?.addEventListener(self)

		    // joining the meeting
		    meeting?.join()
		}
}
```

## Step 4 : Implement Controls

After initialising the meeting in previous step. We will now add **@IBOutlet** for `btnLeave`, `btnToggleVideo` and `btnToggleMic` which can controls the media in meeting.

```js title="MeetingViewController.swift"

class MeetingViewController: UIViewController {

//highlight-next-line
...

    // outlet for leave button
    @IBOutlet weak var btnLeave: UIButton!

    // outlet for toggle video button
    @IBOutlet weak var btnToggleVideo: UIButton!

    // outlet for toggle audio button
    @IBOutlet weak var btnToggleMic: UIButton!

    // bool for mic
    var micEnabled = true
    // bool for video
    var videoEnabled = true


    // outlet for leave button click event
    @IBAction func btnLeaveTapped(_ sender: Any) {
            DispatchQueue.main.async {
                self.meeting?.leave()
                self.dismiss(animated: true)
            }
        }

    // outlet for toggle mic button click event
    @IBAction func btnToggleMicTapped(_ sender: Any) {
        if micEnabled {
            micEnabled = !micEnabled // false
            self.meeting?.muteMic()
        } else {
            micEnabled = !micEnabled // true
            self.meeting?.unmuteMic()
        }
    }

    // outlet for toggle video button click event
    @IBAction func btnToggleVideoTapped(_ sender: Any) {
        if videoEnabled {
            videoEnabled = !videoEnabled // false
            self.meeting?.disableWebcam()
        } else {
            videoEnabled = !videoEnabled // true
            self.meeting?.enableWebcam()
        }
    }

  //highlight-next-line
...

}
```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_loading.png' style={{height: '500px'}}/>

</center>

## Step 5 : Implementing MeetingEventListener

In this step, we'll create an extension for the `MeetingViewController` that implements the MeetingEventListener, which implements the `onMeetingJoined`, `onMeetingLeft`, `onParticipantJoined`, `onParticipantLeft`, `onParticipantChanged`, `onSpeakerChanged`, etc. methods.

```js title="MeetingViewController.swift"

class MeetingViewController: UIViewController {

//highlight-next-line
...

extension MeetingViewController: MeetingEventListener {

		/// Meeting started
		func onMeetingJoined() {

		    // handle local participant on start
		    guard let localParticipant = self.meeting?.localParticipant else { return }
		    // add to list
		    participants.append(localParticipant)

		    // add event listener
		    localParticipant.addEventListener(self)

		    localParticipant.setQuality(.high)

		    if(localParticipant.isLocal){
		        self.localParticipantViewContainer.isHidden = false
		    } else {
		        self.remoteParticipantViewContainer.isHidden = false
		    }
		}

		/// Meeting ended
		func onMeetingLeft() {
		    // remove listeners
		    meeting?.localParticipant.removeEventListener(self)
		    meeting?.removeEventListener(self)
		}

		/// A new participant joined
		func onParticipantJoined(_ participant: Participant) {
		    participants.append(participant)

		    // add listener
		    participant.addEventListener(self)

		    participant.setQuality(.high)

		    if(participant.isLocal){
		        self.localParticipantViewContainer.isHidden = false
		    } else {
		        self.remoteParticipantViewContainer.isHidden = false
		    }
		}

		/// A participant left from the meeting
		/// - Parameter participant: participant object
		func onParticipantLeft(_ participant: Participant) {
		    participant.removeEventListener(self)
		    guard let index = self.participants.firstIndex(where: { $0.id == participant.id }) else {
		        return
		    }
		    // remove participant from list
		    participants.remove(at: index)
		    // hide from ui
		    UIView.animate(withDuration: 0.5){
		        if(!participant.isLocal){
		            self.remoteParticipantViewContainer.isHidden = true
		        }
		    }
		}

		/// Called when speaker is changed
		/// - Parameter participantId: participant id of the speaker, nil when no one is speaking.
		func onSpeakerChanged(participantId: String?) {

		    // show indication for active speaker
		    if let participant = participants.first(where: { $0.id == participantId }) {
		        self.showActiveSpeakerIndicator(participant.isLocal ? localParticipantViewContainer : remoteParticipantViewContainer, true)
		    }

		    // hide indication for others participants
		    let otherParticipants = participants.filter { $0.id != participantId }
		    for participant in otherParticipants {
		        if participants.count > 1 && participant.isLocal {
		            showActiveSpeakerIndicator(localParticipantViewContainer, false)
		        } else {
		            showActiveSpeakerIndicator(remoteParticipantViewContainer, false)
		        }
		    }
		}

		func showActiveSpeakerIndicator(_ view: UIView, _ show: Bool) {
		    view.layer.borderWidth = 4.0
		    view.layer.borderColor = show ? UIColor.blue.cgColor : UIColor.clear.cgColor
		}

}

//highlight-next-line
...

```

## Step 6 : Implementing ParticipantEventListener

In this stage, we'll add an extension for the `MeetingViewController` that implements the ParticipantEventListener, which implements the `onStreamEnabled` and `onStreamDisabled` methods for the audio and video of MediaStreams enabled or disabled.

The function `updateUI` is frequently used to control or modify the user interface (enable / disable camera & mic) in accordance with MediaStream state.

```js title="MeetingViewController.swift"
class MeetingViewController: UIViewController {

//highlight-next-line
...

extension MeetingViewController: ParticipantEventListener {

		/// Participant has enabled mic, video or screenshare
		/// - Parameters:
		///   - stream: enabled stream object
		///   - participant: participant object
		func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {
		    updateUI(participant: participant, forStream: stream, enabled: true)
		}

		/// Participant has disabled mic, video or screenshare
		/// - Parameters:
		///   - stream: disabled stream object
		///   - participant: participant object
		func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {
		    updateUI(participant: participant, forStream: stream, enabled: false)
		}
}

private extension MeetingViewController {

    func updateUI(participant: Participant, forStream stream: MediaStream, enabled: Bool) { // true
        switch stream.kind {
        case .state(value: .video):
            if let videotrack = stream.track as? RTCVideoTrack {
                if enabled {
                    DispatchQueue.main.async {
                        UIView.animate(withDuration: 0.5){
                            if(participant.isLocal){
                                self.localParticipantViewContainer.isHidden =   false
                                self.localParticipantVideoView.isHidden = false
                                self.localParticipantVideoView.videoContentMode = .scaleAspectFill
                                self.localParticipantViewContainer.bringSubviewToFront(self.localParticipantVideoView)
                                videotrack.add(self.localParticipantVideoView)
                                self.lblLocalParticipantNoMedia.isHidden = true
                            } else {
                                self.remoteParticipantViewContainer.isHidden = false
                                self.remoteParticipantVideoView.isHidden = false
                                self.remoteParticipantVideoView.videoContentMode = .scaleAspectFill
                                self.remoteParticipantViewContainer.bringSubviewToFront(self.remoteParticipantVideoView)
                                videotrack.add(self.remoteParticipantVideoView)
                                self.lblRemoteParticipantNoMedia.isHidden = true
                            }
                        }
                    }
                } else {
                    UIView.animate(withDuration: 0.5){
                        if(participant.isLocal){
                            self.localParticipantViewContainer.isHidden = false
                            self.localParticipantVideoView.isHidden = true
                            self.lblLocalParticipantNoMedia.isHidden = false
                            videotrack.remove(self.localParticipantVideoView)
                        } else {
                            self.remoteParticipantViewContainer.isHidden = false
                            self.remoteParticipantVideoView.isHidden = true
                            self.lblRemoteParticipantNoMedia.isHidden = false
                            videotrack.remove(self.remoteParticipantVideoView)
                        }
                    }
                }
            }

        case .state(value: .audio):
            if participant.isLocal {
                localParticipantViewContainer.layer.borderWidth = 4.0
                localParticipantViewContainer.layer.borderColor = enabled ? UIColor.clear.cgColor : UIColor.red.cgColor
            } else {
                remoteParticipantViewContainer.layer.borderWidth = 4.0
                remoteParticipantViewContainer.layer.borderColor = enabled ? UIColor.clear.cgColor : UIColor.red.cgColor
            }
        default:
            break
        }
    }
}

//highlight-next-line
...

```

#### Output

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_meeting_screen.png' style={{height: '500px'}}/>

</center>

## Known Issue

Please add the following line in the `MeetingViewController.swift` file's `viewDidLoad` method If you get your video out of the container view like below image.

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/ios_quickstart_known_issue.png' style={{height: '400px'}}/>

</center>

```js title="MeetingViewController.swift"
override func viewDidLoad() {

    localParticipantVideoView.frame = CGRect(x: 10, y: 0, width: localParticipantViewContainer.frame.width, height: localParticipantViewContainer.frame.height)

    localParticipantVideoView.bounds = CGRect(x: 10, y: 0, width: localParticipantViewContainer.frame.width, height: localParticipantViewContainer.frame.height)

    localParticipantVideoView.clipsToBounds = true

    remoteParticipantVideoView.frame = CGRect(x: 10, y: 0, width: remoteParticipantViewContainer.frame.width, height: remoteParticipantViewContainer.frame.height)
    remoteParticipantVideoView.bounds = CGRect(x: 10, y: 0, width: remoteParticipantViewContainer.frame.width, height: remoteParticipantViewContainer.frame.height)
    remoteParticipantVideoView.clipsToBounds = true
}

```

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example) on GitHub

:::
