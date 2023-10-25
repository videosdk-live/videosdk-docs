---
title: Pin Participants
hide_title: false
hide_table_of_contents: false
description: This guide will explain pin process of meeting.
sidebar_label: Pin Participants
pagination_label: Pin Participants
keywords:
  - Pin participants
  - Pin participants
  - Pin real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pin-participants
---

# Pin Participants - Prebuilt

This feature allows participants to pin self or other participants in the meeting.

- `permissions.pin`: If it is true then that participant can pin or unpin other participants in the meeting, by default it is set to `false`.

### Pin attributes

```js title="index.html"
const config = {
  // ...
  permissions: {
    pin: true,
  },
};
```
