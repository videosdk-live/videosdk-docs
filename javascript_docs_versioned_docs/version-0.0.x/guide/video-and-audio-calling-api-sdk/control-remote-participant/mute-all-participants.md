---
title: Mute All Participants | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Mute All Participants
pagination_label: Mute All Participants
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-all-participants
---

# Mute All Participants

If you are the host or moderator of a video conference, you may want to mute all the participants at once. This can be useful in various scenarios, such as when you want to deliver a presentation or when there is background noise that is causing distractions.

- To achieve this, you have to iterate over the list of participants fromt the `meeting` object and call `disableMic` method.

```javascript
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const muteAllBtn = document.getElementById("muteAllBtn");

muteAllBtn.addEventListener("click", () => {
  const participants = meeting.participants;
  const participant = participants.get("<participant-id>");

  participants.forEach((participant, participantId) => {
    participant?.disableMic();
  });
});
```

:::note
Participant who will be muting other participants should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [disableMic()](/javascript/api/sdk-reference/participant-class/methods#disablemic)
