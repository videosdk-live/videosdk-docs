---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

# Meeting Class Methods - React Native

<div class="sdk-api-ref-only-h4">

### join()

- It is used to join a meeting.
- After meeting initialization by [`initMeeting()`](../initMeeting) it returns a new instance of [Meeting](./introduction). However by default, it will not automatically join the meeting. Hence, to join the meeting you should call `join()`.

#### Events associated with `join()`:

- Local Participant will receive a [`onMeetingJoined`](./meeting-event-listener-class#onmeetingjoined) event, when successfully joined.
- Remote Participant will receive a [`onParticipantJoined`](./meeting-event-listener-class#onparticipantjoined) event with the newly joined [`Participant`](../participant-class/introduction) object from the event callback.

#### Participant having `ask_join` permission inside token

- If a token contains the permission `ask_join`, then the participant will not join the meeting directly after calling `join()`, but an event will be emitted to the participant having the permission `allow_join` called [`onEntryRequested`](./meeting-event-listener-class#onentryrequested).

- After the decision from the remote participant, an event will be emitted to participant called [`onEntryResponded`](./meeting-event-listener-class#onentryresponded). This event will contain the decision made by the remote participant.

#### Participant having `allow_join` permission inside token

- If a token containing the permission `allow_join`, then the participant will join the meeting directly after calling `join()`.

#### Returns

- _`void`_

---

### leave()

- It is used to leave the current meeting.

#### Events associated with `leave()`:

- Local participant will receive a [`onMeetingLeft`](./meeting-event-listener-class#onmeetingleft) event.
- All remote participants will receive a [`onParticipantLeft`](./meeting-event-listener-class#onparticipantleft) event with `participantId`.

#### Returns

- _`void`_

---

### end()

- It is used to end the current running session.
- By calling `end()`, all joined [participants](properties#getparticipants) including [localParticipant](./properties.md#getlocalparticipant) of that session will leave the meeting.

#### Events associated with `end()`:

- All [participants](./properties.md#getparticipants) and [localParticipant](./properties.md#getlocalparticipant), will be emitted [`onMeetingLeft`](./meeting-event-listener-class#onmeetingleft) event.

#### Returns

- _`void`_

---

### enableWebcam()

- It is used to enable self camera.
- [`onStreamEnabled`](../participant-class/participant-event-listener-class#onstreamenabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

#### Returns

- _`void`_

---

### disableWebcam()

- It is used to disable self camera.
- [`onStreamDisabled`](../participant-class/participant-event-listener-class#onstreamdisabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

#### Returns

- _`void`_

---

### unmuteMic()

- It is used to enable self microphone.
- [`onStreamEnabled`](../participant-class/participant-event-listener-class#onstreamenabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

#### Returns

- _`void`_

---

### muteMic()

- It is used to disable self microphone.
- [`onStreamDisabled`](../participant-class/participant-event-listener-class#onstreamdisabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

#### Returns

- _`void`_

---

### enableScreenShare()

- it is used to enable screen-sharing.

- [`onStreamEnabled`](../participant-class/participant-event-listener-class#onstreamenabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

- [`onPresenterChanged()`](./meeting-event-listener-class#onpresenterchanged) event will be trigget to all participant with `participantId`.

#### Parameters

- **data**: Intent

#### Returns

- _`void`_

---

### disableScreenShare()

- It is used to disable screen-sharing.

- [`onStreamDisabled`](../participant-class/participant-event-listener-class#onstreamdisabled) event of `ParticipantEventListener` will be emitted with [`stream`](../stream-class/introduction) object from the event callback.

- [`onPresenterChanged()`](./meeting-event-listener-class#onpresenterchanged) event will be trigget to all participant with `null`.

#### Returns

- _`void`_

---

### startRecording()

- It is used to start meeting recording.
- All [participants](./properties.md#getparticipants) and [localParticipant](./properties.md#getlocalparticipant), will receive `onRecordingStarted` event.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

#### Parameters

- **webhookUrl**: String

#### Returns

- _`void`_

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val webhookUrl = "https://webhook.your-api-server.com"

meeting!!.startRecording(webhookUrl)
```

</TabItem>

<TabItem value="Java">

```js
String webhookUrl = "https://webhook.your-api-server.com";

meeting.startRecording(webhookUrl);
```

</TabItem>

</Tabs>

---

### stopRecording()

- It is used to stop meeting recording.
- All [participants](./properties.md#getparticipants) and [localParticipant](./properties.md#getlocalparticipant), will receive `onRecordingStopped` event.

#### Returns

- _`void`_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.stopRecording()
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.stopRecording();
```

</TabItem>

</Tabs>

---

### startLivestream()

- It is used to start meeting livestreaming.
- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.
- All [participants](./properties.md#getparticipants) and [localParticipant](./properties.md#getlocalparticipant), will receive [`onLivestreamStarted`](./meeting-event-listener-class#onlivestreamstarted) event.

#### Parameters

- **outputs**: `List<LivestreamOutput>`

#### Returns

- _`void`_

---

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val YOUTUBE_RTMP_URL = "rtmp://a.rtmp.youtube.com/live2"
val YOUTUBE_RTMP_STREAM_KEY = "<STREAM_KEY>"

val outputs: MutableList<LivestreamOutput> = ArrayList()
outputs.add(LivestreamOutput(YOUTUBE_RTMP_URL, YOUTUBE_RTMP_STREAM_KEY))

meeting!!.startLivestream(outputs)
```

</TabItem>

<TabItem value="Java">

```javascript
final String YOUTUBE_RTMP_URL = "rtmp://a.rtmp.youtube.com/live2";
final String YOUTUBE_RTMP_STREAM_KEY = "<STREAM_KEY>";

List<LivestreamOutput> outputs = new ArrayList<>();
outputs.add(new LivestreamOutput(YOUTUBE_RTMP_URL, YOUTUBE_RTMP_STREAM_KEY));

meeting.startLivestream(outputs);
```

</TabItem>

</Tabs>

### stopLivestream()

- It is used to stop meeting livestreaming.
- All [participants](./properties.md#getparticipants) and [localParticipant](./properties.md#getlocalparticipant), will receive [`onLivestreamStopped`](./meeting-event-listener-class#onlivestreamstopped) event.

#### Returns

- _`void`_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.stopLivestream()
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.stopLivestream();
```

</TabItem>

</Tabs>

---

### getMics()

- It will return all connected mic devices.

#### Returns

- `Set<AppRTCAudioManager.AudioDevice>`

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
val mics = meeting!!.mics
var mic: String
for (i in mics.indices) {
  mic = mics.toTypedArray()[i].toString()
  Toast.makeText(this, "Mic : $mic", Toast.LENGTH_SHORT).show()
}
```

</TabItem>

<TabItem value="Java">

```javascript
Set<AppRTCAudioManager.AudioDevice> mics = meeting.getMics();
String mic;
for (int i = 0; i < mics.size(); i++) {
    mic=mics.toArray()[i].toString();
    Toast.makeText(this, "Mic : " + mic, Toast.LENGTH_SHORT).show();
}
```

</TabItem>

</Tabs>

---

### changeMic()

- It is used to change the mic device.
- If multiple mic devices are connected, by using `changeMic()` one can change the mic device.

#### Parameters

- **device**: AppRTCAudioManager.AudioDevice

#### Returns

- _`void`_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH)
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH);
```

</TabItem>

</Tabs>

---

### changeWebcam()

- It is used to change the camera mode.

#### Returns

- _`void`_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.changeWebcam()
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.changeWebcam();
```

</TabItem>

</Tabs>

---

### setAudioDeviceChangeListener()

- When a Local participant changes the Mic, `AppRTCAudioManager.AudioManagerEvents()` is triggered which can be set by using `setAudioDeviceChangeListener()` method.

#### Parameters

- **audioManagerEvents**: AppRTCAudioManager.AudioManagerEvents

#### Returns

- _`void`_

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
    meeting!!.setAudioDeviceChangeListener(object : AudioManagerEvents {
      override fun onAudioDeviceChanged(
        selectedAudioDevice: AppRTCAudioManager.AudioDevice,
        availableAudioDevices: Set<AppRTCAudioManager.AudioDevice>
      ) {
          when (selectedAudioDevice) {
            AppRTCAudioManager.AudioDevice.BLUETOOTH ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: BLUETOOTH", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.WIRED_HEADSET ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: WIRED_HEADSET", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.SPEAKER_PHONE ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: SPEAKER_PHONE", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.EARPIECE ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: EARPIECE", Toast.LENGTH_SHORT).show()
          }
        }
    })
```

</TabItem>

<TabItem value="Java">

```javascript
    meeting.setAudioDeviceChangeListener(new AppRTCAudioManager.AudioManagerEvents() {
         @Override
        public void onAudioDeviceChanged(AppRTCAudioManager.AudioDevice selectedAudioDevice, Set<AppRTCAudioManager.AudioDevice> availableAudioDevices) {
            switch (selectedAudioDevice) {
                case BLUETOOTH:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: BLUETOOTH", Toast.LENGTH_SHORT).show();
                  break;
                case WIRED_HEADSET:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: WIRED_HEADSET", Toast.LENGTH_SHORT).show();
                  break;
                case SPEAKER_PHONE:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: SPEAKER_PHONE", Toast.LENGTH_SHORT).show();
                  break;
                case EARPIECE:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: EARPIECE", Toast.LENGTH_SHORT).show();
                  break;
               }
        }
    });
```

</TabItem>

</Tabs>

---

### addEventListener()

#### Parameters

- **listener**: MeetingEventListener

#### Returns

- _`void`_

---

### removeEventListener()

#### Parameters

- **listener**: MeetingEventListener

#### Returns

- _`void`_

---

### removeAllListeners()

#### Returns

- _`void`_

</div>
