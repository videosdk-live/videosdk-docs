---
title: Whiteboard
hide_title: false
hide_table_of_contents: false
description: This guide will explain about whiteboard.
sidebar_label: Whiteboard
pagination_label: Whiteboard
keywords:
  - Whiteboard
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: whiteboard
---

# Whiteboard

This feature allows any participant can explain their thoughts to other participants by drawing on whiteboard.

### How it works ?

- while `whiteboardEnabled`: value is set to `true`, you will able to see whiteboard icon as display in below image. Using this button you can start or stop whiteboard.

![whiteboard](/img/prebuilt/prebuilt-whiteboard.png)

- while `drawOnWhiteboard`: value is set to `true`, you will able to draw on whiteboard, by default it is set to `true`.

- while `toggleWhiteboard`: value is set to `true`, you will able to start or stop whiteboard, if it is false whiteboard button will be displayed but you can not start or stop whitwboard. By default it is set to `true`.

![whiteboard](/img/prebuilt/prebuilt-whiteboard-open.png)

### Whiteboard attributes

```js title="index.html"
const config = {
  // ...
  whiteboardEnabled: true,
  permissions: {
    // ...
    drawOnWhiteboard: true,
    toggleWhiteboard: true,
  },
  // ...
};
```
