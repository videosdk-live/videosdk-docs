---
sidebar_position: 1
---

# Stream Class - Javascript

Stream class is responsible for handling audio, video and screen sharing streams.

## Stream Class

Stream class defines instance of audio, video and shared screen stream of participants.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties" >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="id" type={"string"} />
      <MethodListItemLabel name="kind" type={"string"} />
      <MethodListItemLabel name="codec" type={"string"} />
      <MethodListItemLabel name="track"  type={"MediaStreamTrack"}  />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Methods

<MethodListGroup>
  <MethodListItemLabel name="__methods" >
    <MethodListGroup>
      <MethodListHeading heading="Methods" />
      <MethodListItemLabel name="pause()"  type={"undefined"} />
      <MethodListItemLabel name="resume()"  type={"undefined"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

:::note Chrome Autoplay policy workaround

Chrome's autoplay policy does not allow audio autoplay unless user has interacted with the domain (click, tap, etc.) or the user's <a href="https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei">Media engagement Index</a> threshold has been crossed. Thus, as a workaround before starting the meeting, user can either create a meeting join page or create a join meeting confirmation dialog by which we can perform a user click interaction to enable audio autoplay in chrome's newer versions.

:::

:::info You can find more about MediaStreamTrack class by following link.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack">https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack</a>

:::
