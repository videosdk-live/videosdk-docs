---
sidebar_position: 1
title: "VideoSDKMeeting Class"
---

# VideoSDKMeeting Class - Prebuilt

The entry point into real-time communication prebuilt SDK.

## The VideoSDKMeeting Class

The `VideoSDKMeeting Class` includes properties, methods and events to control user interface and experience of prebuilt.

## Methods

### init()

- `VideoSDKMeeting` class is used to initialize meeting for prebuilt SDK. One can pass parameters as per their meeting requirement to the `init()` method.

```js title="Javascript"
const meeting = new VideoSDKMeeting();

meeting.init({
  //parameters
});
```

- Have a look to [`parameters`](./parameters/basic-parameters)

<!-- import MethodListGroup from '@theme/MethodListGroup';
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
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="maxResolution" option={"optional"} type={"string"} />
      <MethodListItemLabel name="debug" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="notificationSoundEnabled" option={"optional"} type={"string"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup> -->
