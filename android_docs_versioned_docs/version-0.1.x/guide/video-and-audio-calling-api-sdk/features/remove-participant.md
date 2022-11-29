---
title: Remove participant from the meeting - Android SDK
hide_title: false
hide_table_of_contents: false
description: Remove a participant or a peer from the meeting while it is still in progress. It helps in meeting moderation.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - block participant
  - react native
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
val participant = meeting!!.participants.get("<participant-id>")

// This will emit an event called "onParticipantLeft" to that particular participant
participant.remove()
```

</TabItem>

<TabItem value="Java">

```js
Participant participant = meeting.getParticipants().get("<participant-id>");

// Remove participant from active session
// This will emit an event called "onParticipantLeft" to that particular participant
participant.remove();
```

</TabItem>

</Tabs>


### Events

**onParticipantLeft** - Removing participant will trigger `onParticipantLeft` event.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {

  override fun onParticipantLeft(participant: Participant) {
    // Triggers when a participant is removed or leaves the meeting.
    Log.d("#meeting", participant.displayName + " left");
  }
}
```

</TabItem>

<TabItem value="Java">

```javascript
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onParticipantLeft(Participant participant) {
    // Triggers when a participant is removed or leaves the meeting.
    Log.d("#meeting", participant.getDisplayName() + " left");
  }
}
```

</TabItem>

</Tabs>