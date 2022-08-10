---
title: Room class for Flutter SDK.
hide_title: true
hide_table_of_contents: false
description: Videosdk Room Class provides features to implement custom room layout in your application.
sidebar_label: Example
pagination_label: Room Class Example
keywords:
  - RTC Flutter
  - Room Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: room-class-example
---

# Room Class Example

```js title="Play with room instance"
// Join the room
room?.join();

// Get local participants
room?.localParticipant;

// Get remote participants
room?.participants;

// Adding event listner
room.on(Events.participantJoined, (Participant participant) {
  print("new participant => $participant");
  },
);
```
