---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

# Meeting Class Properties - React Native

<div class="sdk-api-ref-only-h4">

### getmeetingId()

- type: `String`

- `getmeetingId()` will return `meetingId`, which is unique id of the meeting where the participant has joined.

---

### getLocalParticipant()

- type: [Participant](../participant-class/introduction)

- It will be the instance of [Participant](../participant-class/introduction) class for the local participant(You) who joined the meeting.

---

### getParticipants()

- type: [`Map`](https://developer.android.com/reference/java/util/Map) of [Participant](../participant-class/introduction)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](../participant-class/introduction)>

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`Map`](https://developer.android.com/reference/java/util/Map) what will container all participants attached with the key as id of that participant.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val remoteParticipantId = "ajf897"

val participant = meeting!!.participants[remoteParticipantId]
```

</TabItem>

<TabItem value="Java">

```javascript
String remoteParticipantId = "ajf897";

Participant participant = meeting.getParticipants().get(remoteParticipantId);
```

</TabItem>

</Tabs>

---

### pubSub

- type: [`PubSub`](../pubsub-class/introduction)
- It is used to enable Publisher-Subscriber feature in [`meeting`](introduction) class.

Learn more about `PubSub`, [here](../pubsub-class/introduction)

</div>
