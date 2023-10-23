---
title: Participant Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Participant Events
pagination_label: Participant Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: participant-events
---

# Participant Events - Android

VideoSDK provides multiple types of events which can be listened to know the about the participants in the meeting.

You can implement all the methods of `MeetingEventListener` abstract Class and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

Here are the events which specifically relate to the participants.

### onParticipantJoined

- This event is triggered when someone joins the meeting and return the `Participant` object as parameter.

### onParticipantLeft

- This event is triggered when the someone leaves the meeting.

### onWebcamRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

### onMicRequested

- This event will be triggered to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.
- This event can be subscribed from the `useMeeting` hook.

### Example

Here is the usage of all the events mentioned in this page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onParticipantJoined(participant: Participant) {
    Log.d("VideoSDK", participant.displayName + " joined");
  }

  override fun onParticipantLeft(participant: Participant) {
    Log.d("VideoSDK", participant.displayName + " left");
  }

  override fun onWebcamRequested(participantId: String, listener: WebcamRequestListener) {

    // participantId, will be the id of participant who requested to enable mic

    // if accept request
    listener.accept()

    // if reject request
    listener.reject()
  }

  override fun onMicRequested(participantId: String, listener: MicRequestListener) {

    // participantId, will be the id of participant who requested to enable mic

    // if accept request
    listener.accept()

    // if reject request
    listener.reject()
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

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onParticipantJoined(Participant participant) {
      Log.d("VideoSDK", participant.getDisplayName() + " joined");
  }

  @Override
  public void onParticipantLeft(Participant participant) {
      Log.d("VideoSDK", participant.getDisplayName() + " left");
  }

  @Override
  public void onWebcamRequested(String participantId, WebcamRequestListener listener) {

    // participantId, will be the id of participant who requested to enable webcam

    // if accept request
    listener.accept();

    // if reject request
    listener.reject();
  }

  @Override
  public void onMicRequested(String participantId, MicRequestListener listener) {

    // participantId, will be the id of participant who requested to enable mic

    // if accept request
    listener.accept();

    // if reject request
    listener.reject();
 }
}

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

- [onParticipantJoined()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantjoined)
- [onParticipantLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantleft)
- [onWebcamRequested()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onwebcamrequested)
- [onMicRequested()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmicrequested)
