---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Meeting Class Methods
title: Meeting Class Methods
---

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

- `startRecording` is used to start meeting recording.

- `webhookUrl` will be triggered when the recording is completed and stored into server. Read more about webhooks [here](https://en.wikipedia.org/wiki/Webhook).

- `awsDirPath` will be the path for the your S3 bucket where you want to store recordings to. To allow us to store recording in your S3 bucket, you will need to fill this form by providing the required values. [VideoSDK AWS S3 Integration](https://zfrmz.in/RVlFLFiturVJ7Q97fr23)

- `config: mode` is used to either record video-and-audio both or only audio. And by default it will be video-and-audio.

- `config: quality` is only applicable to video-and-audio.

#### Parameters

- **webhookUrl**: String
- **awsDirPath**: String
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 4`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_
  - **orientation**: _"landscape"_ | _"portrait"_

#### Returns

- _`void`_

#### Events associated with `startRecording()`:

- Every participant will receive a callback on [`onRecordingStateChanged()`](./events#onrecordingstatechanged)
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
var config = JSONObject()
var layout = JSONObject()
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT")
JsonUtils.jsonPut(layout, "priority", "PIN")
JsonUtils.jsonPut(layout, "gridSize", 9)
JsonUtils.jsonPut(config, "layout", layout)
JsonUtils.jsonPut(config, "theme", "DARK")
meeting!!.startRecording(webhookUrl,null,config)
```

</TabItem>

<TabItem value="Java">

```js
String webhookUrl = "https://webhook.your-api-server.com";
JSONObject config = new JSONObject();
JSONObject layout = new JSONObject();
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT");
JsonUtils.jsonPut(layout, "priority", "PIN");
JsonUtils.jsonPut(layout, "gridSize", 9);
JsonUtils.jsonPut(config, "layout", layout);
JsonUtils.jsonPut(config, "theme", "DARK");
meeting.startRecording(webhookUrl,null,config);
```

</TabItem>

</Tabs>

---

### stopRecording()

- It is used to stop meeting recording.

#### Returns

- _`void`_

#### Events associated with `stopRecording()`:

- Every participant will receive a callback on [`onRecordingStateChanged()`](./events#onrecordingstatechanged)

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

- `startLiveStream()` is used to start meeting livestreaming.

- You will be able to start live stream meetings to other platforms such as Youtube, Facebook, etc. that support `RTMP` streaming.

#### Parameters

- **outputs**: `List<LivestreamOutput>`
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
#### Returns

- _`void`_

#### Events associated with `startLiveStream()`:

- Every participant will receive a callback on [`onLivestreamStateChanged()`](./events#onlivestreamstatechanged)

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

var config = JSONObject()
var layout = JSONObject()
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT")
JsonUtils.jsonPut(layout, "priority", "PIN")
JsonUtils.jsonPut(layout, "gridSize", 9)
JsonUtils.jsonPut(config, "layout", layout)
JsonUtils.jsonPut(config, "theme", "DARK")

meeting!!.startLivestream(outputs,config)
```

</TabItem>

<TabItem value="Java">

```javascript
final String YOUTUBE_RTMP_URL = "rtmp://a.rtmp.youtube.com/live2";
final String YOUTUBE_RTMP_STREAM_KEY = "<STREAM_KEY>";

List<LivestreamOutput> outputs = new ArrayList<>();
outputs.add(new LivestreamOutput(YOUTUBE_RTMP_URL, YOUTUBE_RTMP_STREAM_KEY));

JSONObject config = new JSONObject();
JSONObject layout = new JSONObject();
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT");
JsonUtils.jsonPut(layout, "priority", "PIN");
JsonUtils.jsonPut(layout, "gridSize", 9);
JsonUtils.jsonPut(config, "layout", layout);
JsonUtils.jsonPut(config, "theme", "DARK");

meeting.startLivestream(outputs,config);
```

</TabItem>

</Tabs>

---

### stopLivestream()

- It is used to stop meeting livestreaming.

#### Returns

- _`void`_

#### Events associated with `stopLivestream()`:

- Every participant will receive a callback on [`onLivestreamStateChanged()`](./events#onlivestreamstatechanged)
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

### startHls()

- `startHls()` will start HLS streaming of your meeting.

- You will be able to start HLS and watch the live stream of meeting over HLS.

- `mode` is used to either start hls streaming of video-and-audio both or only audio. And by default it will be video-and-audio.

- `quality` is only applicable to video-and-audio.

#### Parameters

- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _`max 25`_
  - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
  - **mode**: _"video-and-audio"_ | _"audio"_
  - **quality**: _"low"_ | _"med"_ | _"high"_

#### Returns

- _`void`_

#### Events associated with `startHls()`:

- Every participant will receive a callback on [`onHlsStateChanged()`](./events#onhlsstatechanged)

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
var config = JSONObject()
var layout = JSONObject()
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT")
JsonUtils.jsonPut(layout, "priority", "PIN")
JsonUtils.jsonPut(layout, "gridSize", 9)
JsonUtils.jsonPut(config, "layout", layout)
JsonUtils.jsonPut(config, "orientation", "portrait")
JsonUtils.jsonPut(config, "theme", "DARK")
meeting!!.startHls(config)
```

</TabItem>

<TabItem value="Java">

```javascript
JSONObject config = new JSONObject();
JSONObject layout = new JSONObject();
JsonUtils.jsonPut(layout, "type", "SPOTLIGHT");
JsonUtils.jsonPut(layout, "priority", "PIN");
JsonUtils.jsonPut(layout, "gridSize", 9);
JsonUtils.jsonPut(config, "layout", layout);
JsonUtils.jsonPut(config, "orientation", "portrait");
JsonUtils.jsonPut(config, "theme", "DARK");
meeting.startHls(config);
```

</TabItem>

</Tabs>

---

### stopHls()

- `stopHls()` is used to stop the HLS streaming.

#### Returns

- _`void`_
#### Events associated with `stopHls()`:

- Every participant will receive a callback on [`onHlsStateChanged()`](./events#onhlsstatechanged)

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.stopHls()
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.stopHls();
```

</TabItem>

</Tabs>

---

### changeMode()

- It is used to change the mode.
- You can toggle between the `CONFERENCE` and `VIEWER`mode .
  - `CONFERENCE`: Both audio and video streams will be produced and consumed in this mode.
  - `VIEWER`: Audio and video streams will not be produced or consumed in this mode.

#### Parameters

- **mode**: String

#### Returns

- _`void`_

#### Events associated with `changeMode()`:

- Every participant will receive a callback on [`onParticipantModeChanged()`](./events#onparticipantmodechanged)


#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
meeting!!.changeMode("VIEWER")
```

</TabItem>

<TabItem value="Java">

```javascript
meeting.changeMode("VIEWER");
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
