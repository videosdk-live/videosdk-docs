---
sidebar_position: 1
---

# Meeting Consumer

## Using meeting consumer

A React component that subscribes to context changes. Meeting Consumer updated to every change in the instance of meeting, participant and streams.

It requires <a href="https://reactjs.org/docs/render-props.html#using-props-other-than-render">function as child</a>. The function receives the current context value and returns a React node.

```jsx title="Meeting Provider"
<MeetingConsumer
  {...{
    onParticipantJoined: (participant) => {
      setParticipant(participant);
    },
  }}
>
  {({ meetingId }) => {
    return <MeetingView />;
  }}
</MeetingConsumer>
```

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Parameters

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Parameters" />
      <MethodListItemLabel name="onParticipantJoined(participant)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onParticipantLeft(participant)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onSpeakerChanged(activeSpeakerId)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onPresenterChanged(presenterId)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onMainParticipantChanged(participant)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onEntryRequested(participantId, name)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onEntryResponded(participantId, name)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onRecordingStarted()" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onRecordingStopped()" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onChatMessage(data)" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onMeetingJoined()" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onMeetingLeft()" option={"optional"} type={"callback"} />
      <MethodListItemLabel name="onPinStateChanged()" option={"optional"} type={"event"} />
      <MethodListItemLabel name="function as child" option={"optional"} type={"function"} description="You can subscribe to all the function and properties." >
      </MethodListItemLabel>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
