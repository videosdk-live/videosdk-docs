---
title: Migration Guide From Twilio Video to Video SDK - React
description: Easily migrate from Twilio to VideoSDK on React. Our guide provides concise steps for seamless integration, enhancing your app's video capabilities effortlessly.
keywords:
  - Guide From Twilio to Video SDK for React
  - guide from twilio to video sdk for react
  - twilio to video sdk tutorial
slug: migration-guide-from-twilio-to-videosdk-web-edition
# authors:
#   - name: Joel Marcey
#     title: Co-creator of Docusaurus 1
#     url: https://github.com/JoelMarcey
#     image_url: https://github.com/JoelMarcey.png
#   - name: Sébastien Lorber
#     title: Docusaurus maintainer
#     url: https://sebastienlorber.com
#     image_url: https://github.com/slorber.png
tags: [Migration Guide, Twilio, React]
hide_table_of_contents: false
---

<!-- truncate -->

## Overview

This migration guide provides a step-by-step transition from using Twilio to VideoSDK for your real-time communication needs. The process involves understanding key concepts, setup differences, installation procedures, and code adjustments.

## Concepts

1.  **Meeting / Room:**
    - This is like a virtual place where people can have real-time conversations using voice, video, and screen sharing.
    - Think of it as a virtual room where participants interact.
    - Each meeting or room has a unique ID (meetingId or roomId).
2.  **Participant:**
    - Both VideoSDK and Twilio Video includes the concepts of **Participant.**
    - There are two types:
      - **Local Participant:** This is you on your device. You control your own audio and video.
      - **Remote Participant:** This is someone else in the meeting. They receive your audio and video and can send their own.
3.  **MediaStream & Track:**
    - **MediaStream:** Think of it as a bundle of audio and video tracks that are shared in real-time between participants.
    - **Track:** This is like a continuous flow of audio or video. For example, your video feed from the camera is a video track, and the audio from the microphone is an audio track.
4.  **Session:**
    - A session is like a specific instance of an ongoing meeting or room.
    - Imagine a meeting happening right now as a session.
    - Each session has its own ID (sessionId).

