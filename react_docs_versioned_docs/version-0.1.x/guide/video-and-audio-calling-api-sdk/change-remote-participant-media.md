---
title: Switching Remote Participant Camera
hide_title: true
hide_table_of_contents: false
description: Switching Remote Participant Camera
sidebar_label: Switching Remote Participant Camera
pagination_label: Switching Remote Participant Camera
keywords:
  - audio calling
  - video calling
  - Switching Remote Participant Camera
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: change-remote-participant-media
---

# Switching Remote Participant Camera - React

This guide explains how to switch remote participant camera using following steps.

### Step 1 : Create a Pubsub Topic

- First we create `cameraFacingMode` and `selectedWebcamDevice` state in `MeetingAppContext` for accessing that value globally.

```js
export const MeetingAppProvider = ({
  children,
  selectedWebcam,
  //.. other params
}) => {
  //highlight-start
  //..
  const [cameraFacingMode, setCameraFacingMode] = useState({
    facingMode: "front",
  });
  const [selectedWebcamDevice, setSelectedWebcamDevice] =
    useState(selectedWebcam);
  //..

  return (
    <MeetingAppContext.Provider
      value={{
        // ..

        // states
        cameraFacingMode,
        selectedWebcamDevice,

        // setters
        setCameraFacingMode,
        setSelectedWebcamDevice,
      }}
    >
      {children}
    </MeetingAppContext.Provider>
  );
  //highlight-end
};
```

- Now, we will create a pubsub topic called `SWITCH_PARTICIPANT_CAMERA` in `ParticipantView` Component.

```js
//..

import { usePubSub } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  // ..
  //highlight-start
  const { cameraFacingMode, setCameraFacingMode } = useMeetingAppContext();

  const { publish: switchCameraPublish } = usePubSub(
    `SWITCH_PARTICIPANT_CAMERA_${participantId}`,
    {
      onMessageReceived: async ({ message }) => {
        setCameraFacingMode({
          facingMode: message.facingMode,
        });
      },
    }
  );
  //highlight-end
}
```

### Step 2 : Create `useMediaStream` hook

- After creating states in `MeetingAppContext` we will create `useMediaStream` hook.

```js
import { createCameraVideoTrack } from "@videosdk.live/react-sdk";
import { useMeetingAppContext } from "../context/MeetingAppContext";
import { useEffect, useRef } from "react";

//highlight-start
const useMediaStream = () => {
  const { selectedWebcamDevice, webCamResolution } = useMeetingAppContext();

  const webcamResolutionRef = useRef();

  useEffect(() => {
    webcamResolutionRef.current = webCamResolution;
  }, [webCamResolution]);

  const getVideoTrack = async ({ webcamId, encoderConfig, facingMode }) => {
    try {
      const track = await createCameraVideoTrack({
        cameraId: webcamId ? webcamId : selectedWebcamDevice.id,
        encoderConfig: encoderConfig
          ? encoderConfig
          : webcamResolutionRef.current,
        facingMode: facingMode,
        optimizationMode: "motion",
        multiStream: false,
      });
      return track;
    } catch (error) {
      return null;
    }
  };

  return { getVideoTrack };
};
// highlight-end

export default useMediaStream;
```

### Step 3 : Create Switch Button

- We will create a switch button with `FRONT` and `BACK` options on top of the participant grid item.

- On Click of the button we will publish camera facing value through pubusb.

