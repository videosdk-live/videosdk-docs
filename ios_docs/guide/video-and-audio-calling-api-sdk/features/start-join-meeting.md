---
title: Start join Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Start or join Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Start or Join Meeting
pagination_label: Start or Join Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-meeting
---

# Start or Join Meeting

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of videoSDK, the next step is to integrate videoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the meeting.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK meeting.</p>

</div>
<div>
<img src="/img/gif/new-meeting.gif"/>
</div>

</div>

## 1. Configuration

To configure a meeting, you will need [generated token](/ios/guide/video-and-audio-calling-api-sdk/server-setup#generate-accees-token-and-integrate-other-apis) and [meetingId](/api-reference/v1/realtime-communication/create-join-meeting#create-meeting), we had discussed in [Server Setup](/ios/guide/video-and-audio-calling-api-sdk/server-setup).
This code snippet calls API from local server

**Scenario 1** - Suppose you **don't have** any meetingId, you can simply generate meetingId by invoking `create-meeting` API.

**Scenario 2** - Suppose you **have** meetingId, now you don't have to call `create-meeting` API to generate meetingId, instead you can call `validate-meeting` API to validate meetingId.

**Token generation API is necessary for both scenario.**

:::note
You can take advantage of regional API to decrease latency in video calling.

To achieve region based meetings, just pass `region : REGION_CODE` parameter in `create-meeting` request Body.

Currently the below regions are supported:

- `sg001` Region Code for Singapore, SG.
<!-- - `sg002` Region Code for Singapore, SG. (Another region in Sindapore) -->
- `in002` Region Code for Bangalore, IN.
- `us001` Region Code for Fremont, CA.
- `eu001` Region Code for Frankfurt, DE.

In case you are not providing any region code, the default region will be `sg001`.
:::

```js
// Update server url here.
let LOCAL_SERVER_URL = "http://192.168.0.101:9000"

class APIService {

    class func getToken(completion: @escaping (Result<String, Error>) -> Void) {
        var url = URL(string: LOCAL_SERVER_URL)!
        url = url.appendingPathComponent("get-token")

        URLSession.shared.dataTask(with: url) { data, response, error in
            if let data = data, let token = data.toJSON()["token"] as? String {
                completion(.success(token))
            } else if let err = error {
                completion(.failure(err))
            }
        }
        .resume()
    }

    class func createMeeting(token: String, completion: @escaping (Result<String, Error>) -> Void) {
        var url = URL(string: LOCAL_SERVER_URL)!
        url = url.appendingPathComponent("create-meeting")

        let params = ["token": token]

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = try? JSONSerialization.data(withJSONObject: params, options: [])

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

## 2. Initialization

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration, you will have to Initialize 
<p>
meeting by providing name, meetingId, micEnabled, webcamEnabled & maxResolution.
</p>
</p>

</div>
<div>
<img src="/img/gif/add-participant.gif"/>
</div>

</div>

```js
// import sdk
import VideoSDKRTC

class MeetingViewController: UIViewController {

    // meeting
    private var meeting: Meeting?

    override func viewDidLoad() {
        super.viewDidLoad()

        // Configure authentication token got earlier
        VideoSDK.config(token: <Authentication-token>)

        // create a new meeting instance
        meeting = VideoSDK.initMeeting(
            meetingId: <meetingId>, // required
            participantName: <participantName>, // required
            micEnabled: <flag-to-enable-mic>, // optional, default: true
            webcamEnabled: <flag-to-enalbe-camera> // optional, default: true
        )
    }
}
```

## 3. Join

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After configuration & initialization, the third step is to call join() to join a meeting.
</p>

<p>
After joining, you will be able to Manage Participant in a meeting.
</p>

</div>
<div>
<img src="/img/gif/join-meeting.gif"/>
</div>

</div>

```js
// join
meeting?.join();
```
