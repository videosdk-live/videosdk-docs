---
sidebar_position: 1
---

# VideoSDKMeeting Class - Prebuilt

The entry point into real-time communication prebuilt SDK.

## The VideoSDKMeeting Class

The `VideoSDKMeeting Class` includes properties, methods and events to control user interface and experience of prebuilt.

## Methods

### init()

```js title="Javascript"
const meeting = new VideoSDKMeeting();

meeting.init({
  name: "Your required name",
  apiKey: "Your API key", // generated from app.videosdk.live
  meetingId: "milkyway", //your meeting id

  containerId: null,
  redirectOnLeave: "https://www.videosdk.live/",

  micEnabled: true,
  webcamEnabled: false,
  participantCanToggleSelfWebcam: true,
  participantCanToggleSelfMic: true,

  participantCanLeave: false, // if false, leave button won't be visible
  chatEnabled: false,
  screenShareEnabled: true,
  pollEnabled: true,
  whiteboardEnabled: true,
  raiseHandEnabled: true,

  branding: {
    enabled: true,
    logoURL:
      "https://static.videosdk.live/videosdk.live/videosdk_logo_circle_big.png",
    name: "Prebuilt",
    poweredBy: false,
  },

  // Live stream meeting to youtube
  livestream: {
    autoStart: false,
    outputs: [
      {
        url: "<stream-url>",
        streamKey: "<stream-key>",
      },
    ],
    layout: {
      type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
      priority: "PIN", // "SPEAKER" | "PIN",
      gridSize: 3,
    },
  },

  recording: {
    enabled: true,
    webhookUrl: "https://www.videosdk.live/callback",
    awsDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path
    autoStart: false, // auto start recording on participant joined

    layout: {
      type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
      priority: "PIN", // "SPEAKER" | "PIN",
      gridSize: 3,
    },
  },

  permissions: {
    pin: true, //can pin or unpin other participants
    askToJoin: false, // Ask joined participants for entry in meeting
    toggleParticipantWebcam: true, // Can toggle other participant's web cam
    toggleParticipantMic: true, // Can toggle other participant's mic
    toggleParticipantScreenshare: true, // Can toggle other partcipant's screen share
    removeParticipant: true, // Can remove participant
    endMeeting: true, // Can end meeting
    drawOnWhiteboard: true, // Can draw on whiteboard
    toggleWhiteboard: true, // Can toggle whiteboard
    toggleRecording: true, // Can toggle recording
  },

  joinScreen: {
    visible: true, // Show the join screen ?
    title: "Pin Screen", // Meeting title
    meetingUrl: window.location.href, // Meeting joining url
  },

  leftScreen: {
    actionButton: {
      label: "Video SDK",
      href: "https://www.videosdk.live",
    },
    rejoinButtonEnabled: true,
  },

  layout: {
    type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
    priority: "PIN", // "SPEAKER" | "PIN",
    gridSize: 3,
  },

  maxResolution: "sd", // "hd" or "sd"

  debug: false,

  isRecorder: false,

  participantId: null, //
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
      <MethodListItemLabel name="recording" option={"optional"} type={"object"} >
          <MethodListGroup>
            <MethodListItemLabel name="recording.webhookUrl" option={"optional"} type={"string"} />
            <MethodListItemLabel name="recording.awsDirPath" option={"optional"} type={"string"} />
            <MethodListItemLabel name="recording.autoStart" option={"optional"} type={"boolean"} />
            <MethodListItemLabel name="recording.layout" option={"optional"} type={"object"} >
              <MethodListGroup>
                <MethodListItemLabel name="recording.layout.type" option={"optional"} type={"string"} />
                <MethodListItemLabel name="recording.layout.priority" option={"optional"} type={"string"} />
                <MethodListItemLabel name="recording.layout.grid" option={"optional"} type={"int"} />
              </MethodListGroup>
            </MethodListItemLabel>  
          </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="branding" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="branding.enabled" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="branding.logoURL" option={"optional"} type={"string"} />
          <MethodListItemLabel name="branding.name" option={"optional"} type={"string"} />
          <MethodListItemLabel name="branding.poweredBy" option={"optional"} type={"boolean"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="participantCanLeave" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="livestream" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="outputs" option={"optional"} type={"Array<{url: string, streamKey: string}>"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="permissions" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="pin" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="askToJoin" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleParticipantMic" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleParticipantWebcam" option={"optional"} type={"boolean"} />
          <MethodListItemLabel name="toggleParticipantScreenshare" option={"optional"} type={"boolean"} />
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
         <MethodListItemLabel name="rejoinButtonEnabled" option={"optional"} type={"boolean"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="maxResolution" option={"optional"} type={"string"} />
      <MethodListItemLabel name="debug" option={"optional"} type={"boolean"} />
    </MethodListGroup>

  </MethodListItemLabel>
</MethodListGroup>
