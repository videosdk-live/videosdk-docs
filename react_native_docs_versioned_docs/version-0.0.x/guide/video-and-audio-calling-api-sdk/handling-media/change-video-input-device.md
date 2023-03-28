---
title: Change Video Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Video Input Device
pagination_label: Change Video Input Device
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-video-input-device
---

# Change Video Input Device

During the meeting at any point a participant wishes to switch his/her input video device, it can be done using the below mentioned methods.

### `getWebcams()`

- This method of the `useMeeting` hook will give you the list of all the available cameras which can be shown in a list.

- This method will return an array of objects which will contain the `deviceId` and `label` of the camera input device.

### `changeWebcam()`

- Once you know which device you want to switch camera input to, you can pass the `deviceId` to this method to change the camera input device.

#### Example

```js
import { useEffect, useState } from "react";
import { useMeeting } from "@videosdk.live/react-native-sdk";
import { TouchableOpacity, Text } from "react-native";

const MeetingView = () => {
  //Creating two react states to store list of available cameras and selected camera
  const [cameras, setCameras] = useState([]);

  //Getting the methods to change and get the camera
  const { getWebcams, changeWebcam } = useMeeting();

  //Method to get the cameras and load in our state
  const handleGetWebcams = async () => {
    const webcams = await getWebcams();
    setCameras(webcams);
  };

  useEffect(() => {
    handleGetWebcams();
  }, []);

  //Changing the camera with the selected deviceId
  const handleChangeCamera = (value) => {
    changeWebcam(value);
  };

  return (
    <>
      // Showing a selector for the availabe cameras
      {cameras.map((camera) => {
        return (
          <TouchableOpacity
            onPress={() => {
              handleChangeCamera(camera.deviceId);
            }}
          >
            <Text>{camera.label}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};
```

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [getWebcams()](/react-native/api/sdk-reference/use-meeting/methods#getwebcams)
- [changeWebcam()](/react-native/api/sdk-reference/use-meeting/methods#changewebcam)
