---
title: Set Participant Video Quality - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Set Participant Video Quality features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Participant Video Quality
pagination_label: Set Participant Video Quality
keywords:
  - set video quality
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-participant-video-quality
---

# Set Participant Video Quality

This feature allows participants to set other participant's video quality during the meeting.

## Set Quality

- `setQuality` method will accept `low`, `med` or `high` as string parameter.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun setQuality()
{  
  val participants: Iterator<Participant> = meeting!!.participants.values.iterator()
  for (i in 0 until meeting!!.participants.size) {
    val participant = participants.next()

    participant.quality = "low"
    //or
    participant.quality = "med"
    //or 
    participant.quality = "high"
  }
}
```

</TabItem>

<TabItem value="Java">

```js
private void setQuality() {
  final Iterator<Participant> participants = meeting.getParticipants().values().iterator();

  for (int i = 0; i < meeting.getParticipants().size(); i++) {
    Participant participant = participants.next();
    
    participant.setQuality("low");
    //or
    participant.setQuality("med");
    //or
    participant.setQuality("high");
  }
}
```

</TabItem>

</Tabs>
