---
sidebar_label: Overview
pagination_label: Overview
---

# Overview

This feature allows participant for establishing connection and getting information from other meetings. Also, a participant will have basic control over other running meetings.

For example, there are two meetings are running parallelly **Meeting A** and **Meeting B**, in case one of the participant from **Meeting A** wants to access information of **Meeting B** without joining it, now this can be achieved by establishing connection between meetings, so that participants of **Meeting A** and **Meeting B** will get all the updates from each other.

For This feature, we introduce three new entities/classes :

1. [Connection](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#1-connection)
2. [ConnectionMeeting](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#2-connectionmeeting)
3. [ConnectionParticipants](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#3-connectionparticipants)

### 1. Connection

Whenever new connection establish between meetings, **Connection** instance is created inside Meeting class property `connections`.

#### **Connection object properties** :

| Property Name | Type                                                                                                              | Description                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id            | string                                                                                                            | Unique id of the connection.                  |
| payload       | string                                                                                                            | The payload you define during the connection. |
| meeting       | [ConnectionMeeting](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#2-connectionmeeting) | Connected Meeting Instance.                   |

### 2. ConnectionMeeting

This entity is the instance of connected Meeting.

#### **ConnectionMeeting object properties** :

| Property Name | Type                                                                                                                               | Description                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id            | string                                                                                                                             | Unique id of the connection meeting. |
| participants  | Map of [ConnectionParticipants](/javascript/guide/video-and-audio-calling-api-sdk/features/connection/overview#3-connectionparticipants) | Participants of connected meeting.   |

:::note

- This ConnectionMeeting instance will provide only limited functionality and controls over the connected meetings.
- You will not able to access each and every control of that connected meetings.

:::

### 3. ConnectionParticipants

#### **ConnectionParticipants object properties** :

| Property Name | Type   | Description                   |
| ------------- | ------ | ----------------------------- |
| id            | string | Unique id of the participant. |
| displayname   | string | Displayname of Participant.   |
