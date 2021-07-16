---
sidebar_position: 1
---

# Meeting Class

The entry point into real-time communication SDK.

## The Meeting Class

The `Meeting Class` includes methods and events for managing meetings, participants, audio and video streams, data channels and UI customisation.

You don't ever need to call the `MeetingClass` constructor directly. Instead use one of the factory methods.

## Factory Methods

### initMeeting()

```js title="Javascript"
const meeting = ZujoSDK.initMeeting({
  meetingId, // required
  name, // required
  micEnabled, // optional, default: true
  webcamEnabled, // optional, default: true
  maxResolution, // optional, default: "hd"
});
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="meetingId" option={"required"} type={"string"} />
      <MethodListItemLabel name="name" option={"optional"} type={"string"} />
      <MethodListItemLabel name="micEnabled" option={"optional"} type={"bool"} defaultValue={"true"} />
      <MethodListItemLabel name="webcamEnabled" option={"optional"} type={"bool"} defaultValue={"true"} />
      <MethodListItemLabel name="maxResolution" option={"optional"} type={"string"} defaultValue={"hd"} description="Possible values are hd and sd" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="id"  type={"string"} />
      <MethodListItemLabel name="activeSpeakerId"  type={"string"} />
      <MethodListItemLabel name="activePresenterId"  type={"string"} />
      <MethodListItemLabel name="mainParticipantId" type={"string"} />
      <MethodListItemLabel name="localParticipant"  type={"Participant"} />
      <MethodListItemLabel name="participants" type={"Map<string, Participant>"} />
      <MethodListItemLabel name="participants"  type={"Map<string, Participant>"} />
      <MethodListItemLabel name="messages"  type={"Array<{senderId: string, text: string, timestamp: number}>"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Events

<MethodListGroup>
  <MethodListItemLabel name="__events" >
    <MethodListGroup>
      <MethodListHeading heading="Events" />
      <MethodListItemLabel name="participant-joined"  type={"event"} />
      <MethodListItemLabel name="participant-left"  type={"event"} />
      <MethodListItemLabel name="speaker-changed"  type={"event"} />
      <MethodListItemLabel name="presenter-changed" type={"event"} />
      <MethodListItemLabel name="main-participant-changed"  type={"event"} />
      <MethodListItemLabel name="entry-requested"  type={"event"} />
      <MethodListItemLabel name="entry-responded"  type={"event"} />
      <MethodListItemLabel name="recording-started"  type={"event"} />
      <MethodListItemLabel name="recording-stopped"  type={"event"} />
      <MethodListItemLabel name="chat-message"  type={"event"} />
      <MethodListItemLabel name="video-started"  type={"event"} />
      <MethodListItemLabel name="video-stopped"  type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="join()"  type={"undefined"} />
      <MethodListItemLabel name="leave()"  type={"undefined"} />
      <MethodListItemLabel name="muteMic()"  type={"undefined"} />
      <MethodListItemLabel name="unmuteMic()"  type={"undefined"} />
      <MethodListItemLabel name="disableWebcam()"  type={"undefined"} />
      <MethodListItemLabel name="enableWebcam()"  type={"undefined"} />
      <MethodListItemLabel name="disableScreenShare()"  type={"undefined"} />
      <MethodListItemLabel name="enableScreenShare()"  type={"undefined"} />
      <MethodListItemLabel name="on(eventType: string)"  type={"undefined"} />
      <MethodListItemLabel name="off(eventType: string)"  type={"undefined"} />
      <MethodListItemLabel name="respondEntry(participantId: string, decision: allowed | denied)"  type={"undefined"} />
      <MethodListItemLabel name="startRecording(webhookUrl: string)"  type={"undefined"} />
      <MethodListItemLabel name="stopRecording()"  type={"undefined"} />
      <MethodListItemLabel name="startVideo(link: string)"  type={"undefined"} />
      <MethodListItemLabel name="stopVideo()"  type={"undefined"} />
      <MethodListItemLabel name="startLivestream(streamInfo:Array<Object<url,streamkey>>)"  type={"undefined"} />
      <MethodListItemLabel name="stopLivestream()"  type={"undefined"} />
      <MethodListItemLabel name="sendChatMessage(text: string)"  type={"undefined"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
