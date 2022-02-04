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

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Parameters" />
      <MethodListItemLabel name="onParticipantJoined" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onParticipantLeft" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onSpeakerChanged" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onPresenterChanged" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onMainParticipantChanged" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onEntryRequested" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onEntryResponded" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onRecordingStarted" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onRecordingStopped" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onChatMessage" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onMeetingJoined" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onMeetingLeft" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onLiveStreamStarted" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onLiveStreamStopped" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onVideoStateChanged" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onVideoSeeked" option={"optional"} type={"event"} />
      <MethodListItemLabel name="onPinStateChanged" option={"optional"} type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Returns

<MethodListGroup>
  <MethodListItemLabel name="__returns" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Returns" />
      <MethodListItemLabel name="meetingId" type={"string"} />
      <MethodListItemLabel name="meeting" type={"Meeting"} />
      <MethodListItemLabel name="localParticipant" type={"Participant"} />
      <MethodListItemLabel name="mainParticipant" type={"Participant"} />
      <MethodListItemLabel name="onMainParticipantChanged" type={"event"} />
      <MethodListItemLabel name="activeSpeakerId" type={"string"} />
      <MethodListItemLabel name="participants" type={"Map<Participant>"} />
      <MethodListItemLabel name="pinnedParticipants" type={"Map<string, { cam: bool, share: bool }}>"} />
      <MethodListItemLabel name="presenterId" type={"string"} />
      <MethodListItemLabel name="localMicOn" type={"boolean"} />
      <MethodListItemLabel name="localWebcamOn" type={"boolean"} />
      <MethodListItemLabel name="localScreenShareOn" type={"boolean"} />
      <MethodListItemLabel name="messages" type={"Map<string>"} />
      <MethodListItemLabel name="join()" type={"function"} />
      <MethodListItemLabel name="leave()" type={"function"} />
      <MethodListItemLabel name="end()" type={"function"} />
      <MethodListItemLabel name="startRecording(webhookUrl: string, awsDirPath: string)" type={"function"} />
      <MethodListItemLabel name="stopRecording()" type={"function"} />
      <MethodListItemLabel name="sendChatMessage()" type={"function"} />
      <MethodListItemLabel name="respondEntry()" type={"function"} />
      <MethodListItemLabel name="muteMic()" type={"function"} />
      <MethodListItemLabel name="unmuteMic()" type={"function"} />
      <MethodListItemLabel name="toggleMic()" type={"function"} />
      <MethodListItemLabel name="disableWebcam()" type={"function"} />
      <MethodListItemLabel name="enableWebcam()" type={"function"} />
      <MethodListItemLabel name="toggleWebcam()" type={"function"} />
      <MethodListItemLabel name="disableScreenShare()" type={"function"} />
      <MethodListItemLabel name="enableScreenShare()" type={"function"} />
      <MethodListItemLabel name="toggleScreenShare()" type={"function"} />
      <MethodListItemLabel name="getMics()" type={"function"} />
      <MethodListItemLabel name="getWebcams()" type={"function"} />
      <MethodListItemLabel name="changeWebcam(deviceId: string)" type={"function"} />
      <MethodListItemLabel name="changeMic(deviceId: string)" type={"function"} />
      <MethodListItemLabel name="startVideo({ link: string })" type={"function"} />
      <MethodListItemLabel name="stopVideo()" type={"function"} />
      <MethodListItemLabel name="resumeVideo()" type={"function"} />
      <MethodListItemLabel name="pauseVideo({ currentTime: number })" type={"function"} />
      <MethodListItemLabel name="seekVideo({ currentTime: number })" type={"function"} />
      <MethodListItemLabel name="startLivestream(Array<{ url: string, streamKey: string }>)" type={"function"} />
      <MethodListItemLabel name="stopLivestream()" type={"function"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