If you want to learn about this concept in depth you can refer this guide [Concept and Architecture](https://docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/concept-and-architecture)

## VideoSDK Setup

### API Key

- In Twilio, you manually create an API key using CLI or the dashboard.
- In VideoSDK, the default API key is automatically generated in the VideoSDK dashboard.

### Token

- In Twilio, tokens can be generated via CLI (complex) or the Twilio helper library integrated into the backend.
- In VideoSDK, you can [Generate token from VidoeSDK Dashboard](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#1-generating-token-from-dashboard) itself or [Generate a token in your backend](/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token#2-generating-token-in-your-backend).

## Installation

You can install the VidoeSDK library using NPM.

```js
npm install "@videosdk.live/react-sdk"
//or
yarn add "@videosdk.live/react-sdk"
```

For rendering participant video install `react-player`

```js
npm install "react-player"
```

You can remove the Twilio SDK from your project by uninstalling the package.

```js
npm uninstall twilio-video
```

Or, if using the Twilio CDN, remove the script tag from `index.html`.

## Room Creation

Before integration, create a room using the [REST API Rooms resource](https://docs.videosdk.live/api-reference/realtime-communication/create-room). Refer to the docs for details.

```jsx
cURL -XPOST <https://api.videosdk.live/v2/rooms> \\
		 -H 'Authorization: $VIDEOSDK_TOKEN' \\
		 -H 'Content-Type: application/json'
```

## Step 1 : Initialization a room

- Replace Twilio's `connect` method with VideoSDK's `MeetingProvider` from `@videosdk.live/react-sdk`.

```js
import { MeetingProvider } from "@videosdk.live/react-sdk";

const VideoChat = () => {
  //...

  // const handleSubmit = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     setConnecting(true);
  //      const data = await fetch("/video/token", {
  //        method: "POST",
  //        body: JSON.stringify({
  //          identity: username,
  //          room: roomName,
  //        }),
  //        headers: {
  //          "Content-Type": "application/json",
  //        },
  //      }).then((res) => res.json());
  //      Video.connect(data.token, {
  //        name: roomName,
  //      })
  //       .then((room) => {
  //         setConnecting(false);
  //         setRoom(room);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setConnecting(false);
  //       });
  //   },
  //   [roomName, username]
  // );

  const token = "YOUR_GENERATED_TOKEN";
  return (
    <MeetingProvider
      config={{
        meetingId: "YOUR_GENERATED_MEETINGID",
        micEnabled: true,
        webcamEnabled: true,
        name: "The Migrator",
      }}
      token={token}
    >
      <MeetingConsumer>
        {() => <Room meetingId={meetingId} onMeetingLeave={onMeetingLeave} />}
      </MeetingConsumer>
    </MeetingProvider>
  );
};
```

Let’s explore `MeetingProvider`, `MeetingConsumer`, `useMeeting()`, `useParticipant()` methods for further example.

- `MeetingProvider`: It is Context Provider. It accepts value `config` and `token` as props. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
- `MeetingConsumer`: It is Context Consumer. All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
- `useMeeting`: It is meeting react hook API for meeting. It includes all the information related to meeting such as join, leave, enable/disable mic or webcam etc.
- `useParticipant`: It is participant hook API. useParticipant hook is responsible to handle all the events and props related to one particular participant such as name, webcamStream, micStream etc.

## Step 2 : Rendering Remote and Local Participants

- In Twilio, the local participant is accessed through `room.localParticipant`, whereas in VideoSDK, the equivalent is retrieved using `meeting.localParticipant`.
- When it comes to retrieving the list of participants, Twilio utilizes room.participants, while VideoSDK employs `meeting.participants`.

```js
// const Room = ({ roomName, token, handleLogout }) => {
//   const [room, setRoom] = useState(null);
//   const [participants, setParticipants] = useState([]);

//   const remoteParticipants = participants.map(participant => (
//     <Participant key={participant.sid} participant={participant} />
//   ));

//   return (
//     <div className="room">
//       <h2>Room: {roomName}</h2>
//       <button onClick={handleLogout}>Log out</button>
//       <div className="local-participant">
//         {room ? (
//           <Participant
//                key={room.localParticipant.sid}
//                participant={room.localParticipant}
//            />
//         ) : (
//           ''
//         )}
//       </div>
//       <h3>Remote Participants</h3>
//       <div className="remote-participants">{remoteParticipants}</div>
//     </div>
//   );
// });

import { useMeeting } from "@videosdk.live/react-sdk";

const Room = ({ meetingId, onMeetingLeave }) => {
  const [joined, setJoined] = useState(null);
  const { join } = useMeeting();
  const { participants, localParticipant } = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onMeetingLeft: () => {
      onMeetingLeave();
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  const remoteParticipants = Array.from(participants.values())
    .filter((participant) => localParticipant.id !== participant.id)
    .map((participant) => (
      <Participant key={participant.id} participant={participant.id} />
    ));

  return (
    <div>
      <h3>Meeting Id: {meetingId}</h3>
      {joined && joined == "JOINED" ? (
        <div>
          {/* Render Controls */}
          <div className="local-participant">
            <Participant
              key={localParticipant.id}
              participant={localParticipant.id}
            />
          </div>
          <h3>Remote Participants</h3>
          <div className="remote-participants">{remoteParticipants}</div>
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
};
```

#### Mapping Twilio’s events to VideoSDK

Below is a list of all Twilio events used in this demo and VideoSDK’s equivalents.

| Twilio Events           | VideoSDK Events                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| participantConnected    | [onParticipantJoined()](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onparticipantjoined) |
| participantDisconnected | [onParticipantLeft()](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onparticipantleft)     |
| connected               | [onMeetingJoined()](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onmeetingjoined)         |
| disconnected            | [onMeetingLeft()](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onmeetingleft)             |
| dominantSpeakerChanged  | [onSpeakerChanged()](https://docs.videosdk.live/react/api/sdk-reference/use-meeting/events#onspeakerchanged)       |

## Step 3: Rendering Audio & Video Of Participant

- In Twilio, the rendering of audio and video involves setting tracks in the `useState` through the use of subscribe and unsubscribe methods.
- In VideoSDK, the process differs. We retrieve the `webcamStream` and `micStream` from `useParticipant()`. Subsequently, the `micStream` is passed using a reference in the audio component, while the `webcamStreamUrl` is passed to `ReactPlayer` for video rendering.

```js
import ReactPlayer from "react-player";
import { useParticipant } from "@videosdk.live/react-sdk";

const Participant = ({ participant }) => {
  // const [videoTracks, setVideoTracks] = useState([]);
  // const [audioTracks, setAudioTracks] = useState([]);

  // const videoRef = useRef();
  const audioRef = useRef();

  // const trackpubsToTracks = (trackMap) =>
  //   Array.from(trackMap.values())
  //     .map((publication) => publication.track)
  //     .filter((track) => track !== null);

  // useEffect(() => {
  //   setVideoTracks(trackpubsToTracks(participant.videoTracks));
  //   setAudioTracks(trackpubsToTracks(participant.audioTracks));

  //   const trackSubscribed = (track) => {
  //     if (track.kind === "video") {
  //       setVideoTracks((videoTracks) => [...videoTracks, track]);
  //     } else if (track.kind === "audio") {
  //       setAudioTracks((audioTracks) => [...audioTracks, track]);
  //     }
  //   };

  //   const trackUnsubscribed = (track) => {
  //     if (track.kind === "video") {
  //       setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
  //     } else if (track.kind === "audio") {
  //       setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
  //     }
  //   };

  //   participant.on("trackSubscribed", trackSubscribed);
  //   participant.on("trackUnsubscribed", trackUnsubscribed);

  //   return () => {
  //     setVideoTracks([]);
  //     setAudioTracks([]);
  //     participant.removeAllListeners();
  //   };
  // }, [participant]);

  // useEffect(() => {
  //   const videoTrack = videoTracks[0];
  //   if (videoTrack) {
  //     videoTrack.attach(videoRef.current);
  //     return () => {
  //       videoTrack.detach();
  //     };
  //   }
  // }, [videoTracks]);

  // useEffect(() => {
  //   const audioTrack = audioTracks[0];
  //   if (audioTrack) {
  //     audioTrack.attach(audioRef.current);
  //     return () => {
  //       audioTrack.detach();
  //     };
  //   }
  // }, [audioTracks]);

  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participant.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (audioRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        audioRef.current.srcObject = mediaStream;
        audioRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        audioRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div className="participant">
      {/* <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} autoPlay={true} muted={true} /> */}

      <audio ref={audioRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"200px"}
          width={"300px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
};
```

## Step 4: Implement Meeting Controls

- The implementation of additional controls, such as toggling the microphone and webcam, is achieved through methods provided by `useMeeting()` in VideoSDK.

```js
function Controls(props) {
  //..
  const { toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={() => toggleMic()}>toggleMic</button>
      <button onClick={() => toggleWebcam()}>toggleWebcam</button>
    </div>
  );
}
```

## Step 5 : Disconnect from a Room

- To exit a meeting, Twilio uses `room.disconnect()`, while VideoSDK utilizes `meeting.leave()`.

```js
function Controls(props) {
  //..
  // const [room, setRoom] = useState(null);
  // const handleLogout = useCallback(() => {
  //   setRoom((prevRoom) => {
  //     if (prevRoom) {
  //       prevRoom.localParticipant.tracks.forEach((trackPub) => {
  //         trackPub.track.stop();
  //       });
  //       prevRoom.disconnect();
  //     }
  //     return null;
  //   });
  // }, []);

  // return (
  //     <button onClick={handleLogout}>Log out</button>
  // );

  const { leave } = useMeeting();
  return (
    <div>
      <button onClick={() => leave()}>Leave</button>
    </div>
  );
}
```

## Conclusion

As you conclude this migration journey, you've successfully adapted your application from Twilio to VideoSDK. The [developed project](https://github.com/videosdk-live/migration-to-X/tree/main/Twilio/react-quickstart) showcases the implementation of VideoSDK in action, emphasizing its simplicity and efficiency.

Key Takeaways:

- Automatic API key generation streamlines the setup process.
- Token generation is simplified, offering flexibility for participants.
- Granular control over participant tokens enhances security.
- Global scalability and minimal latency ensure a seamless user experience.

Feel free to explore the developed project's codebase for a hands-on understanding of VideoSDK integration. As you transition, VideoSDK empowers your application with robust real-time communication features, providing a foundation for future scalability and innovation.

## Contact Us

For any further assistance, questions, or community engagement, we welcome you to join our [Discord channel](https://discord.com/invite/Gpmj6eCq5u). Connect with fellow developers, share insights, and stay updated on the latest developments.

If you require developer support or need personalized assistance, you can schedule a session with our team through our [Developer Support portal](https://bookings.videosdk.live/#/customer/discovery). We are here to ensure a smooth integration and address any queries you may have. Your success with VideoSDK is our priority.
