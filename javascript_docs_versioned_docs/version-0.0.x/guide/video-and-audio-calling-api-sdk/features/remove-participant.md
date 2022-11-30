---
title: Remove participant from the meeting - JavaScript SDK
hide_title: false
hide_table_of_contents: false
description: Remove participant from the meeting while session is running. 
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - block participant
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  
  // Remove participant from active session
  // This will emit an event called "onParticipantLeft" to that particular participant
  meeting?.remove();
};
```

### Events

**meeting-left** - Removing participant will trigger `meeting-left` event.

```js
meeting.on("participant-left", (participant) => {
  // Triggers when a participant is removed or leaves the meeting.
});
```
