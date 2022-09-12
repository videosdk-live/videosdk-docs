---
title: Prebuilt Theme Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Theme features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Theme
pagination_label: Theme
keywords:
  - audio calling
  - video calling
  - real-time communication
  - live on HLS
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: theme
---

# Theme

Using this feature you can change your prebuilt SDK theme to either `DARK` or `LIGHT`.

### Theme attributes

- `theme` : You can set `theme` attribute to either `DARK` , `LIGHT` or `DEFAULT`, by default theme is set to `DEFAULT`.

### How it works ?

- When you set the value of `theme` parameter to `DARK` your prebuilt theme switches to a dark theme.

![Go live with VideoSDK](/img/prebuilt/dark-theme.jpg)

- When you set the value of `theme` parameter to `LIGHT` your prebuilt theme switches to a light theme.

![Go live with VideoSDK](/img/prebuilt/light-theme.jpg)

```js title="index.html"
const config = {
  // ...
  theme: "DARK", // DARK || LIGHT || DEFAULT
  // ...
};
```
