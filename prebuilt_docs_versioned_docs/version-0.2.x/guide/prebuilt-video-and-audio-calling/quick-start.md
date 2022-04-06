---
title: Quick Start with Prebuilt SDK
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with Prebuilt SDK
pagination_label: Quick Start with Prebuilt SDK
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

Prebuilt SDK enables the opportunity to integrate real-time communication SDK without writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue, and Angular.

## Prerequisites

:::important

One should have a videoSDK account to generate token.
Visit our **[Dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

## Implementing Meeting with Prebuilt VideoSDK

1. Create an `index.html` file and add the following `<script>` tag at the end of your code's `<body>` tag. Initialize `VideoSDKMeeting` after the script gets loaded.

```html title="index.html"
<script>
  var script = document.createElement("script");
  script.type = "text/javascript";

  script.addEventListener("load", function (event) {
    const config = {
      name: "Demo User",
      meetingId: "milkyway",
      apiKey: "<API KEY>",

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,

      /*

     Other Feature Properties
      
      */
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  });

  script.src =
    "https://sdk.videosdk.live/rtc-js-prebuilt/0.2.6/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

## Run and Test

Install any HTTP server if you don't already have one and run the server to join the meeting from the browser.

<Tabs
defaultValue="node"
groupId={"server-group-id"}
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'PHP', value: 'php'},
{label: 'WAMP', value: 'wamp'},
{label: 'XAMPP', value: 'xampp'},
]}>
<TabItem value="node">

```bash
$ npm install -g live-server
$ live-server --port=8000
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="python">

```bash
$ python3 -m http.server
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="php">

```bash
$ php -S localhost:8000
```

and open [http://localhost:8000](http://localhost:8000) in your web browser

</TabItem>
<TabItem value="wamp">

```
Move the HTML file to C:\wamp\www and start the WAMP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
<TabItem value="xampp">

```
Move the HTML file to C:\xampp\htdocs and start the XAMPP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
</Tabs>

![Prebuilt SDK Example to add video call widget in your web application](/img/prebuilt/prebuilt-grid.png)

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on GitHub or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer.

:::
