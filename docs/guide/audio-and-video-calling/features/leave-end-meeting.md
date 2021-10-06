---
title: Leave OR End Meeting
hide_title: false
hide_table_of_contents: false
description: This guide will explain ending process of meeting.
sidebar_label: Leave OR End Meeting
pagination_label: Leave OR End Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-end-meeting
---

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

This guide will provide an overview of how to implement leave or end feature in VideoSDK meetings.

1. **Leave** - By using `leave()` function, only a participant will leave/exit the meeting, the rest of the meeting will continue with other participants.
2. **End** - By using `end()` function, meeting will end for each and every participant. So, use this function according to your use cases.

### Leave And End Meeting

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
