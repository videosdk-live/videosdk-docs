---
title: Leave Meeting
hide_title: false
hide_table_of_contents: false
description: This guide will explain leaving process of meeting.
sidebar_label: Leave Meeting
pagination_label: Leave Meeting
keywords:
  - exit audio calling
  - exit video calling
  - exit real-time communication
  - leave audio calling
  - leave video calling
  - leave real-time communication
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: leave-meeting
---

Whenever participant wishes to end their communication in the meeting, they can simply leave the meeting.

### Leave Meeting Attributes

- **participantCanLeave**: If it is true, then end meeting button will be visible on top right bar of the meeting. If it is false, then end meeting button won't be available on top right bar of the meeting.
- **redirectOnLeave**: It's URL where you want to redirect participant after leave the meeting,**OPTIONAL**.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'Angular', value: 'angular'},
{label: 'Vue', value: 'vue'},
]}>
<TabItem value="js">

```js
const config = {
  // ...
  participantCanLeave: true,
  redirectOnLeave: "https://www.videosdk.live/",
  // ...
};
```

</TabItem>

<TabItem value="react">

```js
useEffect(() => {
  const config = {
    // ...
    participantCanLeave: true,
    redirectOnLeave: "https://www.videosdk.live/",
    // ...
  };
}, []);
```

</TabItem>
<TabItem value="angular">

```js
function ngOnInit() {
  const config = {
    // ...
    participantCanLeave: true,
    redirectOnLeave: "https://www.videosdk.live/",
    // ...
  };
}
```

</TabItem>
<TabItem value="vue">

```js
mounted: () => {
  const config = {
    // ...
    participantCanLeave: true,
    redirectOnLeave: "https://www.videosdk.live/",
    // ...
  };
};
```

</TabItem>

</Tabs>
