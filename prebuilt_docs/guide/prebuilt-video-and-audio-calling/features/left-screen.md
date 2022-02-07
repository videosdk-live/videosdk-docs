---
title: Prebuilt Left Meeting Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Left Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Left Screen
pagination_label: Left Screen
keywords:
  - Left audio calling
  - Left video calling
  - Left real-time communication
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: left-screen
---

# Left Screen

- Left screen be shoun when participant left the meeting if `redirectOnLeave` parameter is not provided while initializing the meeting.

### How it works ?

- While Leftscreen `redirectOnLeave` value is set to `null`, the below screen will display when any participant left the meeting.

![Meeting Left screen prebuilt](/img/prebuilt/prebuilt-left-screen.png)

### Left Screen Attributes

To configure left screen feature, you need to add lefts screen object in meeting config.

`leftScreen` object has following attributes:

- `actionButton` objecet has following attributes

  - `label`: Action button label

  - `href`: Action button href

```js title="index.html"
const config = {
  // ...
  leftScreen: {
    actionButton: {
      label: "Video SDK",
      href: "https://videosdk.live/",
    },
  },
  // ...
};
```
