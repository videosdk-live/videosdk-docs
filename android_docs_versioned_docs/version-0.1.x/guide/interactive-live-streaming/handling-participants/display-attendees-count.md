---
title: Display Attendees Count - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Display Attendees Count
pagination_label: Display Attendees Count
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-attendees-count
---

# Display Attendees Count

In this guide, we will see how you can display the number of attendees in realtime.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER`
:::

- We will get the all the `participants` except local participant using `getParticipants()` method of the the `Meeting` class. With all the participants, we will filter out participants who have joined as a `VIEWER` and then display that count.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun showViewerCount() {
    var viewerCount = 1  // start with 1 to count local participant
    val participants = meeting!!.participants
    for (entry: Map.Entry<String, Participant> in participants.entries) {
        val participant = entry.value
        if (participant.mode == "VIEWER") {
            viewerCount++
        }
    }
    this.viewerCount!!.text = viewerCount.toString()
}
```

</TabItem>

<TabItem value="Java">

```js
private void showViewerCount() {
    int viewerCount = 1; // start with 1 to count local participant
    Map<String, Participant> participants = meeting.getParticipants();
    for (Map.Entry<String, Participant> entry : participants.entrySet()) {
        Participant participant = entry.getValue();
        if (participant.getMode().equals("VIEWER")) {
            viewerCount++;
        }
    }
    this.viewerCount.setText(String.valueOf(viewerCount));
}
```

</TabItem>

</Tabs>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [getparticipants()](/android/api/sdk-reference/meeting-class/properties#getparticipants)
