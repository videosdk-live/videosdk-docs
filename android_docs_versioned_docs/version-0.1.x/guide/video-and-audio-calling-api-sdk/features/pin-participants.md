---
title: Pin Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Pin Participant features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Pin Participants
pagination_label: Pin Participants
keywords:
  - pin
  - unpin
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pin-participants
---

# Pin Participants

In any meeting with large number of participants, if you want to show only one or two participant(s) on main screen then you can pin that perticipants so that viewers can only focus upon that participants only.

This guide will provide an overview of how to pin or unpin any participants in a meeting.

:::note
`pin()` and `unpin()` functions will take `string` or `null` as an argument. Pin will be effective for both webcam and screenshare of that participant.

Suppose you want to pin or unpin only webcam of that participant then you can pass `CAM`, else if you want to pin or unpin only screenshare of that participant then you can pass `SHARE`.

You can also pass `SHARE_AND_CAM` if you want to `pin` or `unpin` both webcam and screenshare media of that user, or passing `null` or nothing as an argument will also work in the same way.

If any participant's webcam is pinned but not screenshare, then calling `pin("SHARE")` the new pinState of that participant will be `{ cam: true, share: true }`.  
:::

### Pin And Unpin a Participant

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  // Pin both webcam and screenshare of that participant
  meeting!!.localParticipant.pin(null)

  // Pin webcam of that participant
  meeting!!.localParticipant.pin("CAM")

  // Pin screenshare of that participant
  meeting!!.localParticipant.pin("SHARE")

  //
  // Unpin both webcam and screenshare of that participant
  meeting!!.localParticipant.unpin();

  // Unpin webcam of that participant
  meeting!!.localParticipant.unpin("CAM");

  // Unpin screenshare of that participant
  meeting!!.localParticipant.unpin("SHARE");
```

</TabItem>

<TabItem value="Java">

```js
 // Pin both webcam and screenshare of that participant
  meeting.getLocalParticipant().pin(null)

  // Pin webcam of that participant
  meeting.getLocalParticipant().pin("CAM")

  // Pin screenshare of that participant
  meeting.getLocalParticipant().pin("SHARE")

  //
  // Unpin both webcam and screenshare of that participant
  meeting.getLocalParticipant().unpin();

  // Unpin webcam of that participant
  meeting.getLocalParticipant().unpin("CAM");

  // Unpin screenshare of that participant
  meeting.getLocalParticipant().unpin("SHARE");
```

</TabItem>

</Tabs>

### onPinStateChanged Event

Whenever any participant got pinned or unpinned by any participant, `onPinStateChanged` event will be triggered.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
 override fun onPinStateChanged(pinStateData: JSONObject?) {
   Log.d("onPinStateChanged: ", pinStateData.getString("peerId")) // id of participant who were pinned
   Log.d("onPinStateChanged: ", pinStateData.getJSONObject("state")) // { cam: true, share: true } 
   Log.d("onPinStateChanged: ", pinStateData.getString("pinnedBy")) // id of participant who pinned that participant
  }
```

</TabItem>

<TabItem value="Java">

```javascript
@Override
  public void onPinStateChanged(JSONObject pinStateData) {
    Log.d("onPinStateChanged: ", pinStateData.getString("peerId")); // id of participant who were pinned
    Log.d("onPinStateChanged: ", pinStateData.getJSONObject("state")); // { cam: true, share: true } 
    Log.d("onPinStateChanged: ", pinStateData.getString("pinnedBy")); // id of participant who pinned that participant
  }

```

</TabItem>

</Tabs>