```js
// ...

import { useParticipant } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  // ..
  //highlight-start
  const {
    //..
    isLocal,
  } = useParticipant(participantId);

  {
    !isLocal && (
      <div style={{ position: "absolute", top: "1", left: "10" }}>
        <div>
          {[
            { value: "front", label: "FRONT", res: "h480p_w640p" },
            { value: "back", label: "BACK", res: "h720p_w1280p" },
          ].map(({ value, label, res }) =>
            label === "FRONT" || label === "BACK" ? (
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3px 8px",
                  border: "1px solid",
                  borderColor:
                    cameraFacingMode?.facingMode === value
                      ? "#5568FE"
                      : "#FFFFFF",
                  borderRadius: "3px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FFFFFF",
                  backgroundColor:
                    cameraFacingMode?.facingMode === value
                      ? "#5568FE"
                      : "#1A1C22",
                }}
                onClick={async (e) => {
                  switchCameraPublish(
                    {
                      facingMode: value,
                      isChangeWebcam: true,
                    },
                    {
                      persist: true,
                    }
                  );
                  e.stopPropagation();
                }}
              >
                {label}
              </button>
            ) : null
          )}
        </div>
      </div>
    );
    //highlight-end
  }
}
```

### Step 4 : Create `SwitchCameraListner` Component

Now create `SwitchCameraListner` component for subscribe on `SWITCH_PARTICIPANT_CAMERA` topic.

- In this, we will receive `front` or `back` value. based on that value we will find cameraId and label including `front` or `back` from webcam list.

- After finding cameraId we will create customVideoTrack by passing cameraId as `webcamId` param value.

- After creating track we will pass that track in `changeWebcam()` for changing camera.

```js
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { useMeetingAppContext } from "../context/MeetingAppContext";
import { useEffect, useRef, useState } from "react";
import useMediaStream from "../hooks/useMediaStream";

//highlight-start
const SwitchCameraListner = () => {
  const [webcams, setWebcams] = useState([]);
  const webcamsRef = useRef();

  useEffect(() => {
    webcamsRef.current = webcams;
  }, [webcams]);

  const getWebcams = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const webcams = devices.filter(
      (d) =>
        d.kind === "videoinput" &&
        d.deviceId !== "default" &&
        d.deviceId !== "communications"
    );

    webcams && webcams?.length && setWebcams(webcams);
  };

  const mMeeting = useMeeting();

  useEffect(() => {
    getWebcams(mMeeting?.getWebcams);
  }, []);

  const { selectedWebcamDevice, setSelectedWebcamDevice } =
    useMeetingAppContext();

  const selectedWebcamDeviceRef = useRef();

  useEffect(() => {
    selectedWebcamDeviceRef.current = selectedWebcamDevice;
  }, [selectedWebcamDevice]);

  const { getVideoTrack } = useMediaStream();

  usePubSub(`SWITCH_PARTICIPANT_CAMERA_${mMeeting?.localParticipant?.id}`, {
    onMessageReceived: async ({ message }) => {
      let customTrack;

      const deviceId = webcamsRef.current.find((webcam) =>
        webcam.label.toLowerCase().includes(message.facingMode)
      )?.deviceId;
      const label = webcamsRef.current.find((webcam) =>
        webcam.label.toLowerCase().includes(message.facingMode)
      )?.label;

      setSelectedWebcamDevice({
        id: deviceId,
        label,
      });

      if (message.isChangeWebcam) {
        mMeeting?.disableWebcam();
        customTrack = await getVideoTrack({
          webcamId: deviceId,
        });
        mMeeting.changeWebcam(customTrack);
        return;
      }
    },
  });

  return <></>;
};
//highlight-end

export default SwitchCameraListner;
```

### Step 5 : Place `SwitchCameraListner` in `MeetingContainer`

- Place `SwitchCameraListner` In `MeetingContainer` for receiving and sending data to participants.

```js
function MeetingContainer() {
  //..

  return (
    // ..
    //highlight-start
    <SwitchCameraListner />
    //highlight-end
  );

  //..
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
- [useMeeting](/react/api/sdk-reference/use-meeting/properties)
- [usePubSub()](/react/api/sdk-reference/use-pubsub)
- [changeWebcam()](/react/api/sdk-reference/use-meeting/methods#changewebcam)
- [createCameraVideoTrack()](/react/api/sdk-reference/custom-tracks#custom-video-track---react)
