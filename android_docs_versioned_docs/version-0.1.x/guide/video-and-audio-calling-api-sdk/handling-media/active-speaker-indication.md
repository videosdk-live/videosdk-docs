---
title: Active Speaker Indication | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Active Speaker Indication
pagination_label: Active Speaker Indication
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: active-speaker-indication
---

# Active Speaker Indication - Android

Active Speaker indication feature in VideoSDK let you know, which participant in a meeting is active speaker. This feature can be particularly useful in larger meetings or webinars, where there may be many participants and it can be difficult to tell who is speaking.

Whenever any participant speaks in meeting, `onSpeakerChanged` event will trigger with the participant id of the active speaker.

For example, the meeting is running with **Alice** and **Bob**. Whenever any of them speaks, `onSpeakerChanged` event will trigger and return the speaker `participantId`.

### Event

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    override fun onSpeakerChanged(participantId: String?) {
        Toast.makeText(this@MainActivity, "Active Speaker participantId" + participantId, Toast.LENGTH_SHORT).show();
        super.onSpeakerChanged(participantId)
    }
};
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    @Override
    public void onSpeakerChanged(String participantId) {
        Toast.makeText(MainActivity.this, "Active Speaker participantId" + participantId, Toast.LENGTH_SHORT).show();
        super.onSpeakerChanged(participantId);
    }
};
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onSpeakerChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onspeakerchanged)
