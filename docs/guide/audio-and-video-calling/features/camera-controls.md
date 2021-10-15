---
title: Camera Controls Audio & Video Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, iOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Camera Controls
pagination_label: Camera Controls
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with videoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

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
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  meeting?.changeWebcam();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  meeting?.changeWebcam();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  meeting?.changeWebcam();
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
