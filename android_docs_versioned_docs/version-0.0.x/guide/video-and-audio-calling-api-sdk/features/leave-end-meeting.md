---
title: Leave End Meeting Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Leave or End Meeting features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Leave or End Meeting
pagination_label: Leave or End Meeting
keywords:
  - Exit Meeting
  - Leave Meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

# Leave or End Meeting - Android

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

This guide will provide an overview of how to implement leave or end feature in VideoSDK meetings.

1. **Leave** - By using `leave()` function, only a participant will leave/exit the meeting, the rest of the meeting will continue with other participants.
2. **End** - By using `end()` function, meeting will end for each and every participant. So, use this function according to your use cases.

### Leave And End Meeting

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  btnLeave!!.setOnClickListener { _: View? ->
    meeting!!.leave()
  }

  btnEnd!!.setOnClickListener { _: View? ->
    meeting!!.end()
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnLeave.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        meeting.leave();
      }
  });

  btnEnd.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        meeting.end();
      }
  });
```

</TabItem>

</Tabs>

### Events

**Events associated with `leave()`:**

- Local participant will receive a callback on[`onMeetingLeft`](../../../api/sdk-reference/meeting-class/meeting-event-listener-class.md#onmeetingleft) of `Meeting`.
- All remote participants will receive a callback [`onParticipantLeft`](../../../api/sdk-reference/meeting-class/meeting-event-listener-class.md#onparticipantleft) with Participant object.

**Event associated with `end()`:**

- All remote participants and local participant will receive a callback on [`onParticipantLeft`](../../../api/sdk-reference/meeting-class/meeting-event-listener-class.md#onparticipantleft) with Participant object.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  override fun onMeetingLeft() {
    Log.d("#meeting", "onMeetingleft()")
  }

  override fun onParticipantLeft(participant: Participant) {
    Log.d("#meeting", participant.displayName + " left");
  }
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onMeetingLeft() {
    Log.d("#meeting", "onMeetingleft()")
  }

  @Override
  public void onParticipantLeft(Participant participant) {
    Log.d("#meeting", participant.getDisplayName() + " left");
  }
}
```

</TabItem>

</Tabs>
