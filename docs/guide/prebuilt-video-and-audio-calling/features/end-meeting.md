---
title: End Meeting
hide_title: false
hide_table_of_contents: false
description: This guide will explain about how to end meeting.
sidebar_label: End Meeting
pagination_label: End Meeting
keywords:
  - End Meeting
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: end-meeting
---

# End Meeting

This fetaure allows any participant to end meeting.

### How it works ?

- while `endMeeting`: value is set to `true`, you will able to see options as display in below image. By Clicking on Leave only you will leave the meeting. By Clicking on End you end meeting for every participants.

![end-meeting](/img/prebuilt/prebuilt-end-meeting.png)

### End Meeting attributes

```js title="index.html"
const config = {
  // ... other configuration
  permission: {
    // ... other permission
    endMeeting: true,
  },
  // ...
};
```
