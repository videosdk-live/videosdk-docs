---
title: Set Particpant Video Quality - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Set Particpant Video Quality features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Particpant Video Quality
pagination_label: Set Particpant Video Quality
keywords:
  - set video quality
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-participant-video-quality
---

# Set Particpant Video Quality

This feature allows participants to set other participant's video quality during the meeting.

## Set Quality

- `setQuality` method will accept `low`, `med` or `high` as string parameter.

```js
  btnQuality.setOnClickListener(new View.OnClickListener() {
     @Override
     public void onClick(View v) {
         for (int i = 0; i < meeting.getParticipants().size(); i++) {
             Participant participant = participants.next();

             participant.setQuality("low");
             //or
             participant.setQuality("med");
             //or
             participant.setQuality("high");
         }
     }
 });
```
