---
title: Leave End Meeting Video & Audio Call - Video SDK Docs
hide_title: true
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

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)
- [React](/react/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)
- [Android](/android/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/features/leave-end-room)

:::

# Leave or End Meeting

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

This guide will provide an overview of how to implement leave or end feature in VideoSDK meetings.

1. **Leave** - By using `leave()` function, only a participant will leave/exit the meeting, the rest of the meeting will continue with other participants.
2. **End** - By using `end()` function, meeting will end for each and every participant. So, use this function according to your use cases.

### Leave And End Meeting

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Leave Meeting
  meeting?.leave();

  // Exit Meeting
  meeting?.end();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Leave Meeting
  meeting?.leave();

  // Exit Meeting
  meeting?.end();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Leave Meeting
  meeting?.leave();

  // Exit Meeting
  meeting?.end();
};
```

</TabItem>
<TabItem value="android">

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
<TabItem value="ios">

```js
@IBAction func leaveMeetingButtonTapped(_ sender: Any) {
    // leave meeting
    self.meeting?.leave()

    // end meeting for everyone
    self.meeting?.end()
}

/// Events:
// called after user leaves the meeting
func onMeetingLeft() {
    // cleanup: remove listeners
    meeting?.localParticipant.removeEventListener(self)
    meeting?.removeEventListener(self)

    // dismiss meeting controller
}
```

</TabItem>
<TabItem value="flutter">

```js
// Leave the meeting
meeting.leave();
```

</TabItem>
</Tabs>
