---
title: Change Camera Resolution
hide_title: true
hide_table_of_contents: false
description: Change Camera Resolution
sidebar_label: Change Camera Resolution
pagination_label: Change Camera Resolution
keywords:
  - audio calling
  - video calling
  - change camera resolution
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: camera-resolution
---

# Change Camera Resolution - React

In this guide we will explain how to change remote participant camera resolution by following steps.

### Step 1 : Create a Pubsub Topic

- We will create a pubsub topic called `CHANGE_RESOLUTION` in `ParticipantView` Component for publishing selected camera resolution value.

```js
import { usePubSub } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  //..
  //highlight-start
  const [participantResolution, setParticipantResolution] = useState("sd");

  const { publish } = usePubSub(`CHANGE_RESOLUTION_${participantId}`, {
    onMessageReceived: async ({ message }) => {
      setParticipantResolution({
        res: message.resolution,
      });
    },
    onOldMessagesReceived: async (messages) => {
      const newResolution = messages.map(({ message }) => {
        return { ...message };
      });
      newResolution.forEach((res) => {
        if (res.resolution) {
          setParticipantResolution({
            res: res.resolution,
          });
        }
      });
    },
  });
  //highlight-end
}
```

### Step 2 : Create Switch Button in `ParticipantView` Component

- We will create a switch button with `SD` and `HD` options on top of the participant grid item.

- On button click we will publish pubsub topic with `sd` or `hd` value.

```js
// ...

import { useParticipant } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  //..
  //highlight-start
  const {
    //..
    webcamOn,
    //..
  } = useParticipant(participantId);

  {
    webcamOn && (
      <div style={{ position: "absolute", top: "1", right: "10" }}>
        <div>
          {[
            { value: "sd", label: "SD", res: "h480p_w640p" },
            { value: "hd", label: "HD", res: "h720p_w1280p" },
          ].map(({ value, label, res }) =>
            label === "SD" || label === "HD" ? (
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "3px 8px",
                  border: "1px solid",
                  borderColor:
                    participantResolution?.res === value
                      ? "#5568FE"
                      : "#FFFFFF",
                  borderRadius: "3px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#FFFFFF",
                  backgroundColor:
                    participantResolution?.res === value
                      ? "#5568FE"
                      : "#1A1C22",
                }}
                onClick={async (e) => {
                  publish(
                    {
                      resolution: value,
                      resolutionValue: res,
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
  }
  //highlight-end
}
```

### Step 3 : Create `useMediaStream` hook

We created this hook for calling `createCameraVideoTrack()` fromm SDK

- First we create `selectedWebcamDevice` and `webCamResolution` state for accessing it's value globally.

```js
export const MeetingAppProvider = ({
  children,
  selectedWebcam,
  // other params
}) => {
  // ..
  //highlight-start
  const [selectedWebcamDevice, setSelectedWebcamDevice] =
    useState(selectedWebcam);
  const [webCamResolution, setWebCamResolution] = useState("h480p_w640p");
  //highlight-end
  //..

  return (
    <MeetingAppContext.Provider
      value={{
        //
        //highlight-start
        selectedWebcamDevice,
        webCamResolution,
        //
        setSelectedWebcamDevice,
        setWebCamResolution,
        //highlight-end
      }}
    >
      {children}
    </MeetingAppContext.Provider>
  );
};
```

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

### Step 4 : Create `ResolutionListner` Component

Now create `ResolutionListner` component for subscribe on `CHANGE_RESOLUTION` topic.

- In this, we will receive `SD` or `HD` value. based on that value we will create custom video track

- After creating custom video track with received value we pass that track in `changeWebcam` method for changing camera resilution.

```js
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";
import { useMeetingAppContext } from "../context/MeetingAppContext";
import useMediaStream from "../hooks/useMediaStream";

//highlight-start
const ResolutionListner = () => {
  const mMeeting = useMeeting();

  const { selectedWebcamDevice, setWebCamResolution, webCamResolution } =
    useMeetingAppContext();

  const selectedWebcamDeviceRef = useRef();
  const webCamResolutionRef = useRef();

  useEffect(() => {
    webCamResolutionRef.current = webCamResolution;
  }, [webCamResolution]);

  useEffect(() => {
    selectedWebcamDeviceRef.current = selectedWebcamDevice;
  }, [selectedWebcamDevice]);

  const { getVideoTrack } = useMediaStream();

  const { publish } = usePubSub(
    `CHANGE_RESOLUTION_${mMeeting?.localParticipant?.id}`,
    {
      onMessageReceived: async ({ message }) => {
        if (webCamResolutionRef.current === message.resolutionValue) return;
        setWebCamResolution(message.resolutionValue);
        let customTrack;
        await mMeeting?.disableWebcam();
        customTrack = await getVideoTrack({
          webcamId: selectedWebcamDeviceRef.current.id,
          encoderConfig: message.resolutionValue,
        });

        mMeeting.changeWebcam(customTrack);
      },
    }
  );

  useEffect(() => {
    publish(
      {
        resolution: "sd",
        resolutionValue: "h480p_w640p",
      },
      {
        persist: true,
      }
    );
  }, []);

  return <></>;
};
// highlight-end

export default ResolutionListner;
```

### Step 5 : Place `ResolutionListner` in `MeetingContainer`

- Place `ResolutionListner` in `MeetingContainer` for receiving and sending camera resolution of participants.

```js
function MeetingContainer() {
  //..

  return (
    // ..
    //highlight-start
    <ResolutionListner />
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
- [createCameraVideoTrack()](/react/api/sdk-reference/custom-tracks#custom-video-track---react)
- [changeWebcam()](/react/api/sdk-reference/use-meeting/methods#changewebcam)
