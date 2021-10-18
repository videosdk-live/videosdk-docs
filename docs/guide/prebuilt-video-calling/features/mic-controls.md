---
title: Mic Controls
hide_title: false
hide_table_of_contents: false
description: This guide will explain mic controls for meeting.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

Different mic control permissions allows participant to enable/disable their own mic and other participant's mic too & also can set default participant's mic settings, when meeting start.

### How it works. ?

- While `participantCanToggleSelfMic` value set to `true`, you can enable/disable your own mic as display in below image.

- While `participantCanToggleSelfMic` value set to `false`, the below mic button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-mic.png)

### Mic Attributes

- `micEnabled`: Default mic setting for meeting joinee, true enables mic & false disable mic.
- `participantCanToggleSelfMic`: Allow participant to enable/disable their own mic.

```js title="index.html"
const config = {
  // ...
  micEnabled: true,
  participantCanToggleSelfMic: true,
  // ...
};
```
