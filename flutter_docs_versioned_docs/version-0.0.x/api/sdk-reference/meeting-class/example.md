---
title: Meeting class for Flutter SDK.
hide_title: true
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Example
pagination_label: Meeting Class Example
keywords:
  - RTC Flutter
  - Meeting Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-class-example
---

# Meeting Class Example

```js title="Play with meeting instance"
// Join the meeting
meeting?.join();

// Get local participants
meeting?.localParticipant;

// Get remote participants
meeting?.participants;

// Adding event listner
meeting.on(Events.participantJoined, (Participant participant) {
  print("new participant => $participant");
  },
);
```
