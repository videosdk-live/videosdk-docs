---
title: Quick Start with iOS
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with iOS
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

## Sample Project

These quick start will help you integrate some of the basic functionalities that VideoSDK provides. You can check out the complete source code for this guide [here](/). Once you are done with the tutorial given below your app should look like this.

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

#### Creating UI

The Joining screen will consist of:
1. Create Button - This button will create a new meeting for you.
2. TextField for Meeting ID - This textfield will contain the meeting ID you want to join.
3. Join Button - This buttom will join the meeting with which the you will be joined.

--- JOinScreen Ui

1. Create a new `APIService.swift` file which will include the API call for creating the meeting.

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
        request.addValue(AUTH_TOKEN, "Autori")

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