---
title: Mic Controls Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mic Controls
pagination_label: Mic Controls
keywords:
  - Mic on
  - Mic off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mic-controls
---

# Mic Controls

Whenever any participant wants to start / stop broadcasting their audio to other participant in meeting, they can simply do it with videoSDK Meeting.

This guide will provide an overview of how to use enable and disable Mic in a meeting.

1. **Enable Mic** - By using `unmuteMic()` function, a participant can publish audio to other participants.
2. **Disable Mic** - By using `muteMic()` function, a participant can stop publishing audio to other participants.

### 1. Enable, Disable Mic

```js
  private boolean micEnabled = false;

  btnMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
          // Toggle participant mic in meeting
          if (micEnabled) {
              meeting.muteMic();
              micEnabled = false;
          } else {
              meeting.unmuteMic();
              micEnabled = true;
          }
      }
  });
```

### 2. Change Audio Device

#### Get all audio Devices

- By using `meeting.getMics()` function, a participant can get all the connected mics.

```js
  private Set<AppRTCAudioManager.AudioDevice> getMics() {
    Set<AppRTCAudioManager.AudioDevice> mics = meeting.getMics();
    return mics; // returns all mics
  }
```

#### Select audio Device

- Local participant can change the audio device using `changeMic(AppRTCAudioManager.AudioDevice device)` method of meeting class.

- Parameters that can be passed to `changeMic` are

  | Audio Devices                                | Usage                        |
  | -------------------------------------------- | ---------------------------- |
  | AppRTCAudioManager.AudioDevice.BLUETOOTH     | For Bluetooth Device.        |
  | AppRTCAudioManager.AudioDevice.WIRED_HEADSET | For Wired Handset Device.    |
  | AppRTCAudioManager.AudioDevice.SPEAKER_PHONE | For Inbuilt - Speaker Device |
  | AppRTCAudioManager.AudioDevice.EARPIECE      | For Earpiece Device          |

- When a Local participant changes the Mic, `AppRTCAudioManager.AudioManagerEvents()` is triggered which can be set to `Meeting` class by using `meeting.setAudioDeviceChangeListener()`

```js

  btnChangeMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        // Change Mic in Meeting
        meeting.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH);
      }
  });

  private void setAudioDeviceListeners() {
    meeting.setAudioDeviceChangeListener(new AppRTCAudioManager.AudioManagerEvents() {
         @Override
        public void onAudioDeviceChanged(AppRTCAudioManager.AudioDevice selectedAudioDevice, Set<AppRTCAudioManager.AudioDevice> availableAudioDevices) {
            switch (selectedAudioDevice) {
                case BLUETOOTH:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: BLUETOOTH", Toast.LENGTH_SHORT).show();
                  break;
                case WIRED_HEADSET:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: WIRED_HEADSET", Toast.LENGTH_SHORT).show();
                  break;
                case SPEAKER_PHONE:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: SPEAKER_PHONE", Toast.LENGTH_SHORT).show();
                  break;
                case EARPIECE:
                  Toast.makeText(MainActivity.this, "Selected AudioDevice: EARPIECE", Toast.LENGTH_SHORT).show();
                  break;
               }
        }
    });
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
       // ...
       setAudioDeviceListeners();
    }
```
