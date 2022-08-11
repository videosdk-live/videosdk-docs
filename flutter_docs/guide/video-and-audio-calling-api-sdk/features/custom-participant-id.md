---
title: Custom Participant ID - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Custom participant id features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Participant ID
pagination_label: Custom Participant ID
keywords:
  - custom participant id
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: custom-participant-id
---

# Custom Participant ID

- Whenever any participant joins meeting, it is assigned a new unique participant id every time.

- To assign an unique participant id manually to local participant, specify participant id in `MeetingBuilder`.

```js
MeetingBuilder(
    .
    .
    participantId: "abcd-efgh-ijkl", // custom participant id
),
```
