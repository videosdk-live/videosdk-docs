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

# Mute All Participants - React Native

When hosting a meeting, it's essential for the host to have the capability to mute all the participants at once. This can be useful in various scenarios, such as when the host wants to deliver a presentation or when there is background noise causing distractions. This guide focuses on this very aspect of muting all other participants' microphone.

- To achieve this, iterate over the list of all participants from the `useMeeting` hook and call the `disableMic` method from the `useParticipant` hook.

```javascript
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const { participants } = useMeeting();

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
    <TouchableOpacity
      onPress={() => {
        handleMuteAllParticipant();
      }}
    >
      <Text>Mute All</Text>
    </TouchableOpacity>
  </>
);
```

:::note
The Participant with the capability to mute all other participants' microphones, should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/react-native/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [disableMic()](/react-native/api/sdk-reference/use-participant/methods#disablemic)
