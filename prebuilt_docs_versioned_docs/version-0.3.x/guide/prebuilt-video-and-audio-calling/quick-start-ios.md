---
title: Quick Start with Prebuilt in iOS
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with Prebuilt in iOS
pagination_label: Quick Start with Prebuilt in iOS
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-ios
---

Prebuilt SDK enables the opportunity to integrate real-time video & audio communication SDK without writing explicit code. It just requires 10 minutes to integrate.

### Prerequisites

:::important

One should have a VideoSDK account to generate a token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

### Permissions

In order to embed VideoSDK in iOS, add these permissions to the `Info.plist`:

```js
<key>NSCameraUsageDescription</key>
<string>Allow camera access to start video.</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow microphone access to start audio.</string>
```

### Embeding Prebuilt in iOS

You will need to use the [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) class.

1. We will setup the `SFSafariViewController` to load the VideoSDK Prebuilt when the view appears.

```js
import SafariServices

class ViewController: UIViewController, SFSafariViewControllerDelegate {

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        var meetingUrl = URLComponents() // We will update the URL in next step
        let safariVC = SFSafariViewController(url: meetingUrl.url!)
        safariVC.delegate = self
        present(safariVC, animated: true)
    }
}
```

2. Next step is to update the URL for the prebuilt. Make sure you replace the token and meetingId with respective variables.

```js
import SafariServices

class ViewController: UIViewController, SFSafariViewControllerDelegate {

    public var prebuiltVersion = "0.3.38" // VideoSDK Prebuilt Version
    public var token = "YOUR_TOKEN_HERE" //Replace your token here
    public var meetingId = "YOUR_MEETINGID" //Replace your meeting id

    public var name = "John Doe"
    public var webcamEnabled = "true"
    public var micEnabled = "true"

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        var meetingUrl = URLComponents()

        //Setup the Prebuilt URL
        meetingUrl.scheme = "https"
        meetingUrl.host = "embed.videosdk.live"
        meetingUrl.path = "/rtc-js-prebuilt/"+prebuiltVersion
        meetingUrl.queryItems = [
            URLQueryItem(name: "name", value: name),
            URLQueryItem(name: "micEnabled", value: micEnabled),
            URLQueryItem(name: "webcamEnabled", value: webcamEnabled),
            URLQueryItem(name: "meetingId", value: meetingId),
            URLQueryItem(name: "token", value: token),
        ]
        let safariVC = SFSafariViewController(url: meetingUrl.url!)
        safariVC.delegate = self
        present(safariVC, animated: true)
    }
}
```

3. Run the app.

:::note

You can checkout the sample project for **[prebuilt implementation of iOS in webview here](https://github.com/videosdk-live/videosdk-rtc-prebuilt-examples/tree/main/Prebuilt%20Webview%20iOS)**.

:::
