---
sidebar_position: 1
sidebar_label: MeetingEventListener Class
pagination_label: MeetingEventListener Class
title: MeetingEventListener Class
---

<div class="sdk-api-ref-only-h4">

---

### implementation

- You can implement all the methods of `MeetingEventListener` abstract Class and add the listener to `Meeting` class using the  `addEventListener()` method of `Meeting` Class.

#### Example

```javascript
 private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    @Override
    public void onMeetingJoined() {
        Log.d("#meeting", "onMeetingJoined()");
    }
  }
```

---

### onMeetingJoined()

- This event will be emitted when a [localParticipant](./) successfully joined the meeting.

#### Example

```javascript
 @Override
 public void onMeetingJoined() {
     Log.d("#meeting", "onMeetingJoined()");
 }
```

---

### onMeetingLeft()

- This event will be emitted when a [localParticipant](./) left the meeting.

#### Example

```javascript
 @Override
 public void onMeetingLeft() {
    Log.d("#meeting", "onMeetingLeft()");
 }
```

---

### onParticipantJoined()

- This event will be emitted when a new [participant](./) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](./)

#### Example

```javascript
 @Override
 public void onParticipantJoined(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " joined");
 }
```

---

### onParticipantLeft

- This event will be emitted when a joined [participant](./) left the meeting.

#### Event callback parameters

- **participant**: [Participant](./)

#### Example

```javascript
 @Override
 public void onParticipantLeft(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " left");
 }
```

---

### onSpeakerChanged()

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String

#### Example

```javascript
 @Override
 public void onSpeakerChanged(String participantId) {
  //
 }
```

---

### onPresenterChanged()

- This event will be emitted when any [participant](./) starts or stops screen sharing.
- It will pass `participantId` as an event callback parameter.
- If a participant stops screensharing, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String

#### Example

```javascript
 @Override
 public void onPresenterChanged(String participantId) {
  //
 }
```

---


### onEntryRequested()

- This event will be emitted when a new [participant](./) who is trying to join the meeting, is having permission **`ask_join`** in token.
- This event will only be emitted to the [participants](./) in the meeting, who is having the permission **`allow_join`** in token.
- This event will pass following parameters as an event parameters, `participantId` and `name` of the new participant who is trying to join the meeting, `allow()` and `deny()` to take required actions.

#### Event callback parameters

- **peerId**: String
- **name**: String

#### Example

```javascript
 @Override
 public void onEntryRequested(String id, String name) {
    //
}
```

---

### onEntryResponded()

- This event will be emitted when the `join()` request is responded.
- This event will be emitted to the [participants](./) in the meeting, who is having the permission **`allow_join`** in token.
- This event will be also emitted to the [participant](./) who requested to join the meeting.

#### Event callback parameters

- **participantId**: _String_
- **decision**: _"allowed"_ | _"denied"_

#### Example

```javascript
 @Override
 public void onEntryResponded(String id, String decision) {
    //
  }
```

---

### onWebcamRequested()

- This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String
- **listener**: WebcamRequestListener { **accept**: Method; **reject**: Method }

#### Example

```javascript
  @Override
 public void onWebcamRequested(String participantId, WebcamRequestListener listener) {
     // if accept request
     listener.accept();
    
     // if reject request
     listener.reject();
 }
```

### onMicRequested()

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String
- **listener**: MicRequestListener { **accept**: Method; **reject**: Method }

#### Example

```javascript
 @Override
 public void onMicRequested(String participantId, MicRequestListener listener) {
     // if accept request
     listener.accept();
    
     // if reject request
     listener.reject();
 }
```

---

### onRecordingStarted()

- This event will be emitted when recording of the meeting is started.

#### Example

```javascript
 @Override
 public void onRecordingStarted() {
   //
}
```

---

### onRecordingStopped()

- This event will be emitted when recording of the meeting is stopped.

#### Example

```javascript
 @Override
 public void onRecordingStopped() {
   //
 }
```

---

### onLivestreamStarted()

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

```javascript
 @Override
 public void onLivestreamStarted() {
   //
 }
```

---

### onLivestreamStopped()

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

```javascript
 @Override
 public void onLivestreamStopped() {
   //
 }
```

---

### onExternalCallStarted()

- This event will be emitted when any call answer/dial by participant.

#### Example

```javascript
 @Override
 public void onExternalCallStarted() {
   //
 }
```

---

</div>
