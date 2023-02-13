---
sidebar_label: Concept And Architecture
pagination_label: Concept And Architecture
---

# Concept and Architecture

## Diagram

Coming soon

## Concepts

### `1. Meeting / Room`

- Meeting or Room objects in the VideoSDK provide a virtual place for participants to interact and engage in real-time voice, video, and screen-sharing sessions. The object is in charge of handling media streams and participant communication.

- Meeting or Room can be uniquely identified by `meetingId` or `roomId`.

### `2. Participant`

- Participant is a VideoSDK object that represents each user/client in the meeting or room and allows them to share audio/video assets.

- `2.1 Local Participant` :
  The local participant is the one that runs on the user's device. The local participant has control over their own media streams, including the ability to start and stop audio and video.

  - The local participant in a meeting/room can also connect with other participants by transmitting and receiving audio and video streams, exchanging chat messages, and more.

- `2.2 Remote Participant` :
  The remote participant receives audio and video streams from the local participant and other remote participants, and also has the ability to exchange audio, video and chat messages with the local participant.

- Each participant in VideoSDK uniquely identified by `participantId`.

### `3. Media Stream And Track`

- A media stream is a collection of audio & video tracks that can be transmitted between participants in real-time.

- A track is a continuous flow of audio or video data and can be thought of as a stream of media frames.

- A media stream can contain multiple tracks. One video track for the video feed from the camera and one audio track for the audio feed from the microphone. These tracks can be transmitted between participants in VideoSDK Meeting / Room.

### `4. Cloud Recording`

- Cloud recording in VideoSDK refers to the process of recording audio or video content and storing it on a remote server or VideoSDK server.

### `5. Simulcasting (RTMP)`

- RTMP is a popular protocol for live streaming video content from a VideoSDK to platforms such as YouTube, Twitch, Facebook, and others.
- By providing the platform-specific `stream key` and `stream URL`, the VideoSDK can connect to the platform's RTMP server and transmit the live video stream.
