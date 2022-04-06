---
title: Meetings
hide_title: false
hide_table_of_contents: false
description: videosdk.live dashboard will help you to get real-time updates of all the meetings, live streams and videos. It will also help you to monitor services.
sidebar_label: Meetings
pagination_label: Meetings
keywords:
  - dashboard
  - video API
  - monitor usage
  - realtime query
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: meetings
---

Dashboard meeting page is all about your consumed meeting minutes, conducted number of sessions and list of session recordings.

This page Contains three major section such as [Overview](/docs/guide/dashboard/meetings#1-overview), [Sessions](/docs/guide/dashboard/meetings#2-sessions) and [Recordings](/docs/guide/dashboard/meetings#3-recordings).

## 1. Overview

It displays the overall uses of meeting minutes .

### A. Participant minutes

This can be calculated by time(minutes) spent by each participant in a meeting and total participant minute is sum of the time spent by each participant in the call.

For example, the participant minutes for 6 participants in a 50 minute call is as given below:

![Video SDK Home Dashboard](/img/dashboard/pricing-tabel.jpg)

### B. Recording minutes

Indicates the activated recording minutes in each and every meeting.

### C. RTMP Out

Indicates the total minutes of RTMP out during each and every meetings.

For example, if we RTMP out on platform like youtube, linkedin , facebook, etc with duration of 30 minutes meeting, then RTMP out minutes will be consider as only 30 minutes.

![Video SDK Home Dashboard](/img/dashboard/meeting-overview.png)

## 2. Sessions

This section contains listing of sessions in tabular format, which contains session properties such as **MeetingId**, **Session Date**, **Session Duration**, **Total Participants in particular session**, **Number of Recording in each session** and **Number of RTMP out in each session**.

![Video SDK Home Dashboard](/img/dashboard/meeting-session.png)

You can list your sessions on yearly, monthly, weekly and daily basis by clicking on **Select Date button** and also you can list them on your custom dates also.

You can easily search your session using search bar on top right side by providing **meetingId** as value.

By pressing session item you can see particular item details. The session details divided in to two section :

- **Session info** - This section contains **meetingId**, **Duration of the session**, **Meeting Link**, **Total number of recording** and **Total number of live streams**.

- **Participant List** - This section contains the list of attendee for particular session and also you can see a particular participant name, starting session time, ending session time and duration of that participant in particular session.

You can easily search participant using search bar by providing participant name as value.

![Video SDK Home Dashboard](/img/dashboard/meeting-session-sidebar.png)

## 3. Recordings

This section contains listing of sessions recording in tabular format, which contains properties such as **MeetingId**, **Date** and **Recording duration**.

You can perform below actions on recording section :

1. **Play** : You can play the recording by pressing play icon on left side of table items.
2. **Download** : You can download particular recording in your system by pressing download icon under **Action** column.
3. **Delete** : You can remove particular recording in listing by pressing trash icon under **Action** column.

![Video SDK Home Dashboard](/img/dashboard/meeting-recording.png)

The last section is for [API Reference](https://docs.videosdk.live/api-reference/v1/realtime-communication/auth/) only.
