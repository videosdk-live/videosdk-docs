---
title: External Call Detection Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
sidebar_label: External Call Detection
pagination_label: External Call Detection
keywords:
  - External Call Detection
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: external-call-detection
---

# External Call Detection

External call detection feature in videoSDK let you know, participant is on the call during meeting.

Whenever local participant accept the incoming call or place outgoing call, `externalcall-started` event will trigger.`externalcall-started` event only received by localParticipant.

For example, the meeting is running with **Alice** and **Bob**. Whenever **Alice** receives the call or she call someone, **Alice** will receive `externalcall-started` event.

We can access `externalcall-started` event through [meeting object](/android/guide/video-and-audio-calling-api-sdk/features/start-join-meeting).

### externalcall-started Event

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
     // ...
    @Override
    public void onExternalCallStarted() {
        Log.d("#meeting", "onExternalCallStarted");
    }
};
```
