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

# Whiteboard - Prebuilt

This feature allows participants to explain their thoughts to other participants by drawing on an interactive whiteboard.

### How it works ?

- When `whiteboardEnabled` value is set to `true`, you will be able to see whiteboard option inside `More Options` Tab Panel as displayed in image below. By Clicking that you can start Whiteboard.

![whiteboard button](/img/prebuilt/Whiteboard.png)

- When `drawOnWhiteboard`: value is set to `true`, you will be able to draw on whiteboard, by default it is set to `true`.

- When `toggleWhiteboard`: value is set to `true`, you will be able to start or stop whiteboard, if it is false whiteboard button will be displayed but you can not start or stop whiteboard. By default it is set to `true`.

![whiteboard demo](/img/prebuilt/prebuilt-whiteboard-open.png)

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
