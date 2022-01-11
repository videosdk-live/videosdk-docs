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
  whiteboardEnabled: true,
  raiseHandEnabled: true,

  recordingEnabled: true,
  recordingWebhookUrl: "https://www.videosdk.live/callback",
  recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
  autoStartRecording: true, // auto start recording on participant joined

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
    drawOnWhiteboard: true, // Can draw on whiteboard
    toggleWhiteboard: true, // Can toggle whiteboard
    toggleRecording: true, // Can toggle meeting recording
    removeParticipant: true, // Can remove participant
    endMeeting: true, // Can end meeting
  },

  joinScreen: {
    visible: true, // Show the join screen ?
    title: "Daily scrum", // Meeting title
    meetingUrl: window.location.href, // Meeting joining url
  },

  pin: {
    allowed: true, // participant can pin any participant in meeting
    layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
  },

  leftScreen: {
    // visible when redirect on leave not provieded
    actionButton: {
      // optional action button
      label: "Video SDK Live", // action button label
      href: "https://videosdk.live/", // action button href
    },
  },

  notificationSoundEnabled: true,

  maxResolution: "sd", // "hd" or "sd"
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
      <MethodListItemLabel name="whiteboardEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="participantCanToggleSelfWebcam" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="participantCanToggleSelfMic" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="raiseHandEnabled" option={"required"} type={"boolean"} />
      <MethodListItemLabel name="apiKey" option={"required"} type={"string"} />
      <MethodListItemLabel name="containerId" option={"required"} type={"string"} description={"Specify id of the container where you want to display prebuilt UI or keep it null"} />
      <MethodListItemLabel name="recordingEnabled" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="recordingWebhookUrl" option={"optional"} type={"string"} />
      <MethodListItemLabel name="recordingAWSDirPath" option={"optional"} type={"string"} />
      <MethodListItemLabel name="autoStartRecording" option={"optional"} type={"boolean"} />
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
          <MethodListItemLabel name="drawOnWhiteboard" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleWhiteboard" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleRecording" option={"optional"} type={"boolean"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="joinScreen" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="visible" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="title" option={"optional"} type={"string"} />
          <MethodListItemLabel name="meetingUrl" option={"optional"} type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="left" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="actionButton" option={"optional"} type={"boolean"} />
        <MethodListGroup>
          <MethodListItemLabel name="label" option={"optional"} type={"string"} />
          <MethodListItemLabel name="href" option={"optional"} type={"string"} />
         </MethodListGroup>
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="maxResolution" option={"optional"} type={"string"} />
      <MethodListItemLabel name="notificationSoundEnabled" option={"optional"} type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
