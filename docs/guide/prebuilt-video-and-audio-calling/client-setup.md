---
title: Prebuilt Set up Video & Audio Call | Video SDK Embedded
hide_title: false
hide_table_of_contents: false
description: Prebuit Video SDK supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular and more. Embedded Video calling build up scalable video conferencing applications or website.
sidebar_label: Client Setup
pagination_label: Client Setup
keywords:
  - scalable video conferencing
  - prebuilt video sdk
  - video sdk embedded
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: client-setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Client Setup

Prebuilt SDK enables opportunity to integrate real-time communication SDK witout writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

:::note

Also check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer to get started quickly.

:::

## Setup Meeting using npm package manager

### Step 1: Install Package

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install @videosdk.live/rtc-js-prebuilt
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/rtc-js-prebuilt
```

</TabItem>
</Tabs>

### Step 2: Initialize Meeting

Copy API key generated from [Signup & Create API Key](/docs/guide/prebuilt-video-and-audio-calling/signup-and-create-api) , paste it in to `apiKey` attribute.

<Tabs
defaultValue="react"
groupId={"client-group-id"}
values={[
{label: 'React', value: 'react'},
{label: 'Angular', value: 'angular'},
{label: 'Vue', value: 'vue'}
]}>
<TabItem value="react">

```js
import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

export default function App() {
  useEffect(() => {
    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in step 1
      meetingId: "milkyway", // enter your meeting id

      containerId: null,

      /**
       FEATURE ATTRIBUTES
      */
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div></div>;
}
```

</TabItem>
<TabItem value="angular">

```js
import { Component, OnInit } from "@angular/core";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { environment } from "./../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in step 1
      meetingId: "milkyway", // enter your meeting id

      containerId: null,

      /**
       FEATURE ATTRIBUTES
      */
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }
}
```

</TabItem>

<TabItem value="vue">

```js
<script>
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

export default {
  name: "App",
  mounted: async function() {
    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in step 1
      meetingId: "milkyway", // enter your meeting id

      containerId: null,

      /**
       FEATURE ATTRIBUTES
      */
    };
    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  },
};
</script>

```

</TabItem>
</Tabs>
Now, you can run it in your Web Browser.

## Setup Meeting using `script` tag

### Step 1: Add script and setup the meeting

Create an `index.html` file and add the following `<script>` tag at the end of your code's `<body>` tag. Initialize `VideoSDKMeeting` after the script gets loaded. Replace the `apiKey` with the one generated in Previous Step [Signup & Create API Key](/docs/guide/prebuilt-video-and-audio-calling/signup-and-create-api).

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
    "https://sdk.videosdk.live/rtc-js-prebuilt/0.1.27/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

### Step 2: Run the application

Install any http server if you don't already have one and run the server to join meeting from browser.

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

![Prebuilt SDK Example to add video call widget in your web application](/img/prebuilt/prebuilt-grid.png)

:::note

Stuck anywhere? Check out this [example code](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-js-prebuilt-embedded-example/archive/refs/tags/v0.1.1.zip) the full source code and unzip on your computer.

:::
