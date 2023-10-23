---
title: Change Input/Output Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Input/Output Device
pagination_label: Change Input/Output Device
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-input-output-device
---

# Change Input/Output Device - Android

During the meeting at any point a participant wishes to switch his/her audio or video device, it can be done using the below mentioned methods.

## Changing Input/Output Audio Device

### `getMics()`

- The `getMics()` method will return a list of all available microphones that are connected to the mobile device.

- This method will return a Set of `AppRTCAudioManager.AudioDevice`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  private fun getMics(): MutableSet<AppRTCAudioManager.AudioDevice>? {
    //highlight-next-line
    val mics= meeting!!.mics
    return mics  // returns all connected mics
  }
```

</TabItem>

<TabItem value="Java">

```js
  private Set<AppRTCAudioManager.AudioDevice> getMics() {
    //highlight-next-line
    Set<AppRTCAudioManager.AudioDevice> mics = meeting.getMics();
    return mics; // returns all connected mics
  }
```

</TabItem>

</Tabs>

### `changeMic()`

- Participant can change the audio device using `changeMic(AppRTCAudioManager.AudioDevice device)` method of `Meeting` class.

- Parameters that can be passed to `changeMic` are

  | Audio Devices                                | Usage                        |
  | -------------------------------------------- | ---------------------------- |
  | AppRTCAudioManager.AudioDevice.BLUETOOTH     | For Bluetooth Device.        |
  | AppRTCAudioManager.AudioDevice.WIRED_HEADSET | For Wired Handset Device.    |
  | AppRTCAudioManager.AudioDevice.SPEAKER_PHONE | For Inbuilt - Speaker Device |
  | AppRTCAudioManager.AudioDevice.EARPIECE      | For Earpiece Device          |

- When participant changes the Mic, `AppRTCAudioManager.AudioManagerEvents()` is triggered which can be set to `Meeting` class by using `setAudioDeviceChangeListener()`.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js

  btnChangeMic!!.setOnClickListener { _: View? ->
  // Change Mic during Meeting
  //highlight-next-line
    meeting!!.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH)
  }

  private fun setAudioDeviceListeners() {
    //highlight-start
    meeting!!.setAudioDeviceChangeListener(object : AudioManagerEvents {
      override fun onAudioDeviceChanged(
        selectedAudioDevice: AppRTCAudioManager.AudioDevice,
        availableAudioDevices: Set<AppRTCAudioManager.AudioDevice>
      ) {
          when (selectedAudioDevice) {
            AppRTCAudioManager.AudioDevice.BLUETOOTH ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: BLUETOOTH", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.WIRED_HEADSET ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: WIRED_HEADSET", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.SPEAKER_PHONE ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: SPEAKER_PHONE", Toast.LENGTH_SHORT).show()

            AppRTCAudioManager.AudioDevice.EARPIECE ->
              Toast.makeText(this@MainActivity, "Selected AudioDevice: EARPIECE", Toast.LENGTH_SHORT).show()
          }
        }
    })
    //highlight-end
  }

  override fun onCreate(savedInstanceState: Bundle?) {
       // ...
       setAudioDeviceListeners()
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnChangeMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        // Change Mic during Meeting
        //highlight-next-line
        meeting.changeMic(AppRTCAudioManager.AudioDevice.BLUETOOTH);
      }
  });

  private void setAudioDeviceListeners() {
    //highlight-start
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
    //highlight-end
  }

  @Override
    protected void onCreate(Bundle savedInstanceState) {
       // ...
       setAudioDeviceListeners();
    }
```

</TabItem>

</Tabs>

- To use Bluetooth device, you must declare `BLUETOOTH` permission in `AndroidManifest.xml` file.

```js
<manifest ... >
//...
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
<uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
</manifest>
```

## Changing Camera Input Device

### `changeWebcam()`

- By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.

#### Example

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  btnWebcam!!.setOnClickListener {
    // Change Webcam during Meeting
    //highlight-next-line
    meeting!!.changeWebcam()
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnWebcam.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        // Change Webcam during Meeting
        //highlight-next-line
        meeting.changeWebcam();
      }
  });
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [getMics()](/android/api/sdk-reference/meeting-class/methods#getmics)
- [changeMic()](/android/api/sdk-reference/meeting-class/methods#changemic)
- [changeWebcam()](/android/api/sdk-reference/meeting-class/methods#changewebcam)
