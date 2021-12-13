---
title: Remove Participant
hide_title: false
hide_table_of_contents: false
description: This guide will explain about remove particiapnt.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - Remove Participant
  - Kickout Participant
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

This fetaure will allow any participant to remove other participant in the meeting.

### How it works ?

- while `removeParticipant`: value is set to `true`, you will able to see remove participant icon in participants panel. By clicking you will be able to remove participant from meeting.

![remove-participant](/img/prebuilt/prebuilt-remove-participant.png)

### Remove Participant attributes

```js title="index.html"
const config = {
  // ... other configuration
  permissions: {
    // ... other permission
    removeParticipant: true,
  },
  // ...
};
```
