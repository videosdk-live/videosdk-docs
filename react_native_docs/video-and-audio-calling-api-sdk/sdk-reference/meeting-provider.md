---
sidebar_position: 1
---

# Meeting Provider

Meeting Provider simplifies configuration of meeting with by wrapping up core logic with `react-context`.

Every Context object in `react-js` comes with a Provider React component that allows consuming components to subscribe to context changes. To know more about context provider follow <a href="https://reactjs.org/docs/context.html#contextprovider">official document</a>

## Meeting Provider

```jsx title="Meeting Provider"
<MeetingProvider
  config={{
    meetingId: "meeting-id",
    micEnabled: true,
    webcamEnabled: true,
    name: "Participant Name",
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Parameters" />
      <MethodListItemLabel name="config" option={"required"} type={"object"} >
        <MethodListGroup>
        <MethodListItemLabel name="meetingId" option={"required"} type={"string"} />
        <MethodListItemLabel name="micEnabled" option={"required"} type={"boolean"} />
        <MethodListItemLabel name="webcamEnabled" option={"required"} type={"boolean"} />
        <MethodListItemLabel name="name" option={"required"} type={"string"} />
        </MethodListGroup>
      </MethodListItemLabel>
      <MethodListItemLabel name="token" option={"required"} type={"string"} />
      <MethodListItemLabel name="joinWithoutUserInteraction" option={"optional"} type={"boolean"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
