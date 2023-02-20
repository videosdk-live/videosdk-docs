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
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-all-participants
---

# Mute All Participants

If the host wishes to mute all the participants at once, you can use the `disableMic()` of `useParticipant`.

- For these you will have to iterate over the list of participants fromt he `useMeeting` hook and call the method.

```javascript
import { useMeeting } from "@videosdk.live/react-sdk";

const { muteMic, participants } = useMeeting();

function handleMuteAllParticipant() {
  participants.keys().forEach((participantId) => {
    const { disableMic, isLocal } = useParticipant(participantId);
    if (!isLocal) {
      disableMic();
    }
  });
}

return (
  <>
    <button onClick={handleMuteAllParticipant}>Mute All</button>
  </>
);
```

:::note
Participant who will be muting other participants should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/react/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

---

### API Reference

The API references for all the methods and events utilised in these guide are provided below.

- [disableMic()](/react/api/sdk-reference/use-participant/methods#disablemic)
