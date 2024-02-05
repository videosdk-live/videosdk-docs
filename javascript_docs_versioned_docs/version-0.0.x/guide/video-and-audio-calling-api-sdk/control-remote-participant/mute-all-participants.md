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

# Mute All Participants - Javascript

When hosting a meeting, it's essential for the host to have the capability to mute all the participants at once. This can be useful in various scenarios, such as when the host wants to deliver a presentation or when there is background noise causing distractions. This guide focuses on this very aspect of muting all other participants' microphone.

- To achieve this, iterate over the list of all participants from the `meeting` object and call the `disableMic` method.

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
The Participant with the capability to mute all other participants' microphones, should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

### API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [disableMic()](/javascript/api/sdk-reference/participant-class/methods#disablemic)
