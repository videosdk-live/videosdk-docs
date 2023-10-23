---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Room Class Methods
title: Room Class Methods
---

# Room Class Methods - Flutter

<div class="sdk-api-ref-only-h4">

### join()

- After creating the instance of VideoSDK Room, you can join VideoSDK Room by calling `join()` method.

#### Events associated with `join()`:

- Local Participant will receive a [`roomJoined`](events#roomjoined) event, when successfully joined.
- Remote Participant will receive a [`participantJoined`](events#participantjoined) event with the newly joined [`Participant`](../participant-class/introduction) object from the event handler.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the room directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`entryRequested`](events#entryrequested).

- After the decision from the remote participant, an event will be emitted to participant called [`entryResponded`](events#entryresponded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the permission `allow_join`, then the participant will join the room directly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current running room session.

#### Events associated with `leave()`:

- Local participant will receive a [`roomLeft`](events#roomleft) event.
- All remote participants will receive a [`participantLeft`](events#participantleft) event with `participantId` string from the event handler.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running room session.
- By calling `end()`, all joined [participants](properties#participants) including [localParticipant](properties#localparticipant) of that session will leave the room.

#### Events associated with `end()`:

- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`roomLeft`](events#roomleft) event.

#### Returns

- _`void`_

---

### enableCam()

- It is used to enable camera device.
- [`streamEnabled`](../participant-class/events#streamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### disableCam()

- It is used to disable camera device.
- [`streamDisabled`](../participant-class/events#streamdisabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable microphone device.
- [`streamEnabled`](../participant-class/events#streamenabled) event will be emitted with [`stream`](../stream-class/introduction) object from the event handler, inside that [participant](../participant-class/introduction) object.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable microphone device.
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

### changeMode()

- It is used to change the mode fo the participant from `CONFERENCE` to `VIEWER` and vice-versa.
- [`participantModeChange`](./events#participantmodechanged) event will be emitted with `participantId` and `mode` of the participant

#### Parameters

- **requestedMode**: `Mode.CONFERENCE` | `Mode.VIEWER`

#### Returns

- _`void`_

#### Example

```javascript
room.changeMode(Mode.CONFERENCE);
```

---

### startRecording()

- It is used to start room recording.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`recordingStarted`](events#recordingstarted) event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

#### Parameters

- **webhookUrl**: String

- **awsDirPath**: String

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _\`max 4\`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
  - **orientation**: _"landscape"_ | _"portrait"_

#### Returns

- _`void`_

#### Example

```javascript
const webhookUrl = "https://webhook.your-api-server.com";

room.startRecording(webhookUrl:webhookUrl,
 config: {
  'layout': {
    'type': 'GRID',
    'priority': 'SPEAKER',
    'gridSize': 4,
  },
  'theme': "LIGHT",
  "mode": "video-and-audio"
});
```

---

### stopRecording()

- It is used to stop room recording.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`recordingStopped`](events#recordingstopped) event.

#### Returns

- _`void`_

#### Example

```javascript
room.stopRecording();
```

---

### startLivestream()

- It is used to start room livestreaming.
- You will be able to start livestream the room to another platforms such as Youtube, Facebook, etc. that supports [`rtmp`](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) streaming.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`liveStreamStarted`](events#livestreamstarted) event.

#### Parameters

- **outputs**: `List<Map<String, String>>` [{ **url**: String, **streamKey**: String }]

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _\`max 4\`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_

#### Returns

- _`void`_

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
var liveStreamConfig =  {
  'layout': {
    'type': 'GRID',
    'priority': 'SPEAKER',
    'gridSize': 4,
  },
  'theme': "LIGHT",
};
room.startLivestream(outputs, config: livestreamConfig);
```

---

### stopLivestream()

- It is used to stop room livestreaming.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`livestreamStopped`](events#livestreamstopped) event.

#### Returns

- _`void`_

#### Example

```javascript
room.stopLivestream();
```

---

### startHls()

- It is used to start HLS.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`hlsStarted`](events#hlsstarted) event with the `downstreamUrl` of the HLS feed.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _\`max 25\`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
  - **oreintation**: _"landscape"_ | _"portrait"_

#### Returns

- _`void`_

#### Example

```javascript
room.startHls(config: {
  'layout': {
    'type': 'GRID',
    'priority': 'SPEAKER',
    'gridSize': 4,
  },
  'theme': "LIGHT",
  "mode": "video-and-audio"
});
```

---

### stopHls()

- It is used to stop HLS.
- All [participants](properties#participants) and [localParticipant](properties#localparticipant), will receive [`hlsStopped`](events#hlsstopped) event.

#### Returns

- _`void`_

#### Example

```javascript
room.stopHls();
```

---

### getCameras()

- It will return all connected camera devices.

#### Returns

- List< [`MediaDeviceInfo`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html) >

#### Example

```javascript
List<MediaDeviceInfo> cams = room.getCameras();
print(cams);
```

---

### changeCam()

- It is used to change the camera device.
- If multiple camera devices are connected, by using `changeCam()`, one can change the camera device with camera device id.
- You can get list of connected video devices using [`VideoSDK.mediaDevices`](../videosdk-class/properties#mediadevices)

#### Parameters

- **deviceId**: String

#### Returns

- _`void`_

#### Example

```javascript
room.changeCam(deviceId);
```

---

### getAudioOutputDevices()

- It will return all the available audio output devices.

#### Returns

- List< [`MediaDeviceInfo`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html) >

#### Example

```javascript
List<MediaDeviceInfo> audioOutputDevices = room.getAudioOutputDevices();
print(audioOutputDevices);
```

---

### switchAudioDevice()

- It is used to change the audio output device.
- You can get list of connected audio output devices using [`getAudioOutputDevices`](#getaudiooutputdevices)

#### Parameters

- **device**: MediaDeviceInfo

#### Returns

- _`void`_

#### Example

```javascript
room.switchAudioDevice(device);
```

---

### on()

- It is used to listen [`Room`](introduction) related events.

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
room.on(Events.roomJoined, () {
  // do something
});
```

</div>
