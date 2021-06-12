---
sidebar_position: 1
---

# RTC Stream

To display participant video and screen share, you have to use `RTCView` component.

```javascript title="Using RTCView"
<RTCView streamURL={this.state.stream.toURL()} />
```

### Parameters

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel name="__namedParameters" option={"required"} type={"object"} >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="mirror" option={"optional"} type={"boolean"} description="Indicates whether the video specified by 'streamURL' should be mirrored during rendering. Commonly, applications choose to mirror theuser-facing camera." defaultValue={"false"} />
      <MethodListItemLabel name="objectFit" option={"optional"} type={"string"} defaultValue={"contain"} description="Can be contain or cover"  />
      <MethodListItemLabel name="streamURL" option={"optional"} type={"string"} />
      <MethodListItemLabel name="zOrder" option={"optional"} type={"bool"} defaultValue={"true"} />
      <MethodListItemLabel name="maxResolution" option={"optional"} type={"number"} defaultValue={"0"} description="Similar to zIndex in web" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
