---
title: Mic Controls
hide_title: false
hide_table_of_contents: false
description: This guide will explain ending process of meeting.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

Whenever any participant wants to start / stop broadcasting their audio to other participant in meeting, they can simply do it with videoSDK Meeting.

This guide will provide an overview of how to use enable and disable Mic in a meeting.

1. **Enable Mic** - By using `enableMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `disableMic()` function, a participant can stop publishing audio to other participants.
3. **Toggle Mic** - A participant can on / off mic using `toggleMic()` function.

### Enable, Disable And Toggle Mic

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

  // Toggle Mic in Meeting
  meeting?.toggleMic();
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

  // Toggle Mic in Meeting
  meeting?.toggleMic();
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

  // Toggle Mic in Meeting
  meeting?.toggleMic();
};
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>
