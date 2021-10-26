---
title: Pin Participants
hide_title: false
hide_table_of_contents: false
description: This guide will explain pin process of meeting.
sidebar_label: Pin Participants
pagination_label: Pin Participants
keywords:
  - Pin participants
  - Pin participants
  - Pin real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: pin-participants
---

# Pin Participants

This feature allows participants to pin self or other participants in the meeting.

- `canPin`: If it is true then that participant can pin or unpin other participants in the meeting, by default it is set to `false`.
- `layout`: It should be a any of `GRID` or `SPOTLIGHT` or `SIDEBAR`, by default it is set to `GRID`.

:::note

If no participant is pinned, then the default meeting layout will automatically changed to `GRID` whether layout was set to `SPOTLIGHT` or `SIDEBAR` while meeting initialization. When any participant gets pinned the layout will be change to the layout set while initializing the meeting.

:::

## Better understanding of Layouts

### 1. GRID Layout

This layout will be default layout if no participants are pinned, it will look same as a normal meeting grid layout, when any participant is pinned that participant will be moved on top of the main screen grid above all non pinned participants

![prebuilt-grid](/img/prebuilt/prebuilt-grid.png)

While screenshare as well the main view will contain only screenshare media but the side panel view of participant grid will maintain same order of pinned and unpinned participants.

![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png)

### 2. SIDEBAR Layout

This layout will have one main screen view and other sidebar grid layout beside main screen view. Only pinned participant will be visible in this layout all unpinned users will not be visible inside the grid. if more then one participant is pinned then the first participant who was pinned will appear in main screen layout and all other remaining pinned particiapants will be visible in sidebar.

![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png)

If any pinned participant started screenshare then the screenshare media will be visible in main screen layout and all other pinned participants webcam view will be visible in sidebar

![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png)

### 3. SPOTLIGHT Layout

This layout will only contain main screen layout, multiple pinned participants will be visible in main screen view. Same as `SIDEBAR` layout only pinned participants will be visible in main screen.

![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png)

If any pinned participant started screenshare then only screenshare view will be visible in main screen, no webcam view will be visible when any pinned participant started screenshare if the layout is set to `SPOTLIGHT`.

![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png)

### Pin attributes

```js title="index.html"
const config = {
  // ...
  pin: {
    canPin: true,
    layout: "SPOTLIGHT",
  },
  // ...
};
```
