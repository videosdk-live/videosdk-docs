---
title: Join Screen
hide_title: false
hide_table_of_contents: false
description: This guide will explain joining process of meeting.
sidebar_label: Join Screen
pagination_label: Join Screen
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-meeting
---

After the successful installation of videoSDK prebuilt, the next step is to integrate videoSDK prebuilt features with your webApp.

To Communicate with other participant's audio or video call, you will need to join the meeting.

This guide will provide an overview of how to setup join feature in VideoSDK prebuilt.

### How it works. ?

- While JoinScreen `visible` value set to `true`, the below screen will display before the meeting start.

![Go live with VideoSDK](/img/prebuilt/prebuilt-join-screen.png)

- While JoinScreen `visible` value set to `false`, the below screen will display before the meeting start and you have to click any where to start meeting.

![Go live with VideoSDK](/img/prebuilt/prebuilt-click-anywhere.png)

### Join Screen Attributes

To configure join screen feature, you need to add join screen object in meeting config.

`joinScreen` object has following attributes:

- `visible`: If you want to show join screen before the start of the meeting set it `true `otherwise `false`.

- `title`: Meeting title.
- `meetingUrl`: Meeting join url, where your meeting will be hosted.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'}
]}>
<TabItem value="js">

```js
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

</TabItem>

</Tabs>
