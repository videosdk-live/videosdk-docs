---
sidebar_position: 1
---

# VideoSDKMeeting Class

The entry point into real-time communication prebuilt SDK.

## The VideoSDKMeeting Class

The `VideoSDKMeeting Class` includes properties, methods and events to control user interface and experience of prebuilt.

## Methods

### init()

```js title="Javascript"
const meeting = new VideoSDKMeeting();

meeting.init({
  name: "John Doe",
  apiKey: "YOUR API KEY", // generated from app.videosdk.live
  meetingId: "milkyway", // enter your meeting id

  containerId: null,
  redirectOnLeave: "https://www.videosdk.live/",

  micEnabled: true,
  webcamEnabled: true,
  participantCanToggleSelfWebcam: true,
  participantCanToggleSelfMic: true,

  chatEnabled: true,
  screenShareEnabled: true,
  pollEnabled: true,
  whiteBoardEnabled: true,
  raiseHandEnabled: true,

  recordingEnabled: true,
  recordingWebhookUrl: "https://www.videosdk.live/callback",
  participantCanToggleRecording: true,

  brandingEnabled: true,
  brandLogoURL: "https://picsum.photos/200",
  brandName: "Awesome startup",
  poweredBy: true,

  participantCanLeave: true, // if false, leave button won't be visible

  // Live stream meeting to youtube
  livestream: {
    autoStart: true,
    outputs: [
      {
        url: "rtmp://x.rtmp.youtube.com/live2",
        streamKey: "<STREAM KEY FROM YOUTUBE>",
      },
    ],
  },

  permissions: {
    askToJoin: false, // Ask joined participants for entry in meeting
    toggleParticipantMic: true, // Can toggle other participant's mic
    toggleParticipantWebcam: true, // Can toggle other participant's webcam
  },
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
      <MethodListItemLabel name="micEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="webcamEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="name" option={"required"} type={"string"} />
      <MethodListItemLabel name="meetingId" option={"required"} type={"string"} />
      <MethodListItemLabel name="redirectOnLeave" option={"required"} type={"string"} description={"Redirection URL"} />
      <MethodListItemLabel name="chatEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="screenShareEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="pollEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="whiteBoardEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="participantCanToggleSelfWebcam" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="participantCanToggleSelfMic" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="raiseHandEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="apiKey" option={"required"} type={"string"} />
      <MethodListItemLabel name="containerId" option={"required"} type={"string"} description={"Specify id of the container where you want to display prebuilt UI or keep it null"} />
      <MethodListItemLabel name="recordingEnabled" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="recordingWebhookUrl" option={"optional"} type={"string"} />
      <MethodListItemLabel name="participantCanToggleRecording" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="brandingEnabled" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="brandLogoURL" option={"optional"} type={"string"} />
      <MethodListItemLabel name="brandName" option={"optional"} type={"string"} />
      <MethodListItemLabel name="poweredBy" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="participantCanLeave" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="livestream" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="autoStart" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="outputs" option={"optional"} type={"Array<{url: string, streamKey: string}>"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="permissions" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="askToJoin" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleParticipantMic" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleParticipantWebcam" option={"optional"} type={"boolean"} />
        </MethodListGroup>
      </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
