---
sidebar_position: 1
sidebar_label: Basic Feature's Parameters
pagination_label: Basic Feature's Parameters
title: Basic Feature's Parameters
---

<div class="sdk-api-ref-only-h4">

## apiKey

- type : `String`

- apiKey of videoSDK generated from [videoSDK api-keys](https://app.videosdk.live/api-keys)

---

## meetingId

- type : `String`

- enter any arbitrary meetingId or an id generated with the reference of [create-room](http://localhost:3000/api-reference/realtime-communication/create-room)

---

## name

- type : `String`

- Name of participant to be shown in the meeting.

---

## containerId

- type : `String`

- In the `containerId` you need to specify an `id of your dom element` which will help you rendering your meeting in that particular portion which could be your entire page or any element of a page.

```js
meeting.init({
  //othe params
  containerId: "videoSDK",
  //other params
});
```

```html
<html>
  <body>
    <div id="videoSDK"></div>
  </body>
</html>
```

---

## redirectOnLeave

- type : `String`

- `redirectOnLeave` will lead you to the specified url when you leave the meeting

---

## micEnabled

- type : `Boolean`

- If set to true `micEnabled` represents the initial state of your mic when you join the meeting

---

## webcamEnabled

- type : `Boolean`

- If set to true `webcamEnabled` represents the initial state of your mic when you join the meeting

---

## participantCanToggleSelfWebcam

- type : `Boolean`

- when true you can enable/disable self webcam.

---

## participantCanToggleSelfMic

- type : `Boolean`

- when true you can mute/unmute self mic.

---

## participantCanLeave

- type : `Boolean`

- if true then participant will be able to leave the meeting

---

## chatEnabled

- type : `Boolean`

- if true then participant will be able to chat during the meeting

---

## screenShareEnabled

- type : `Boolean`

- if true then participant will be able to share his/her screen in the meeting

---

## pollEnabled

- type : `Boolean`

- if true then participant will be able to create poll in the meeting

---

## whiteboardEnabled

- type : `Boolean`

- if true then participant will be able to access white board in the meeting

---

## raiseHandEnabled

- type : `Boolean`

- if true then participant will be able to raise his/her hand in the meeting

---

## joinScreen

- type : `json object`

### visible

- type : `Boolean`

- `joinScreen.visible` if set to `true` then joinScreen will be visible to enter the meeting

### title

- type : `String`

- `joinScreen.title` represents the title of the meeting

### meetingUrl

- type : `String`

- `joinScreen.meetingUrl` represents meeting joining url

```js
meeting.init({
  //other params
  joinScreen: {
    visible: false, // Show the join screen ?
    title: "Recording Scaling Testing", // Meeting title
    meetingUrl: window.location.href, // Meeting joining url
  },
  //other params
});
```

---

## maxResolution

- type : `String`

- `maxResolution` sets the meeting resolution which can either be `hd` | `sd`

---

## debug

- type : `Boolean`

- Setting `debug` to `true` will show an error which may cause during the meeting

---

## isRecorder

- type : `Boolean`

- `isRecorder` specifies that one have access to start recording or not

---

## participantId

- type : `String`

- If participant wants to explicitly specify his/her id , then it can be managed using `participantId`

---

## joinWithoutUserInteraction

- type : `Boolean`

- partcipant can directly join the meeting if `joinWithoutUserInteraction` set to `true`

---

</div>
