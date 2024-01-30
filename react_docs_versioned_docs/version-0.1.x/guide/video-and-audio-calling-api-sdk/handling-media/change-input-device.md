---
title: Change Input Device | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Speaker Indication features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Change Input Device
pagination_label: Change Input Device
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-input-device
---

# Change Input Device - React

During the meeting, at any point, a participant wishing to switch their input audio or video device, can do so using the below-mentioned methods.

## Changing Audio Input Device

### `getMics()`

- This method of the `useMeeting` hook will provide you with a list of all the available mics, which can be displayed in a dropdown list.

- This method will return an array of objects which will contain the `deviceId` and  the `label` of the audio input device.

### `changeMic()`

- Once you know which device you want to switch the audio input to, you can pass the `deviceId` to this method to change the audio input device.

#### Example

```js
const MeetingView = () => {
  //Creating two react states to store list of available mics and selected microphone
  const [mics, setMics] = useState([]);
  const [selectedMic, setSelectedMic] = useState("");

  //Getting the methods to change and get the microphone
  const { getMics, changeMic } = useMeeting();

  //Method to get the mics and load in our state
  const handleGetMics = async () => {
    const mics = await getMics();
    setMics(mics);
  };

  useEffect(() => {
    handleGetMics();
  }, []);

  //Changing the mic with the selected deviceId
  const handleChangeMic = (event) => {
    changeMic(event.target.value);
    setSelectedMic(event.target.value);
  };

  return (
    <div>
      // Showing a selector for the availabe mics
      <select value={selectedMic} onChange={handleChangeMic}>
        {mics.map((mic) => {
          return <option value={mic.deviceId}>{mic.label}</option>;
        })}
      </select>
    </div>
  );
};
```

## Changing Camera Input Device

### `getWebcams()`

- This method of the `useMeeting` hook will provide you with a list of all the available cameras, which can be displayed in a dropdown list.

- This method will return an array of objects which will contain the `deviceId` and `label` of the camera input device.

### `changeWebcam()`

- Once you know which device you want to switch the camera input to, you can pass the `deviceId` to this method to change the camera input device.

#### Example

```js
const MeetingView = () => {
  //Creating two react states to store list of available cameras and selected camera
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");

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
  const handleChangeCamera = (event) => {
    changeWebcam(event.target.value);
    setSelectedCamera(event.target.value);
  };

  return (
    <div>
      // Showing a selector for the availabe cameras
      <select value={selectedCamera} onChange={handleChangeCamera}>
        {cameras.map((camera) => {
          return <option value={camera.deviceId}>{camera.label}</option>;
        })}
      </select>
    </div>
  );
};
```

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [getMics()](/react/api/sdk-reference/use-meeting/methods#getmics)
- [getWebcams()](/react/api/sdk-reference/use-meeting/methods#getwebcams)
- [changeMic()](/react/api/sdk-reference/use-meeting/methods#changemic)
- [changeWebcam()](/react/api/sdk-reference/use-meeting/methods#changewebcam)
