---
title: Remove Participant - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Remove Participant features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

- Whenever any participant (having privileges) wants to remove other participant in room, he/she can do it with this feature.

- `Participant` class provides the `remove()` method to remove participant from the room.

```js
ElevatedButton(
    child: Text("Remove Participant"),
    onPressed: () {
        participant.remove();
    },
),
```

:::note
To remove any participant, you must have appropriate permissions
:::
