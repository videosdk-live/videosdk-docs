---
title: Share Your Screen
hide_title: false
hide_table_of_contents: false
description: This guide will explain toggling webcam in meeting.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - Toggle webcam in meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

Whenever any participant wants to share either the complete screen, a specific window or, a browser tab, they can simply do it with videoSDK Meeting.
For Mobile Devices a complete screen will be share.

This guide will provide an overview of how to use enable and disable Screen Share in a meeting.

1. **Enable Screen Share** - By using `enableScreenShare()` function, a participant can publish screen stream to other participants.
2. **Disable Screen Share** - By using `disableScreenShare()` function, a participant can stop publishing screen stream to other participants.
3. **Toggle Screen Share** - A participant can enable / disable screen share using `toggleScreenShare()` function.

### Enable, Disable And Toggle Screen Share

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
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();

  // Toggling ScreenShare
  meeting?.toggleScreenShare();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();

  // Toggling ScreenShare
  meeting?.toggleScreenShare();
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
