---
title: Client Setup
hide_title: false
hide_table_of_contents: false
description: videosdk.live tutorials will help you to deep dive into details of all the SDK and API. We tried to include example of all the possible programming langaguges.
sidebar_label: Client Setup
pagination_label: Client Setup
keywords:
  - video api
  - prebuilt-js
  - embedded-sdk
  - tutorials
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: client-setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Prebuilt SDK enables opportunity to integrate real-time communication SDK witout writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

:::note

Also check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer to get started quickly.

:::

## Step 1: Add script and setup the meeting

Create an `index.html` file and add the following `<script>` tag at the end of your code's `<body>` tag. Intialize `VideoSDKMeeting` after the script gets loaded. Replace the `apiKey` with the one generated in Previous Step [Signup & Create API Key](/docs/guide/prebuilt-video-calling/signup-and-create-api).

```html title="index.html"
<script>
  var script = document.createElement("script");
  script.type = "text/javascript";

  script.addEventListener("load", function (event) {
    const meeting = new VideoSDKMeeting();

    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in step 1
      meetingId: "milkyway", // enter your meeting id

      containerId: null,

      /**
       FEATURE ATTRIBUTES
      */
    };

    meeting.init(config);
  });

  script.src =
    "https://sdk.videosdk.live/rtc-js-prebuilt/0.1.12/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

## Step 2: Run the application

Install any http server if you don't already have one and run the server to join meeting from browser.

<Tabs
defaultValue="node"
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
Move the html file to C:\wamp\www and start the WAMP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
<TabItem value="xampp">

```
Move the html file to C:\xampp\htdocs and start the XAMPP server
```

and open [http://localhost/index.html](http://localhost/index.html) in your web browser

</TabItem>
</Tabs>

![Prebuilt SDK Example to add video call widget in your web application](/img/tutorial/integrate-it-anywhere.jpg)

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer.

:::
