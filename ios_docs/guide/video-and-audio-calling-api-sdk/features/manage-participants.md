---
title: Manage Participants Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Participants
pagination_label: Manage Participants
keywords:
  - Exit Meeting
  - Leave Meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-participants
---

# Manage Participants

## 1. Local Participant (self)

Local participant is used to consume your video & audio streams.
it contains information about local participant such as displayName, id, quality and streams Map.

You can acces localParticipant from the [meeting object](/ios/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

### Participant object properties

| Property Name | Type          | Description                                            |
| ------------- | ------------- | ------------------------------------------------------ |
| id            | string        | Unique id of the participant.                          |
| displayName   | string        | The name you define during the meeting initialization. |
| local         | boolean       | Indicates the participant is local or not.             |
| quality       | string        | Indicates the participant streams quality.             |
| Streams       | Map of Stream | Returns Video & Audio Streams.                         |

### Stream Object properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind.       |
| track         | string | MediaStreamTrack   |

## 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the meeting at any given time.

Other participants Map contains same properties as [LocalParticipant](/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

```js
// get local participant
let localParticipant = self.meeting?.localParticipant;

// get other participants
let otherParticipants = self.meeting?.participants;
```

## 3. Participant Related Events

1. **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the [participant object](/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participant-left` event trigger and return the [participant object](/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **presenter-changed** - Whenever any participant present/screenshare their screen/window in meeting, `presenter-changed` event will trigger and return the presenter `participantId`.

4. **stream-enabled** - Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return [Stream Map](/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

5. **stream-disabled** - Whenever any participant disabled mic/webcam in meeting, `stream-disabled` event will trigger and return [Stream Map](/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

```js
/// keep track of video participants including self to show in UI
// ex. we can show participants as grid in collectionView.
private var participants: [Participant] = []

/// keep track of mic
private var micEnabled = true

/// keep track of video
private var videoEnabled = true

/// keep track of screenshare
private var screenShareEnabled = false


// MARK: - MeetingEventListener

extension MeetingViewController: MeetingEventListener {

    /// Meeting started
    func onMeetingJoined() {

        // handle for local participant
        if let localParticipant = self.meeting?.localParticipant {
            // event listener for self
            localParticipant.addEventListener(self)

            // add to list
            participants.append(localParticipant)

            // show in ui
            // ex. add to collecionView
            // addParticipantToGridView()
        }
    }

    /// A new participant joined
    func onParticipantJoined(_ participant: Participant) {
        // add new participant to list
        participants.append(participant)

        // add listener
        participant.addEventListener(self)

        // show in ui
        // ex. add to collectionView
        // addParticipantToGridView()
    }

    /// A participant left from the meeting
    /// - Parameter participant: participant object
    func onParticipantLeft(_ participant: Participant) {
        // remove listener
        participant.removeEventListener(self)

        // remove from list and update ui
        guard let index = self.participants.firstIndex(where: { $0.id == participant.id }) else {
            return
        }

        // remove participant from list
        participants.remove(at: index)

        // hide from ui
        // ex. remove from collectionview
        // removeParticipantFromGridView(at: index)
    }
}

// MARK: - ParticipantEventListener

extension MeetingViewController: ParticipantEventListener {

    /// Participant has enabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: enabled stream object
    ///   - participant: participant object
    func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {

        switch stream.kind {
        case .audio:
            // update ui to show that participant's mic is enabled
            // ex. update collectionView cell

            if participant.isLocal {
                // update mic flag for local participant
                micEnabled = true
            }

        case .video:
            // show track in videoView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.add(videoView)
            }

            if participant.isLocal {
                // update video flag for local participant
                videoEnabled = true
            }

        case .share:
            // show track in screenShareView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.add(screenShareView)
            }

            if participant.isLocal {
                // update screenShare flag for local participant
                screenShareEnabled = true
            }
        }
    }

    /// Participant has disabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: disabled stream object
    ///   - participant: participant object
    func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {

        switch stream.kind {
        case .audio:
            // update ui to show that participant's mic is disabled
            // ex. update collectionView cell

            if participant.isLocal {
                // update mic flag for local participant
                micEnabled = false
            }

        case .video:
            // remove track from videoView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.remove(videoView)
            }

            if participant.isLocal {
                // update video flag for local participant
                videoEnabled = false
            }

        case .share:
            // remove track from screenShareView: RTCMTLVideoView
            if let track = stream.track as? RTCVideoTrack {
                track.remove(screenShareView)
            }

            if participant.isLocal {
                // update screenShare flag for local participant
                screenShareEnabled = false
            }
        }
    }
}

```
