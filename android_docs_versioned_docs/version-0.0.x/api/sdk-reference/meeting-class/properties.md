---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

<div class="sdk-api-ref-only-h4">

### getmeetingId()

- type: `String`

- `getmeetingId()` will return `meetingId`, which is unique id of the meeting where the participant has joined.

---

### getLocalParticipant()

- type: [Participant](../participant-class/introduction)

- It will return the instance of [Participant](../participant-class/introduction) class for the local participant who joined the meeting.

---

### getParticipants()

- type: [`Map`](https://developer.android.com/reference/java/util/Map) of [Participant](../participant-class/introduction)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](../participant-class/introduction)>

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`Map`](https://developer.android.com/reference/java/util/Map) what will container all participants attached with the key as id of that participant.

```javascript
String remoteParticipantId = "ajf897";

Participant participant = meeting.getParticipants().get(remoteParticipantId);
```

---

### pubSub

- type: [`PubSub`](../pubsub-class/introduction)
- It is used to enable Publisher-Subscriber feature in [`meeting`](introduction) class.

Learn more about `PubSub`, [here](../pubsub-class/introduction)

</div>
