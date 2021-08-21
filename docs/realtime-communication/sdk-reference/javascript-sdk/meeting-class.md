---
sidebar_position: 1
---

# Meeting Class

The entry point into real-time communication SDK.

## The Meeting Class

The `Meeting Class` includes methods and events for managing meetings, participants, audio and video streams, data channels and UI customisation.

You don't ever need to call the `Meeting Class` constructor directly. Instead use one of the factory methods.

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
      <MethodListItemLabel name="video-state-changed"  type={"event"} />
      <MethodListItemLabel name="video-seeked"  type={"event"} />
      <MethodListItemLabel name="livestream-started"  type={"event"} />
      <MethodListItemLabel name="livestream-stopped"  type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="Join and leave" />
    <MethodListItemLabel name="join()"  type={"void"} />
    <MethodListItemLabel name="leave()"  type={"void"} />
    <MethodListItemLabel name="end()"  type={"void"} />
  </MethodListGroup>
</MethodListGroup>

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="Mic and webcam" />
    <MethodListItemLabel name="muteMic()"  type={"void"} />
    <MethodListItemLabel name="unmuteMic()"  type={"void"} />
    <MethodListItemLabel name="disableWebcam()"  type={"void"} />
    <MethodListItemLabel name="enableWebcam()"  type={"void"} />
  </MethodListGroup>
</MethodListGroup>

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="Screenshare" />
    <MethodListItemLabel name="disableScreenShare()"  type={"void"} />
    <MethodListItemLabel name="enableScreenShare()"  type={"void"} />
  </MethodListGroup>
</MethodListGroup>

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="Recording" />
    <MethodListItemLabel name="startRecording(webhookUrl: string)"  type={"void"} />
    <MethodListItemLabel name="stopRecording()"  type={"void"} />
  </MethodListGroup>
</MethodListGroup>

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="External video" />
    <MethodListItemLabel
      name="startVideo({ link: string })"
      type={"void"}
      description={<p>Triggers <code>video-state-changed</code> event with status "started"</p>}
    />
    <MethodListItemLabel
      name="stopVideo()"
      type={"void"}
      description={<p>Triggers <code>video-state-changed</code> event with status "stopped"</p>}
    />
    <MethodListItemLabel
      name="pauseVideo({ currentTime: number })"
      type={"void"}
      description={<p>Triggers <code>video-state-changed</code> event with status "paused"</p>}
    />
    <MethodListItemLabel
      name="resumeVideo()"
      type={"void"}
      description={<p>Triggers <code>video-state-changed</code> event with status "resumed"</p>}
    />
    <MethodListItemLabel
      name="seekVideo({ currentTime: number })"
      type={"void"}
      description={<p>Triggers <code>video-seeked</code> event with <code>currentTime</code></p>}
    />
  </MethodListGroup>
</MethodListGroup>

<MethodListGroup>
  <MethodListGroup>
    <MethodListHeading heading="Livestream / RTMP out" />
    <MethodListItemLabel name="startLivestream(Array<{ url: string, streamKey: string }>)"  type={"void"} />
    <MethodListItemLabel name="stopLivestream()"  type={"void"} />
  </MethodListGroup>
</MethodListGroup>
