---
title: Prebuilt Set Permissions Audio & Video Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Set Permissions features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Customize Permissions
pagination_label: Customize Permissions
keywords:
  - allow join
  - toggle participant mic
  - toggle participant webcam
  - toggle participant camera
  - audio calling
  - video calling
  - real-time communication
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: customize-permissions
---

# Set Permissions

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

```js title="index.html"
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

- Permission (Join / Mic / Webcam) pop up will appear as describe in below image.

![Go live with VideoSDK](/img/prebuilt/prebuilt-permission.png)
