---
title: Meeting Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Meeting Events
pagination_label: Meeting Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meeting-events
---

# Meeting Events

VideoSDK provides multiple types of events which can be listened to know the current state of the meeting.

You can implement all the methods of `MeetingEventListener` abstract Class and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

Here are the events which specifically relate to the meeting.

### onMeetingJoined

- This event is triggered when the meeting is successfully joined.

### onMeetingLeft

- This event is triggered when the meeting is left.

### onSpeakerChanged

- This event is triggered when the active speaker in the meeting gets changed.

### onPresenterChanged

- This event is triggered when the presenter in the meeting gets changed.

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
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  fun onMeetingJoined() {
      Log.d("VideoSDK", "onMeetingJoined: ")
  }

  fun onMeetingLeft() {
      Log.d("VideoSDK", "onMeetingLeft: ")
  }

  fun onSpeakerChanged(participantId: String) {
      Log.d("VideoSDK", "onSpeakerChanged: $participantId")
  }

  fun onPresenterChanged(participantId: String) {
      Log.d("VideoSDK", "onPresenterChanged: $participantId")
  }
}

override fun onCreate(savedInstanceState: Bundle?) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting!!.addEventListener(meetingEventListener)
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onMeetingJoined() {
    Log.d("VideoSDK", "onMeetingJoined: ");
  }

  @Override
  public void onMeetingLeft() {
    Log.d("VideoSDK", "onMeetingLeft: ");
  }

  @Override
  public void onSpeakerChanged(String participantId) {
    Log.d("VideoSDK", "onSpeakerChanged: " + participantId);
  }

  @Override
  public void onPresenterChanged(String participantId) {
    Log.d("VideoSDK", "onPresenterChanged: " + participantId);
  }
};

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting.addEventListener(meetingEventListener);
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onMeetingJoined()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingjoined)
- [onMeetingLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft)
- [onSpeakerChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onspeakerchanged)
- [onPresenterChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onpresenterchanged)
