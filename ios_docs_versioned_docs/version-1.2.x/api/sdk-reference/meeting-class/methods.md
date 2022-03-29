---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](./) it returns a new instance of [Meeting](./). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`onMeetingJoined`](./) event, when successfully joined.
- Remote Participant will receive a [`addParticipant`](./) event with the newly joined [`Participant`](./) object from the event callback.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`onMeetingLeft`](./) event.
- All remote participants will receive a [`removeParticipant`](./) event with `participantId` string from the event callback.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](./) including [localParticipant](./) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](./) and [localParticipant](./), will be emitted [`closeRoom`](./) event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- `onStreamEnabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to enable self camera.
- `onStreamDisabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- `onStreamEnabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- `onStreamDisabled` event will be emitted with [`stream`](./) object from the event callback, inside that [participant](./) object.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](./) and [localParticipant](./), will receive `onRecordingStarted` event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

#### Parameters

- **webhookUrl**: String

#### Returns

- _`void`_

#### Example

```swift
let webhookUrl = "https://webhook.your-api-server.com"

startRecording(webhookUrl: webhookUrl!)
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](./) and [localParticipant](./), will receive `onRecordingStopped` event.

#### Returns

- _`void`_

#### Example

```swift
stopRecording()
```

---

### startLivestream()

- It is used to start meeting livestreaming.
- You will be able to start livestream the meeting to another platforms such as Youtube, Facebook, etc. that supports `rtmp` streaming.
- All [participants](./) and [localParticipant](./), will receive `onLivestreamStarted` event.

#### Parameters

- **outputs**: `[LivestreamOutput]`

#### Returns

- _`void`_

---

#### Example

```swift

startLivestream(outputs: outputs)
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](./) and [localParticipant](./), will receive `onLivestreamStopped` event.

#### Returns

- _`void`_

#### Example

```swift
stopLivestream();
```

---

</div>
