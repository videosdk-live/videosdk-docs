---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

# Meeting Class Methods - Flutter

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`MeetingBuilder Widget`](../meeting-builder/introduction), it returns a new instance of [Meeting](introduction.md). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`meetingJoined`](events#meetingJoined) event, when successfully joined.
- Remote Participant will receive a [`participantJoined`](events#participantjoined) event with the newly joined [`Participant`](../participant-class/introduction.md) object from the event handler.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entryRequested`](events#entryrequested).

- After the decision from the remote participant, an event will be emitted to participant called [`entryResponded`](events#entryresponded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the permission `allow_join`, then the participant will join the meeting directly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`meetingLeft`](events#meetingleft) event.
- All remote participants will receive a [`participantLeft`](events#participantleft) event with `participantId` string from the event handler.

#### Returns

- _`void`_

---

<!-- ### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](properties#participants) including [localParticipant](properties#localparticipant) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will be emitted [`meetingLeft`](events#meetingLeft) event.

#### Returns

- _`void`_

--- -->

### enableWebcam()

- It is used to enable self camera.
- [`streamEnabled`](../participant-class/events#streamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to enable self camera.
- [`streamDisabled`](../participant-class/events#streamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- [`streamEnabled`](../participant-class/events#streamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- [`streamDisabled`](../participant-class/events#streamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### enableScreenShare()

- it is used to enable screen-sharing.
- [`streamEnabled`](../participant-class/events#streamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.
- [presenterChanged](./events#presenterchanged) will also receive a callback with the `presenterId`.

#### Returns

- _`void`_

---

### disableScreenShare()

- It is used to disable screen-sharing.
- [`streamDisabled`](../participant-class/events#streamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.
- [presenterChanged](./events#presenterchanged) will also receive a callback with the `null`.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`recordingStarted`](events#recordingstarted) event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

#### Parameters

- **webhookUrl**: String

#### Returns

- _`void`_

#### Example

```javascript
const webhookUrl = "https://webhook.your-api-server.com";

meeting.startRecording(webhookUrl);
```

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`recordingStopped`](events#recordingstopped) event.

#### Returns

- _`void`_

#### Example

```javascript
meeting.stopRecording();
```

---

### startLivestream()

- It is used to start meeting livestreaming.
- You will be able to start livestream the meeting to another platforms such as Youtube, Facebook, etc. that supports [`rtmp`](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) streaming.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`liveStreamStarted`](events#livestreamstarted) event.

#### Parameters

- **outputs**: `List<Map<String, String>>` [{ **url**: String, **streamKey**: String }]

#### Returns

- _`void`_

---

#### Example

```javascript
var outputs = [
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "<STREAM_KEY>",
  },
  {
    url: "rtmps://",
    streamKey: "<STREAM_KEY>",
  },
];

meeting.startLivestream(outputs);
```

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`livestreamStopped`](events#livestreamstopped) event.

#### Returns

- _`void`_

#### Example

```javascript
meeting.stopLivestream();
```

---

### getWebcams()

- It will return all camera devices connected.

#### Returns

- List< [`MediaDeviceInfo`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html) >

#### Example

```javascript
List<MediaDeviceInfo> webcams = meeting.getWebcams();
print(webcams);
```

---

### changeWebcam()

- It is used to change the webcam device.
- If multiple webcam devices are connected, by using `changeWebcam()`, one can change the camera device.

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

#### Example

```javascript
meeting.changeWebcam(deviceId);
```

---

### on()

- It is used to listen [`Meeting`](introduction) related events.

#### Parameters

- event

  - type: [`Events`](events)
  - This will specify the event to be listened.

- eventHandler
  - type: [`Function`](https://api.dart.dev/stable/2.15.1/dart-core/Function-class.html)
  - This will be invoked whenever, specified event occurred.

#### Returns

- _`void`_

#### Example

```js
meeting.on(Events.meetingJoined, () {
  // do something
});
```

</div>
