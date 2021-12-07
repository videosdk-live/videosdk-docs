---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS and React native android with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Other platforms
pagination_label: Other platforms
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: other-platforms
---

# Share your screen

Whenever any participant wants to share either the complete screen, a specific window or, a browser tab, they can simply do it with videoSDK Meeting.
For Mobile Devices a complete screen will be share.

This guide will provide an overview of how to use enable and disable Screen Share in a meeting.

1. **Enable Screen Share** - By using `enableScreenShare()` function, a participant can publish screen stream to other participants.
2. **Disable Screen Share** - By using `disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

### Enable, Disable Screen Share

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'React Native Android', value: 'reactnative-android'}
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
import { useMeeting } from "@videosdk.live/react-sdk";

const { enableScreenShare, disableScreenShare } = useMeeting();

const onPress = () => {
  // Enabling ScreenShare
  enableScreenShare();

  // Disabling ScreenShare
  disableScreenShare();
};
```

</TabItem>
<TabItem value="reactnative-android">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

const { enableScreenShare, disableScreenShare } = useMeeting();

const onPress = () => {
  // Enabling ScreenShare
  enableScreenShare();

  // Disabling ScreenShare
  disableScreenShare();
};
```

</TabItem>

</Tabs>
