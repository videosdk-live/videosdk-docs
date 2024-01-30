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

# Display Attendees Count - React

This guide explains the process of displaying the number of attendees in realtime.

:::note
Before proceeding with this guide, ensure that all attendees join the meeting with the mode set to `VIEWER`.
:::

**`Step 1:`** Start by obtaining all the `participants` using the `useMeeting` hook. 

```js
import { useMeeting } from "@videosdk.live/react-sdk";

function AttendessCount() {
  const { participants } = useMeeting();

  return <></>;
}
```

**`Step 2:`** Subsequently, filter out those who have joined as `VIEWER` and display the count.

```js
import { useMeeting } from "@videosdk.live/react-sdk";
import { useMemo } from "react";

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

The API references for all the methods utilized in this guide are provided below.

- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
