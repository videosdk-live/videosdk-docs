---
title: Go Live On Social Media
hide_title: false
hide_table_of_contents: false
description: This guide will explain broadcast meeting on various social media platforms.
sidebar_label: Go Live On Social Media
pagination_label: Go Live On Social Media
keywords:
  - Facebook Live
  - Youtube Live
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-social-media
---

Livestreaming allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

### Live streaming attributes

- `autoStart`: If it is true then live streaming will start automatically when the meeting starts, default value is false (You can't start live streaming during the meeting).
- `outputs`: It's an array of object that contains RTMP url and stream key from the provided platforms such as Youtube or Facebook.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'}
]}>
<TabItem value="js">

```js
const config = {
  // ...
  livestream: {
    autoStart: true,
    outputs: [
      {
        url: "rtmp://x.rtmp.youtube.com/live2",
        streamKey: "<STREAM KEY FROM YOUTUBE>",
      },
    ],
  },
  // ...
};
```

</TabItem>

</Tabs>
