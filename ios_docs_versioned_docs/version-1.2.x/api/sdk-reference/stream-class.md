---
title: Stream class for IOS SDK.
hide_title: false
hide_table_of_contents: false
description: RTC Stream Class enables opportunity to .
sidebar_label: Stream Class
pagination_label: Stream Class
keywords:
  - RTC Android
  - Stream Class
  - Video API
  - Video Conferencing
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: stream-class
---

# Stream Class

## using Stream Class

The `Stream Class` includes methods and events video & audio streams.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Properties

<MethodListGroup>
  <MethodListItemLabel name="__properties"  >
    <MethodListGroup>
      <MethodListHeading heading="Properties" />
      <MethodListItemLabel name="id"  type={"String"} />
      <MethodListItemLabel name="kind"  type={"StreamKind"} description="StreamKind is ENUM with possible values of video, audio and share" />
      <MethodListItemLabel name="track"  type={"RTCMediaStreamTrack"} />
      <MethodListItemLabel name="producer"  type={"Producer"} />
      <MethodListItemLabel name="consumer"  type={"Consumer"} />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
