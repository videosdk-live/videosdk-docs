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

This feature allows any participant to end meeting.

### How it works ?

- When `endMeeting` value is set to `true`, you will able to see options as displayed in image below. Ending the meeting makes all participants leave the meeting.

![End meeting button](/img/prebuilt/prebuilt-end-meeting.png)

### End Meeting attributes

```js title="index.html"
const config = {
  // ... other configuration
  permissions: {
    // ... other permissions
    endMeeting: true,
  },
  // ...
};
```
