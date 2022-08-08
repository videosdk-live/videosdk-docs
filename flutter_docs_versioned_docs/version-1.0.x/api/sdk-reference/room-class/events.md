---
title: Room Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Room Class Events
---

<div class="sdk-api-ref-only-h4">

---

### roomJoined

- This event will be emitted when a [localParticipant](properties#localparticipant) successfully joined the room.

#### Example

```javascript
room.on(Events.roomJoined, (){
  // do something
});
```

---

### roomLeft

- This event will be emitted when a [localParticipant](properties#localparticipant) left the room.

#### Example

```javascript
room.on(Events.roomLeft, () {
  // do something
});
```

---

### participantJoined

- This event will be emitted when a new [participant](../participant-class/introduction) joined the room.

#### Event handler parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```javascript
room.on(Events.participantJoined, (participant) {
  // do something
});
```

---

### participantLeft

- This event will be emitted when a joined [participant](../participant-class/introduction) left the room.

#### Event handler parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```javascript
room.on(Events.participantLeft, (participant) {
  // do something
});
```

---

### speakerChanged

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as an event handler parameter.

#### Event handler parameters

- **activeSpeakerId**: String?

#### Example

```javascript
room.on(Events.speakerChanged, (activeSpeakerId) {
  // do something
});
```

---

### presenterChanged

- This event will be emitted when any [participant](../participant-class/introduction) starts or stops screen sharing.
- It will pass `participantId` as an event handler parameter.
- If a participant stops screen-sharing, then this event will pass `null` as en event handler parameter.

#### Event handler parameters

- **activePresenterId**: String?

#### Example

```javascript
room.on(Events.presenterChanged, (activePresenterId) {
  // do something
});
```

---

### entryRequested

- This event will be emitted when a new [participant](../participant-class/introduction), who is trying to join the room, is having permission **`ask_join`** in token.
- This event will only be emitted to the [participants](properties#participants) in the room, who is having the permission **`allow_join`** in token.
- This event will pass following parameters as an event parameters, `participantId` and `name` of the new participant who is trying to join the room, `allow()` and `deny()` to take required actions.

#### Event handler parameters

- **data**: `Map<String, dynamic>`{ **"allow"**: Function; **"deny"**: Function; **"name"**: String; **"participantId"**: String }
  - **allow**: Function
  - **deny**: Function
  - **name**: String
  - **participantId**: String

#### Example

```javascript
room.on(Events.entryRequested, (data){
  String? participantId = data["participantId"];
  String? name = data["name"];

  Function allow = data["allow"];
  Function deny = data["deny"];

  print("$name requested to join the room.");

  // If you want to allow the entry request
  allow();

  // if you want to deny the entry request
  deny();
});
```

---

### entryResponded

- This event will be emitted when the `join()` request is responded.
- This event will be emitted to the [participants](properties#participants) in the room, who is having the permission **`allow_join`** in token.
- This event will be also emitted to the [participant](../participant-class/introduction), who requested to join the room.

#### Event handler parameters

- **participantId**: _String_
- **decision**: _"allowed"_ | _"denied"_

#### Example

```javascript
room.on(Events.entryResponded, (participantId, decision) {
  // participantId will be id of participant, who requested to join room

  if (decision === "allowed") {
    // entry allowed
  } else {
    // entry denied
  }
});
```

---

### cameraRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable camera of participant `B`.
- On accepting the request, camera of participant `B` will be enabled.

#### Event handler parameters

- **data**: `Map<String, dynamic>`{ **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
room.on(Events.cameraRequested, (data) {
  String? participantId = data["participantId"];

  Function accept = data["accept"];
  Function reject = data["deny"];

  // participantId, will be the id of participant who requested to enable camera

  // if accept request
  accept();

  // if reject request
  reject();
});
```

---

### micRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event handler parameters

- **data**: Map<String, dynamic>{ **accept**: Function; **participantId**: String; **reject**: Function }
  - **accept**: Function
  - **participantId**: String
  - **reject**: Function

#### Example

```javascript
room.on(Events.micRequested, (data) {
  String participantId = data["participantId"];

  Function accept = data["accept"];
  Function reject = data["reject"];

  // participantId, will be the id of participant who requested to enable camera

  // if accept request
  accept();

  // if reject request
  reject();
});
```

---

### recordingStarted

- This event will be emitted when recording of the room is started.

#### Example

```javascript
room.on(Events.recordingStarted, () {
  // do something
});
```

---

### recordingStopped

- This event will be emitted when recording of the room is stopped.

#### Example

```javascript
room.on(Events.recordingStopped, () {
  // do something
});
```

---

### liveStreamStarted

- This event will be emitted when `RTMP` live stream of the room is started.

#### Example

```javascript
room.on(Events.liveStreamStarted, () {
  // do something
});
```

---

### liveStreamStopped

- This event will be emitted when `RTMP` live stream of the room is stopped.

#### Example

```javascript
room.on(Events.liveStreamStopped, () {
  // do something
});
```

</div>
