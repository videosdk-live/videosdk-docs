---
title: Play External Video
hide_title: false
hide_table_of_contents: false
description: This guide will explain toggling webcam in meeting.
sidebar_label: Play External Video
pagination_label: Play External Video
keywords:
  - Toggle webcam in meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: play-external-video
---

This feature allows participants to broadcast any external video by providing video link.
Like screen share feature, one participant is broadcasting and other participants are receivers.

This guide will provide an overview of how participant can start, stop, resume and seek external video during the meeting.

1. **Start** : By using `startVideo()` function, the broadcaster can start external video by providing video link in argument.
2. **Stop** : By using `stopVideo()` function, a broadcaster can stop external video.
3. **Pause** : By using `pauseVideo()` function, a broadcaster can pause external video by providing `{ currentTime: 5 }` object as an argument.
4. **Resume** : By using `resumeVideo()` function, a broadcaster can resume external video from last pause video duration.
5. **Seek** : By using `seekVideo()` function, a broadcaster can seek external video to any given duration by providing `{ currentTime: 5 }` object as an argument.

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
  // Start Recording
  meeting?.startRecording();

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording();

  // Stop Recording
  meeting?.stopRecording();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Start Recording
  meeting?.startRecording();

  // Stop Recording
  meeting?.stopRecording();
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
