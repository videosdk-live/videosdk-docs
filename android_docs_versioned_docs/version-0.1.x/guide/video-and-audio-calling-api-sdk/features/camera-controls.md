---
title: Camera Controls Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Camera Controls
pagination_label: Camera Controls
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-controls
---

# Camera Controls - Android

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  btnWebcam!!.setOnClickListener {

    // Toggle participant webcam in meeting
    if (webcamEnabled) {
      meeting!!.disableWebcam()
    } else {
      meeting!!.enableWebcam()
    }

    // Change Webcam in Meeting
    meeting!!.changeWebcam()
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnWebcam.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        // Toggle participant webcam in meeting
        if (webcamEnabled) {
          meeting.disableWebcam();
        } else {
          meeting.enableWebcam();
        }

         // Change Webcam in Meeting
        meeting.changeWebcam();
      }
  });
```

</TabItem>

</Tabs>

### Events

**Event associated with `enableWebcam()`:**

- Every Participant will receive a callback on [`onStreamEnabled()`](../../../api/sdk-reference/participant-class/participant-event-listener-class.md#onstreamenabled) of the [`Participant`](../../../api/sdk-reference/participant-class//introduction.md) with `Stream` object.

**Event associated with `disableWebcam()`:**

- Every Participant will receive a callback on [`onStreamDisabled()`](../../../api/sdk-reference/participant-class/participant-event-listener-class.md#onstreamenabled) of the [`Participant`](../../../api/sdk-reference/participant-class//introduction.md) with `Stream` object.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
    override fun onStreamEnabled(stream: Stream) {
        //

        if(stream.getKind().equals("video")){
          //participant turned on video
          //Render participant video
        }
    }

    override fun onStreamDisabled(stream: Stream) {
        //

        if(stream.getKind().equals("video")){
          //participant turned off video
          //remove participant video
        }
    }
  });
```

</TabItem>

<TabItem value="Java">

```js
  participant.addEventListener(new ParticipantEventListener() {
    @Override
    public void onStreamEnabled(Stream stream) {
        //
        if(stream.getKind().equals("video")){
          //participant turned on video
          //Render participant video
        }
    }

    @Override
    public void onStreamDisabled(Stream stream) {
        //
        if(stream.getKind().equals("video")){
          //participant turned off video
          //remove participant video
        }
    }
  });
```

</TabItem>

</Tabs>
