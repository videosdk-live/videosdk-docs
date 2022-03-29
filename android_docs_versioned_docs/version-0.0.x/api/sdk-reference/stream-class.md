---
title: Stream class for android SDK.
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

## Introduction

The `Stream Class` includes methods and events of video & audio streams.

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

## Properties

### getId()

- `getId()` will return Id of stream
- return type : `String`

### getKind()

- `getKind()` will return kind of stream, which can `audio`,`video` or `share`
- return type : `String`

### getTrack()

- `getTrack()` will return a MediaStreamTrack object stored in the MediaStream object
- return type : `MediaStreamTrack`

### getProducer()

- `getProducer()` will return a producer of stream
- return type : `Producer`

### getConsumer()

- `getConsumer()` will return a consumer of stream
- return type : `Consumer`

## Methods

### pause()

- By using `pause()` function, a participant can pause the stream of Remote Participant
- return type : `void`

### resume()

- By using `resume()` function, a participant can resume the stream of Remote Participant
- return type : `void`
