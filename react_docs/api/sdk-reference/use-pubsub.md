---
sidebar_position: 1
---

# usePubSub Hook

`usePubSub` hook abstracts pubsub class and takes all the properties and events as parameters and returns all the properties and methods to work pubsub instance.

## usePubSub example

```jsx title="usePubSub react hook"
import { usePubSub } from "@videosdk.live/react-sdk";

var topic = "CHAT";

function onMessageReceived(message) {
  console.log("New Message:", message);
}

const { publish, messages } = usePubSub({ topic, onMessageReceived });
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Parameters" />
      <MethodListItemLabel name="topic" option={"required"} type={"String"} />
      <MethodListItemLabel name="onMessageReceived" option={"optional"} type={"event"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Returns

<MethodListGroup>
  <MethodListItemLabel name="__returns" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Returns" />
      <MethodListItemLabel name="publish(message: string, options: object)" type={"function"} />
      <MethodListItemLabel name="messages" type={"[object]"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
