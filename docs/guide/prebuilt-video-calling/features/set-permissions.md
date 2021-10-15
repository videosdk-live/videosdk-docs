---
title: Set Permissions
hide_title: false
hide_table_of_contents: false
description: This guide will explain how to control meeting join, webcam and mic permissions for participants.
sidebar_label: Set Permissions
pagination_label: Set Permissions
keywords:
  - allow join
  - toggle participant mic
  - toggle participant webcam
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-permissions
---

This feature allows you to control meeting join, webcam and mic permissions for participants.

### Permissions Attributes

- `askToJoin`: If it is true, then participant will require to take permission before joining the meeting. If it is false, then participant will directly join meeting without any permission.

- `toggleParticipantMic`: If it is true, then participant can disable mic of other participants, but it will ask for permission when enabling mic. If it is false, then participant can not toggle mic of other participants.

- `toggleParticipantWebcam`: If it is true, then participant can disable webcam of other participants, but it will ask for permission when enabling webcam. If it is false, then participant can not toggle webcam of other participants.

:::note

- While using `askToJoin` attribute, configuration for meeting initiator (You) and other participants will be different.
  If you are meeting initiator then you must set `askToJoin` false, otherwise you won't be able to join the meeting.
- If `askToJoin` set to true, any given permissions for `toggleParticipantMic` and `toggleParticipantWebcam` will be ignored.

:::

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
  permissions: {
    askToJoin: false,
    toggleParticipantWebcam: false,
    toggleParticipantMic: false,
  },
  // ...
};
```

</TabItem>

</Tabs>

- Permission (Join / Mic / Webcam) pop up will appear as describe in below image.

![Go live with VideoSDK](/img/prebuilt/prebuilt-permission.png)
