---
title: Camera Controls Video & Audio Call - Video SDK Docs
hide_title: true
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

:::caution

**This page has been deprecated.**

We've released a new version of pages with some improvements and smoother experience.

Here is the link of each SDK for this page.

- [JS](/javascript/guide/video-and-audio-calling-api-sdk/features/camera-controls)
- [React](/react/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera)
- [React Native](/react-native/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera)
- [Android](/android/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera)
- [iOS](/ios/guide/video-and-audio-calling-api-sdk/features/camera-controls)
- [Flutter](/flutter/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera)

:::

# Camera Controls

Whenever any participant wants to start/stop broadcasting their video to other participant in a meeting, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to implement enable, disable and switch webcam features in a meeting.

1. **Enable Camera** - By using `enableWebcam()` function, a participant can publish camera stream to other participants.
2. **Disable Camera** - By using `disableWebcam()` function, a participant can stop publishing camera stream to other participants.
3. **Switch Camera** - By using `changeWebcam()` function, a participant can stream from front / rear camera during the meeting.This function is only applicable for Mobile devices.

### Enable, Disable And Switch Webcam

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = async () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  const webcams = await meeting?.getWebcams(); // returns all webcams

  const { deviceId, label } = webcams[0];

  meeting?.changeWebcam(deviceId);
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = async () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  const webcams = await meeting?.getWebcams(); // returns all webcams

  const { deviceId, label } = webcams[0];

  meeting?.changeWebcam(deviceId);
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Enable Webcam in Meeting
  meeting?.enableWebcam();

  // Disable Webcam in Meeting
  meeting?.disableWebcam();

  // Change Webcam in Meeting
  meeting?.changeWebcam();
};
```

</TabItem>
<TabItem value="android">

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

      }
  });
```

</TabItem>
<TabItem value="ios">

```js
@IBAction func videoButtonTapped(_ sender: Any) {
    if !videoEnabled {
        // enable webcam/camera
        self.meeting?.enableWebcam()
    } else {
        // disable webcam/camera
        self.meeting?.disableWebcam()
    }
}

/// keep track of camera position
private var cameraPosition = CameraPosition.front

@IBAction func cameraButtonTapped(_ sender: Any) {
    cameraPosition.toggle()

    // switch camera to front/back
    // Values: .front, .back
    self.meeting?.switchWebcam(position: cameraPosition)
}
```

</TabItem>
<TabItem value="flutter">

```js
ElevatedButton(
  onPressed: meeting.disableWebcam,
  child: Text("disableWebcam"),
),
ElevatedButton(
  onPressed: meeting.enableWebcam,
  child: Text("enableWebcam"),
),
ElevatedButton(
  onPressed:  () {
    meeting?.changeWebcam("<device-id>")
  },
  child: Text("changeWebcam"),
),



// changeWebcam() method is coming soon in flutter.
```

</TabItem>
</Tabs>
