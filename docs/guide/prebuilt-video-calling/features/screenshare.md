---
title: Share Your Screen
hide_title: false
hide_table_of_contents: false
description: This guide will explain screen share in meeting.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

Screen sharing allows any participant who wants to share either the complete screen, a specific window or, a browser tab during the meeting.

### How it works. ?

- While `screenShareEnabled` value set to `true`, you will show screen share button as display in below image.

- While `screenShareEnabled` value set to `false`, the below screen share button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-screen-share.png)

### Screen Share Attributes

- `screenShareEnabled`: If it is true, then screen share button will be visible on top bar of the meeting. If it is false, then screen share button won't be available on top bar of the meeting.

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
  screenShareEnabled: true,
  // ...
};
```

</TabItem>

</Tabs>
