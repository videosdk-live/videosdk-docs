---
title: Connection Meeting Class
sidebar_label: Connection Meeting Class
pagination_label: Connection Meeting Class
---

# Connection Meeting Class - Javascript

`ConnectionMeeting` entity is an instance of a Meeting which is connected with the current meeting.

<div class="sdk-api-ref-only-h4">

## Properties

### id

- type : `String`

- Represents Unique id of the connection meeting.

### participants

- type: `Map<ConnectionParticipant>`

- Represents Participants of connected meeting.

---

## Methods

### sendChatMessage()

- If you want to communicate participants of connected meetings, it can be achieved by `sendChatMessage`

#### Parameters

- message : `String`

#### Events associated with `sendChatMessage`:

- When any participant of Meeting A sends a chat message to Meeting B, then `chat-message` event will be emitted to all participants of Meeting B.

#### Returns

- `void`

#### Examples

```js
connection.meeting.sendChatMessage("Hi there, from MARS!");
```

---

### on()

#### Parameters

- eventType : "participant-joined" | "participant-left" | "chat-meesage"
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for participant-joined
connection.meeting.on("participant-joined", listener);

//for participant-left
connection.meeting.on("participant-joined", listener);

//for chat-message
connection.meeting.on("chat-message", listener);
```

---

### off()

#### Parameters

- eventType : "participant-joined" | "participant-left" | "chat-meesage"
- listener : `function`

#### Returns

- `void`

#### Example

```js
//for participant-joined
connection.meeting.off("participant-joined", listener);

//for participant-left
connection.meeting.off("participant-joined", listener);

//for chat-message
connection.meeting.off("chat-message", listener);
```

---

### end()

- `end()` is used to end the connected meeting.
- After executing this method, all participants of that meeting will leave automatically.

#### Returns

- `void`

#### Example

```js
connection.meeting.end();
```

---

## Events

### participant-joined

- `participant-joined` event will be emitted when any participant joins the connected meetings.

#### Example

```js
connection.meeting.on("participant-joined", () => {
  //
});
```

---

### participant-left

- `participant-left` event will be emitted when any participant leaves the connected meetings.

#### Example

```js
connection.meeting.on("participant-left", () => {
  //
});
```

---

### chat-message

- `chat-message` event will be emitted when any participant send messages in the connected meeting.

#### Example

```js
connection.meeting.on("chat-message", () => {
  //
});
```

</div>
