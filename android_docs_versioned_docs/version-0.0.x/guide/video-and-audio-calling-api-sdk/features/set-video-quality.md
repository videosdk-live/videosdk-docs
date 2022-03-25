---
title: Set Video Quality - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Set Video Quality features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Video Quality
pagination_label: Set Video Quality
keywords:
  - set video quality
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-video-quality
---

# Set Video Quality

- Set Video Quality feature allows participant to set other participant's video quality during the meeting.

- `meeting` class provide the `setQuality(Stream stream, String quality)` method to set participant's video quality.

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