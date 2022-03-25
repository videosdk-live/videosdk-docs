---
sidebar_position: 1
---

# useMeeting Hook

`useMeeting` hook abtracts meeting class and takes all the events as parameters and returns all the properties and methods to work meeting instance.

## useMeeting example

```jsx title="useMeeting react hook"
import {
  useMeeting,
} from "@videosdk.live/react-sdk";

function onParticipantJoined(participant) {
  setParticipant(participant)
}

const {
  meetingId,
  ...
} = useMeeting({
  onParticipantJoined,
  ...
});
```

## Methods

### join()

- `join()` is used to join a meeting.

- When `join()` is called and the permission in the token is `allow_join`, participant will directly join the meeting and following events will be triggered:
  - Local Participant will receive a callback on `onMeetingJoined()`
  - Remote Participant will receive a callback on `onParticipantJoined()` with `Participant` as parameter

- When `join()` is called and the permission in the token is `ask_join`, then direct joining is not preformed.
  - In this case `onEntryRequested()` will be emitted to the participant with permission `allow_join`. Once the participant with permission `allow_join` responds to the request, `onEntryResponded({participantId, decision})`.
  - If the `decision` is `allowed`, participant will be joined else if `decision` is `denied` participant showed not be joined.

### leave()

- `leave()` is used to leave a meeting for local participant only.

- When `leave()` is called,
  - Local Participant will receive a callback on `onMeetingLeft()`.
  - Remote Participant will receive a callback on `onParticipantLeft()` with `Participant` as parameter.

### end()

- `end()` is used to end a meeting for all participants.

- When `end()` is called,
  - Local Participant will receive a callback on `onMeetingLeft()`
  - Remote Participant will receive a callback on `onMeetingLeft()`.

### enableMic()

- `enableMic()` is used to enable mic of the local participant.

- When `enableMic()` is called,
  - Every Participant will receive a callback on `onStreamEnabled()` of the `useParticipant()` hook.

### disableMic()

- `disableMic()` is used to disable mic of the local participant.

- When `disableMic()` is called,
  - Every Participant will receive a callback on `onStreamDisabled()` of the `useParticipant()` hook.

### enableWebcam()

- `enableWebcam()` is used to enable webcam of the local participant.

- When `enableWebcam()` is called,
  - Every Participant will receive a callback on `onStreamEnabled()` of the `useParticipant()` hook.

### disableWebcam()

- `disableWebcam()` is used to disable webcam of the local participant.

- When `disableWebcam()` is called,
  - Every Participant will receive a callback on `onStreamDisabled()` of the `useParticipant()` hook.

### enableScreenShare()

- `enableScreenShare()` is used to enable screen share of the local participant.

- When `enableScreenShare()` is called,
  - Every Participant will receive a callback on `onStreamEnabled()` of the `useParticipant()` hook.
  - `onPresenterChanged()` will also receive a callback with the `presenterId`.

### disableScreenShare()

- `disableScreenShare()` is used to disable screen share of the local participant.

- When `disableScreenShare()` is called,
  - Every Participant will receive a callback on `onStreamDisabled()` of the `useParticipant()` hook.
  - `onPresenterChanged()` will also receive a callback with the `presenterId`.


### startRecording()

- `startRecording(webhookUrl: string, awsDirPath: string)` takes following parameters to start a recording:
  - `webhookurl`: It represents the webhook URL where the recording will be shared.
  - `awsDirPath`: You can directly save recording to your AWS service by providing the path for the same.

- When `startRecording()` is called,
  - Every participant will receive a callback on `onRecordingStarted()`

### stopRecording()

- `stopRecording()` is used to stop the meeting recording.

- When `stopRecording()` is called,
  - Every participant will receive a callback on `onRecordingStopped()`

### startLiveStream()

- `startLiveStream([{url: string, streamKey: string}])` takes and array of following parameters to start live streaming on any social media platform:
  - `url`: It represents the URL of our live stream.
  - `streamKey`: It represents the streamKey for the social media you are using.

- When `startLiveStream()` is called,
  - Every participant will receive a callback on `onLiveStreamStarted()`

### stopLiveStream()

- `stopLiveStream()` is used to stop the live streaming to social media.

- When `stopLiveStream()` is called,
  - Every participant will receive a callback on `onLiveStreamStopped()`

### startHls()

- `startHls()` will start HLS streaming of your meeting.

- When `startHls()` is called,
  - Every participant will receive a callback on `onLiveStreamStarted()`

### stopHls()

- `stopHls()` is used to stop the HLS streaming.

- When `stopHls()` is called,
  - Every participant will receive a callback on `onLiveStreamStopped()`

### getMics()

- `getMics()` will return the array of all the connected mics to the device.

- Each Mic will have two properties:
  - `deviceId`: It represents the device id of the mic.
  -  `label`:; It represents the name of the mic.

### getWebcams()

- `getWebcams()` will return the array of all the connected webcams to the device.

