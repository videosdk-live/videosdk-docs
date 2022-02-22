---
sidebar_position: 1
---

# useConnection Hook

`useConnection` hook abstracts connection class and takes all the properties and events as parameters and returns all the properties and methods to work connection instance.

## useConnection example

```jsx title="useConnection react hook"
import {
  useConnection,
} from "@videosdk.live/react-sdk";

function onParticipantJoined(participant) {
  console.log("Participant Joined", participant);
}

function onParticipantLeft(){
  console.log("Participant left");
}

function onChatMessage(message) {
  console.log("Chat Message: ", message)
}

const {connection} = useConnection({
  connectionId,
  {
    onParticipantJoined,
    onParticipantLeft,
    onChatMessage
  }
});
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Parameters" />
      <MethodListItemLabel name="connectionId" option={"required"} type={"String"} />
      <MethodListItemLabel name="onMeeting" option={"optional"} type={"object"}>
        <MethodListGroup>
          <MethodListItemLabel name="onParticipantJoined" option={"optional"} type={"callback"} />
          <MethodListItemLabel name="onParticipantLeft" option={"optional"} type={"callback"} />
          <MethodListItemLabel name="onChatMessage" option={"optional"} type={"callback"} />
        </MethodListGroup>
      </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Returns

<MethodListGroup>
  <MethodListItemLabel name="__returns" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Returns" />
      <MethodListItemLabel name="connection" type={"object"} >
      <MethodListGroup>
          <MethodListItemLabel name="id" type={"string"} />
          <MethodListItemLabel name="close" type={"callback"} />
          <MethodListItemLabel name="payload" type={"object"} />
          <MethodListItemLabel name="meeting" type={"object"} >
          <MethodListGroup>
          <MethodListItemLabel name="id" type={"string"} />
          <MethodListItemLabel name="sendChatMessage" type={"function"} />
          <MethodListItemLabel name="end" type={"function"} />
          <MethodListItemLabel name="participants" type={"[object]"} />
           </MethodListGroup> 
           </MethodListItemLabel>
        </MethodListGroup>
       </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>