---
title: Mic Controls Audio & Video Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, iOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

# Mic Controls

Whenever any participant wants to start / stop broadcasting their audio to other participant in meeting, they can simply do it with videoSDK Meeting.

This guide will provide an overview of how to use enable and disable Mic in a meeting.

1. **Enable Mic** - By using `enableMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `disableMic()` function, a participant can stop publishing audio to other participants.

### Enable, Disable Mic

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.enableMic();

  // Disable Mic in Meeting
  meeting?.disableMic();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.enableMic();

  // Disable Mic in Meeting
  meeting?.disableMic();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Enable Mic in Meeting
  meeting?.enableMic();

  // Disable Mic in Meeting
  meeting?.disableMic();
};
```

</TabItem>
<TabItem value="android">

```js
  btnMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        // Toggle participant mic in meeting
        if (micEnabled) {
          meeting.muteMic();
        } else {
          meeting.unmuteMic();
        }

      }
  });
```

</TabItem>
<TabItem value="ios">

```js
/// Mic tap
buttonControlsView.onMicTapped = { on in
  if on {
    self.meeting?.muteMic()
  } else {
    self.meeting?.unmuteMic()
  }
}
```

</TabItem>
<TabItem value="flutter">

```js
ElevatedButton(
  onPressed: meeting.disableMic,
  child: Text("disableMic"),
),
ElevatedButton(
  onPressed: meeting.enableMic,
  child: Text("enableMic"),
),
```

</TabItem>
</Tabs>
