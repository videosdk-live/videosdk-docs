---
title: Switch Remote Participant Quality
hide_title: true
hide_table_of_contents: false
description: Switch Remote Participant Quality
sidebar_label: Switch Remote Participant Quality
pagination_label: Switch Remote Participant Quality
keywords:
  - audio calling
  - video calling
  - switch remote participant quality
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: switch-remote-participant-quality
---

# Switch Remote Participant Quality - React

This guide outlines the process of changing the camera resolution of a remote participant in a meeting. The method involves utilizing a [pubsub mechanism](/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub) to communicate resolution changes among participants and creating custom video tracks with the desired resolution.

For a clearer understanding, consider this scenario: If participant A wishes to change the camera resolution of participant B, participant A publishes a topic called `CHANGE_RESOLUTION` with either `SD` or `HD` as the value. Participant B subscribes to the `CHANGE_RESOLUTION` topic and receives the value shared by participant A. Following this, a custom video track is generated with the new resolution value, and this track is then passed into the `changeWebcam()` function.

Here's a visual representation to enhance the understanding:

![change-resolution](/img/change-resolution.png)

### Step 1 : Create a Pubsub Topic

- First create a pubsub topic called `CHANGE_RESOLUTION` in `ParticipantView` Component for publishing selected camera resolution value.

```js
import { usePubSub } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  //..
  //highlight-start
  const { publish } = usePubSub(`CHANGE_RESOLUTION_${participantId}`, {
    onMessageReceived: async ({ message }) => {
      console.log("message", message);
    },
    onOldMessagesReceived: async (messages) => {
      const newResolution = messages.map(({ message }) => {
        return { ...message };
      });
      newResolution.forEach((res) => {
        if (res.resolution) {
          console.log("resolution", res.resolution);
        }
      });
    },
  });
  //highlight-end
}
```

### Step 2 : Create Switch Button in `ParticipantView` Component

- Next, create a switch button with `SD` and `HD` options on top of the participant grid item.

- Upon clicking the button, publish a pubsub topic with either the `sd` or `hd` value to communicate the desired resolution change.

```js
import { useParticipant } from "@videosdk.live/react-sdk";

function ParticipantView({ participantId }) {
  //..
  //highlight-start
  const {
    webcamOn,
    //..
  } = useParticipant(participantId);

  return (
    { webcamOn && (
      <div style={{ position: "absolute", top: "1", right: "10" }}>
        <div>
          {[{ value: "sd", label: "SD", res: "h480p_w640p" },
            { value: "hd", label: "HD", res: "h720p_w1280p" },
          ].map(({ value, label, res }) =>
            label === "SD" || label === "HD" ? (
              <button
                onClick={async (e) => {
                  publish(
                    {
                      resolution: value,
                      resolutionValue: res,
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
    )}
  )
  //highlight-end
}
```

### Step 3 : Create a `ResolutionListener` Component

Now, create a `ResolutionListener` component to subscribe to the `CHANGE_RESOLUTION` topic.

- Within this component, you will receive either `SD` or `HD` as the value. Based on this value, create a custom video track.

- After creating the custom video track with the received value, pass that track into the `changeWebcam` method to initiate the camera resolution change.

```js
import {
  useMeeting,
  usePubSub,
  createCameraVideoTrack,
} from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";
import { useMeetingAppContext } from "../context/MeetingAppContext";
import useMediaStream from "../hooks/useMediaStream";

//highlight-start
const ResolutionListner = () => {
  const mMeeting = useMeeting();

  const { publish } = usePubSub(
    `CHANGE_RESOLUTION_${mMeeting?.localParticipant?.id}`,
    {
      onMessageReceived: async ({ message }) => {
        let customTrack;
        await mMeeting?.disableWebcam();
        try {
          customTrack = await createCameraVideoTrack({
            encoderConfig: message.resolutionValue,
            optimizationMode: "motion",
            multiStream: false,
          });
        } catch (error) {
          console.log("error in creating custom video track", error);
        }

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

export default ResolutionListener;
```

### Step 4 : Place the `ResolutionListener` component in `MeetingContainer`

- Finally, render the `ResolutionListener` component in the `MeetingContainer` to facilitate the reception and transmission of camera resolution changes among participants.

```js
function MeetingContainer() {
  //..
  return (
    //highlight-start
    <ResolutionListener />
    //highlight-end
    // ..
  );
}
```

import ReactPlayer from "react-player";

<ReactPlayer autoplay muted loop playing url="/video/switch-remote-participant-quality.mp4" width={"100%"} height="500px" />

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
- [useMeeting](/react/api/sdk-reference/use-meeting/properties)
- [usePubSub()](/react/api/sdk-reference/use-pubsub)
- [createCameraVideoTrack()](/react/api/sdk-reference/custom-tracks#custom-video-track---react)
- [changeWebcam()](/react/api/sdk-reference/use-meeting/methods#changewebcam)
