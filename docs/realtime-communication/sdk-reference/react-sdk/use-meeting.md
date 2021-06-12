---
sidebar_position: 1
---

# useMeeting Hook

`useMeeting` hook abtracts meeting class and takes all the events as parameters and returns all the properties and methods to work work meeting instance.

## useMeeting example

```jsx title="useMeeting hook example"
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
      <MethodListItemLabel name="onMeetingLeft" option={"optional"} type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Returns

<MethodListGroup>
  <MethodListItemLabel name="__returns" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Returns" />
      <MethodListItemLabel name="meetingId" option={"optional"} type={"string"} />
      <MethodListItemLabel name="meeting" option={"optional"} type={"Meeting"} />
      <MethodListItemLabel name="localParticipant" option={"optional"} type={"Participant"} />
      <MethodListItemLabel name="mainParticipant" option={"optional"} type={"Participant"} />
      <MethodListItemLabel name="onMainParticipantChanged" option={"optional"} type={"event"} />
      <MethodListItemLabel name="activeSpeakerId" option={"optional"} type={"string"} />
      <MethodListItemLabel name="participants" option={"optional"} type={"Map<Participant>"} />
      <MethodListItemLabel name="presenterId" option={"optional"} type={"string"} />
      <MethodListItemLabel name="localMicOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="localWebcamOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="localScreenShareOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="messages" option={"optional"} type={"Map<string>"} />
      <MethodListItemLabel name="join()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="leave()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="startRecording()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="stopRecording()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="sendChatMessage()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="respondEntry()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="muteMic()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="unmuteMic()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="toggleMic()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="disableWebcam()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="enableWebcam()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="toggleWebcam()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="disableScreenShare()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="enableScreenShare()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="toggleScreenShare()" option={"optional"} type={"function"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
