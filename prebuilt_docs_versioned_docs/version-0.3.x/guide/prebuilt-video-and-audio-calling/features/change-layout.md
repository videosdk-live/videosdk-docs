---
title: Prebuilt Change Layout
hide_title: false
hide_table_of_contents: false
description: Change layout features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Change Layout
pagination_label: Change Layout
keywords:
  - layout
  - audio calling
  - video calling
  - real-time communication
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-layout
---

# Change Layout - Prebuilt

This feature allows participants to change layout in the meeting.

- `changeLayout` : If Set to true then participants can change their layout from an ongoing meeting by clicking on config button as shown in the following figure.

![prebuilt-grid](/img/prebuilt/configuration.png)

- `layout.type`: It should be a any of `GRID` or `SPOTLIGHT` or `SIDEBAR`, by default it is set to `GRID`.
- `layout.priority`: if set to `speaker` then speaker will get high priority even though someone else is pinned.Otherwise pin participate will get higher priority for layout.
- `layout.gridSize` : if `layout.type` set to `GRID` then participant can also set gridSize for the meeting screen . For example if gridSize set to 3 then only 3 participants will be appear on the meeting screen.

## Better understanding of Layouts

### 1. GRID Layout

This layout is default layout if no participants are pinned, it will look same as a normal meeting grid layout, when any participant is pinned that participant will be moved on top of the main screen grid above all non pinned participants

![prebuilt-grid](/img/prebuilt/prebuilt-grid.png)

While screenshare as well the main view will contain only screenshare media but the side panel view of participant grid will maintain same order of pinned and unpinned participants.

![prebuilt-grid-share](/img/prebuilt/prebuilt-grid-share.png)

### 2. SIDEBAR Layout

This layout will have one main screen view and other sidebar grid layout. Only pinned participant will be visible in this layout, all unpinned participants will not be visible in this layout. If more than one participant is pinned then the first participant who was pinned will appear in main screen layout and all other remaining pinned particiapants will be visible in sidebar.

![prebuilt-sidebar](/img/prebuilt/prebuilt-sidebar.png)

If any pinned participant started screenshare then the screenshare media will be visible in main screen layout and all other pinned participants webcam view will be visible in sidebar

![prebuilt-sidebar-share](/img/prebuilt/prebuilt-sidebar-share.png)

### 3. SPOTLIGHT Layout

This layout will only contain main screen layout, multiple pinned participants will be visible in main screen view. Same as `SIDEBAR` layout only pinned participants will be visible in main screen.

![prebuilt-spotlight](/img/prebuilt/prebuilt-spotlight.png)

If any pinned participant started screenshare then only screenshare view will be visible in main screen, no webcam view will be visible when any pinned participant started screenshare.

![prebuilt-spotlight-share](/img/prebuilt/prebuilt-spotlight-share.png)

### Layout attributes

```js title="index.html"
const config = {
  // ...
  permissions: {
    //other permissions
    changeLayout: true,
  },
  layout: {
    type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
    priority: "PIN", // "SPEAKER" | "PIN",
    gridSize: 3,
  },
  // ...
};
```
