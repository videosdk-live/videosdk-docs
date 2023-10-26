---
sidebar_label: Send Message
pagination_label: Send Message
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Send Message to Connected Meeting - Javascript

### Method

- **sendChatMessage** - If you want to communicate participants of connected meetings, it can be achieved by this. This method accepts **messageText** as an argument.

### Event

- **chat-message** - When any participant of **Meeting A** sends a chat message to **Meeting B**, then this event will be emitted to all participants of **Meeting B**.

### **Method and Event Code**

```js
const connection = meeting.connections.get("<connection-id>");

// This will be called from Meeting A
const onClick = () => {
  connection.meeting.sendChatMessage("Hi there, from MARS!");
};

// This event will be emitted to all participants of Meeting B
connection.meeting.on("chat-message", ({ message, participantId }) => {
  alert(`${participantId} says: ${message}`);
});
```
