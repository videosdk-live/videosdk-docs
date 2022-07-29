---
sidebar_position: 1
sidebar_label: Basic Features
pagination_label: Basic Features
title: Basic Features
---

<div class="sdk-api-ref-only-h4">

## apiKey

- type: `String`

- ApiKey of Video SDK generated from [app.videosdk.live/api-keys](https://app.videosdk.live/api-keys)

---

## meetingId

- type: `String`

- Enter any arbitrary meetingId _or_ an id generated with the reference of [Create-Room](/api-reference/realtime-communication/create-room)

---

## name

- type: `String`

- Name of participant who will join the meeting.

---

# region

- type: `String`

- Region for a new meeting

---

## containerId

- type: `String`

- In the `containerId` you need to specify an `id of your dom element` which will help you rendering your meeting in that particular portion which could be your entire page or any element of a page.

- If nothing provided, then the meeting will be rendered in full screen.

```js
meeting.init({
  //othe params
  containerId: "meeting-container-id",
  //other params
});
```

```html
<html>
  <body>
    <div id="meeting-container-id"></div>
  </body>
</html>
```

---

## redirectOnLeave

- type: `String`

- `redirectOnLeave` will redirect that participant to the specified url, when a participant leave the meeting.

---

## micEnabled

- type: `Boolean`

- If set to true `micEnabled` represents the initial state of **mic** when a participant join the meeting.

---

## webcamEnabled

- type: `Boolean`

- If set to true `webcamEnabled` represents the initial state of **webcam** when a participant join the meeting.

---

## participantCanToggleSelfWebcam

- type: `Boolean`

- When `true`, participant will be able to enable or disable self webcam.

---

## participantCanToggleSelfMic

- type: `Boolean`

- When `true`, participant will be able to enable or disable self mic.

---

## participantCanLeave

- type: `Boolean`

- If `true`, then leave button will be visible on topbar of meeting layout.

---

## chatEnabled

- type: `Boolean`

- If `true`, then participant will be able to chat during the meeting.

---

## screenShareEnabled

- type: `Boolean`

- If `true`, then participant will be able to share their screen in the meeting.

---

## whiteboardEnabled

- type: `Boolean`

- If `true`, then participant will be able to see the white board status.

---

## raiseHandEnabled

- type: `Boolean`

- if true then participant will be able to raise his/her hand in the meeting

---

## joinScreen

- type: `object`

### visible

- type: `Boolean`

- `joinScreen.visible`. If set to `true`, then joinScreen will be visible to enter the meeting.

### title

- type: `String`

- `joinScreen.title`. Represents the title of the meeting.

### meetingUrl

- type: `String`

- `joinScreen.meetingUrl`. Represents meeting joining url.

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

- type: `String`

- `maxResolution`, sets the max webcam resolution which can either be `hd` | `sd`

---

## debug

- type: `Boolean`

- Setting `debug` to `true` will show an error which may cause during the meeting.

---

## participantId

- type: `String`

- If participant wants to explicitly specify their **`id`** , then it can be managed using `participantId`.

---

## joinWithoutUserInteraction

- type: `Boolean`

- Partcipant can directly join the meeting if `joinWithoutUserInteraction` set to `true`.

---

## maintainVideoAspectRatio

- type: `Boolean`

- Participant videos will maintain the aspect ration if `true`, so if the video stream is portrait it will be shown as portrait.

- Default: `true`

---

</div>
