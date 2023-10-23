---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useParticipant Hook
title: Methods returned by useParticipant Hook
---

# Methods returned by useParticipant Hook - React Native

<div class="sdk-api-ref-only-h4">

### enableMic()

- `enableMic()` is used to enable mic of participant.

#### Events associated with `enableMic()`:

- First the participant will get a callback on [`onMicRequested()`](../use-meeting/events#onmicrequested) and once the participant accepts the request, mic will be enabled.

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableMic()

- `disableMic()` is used to disable mic of participant.

#### Events associated with `disableMic()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### enableWebcam()

- `enableWebcam()` is used to enable webcam of participant.

#### Events associated with `enableWebcam()`:

- First the participant will get a callback on [`onWebcamRequested()`](../use-meeting/events#onwebcamrequested) and once the participant accepts the request, webcam will be enabled.

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableWebcam()

- `disableWebcam()` is used to disable webcam of participant.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### setQuality()

- `setQuality()` is used to set the quality of participants video.

#### Parameter

- **quality** : _"low"_ | _"med"_ | _"high"_

---

### pin()

- It is used to set pin state of the participant. You can use it to pin the screen share, camera or both of the participant. It accepts a optional paramter of type `String`. Default `SHARE_AND_CAM`

#### Parameters

- **pinType**: `SHARE_AND_CAM` | `CAM` | `SHARE`

---

### unpin()

- It is used to unpin participant. You can use it to unpin the screen share, camera or both of the participant. It accepts a optional paramter of type `String`. Default is `SHARE_AND_CAM`

#### Parameters

- **pinType**: `SHARE_AND_CAM` | `CAM` | `SHARE`

---

### remove()

- It is used to remove a participant from the meeting

---

### switchTo()

- If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo()` method is used. This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

#### Events associated with `switchTo()`:

- [`onSwitchMeeting()`](../use-meeting/events#onswitchmeeting) event will be triggered for the participant who will switching the meeting.

#### Example

**Meeting_A** is connected with **Meeting_B**, there are participants `P1` in **Meeting_A** and `P2` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_B** to **Meeting_A**, then participant `P1` will call:

`connectionParticipant.switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_B** will receive an event `onSwitchMeeting()`.

```js
// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Get participant of meeting B
const connectionParticipant =
  connection.meeting.participants.get("<participant-id>");

// Here participant from meeting A requests to switch particpant from meeting B to A
const onClick = () => {
  const meetingId = "<meeting-A-id>";
  const token = "JWT";
  const payload = "payload";

  connectionParticipant.switchTo({ meetingId, token, payload });
};

useMeeting({
  onSwitchMeeting: ({
    meetingId,
    payload,
    token,
    connectionParticipantId,
    connectionMeetingId,
  }) => {
    // Resetting token and meetingId at participant side
    setToken(token);
    setMeetingId(meetingId);
  },
});
```

---

### getVideoStats()

- `getVideoStats()` will return an object which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `object`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPacketCount` : It represents the total packet count which were transmitted for that particiular stream.
  - `totalPacketsLost` : It represents the total packets lost during the transimission of the stream.
  - `roundTripTime` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `score` : It represents the overall quality of the stream of the participant scored from 0 to 10. Score between 0-5 is considered **Average**, between 5-8 it is considered **Good**, and above 8 it is considered **Excellent**.

:::note

getVideoStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

If you are getting high packet loss, try using the `setViewport()` for better experience. To know more about setViewport() [visit here](/react/guide/video-and-audio-calling-api-sdk/features/set-viewport)

:::

---

### getAudioStats()

- `getAudioStats()` will return an object which will contain details regarding the participant's critical audio metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `object`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPacketCount` : It represents the total packet count which were transmitted for that particiular stream.
  - `totalPacketsLost` : It represents the total packets lost during the transimission of the stream.
  - `roundTripTime` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `score` : It represents the overall quality of the stream of the participant scored from 0 to 10. Score between 0-5 is considered **Average**, between 5-8 it is considered **Good**, and above 8 it is considered **Excellent**.

:::note

getAudioStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `roundTripTime` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

### getShareStats()

- `getShareStats()` will return an object which will contain details regarding the participant's critical video metrics such as **Jitter**, **Packet Loss**, **Quality Score** etc.

#### Returns

- `object`
  - `jitter` : It represents the distortion in the stream.
  - `bitrate` : It represents the bitrate of the stream which is being transmitted.
  - `totalPackets` : It represents the total packet count which were transmitted for that particiular stream.
  - `packetsLost` : It represents the total packets lost during the transimission of the stream.
  - `rtt` : It represents the time between the stream being reached to client from the server in milliseconds(ms).
  - `codec`: It represents the codec used for the stream.
  - `network`: It represents the network used to transmit the stream
  - `size`: It is object containing the height, width and frame rate of the stream.

:::note

getShareStats() will return the metrics for the participant at that given point of time and not average data of the complete meeting.

To view the metrics for the complete meeting using the stats API documented [here](/api-reference/realtime-communication/fetch-session-quality-stats).

:::

:::info

If you are getting `rtt` greater than 300ms, try using a different region which is nearest to your user. To know more about changing region [visit here](/api-reference/realtime-communication/create-room).

:::

</div>
