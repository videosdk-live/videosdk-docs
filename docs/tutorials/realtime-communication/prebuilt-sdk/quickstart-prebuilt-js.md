---
title: Quickstart for Prebuilt JS
hide_title: false
hide_table_of_contents: false
description: videosdk.live tutorials will help you to deep dive into details of all the SDK and API. We tried to include example of all the possible programming langaguges.
sidebar_label: with Prebuilt JS
pagination_label: Quickstart for Prebuilt JS
keywords:
  - video api
  - prebuilt-js
  - embedded-sdk
  - tutorials
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quickstart-prebuilt-js
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quickstart for Prebuilt JS

Prebuilt SDK enables opportunity to integrate real-time communication SDK witout writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

:::note

Also check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github to get started quickly.

:::

## Step 1: Add script to your project

### Setting up prebuilt sdk using `<script>`

The easiest way to get started is by just adding our prebuilt script in your website.

```html title="index.html"
<script src="https://sdk.videosdk.live/rtc-js-prebuilt/0.1.1/rtc-js-prebuilt.js"></script>
```

### OR

### Setting up prebuilt sdk using NPM package manager

Another way is by installing `@videosdk.live/rtc-js-prebuilt` in your app.

<Tabs
defaultValue="npm"
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm install @videosdk.live/rtc-js-prebuilt
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @videosdk.live/rtc-js-prebuilt
```

</TabItem>
</Tabs>

and include it in the html file

```html title="index.html"
<script src="node_modules/@videosdk.live/rtc-js-prebuilt/dist/index.js"></script>
```

## Step 2: Setup the meeting

Intialize `VideoSDKMeeting` on the page where you want to start meeting.

```html title="index.html"
<script>
  const meeting = new VideoSDKMeeting();

  const config = {
    name: "John Doe",
    apiKey: "YOUR API KEY", // generated from app.videosdk.live
    meetingId: "milkyway", // enter your meeting id

    containerId: null,
    redirectOnLeave: "https://www.videosdk.live/",

    micEnabled: true,
    webcamEnabled: true,
    participantCanToggleSelfWebcam: true,
    participantCanToggleSelfMic: true,

    chatEnabled: true,
    screenShareEnabled: true,
    pollEnabled: true,
    whiteBoardEnabled: true,
    raiseHandEnabled: true,

    recordingEnabled: true,
    recordingWebhookUrl: "https://www.videosdk.live/callback",
    participantCanToggleRecording: true,
  };

  meeting.init(config);
</script>
```

## Step 3: Run the application

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
