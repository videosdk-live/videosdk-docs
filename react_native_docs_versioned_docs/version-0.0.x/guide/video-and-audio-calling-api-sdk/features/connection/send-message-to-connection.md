---
sidebar_label: Send Message
pagination_label: Send Message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Send Message to Connected Meeting

### Method

- **sendChatMessage** - If you want to communicate participants of connected meetings, it can be achieved by this. This method accepts **messageText** as an argument.

### Event

- **chat-message** - When any participant of **Meeting A** sends a chat message to **Meeting B**, then this event will be emitted to all participants of **Meeting B**.

### **Method and Event Code**

```js
import { Alert } from "react-native";
import { useConnection } from "@videosdk.live/react-native-sdk";

const { connection } = useConnection("<connection-id>", {
  onMeeting: {
    // This event will be emitted to all participants of Meeting B
    onChatMessage: ({ message, participantId }) => {
      Alert.alert(`${participantId} says: ${message}`);
    },
  },
});

// This will be called from Meeting A
const onPress = () => {
  connection.meeting.sendChatMessage("Hi there, from MARS!");
};
```
