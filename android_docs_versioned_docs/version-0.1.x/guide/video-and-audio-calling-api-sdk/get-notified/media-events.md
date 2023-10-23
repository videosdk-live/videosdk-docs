---
title: Media Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Media Events
pagination_label: Media Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: media-events
---

# Media Events - Android

VideoSDK provides multiple types of events which can be listened to know the about the participant's media status in the meeting.

You can implement all the methods of `ParticipantEventListener` abstract Class and add the listener to `Participant` class using the `addEventListener()` method of `Participant` Class.

Here are the events which specifically relate to the stream.

### onStreamEnabled

- This event is triggered whenever a participant's video, audio or screen share stream is enabled.

### onStreamDisabled

- This event is triggered whenever a participant's video, audio or screen share stream is disabled.

### Example

Here is the usage of all the events mentioned in this page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
participant.addEventListener(object : ParticipantEventListener() {
  override fun onStreamEnabled(stream: Stream) {
    Log.d("VideoSDK","onStreamEnabled $stream");
  }

  override fun onStreamDisabled(stream: Stream) {
    Log.d("VideoSDK","onStreamDisabled $stream");
  }
});
```

</TabItem>

<TabItem value="Java">

```js
participant.addEventListener(new ParticipantEventListener() {
  @Override
  public void onStreamEnabled(Stream stream) {
    Log.d("VideoSDK","onStreamEnabled" + stream);
  }

  @Override
  public void onStreamDisabled(Stream stream) {
    Log.d("VideoSDK","onStreamDisabled" + stream);
  }
});
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onStreamEnabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled)
- [onStreamDisabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled)
