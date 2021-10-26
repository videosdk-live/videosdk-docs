---
title: Prebuilt Join Meeting Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Join Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Join Screen
pagination_label: Join Screen
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-screen
---

# Join Screen

After the successful installation of videoSDK prebuilt, the next step is to integrate videoSDK prebuilt features with your webApp.

To Communicate with other participant's audio or video call, you will need to join the meeting.

This guide will provide an overview of how to setup join feature in VideoSDK prebuilt.

### How it works ?

- While JoinScreen `visible` value is set to `true`, the below screen will display before the meeting start.

![Go live with VideoSDK](/img/prebuilt/prebuilt-join-screen.png)

- While JoinScreen `visible` value is set to `false`, the below screen will display before the meeting start and you have to click any where to start meeting.

![Go live with VideoSDK](/img/prebuilt/prebuilt-click-anywhere.png)

### Join Screen Attributes

To configure join screen feature, you need to add join screen object in meeting config.

`joinScreen` object has following attributes:

- `visible`: If you want to show join screen before the start of the meeting set it `true `otherwise `false`.

- `title`: Meeting title.
- `meetingUrl`: Meeting join url, where your meeting will be hosted.

```js title="index.html"
const config = {
  // ...
  joinScreen: {
    visible: true,
    title: "Daily scrum",
    meetingUrl: "customURL.com",
  },
  // ...
};
```
