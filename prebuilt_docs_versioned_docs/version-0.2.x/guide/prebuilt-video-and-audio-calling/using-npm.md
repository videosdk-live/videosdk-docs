---
title: Setup Meeting using NPM package manager
hide_title: false
hide_table_of_contents: false
description: video & audio calling sdk will help you to integrate video & audio calling in your application.
sidebar_label: Using NPM Package Manager
pagination_label: Using NPM Package Manager
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: using-npm
---

Prebuilt SDK enables opportunity to integrate real-time communication SDK without writing explicit code. It just requires 10 minutes to integrate.

It supports all the modern frameworks such as plain JavaScript, React JS, Vue and Angular.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
  }, []);

  return <div></div>;
}
```

:::note

Stuck anywhere? Check out this react [example code](https://github.com/videosdk-live/videosdk-rtc-react-prebuilt-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-react-prebuilt-example/archive/refs/heads/main.zip) the full source code and unzip on your computer.

:::

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
  }
}
```

:::note

Stuck anywhere? Check out this angular [example code](https://github.com/videosdk-live/videosdk-rtc-angular-prebuilt-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-angular-prebuilt-example/archive/refs/heads/main.zip) the full source code and unzip on your computer.

:::

</TabItem>

<TabItem value="vue">

```js
<script>
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
export default {
  name: "App",
  data() {
    return {
      name: "Flavio",
    };
  },
  mounted: async function() {

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
  },
};
</script>

```

:::note
Stuck anywhere? Check out this vue [example code](https://github.com/videosdk-live/videosdk-rtc-vue-prebuilt-example) on github or [download](https://github.com/videosdk-live/videosdk-rtc-vue-prebuilt-example/archive/refs/heads/main.zip) the full source code and unzip on your computer.

:::

</TabItem>
</Tabs>

### Step 3: Run the application

Now, final step is to run the application and verify prebuilt in browesr.

```bash
$ npm start
```

![Prebuilt SDK Example to add video call widget in your web application](/img/prebuilt/prebuilt-grid.png)
