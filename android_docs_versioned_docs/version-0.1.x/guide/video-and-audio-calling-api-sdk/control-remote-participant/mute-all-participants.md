---
title: Mute All Participants | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Mute All Participants
pagination_label: Mute All Participants
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-all-participants
---

# Mute All Participants - Android

If you are the host or moderator of a video conference, you may want to mute all the participants at once. This can be useful in various scenarios, such as when you want to deliver a presentation or when there is background noise that is causing distractions.

- To achieve this, you have to iterate over the list of participants from the `Meeting` class and call `disableMic` method from `Participant` class.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
btnMuteAllParticipant!!.setOnClickListener { _: View? ->
  var participants: Iterator<Participant> = meeting.participants.values.iterator()
  for (i in 0 until meeting.participants.size) {
      val participant = participants.next()
      participant.disableMic()
  }
}
```

</TabItem>

<TabItem value="Java">

```js
btnMuteAllParticipant.setOnClickListener(new View.OnClickListener() {
  @Override
  public void onClick(View v) {
    final Iterator<Participant> participants = meeting.getParticipants().values().iterator();
    for (int i = 0; i < meeting.getParticipants().size(); i++) {
      final Participant participant = participants.next();
      participant.disableMic();
    }
  }
});
```

</TabItem>

</Tabs>

:::note
Participant who will be muting other participants should have permission **`allow_mod`** passed in the token. To know more about permissions [**visit here**](/android/guide/video-and-audio-calling-api-sdk/authentication-and-token).
:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [disableMic()](/android/api/sdk-reference/participant-class/methods#disablemic)
