---
title: Meeting class for Flutter SDK.
hide_title: true
hide_table_of_contents: false
description: RTC Meeting Class provides features to implement custom meeting layout in your application.
sidebar_label: Properties
pagination_label: Meeting Class Properties
keywords:
  - RTC Flutter
  - Meeting Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-class-properties
---

# Meeting Class Properties

### id {#h3}

- `type`: String
- `id` represents the meetingId for the current meeting

### localParticipant {#h3}

- `type`: Participant
- `localParticipant` represents the local participant of the meeting

### participants {#h3}

- `type`: Map<String, Participant>
- `participants` represents all remote participants in the meeting

### pubSub {#h3}

- `type`: PubSub
- `pubSub` represents Publisher-Subscriber feature

### selectedWebcamId {#h3}

- `type`: String?
- `selectedWebcamId` represents the id of currently selected webcam

### selectedMicId {#h3}

- `type`: String?
- `selectedWebcamId` represents the id of currently selected mic