- Each webcam will have two properties:
  - `deviceId`: It represents the device id of the webcam.
  -  `label`:; It represents the name of the webcam.

### changeMic()

- `changeMic({deviceId})` takes `deviceId` as input parameter and changes the mic for the local participant.

### changeWebcam()

- `changeWebcam({deviceId})` takes `deviceId` as input parameter and changes the webcam for the local participant.

### startVideo()

- `startVideo({ link:string })` takes `link` as input parameter and start playing the video.
  - `link`: It can be a link to any cloud hosted video.

- When `startVideo()` is called,
  - `onVideoStateChanged()` callback is called for all the participants with `status` as `started`

### stopVideo()

- `stopVideo()` stops playing the video in the meeting.

- When `stopVideo()` is called,
  - `onVideoStateChanged()` callback is called for all the participants with `status` as `stopped`

### pauseVideo()

- `pauseVideo({currentTime:number})` pauses playing the video at the provided time in the input parameter `currentTime`.

- When `pauseVideo()` is called,
  - `onVideoStateChanged()` callback is called for all the participants with `status` as `paused`

### resumeVideo()

- `resumeVideo()` resumes playing the video in the meeting.

- When `resumeVideo()` is called,
  - `onVideoStateChanged()` callback is called for all the participants with `status` as `resumed`


### seekVideo()

- `seekVideo({currentTime:number})` seeks playing the video upto the provided time in the input parameter `currentTime`.

- When `seekVideo()` is called,
  - `onVideoStateChanged()` callback is called for all the participants with `status` as `seeked`

### connectTo()

- `connectTo({ meetingId, payload })` is used to open a connection to the provided `meetingId` in the parameters.


## Properties

### meetingId

- `meetingId` will be of type `String`

- `meetingId` represents the meetingId for the current meeting

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

## Parameters

### onParticipantJoined()

- This event callback is triggered when a new participant joins the meeting.

### onParticipantLeft()

- This event callback is triggered when a participant leaves the meeting.

### onSpeakerChanged()

- This event callback is triggered when active speaker of the meeting is changed.

### onPresenterChanged()

- This event callback is triggered when screen share presenter changes for the meeting.

### onMainParticipantChanged()

- This event callback is triggered when main participant of the meeting changes.

### onEntryRequested()

- This event callback is triggered when local participant has the `allow_join` permission in the token and some othe participant with `ask_join` permission in the token tries to join the meeting .

### onEntryResponded()

- This event callback is triggered when a entry is `denied` or `allowed` to a participant.

### onRecordingStarted()

- This event callback is triggered when meeting recording is started.

### onRecordingStopped()

- This event callback is triggered when meeting recording is stopped.

### onMeetingJoined()

- This event callback is triggered when local participant joins the meeting.

### onMeetingLeft()

- This event callback is triggered when local participant leaves the meeting.

### onLiveStreamStarted()

- This event callback is triggered when meeting live stream is started.

### onLiveStreamStopped()

- This event callback is triggered when meeting live stream is stopped.

### onVideoStateChanged()

- This event callback is triggered when state of the video playing the meeting is changed.

### onVideoSeeked()

- This event callback is triggered when video playing the meeting is seeked to a particular time interval.

### onPinStateChanged()

- This event callback is triggered when the pin state of participant is changed in the meeting.

## Returns

### meetingId

- `type`:`string`
- `meetingId` represents the meeting id for the meeting

### meeting

- `type`:`Meeting`
- `meeting` is the object for the meeting

### localParticipant

- `type`:`Participant`
- `localParticipant` represents `Participant` object for the local participant

### mainParticipant

- `type`:`Participant`
- `mainParticipant` represents `Participant` object for the main participant of the meeting.

### onMainParticipantChanged

- `type`:`Event`
- `onMainParticipantChanged` is triggered when the main participant of the meeting changes.

### activeSpeakerId

- `type`:`string`
- `activeSpeakerId` will return the participant id for the active speaker in the meeting.

### participants

- `type`:`Map<Participant>`
- `participants` will `Map<Participant>` containing all the participants of the meeting.

### pinnedParticipants

- `type`:`Map<string, { cam: bool, share: bool }}>`
- `pinnedParticipants` will return a `Map` which maps `participantId` of all the pinned participants with a object represting their camera and screen share status.

### presenterId

- `type`:`string`
- `presenterId` will have the participantId of the participant who is presenting the screen at the moment.

### localMicOn

- `type`:`boolean`
- `localMicOn` will be `true` if the local participants mic is on else `false`.

### localWebcamOn

- `type`:`boolean`
- `localWebcamOn` will be `true` if the local participants webcam is on else `false`.

### localScreenShareOn

- `type`:`boolean`
- `localScreenShareOn` will be `true` if the local participants screen share is on else `false`.

### messages (Depricated)

- `type`:`Map<string>`
- `messages` will be map of string containing the messages of the meeting .
