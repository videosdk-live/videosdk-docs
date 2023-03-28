---
title: Display Attendees Count - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Display Attendees Count
pagination_label: Display Attendees Count
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: display-attendees-count
---

# Display Attendees Count

In these guide we will see how you can display the number of Attendees in realtime.

:::note
Before going forward in these guide, do make sure all the attendees join the meeting with mode as `VIEWER`
:::

**`Step 1: `** We will get the `participants` list from the `useMeeting` hook.

```js
function AttendessCount() {
  const { participants } = useMeeting();

  return <></>;
}
```

**`Step 2: `** With all the participants list, we will filter the participants who have joined as a `VIEWER` and then display that count.

```js
function AttendessCount() {
  const { participants } = useMeeting();

  const attendeesCount = useMemo(() => {
    const attendees = [...participants.values()].filter((participant) => {
      return participant.mode == "VIEWER";
    });
    return attendees.length || 0;
  }, [participants]);

  return (
    <>
      <p>Number of Attendess: {attendeesCount}</p>
    </>
  );
}
```

## API Reference

The API references for all the methods utilised in this guide are provided below.

- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
