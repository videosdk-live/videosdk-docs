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
slug: meeitngs
---

Dashboard meeting page contains four section such as OverView, Sessions, Recordings, API Reference

## 1. OverView

It contains Meeting properties listed below:

### A. Participant minutes

This can be calculated by time(minutes) spent by each participant in a meeting and total participant minute is sum of the time spent by each participant in the call.

For example, the total participant minutes for 3 participants in a 30-minute call is as given below:

`Total Participant Minutes = 3 (Number of participants) \* 30 (Duration of the Meeting) = 90 minutes.`

### B. Recording minutes

Indicates the activated recording minutes in each and every meeting.

### C. RTMP Out

Indicates the total minutes of rtmp out during each and every meetings.

For example, if we RTMP out on platform like youtube, linkedin , facebook, etc with duration of 30 minutes meeting, then RTMP out minutes will be consider as only 30 minutes.

## 2. Sessions

This section contains listing of sessions in tabular format, which contains session properties such as **MeetingId**, **Date**, **Meeting Duration**, **Total Participants**, **Recording Minutes** and **RTMP out Minutes**.

You can list your sessions on yearly, monthly, weekly and daily basis by clicking on **Select Date button** and also you can list them on your custom dates also.

You can easily search your session using search bar(Right side on select date) by providing **meetingId** as value.

By pressing session item you can see particular session details. The session details divided in to two parts the top one is for **Session info** and the bottom one is for **Participant**.

- The session info section contains **meetingId**, **Duration of the session**, **Meeting Link**, **Total number of recording** and **Total number of live streams**.

- The participant section contains the list of attendee for particular session and also you can see a particular participant name, starting session time, ending session time and duration of that participant in particular session.

You can easily search participant using search bar by providing participant name as value.

## 3. Recordings

This section contains listing of sessions recording in tabular format, which contains properties such as **MeetingId**, **Date** and **Recording duration**.

You can perform below actions on recording section :

1. **Play** : You can play the recording by pressing play icon under **MeetingId** column.
2. **Download** : You can download particular recording in your system by pressing download icon under **Action** column.
3. **Delete** : You can remove particular recording in listing by pressing trash icon under **Action** column.
