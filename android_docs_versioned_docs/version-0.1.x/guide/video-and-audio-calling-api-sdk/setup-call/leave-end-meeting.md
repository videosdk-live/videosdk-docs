---
title: Leave or End Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

# Leave or End Meeting - Android

Participant can choose to leave the meeting without removing all the other participants. This is typically done by `Leave Meeting`.

Alternatively, if the participant is the host and the last person remaining in the session, they can choose `End Meeting` by removing all other participants, which will end the session for everyone.

### `leave()`

To leave the meeting without removing all the participant you need to call `leave()` method of `Meeting` class.

### `end()`

To leave the meeting by removing all the participant you need to call `end()` method of `Meeting` class.

:::note
This methods can be called after the meeting is joined successfully.
:::

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  btnLeave!!.setOnClickListener { _: View? ->
    //highlight-next-line
    meeting!!.leave() // Leaving Meeting
  }

  btnEnd!!.setOnClickListener { _: View? ->
    //highlight-next-line
    meeting!!.end() // Ending Meeting
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnLeave.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        //highlight-next-line
        meeting.leave(); // Leaving Meeting
      }
  });

  btnEnd.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        //highlight-next-line
        meeting.end(); // Ending Meeting
      }
  });
```

</TabItem>

</Tabs>

### Events associated with Leave

Following callbacks are received when a participant leaves the meeting.

- [Local Participant](../concept-and-architecture#2-participant) will receive a callback[`onMeetingLeft`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft).
- All [remote participants](../concept-and-architecture#2-participant) will receive a callback [`onParticipantLeft`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantleft) with Participant object.

### Events associated with End

Following callbacks are received when a participant ends the meeting.

- All [remote participants](../concept-and-architecture#2-participant) and local participant will receive a callback on [`onMeetingLeft`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft) of [`MeetingEventListener`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class) class.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  //Event to know meeting is left
  //highlight-start
  override fun onMeetingLeft() {
    Log.d("#VideoSDK", "onMeetingleft()")
  }
  //highlight-end

  //Event to know some other participant left
  //highlight-start
  override fun onParticipantLeft(participant: Participant) {
    Log.d("#VideoSDK", participant.displayName + " left");
  }
  //highlight-end
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  //Event to know meeting is left
  //highlight-start
  @Override
  public void onMeetingLeft() {
    Log.d("#VideoSDK", "onMeetingleft()")
  }
  //highlight-end

  //Event to know some other participant left
  //highlight-start
  @Override
  public void onParticipantLeft(Participant participant) {
    Log.d("#VideoSDK", participant.getDisplayName() + " left");
  }
  //highlight-end
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [leave()](/android/api/sdk-reference/meeting-class/methods#leave)
- [end()](/android/api/sdk-reference/meeting-class/methods#end)
- [onMeetingLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingleft)
- [onParticipantLeft()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantleft)
