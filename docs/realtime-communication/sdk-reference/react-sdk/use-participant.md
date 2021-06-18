---
sidebar_position: 1
---

# useParticipant Hook

`useParticipant` abstracts participant class. It take events as partameters and returns participant properties and methods.

## useParticipant hook

```jsx title="useMeeting hook example"
import {
  useParticipant,
} from "@videosdk.live/react-sdk";

const onStreamEnabled = (stream) => {
  setStream(stream);
};

const {
  displayName,
  ...
} = useParticipant(participantId, {
  onStreamEnabled,
  ...
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
      <MethodListItemLabel name="participantId" option={"optional"} type={"string"} />
      <MethodListItemLabel name="triggers" option={"optional"} type={"object"} >
        <MethodListGroup>
          <MethodListItemLabel name="onStreamEnabled" option={"optional"} type={"event"} />
          <MethodListItemLabel name="onStreamDisabled" option={"optional"} type={"event"} />
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
      <MethodListItemLabel name="displayName" option={"optional"} type={"string"} />
      <MethodListItemLabel name="participant" option={"optional"} type={"Participant"} />
      <MethodListItemLabel name="webcamStream" option={"optional"} type={"MediaTrackStream"} />
      <MethodListItemLabel name="micStream" option={"optional"} type={"MediaTrackStream"} />
      <MethodListItemLabel name="screenShareStream" option={"optional"} type={"MediaTrackStream"} />
      <MethodListItemLabel name="webcamOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="micOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="screenShareOn" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="isLocal" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="isActiveSpeaker" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="isMainParticipant" option={"optional"} type={"boolean"} />
      <MethodListItemLabel name="setQuality()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="enableMic()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="disableMic()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="enableWebcam()" option={"optional"} type={"function"} />
      <MethodListItemLabel name="disableWebcam()" option={"optional"} type={"function"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
