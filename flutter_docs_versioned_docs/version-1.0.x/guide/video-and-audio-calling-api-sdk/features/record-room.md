---
title: Record Room Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Record Room features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Record Room
pagination_label: Record Room
keywords:
  - Start Recording Room
  - Stop Recording Room
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: recording-room
---

# Record Room

Record room allows participants to record video & audio during the room. The recording files are available in developer dashboard.
Any participant can start / stop recording any time during the room.

This guide will provide an overview of how to implement start and stop Room Recording.

1. **Start Recording** - By using `startRecording()` function, a participant can start room recording.

### Parameters

- **webhookUrl**:

  - type: `String`
  - required: `false`
  - It will be webhook url where you want to get teh status of the recording.

- **awsDirPath**:

  - type: `String`
  - required: `false`
  - It will be path for your AWS storage specifing where to store the recording file.

- **config**:

  - type: `Object`
    - **config**:
      - **layout**:
        - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
        - **priority**: _"SPEAKER"_ | _"PIN"_
        - **gridSize**: Number _\`max 4\`_
      - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
      - **mode**: _"video-and-audio"_ | _"audio"_
      - **quality**: _"low"_ | _"med"_ | _"high"_
  - required: `false`
  - It will be config for the layout of the recording you can to use.

2. **Stop Recording** - By using `stopRecording()` function, a participant can stop room recording.

### Start And Stop Recording

```js
// Start Recording
room.startRecording(config: {
  'layout': {
    'type': 'GRID',
    'priority': 'SPEAKER',
    'gridSize': 4,
  },
  'theme': "LIGHT",
  "mode": "video-and-audio".
  'quality':'high'
});

// Stop Recording
room.stopRecording(),
```

### Events

- **recordingStateChanged** - Whenever meeting recording state changes, then `recordingStateChanged` event will trigger.

```js
room.on(Events.recordginStateChanged, (String status) {

  // Status can have values -
  // RECORDING_STARTING -- Recording is starting
  // RECORDING_STARTED -- Recording is started
  // RECORDING_STOPPING -- Recording is stopping
  // RECORDING_STOPPED -- Recording is stopped

  toastMsg("Meeting recording status : $status");
});
```
