---
title: Picture-in-Picture Mode | Video SDK
hide_title: true
hide_table_of_contents: false
description: Picture-in-picture (PiP) is a feature that is commonly used in video conferencing software. It allows you to continue your video conference while also performing other tasks on your device.
sidebar_label: Picture-in-Picture Mode
pagination_label: Picture-in-Picture Mode
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: picture-in-picture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Picture-in-Picture Mode

Picture-in-picture (PiP) is a feature that is commonly used in video conferencing software. It allows you to continue your video conference while also performing other tasks on your device. With PiP, you can keep the video conference window open and resize it to a smaller size, allowing you to work on other tasks while still being able to see and hear the other participants in the conference. This can be very helpful if you need to take notes, send an email, or look up information during the conference.

In this guide, we will go through how you can create a Picture-in-Picture feature with VideoSDK.

<center>

<img src='https://cdn.videosdk.live/website-resources/docs-resources/pip_mobile.png' />

</center>

:::important

- Picture-in-Picture (PiP) doesn't work after screen sharing.
- PiP is only supported in Android Devices.

:::

### `Step 1:` Install Package

In this step, we will install third party package [react-native-pip-android](https://www.npmjs.com/package/react-native-pip-android) to achieve PiP mode in android.

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install react-native-pip-android
```

</TabItem>
<TabItem value="yarn">

```js
yarn add react-native-pip-android
```

</TabItem>
</Tabs>

### `Step 2:` Setup

Add the following attribute in `/android/app/src/main/AndroidManifest.xml` file.

```js
  <activity
    ...
      android:supportsPictureInPicture="true"
      android:configChanges=
        "screenSize|smallestScreenSize|screenLayout|orientation"
        ...
```

### `Step 3:` Import Activity in MainActivity.java file

```js
...
import com.reactnativepipandroid.PipAndroidModule;

public class MainActivity extends ReactActivity {

...

@Override
  public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode) {
    PipAndroidModule.pipModeChanged(isInPictureInPictureMode);
  }
```

### `Step 4:` Setup PiP on Render participant media

In accordance with the value of the `usePipModeListener` hook, you can render anything you want. In the example below, we'll render a participant list.

```js
//highlight-next-line
import PipHandler, { usePipModeListener } from "react-native-pip-android";

function ParticipantView({ participantId, inPipMode }) {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={"cover"}
      style={{
        height: inPipMode ? 75 : 300,
        marginVertical: 8,
        marginHorizontal: 8,
      }}
    />
  ) : null;
}

function ControlsContainer() {
  return null;
}

function MeetingView() {
  // Get `participants` from useMeeting Hook
  const { participants } = useMeeting({});

  //highlight-start
  const inPipMode = usePipModeListener();

  // Use this boolean to show / hide ui when pip mode changes
  if (inPipMode) {
    // Render the participant in PiP Box

    return [...participants.keys()].map((participantId, index) => (
      <ParticipantView
        key={index}
        participantId={participantId}
        inPipMode={true}
      />
    ));
  }
  //highlight-end

  return (
    <View style={{ flex: 1 }}>
      {[...participants.keys()].map((participantId, index) => (
        <ParticipantView key={index} participantId={participantId} />
      ))}
      <ControlsContainer />
    </View>
  );
}
```

### `Step 5:` Enter in PiP mode

The `enterPipMode` method of `PipHandler` accepts the PiP box's height and width and enables entry into PiP mode for the App.

```js
function ControlsContainer() {
  const { join, leave } = useMeeting();
  return (
    <View
      style={{
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        onPress={() => {
          join();
        }}
        buttonText={"Join"}
        backgroundColor={"#1178F8"}
      />
      <Button
        onPress={() => {
          leave();
        }}
        buttonText={"Leave"}
        backgroundColor={"#FF0000"}
      />
      //highlight-start
      <Button
        onPress={() => {
          PipHandler.enterPipMode(300, 500);
        }}
        buttonText={"PIP"}
        backgroundColor={"blue"}
      />
      //highlight-end
    </View>
  );
}
```

### Output

import ReactPlayer from 'react-player'

<ReactPlayer controls autoplay muted loop playing url='https://cdn.videosdk.live/website-resources/docs-resources/pip_mobile_video_1.mp4' width={"100%"} height={'700px'}/>

<br/>
