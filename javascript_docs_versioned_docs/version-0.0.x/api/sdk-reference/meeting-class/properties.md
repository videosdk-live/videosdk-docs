---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

<div class="api">

### id

- `type`: String
- `id` represents the meetingId for the current meeting

### activeSpeakerId

- `type`: String
- `id` represents the activeSpeakerId for the current meeting

### activePresenterId

- `type`: String
- `id` represents the activePresenterId for the current meeting

### mainParticipantId

- `type`: String
- `id` represents the mainParticipantId for the current meeting

### localParticipant

- `type`: Participant
- `localParticipant` represents the local participant of the meeting

### participants

- `type`: Map<String, Participant>
- `participants` represents all remote participants in the meeting

### pubSub

- `type`: PubSub
- `pubSub` represents Publisher-Subscriber feature

### messages `deprecated`

- `type`: Array<{senderId: string, text: string, timestamp: number}>
- `messages` represents chat feature

</div>
