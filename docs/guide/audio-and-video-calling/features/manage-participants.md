---
title: Manage Participants Audio & Video Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Manage Participants features quick integrate in Javascript, React JS, Android, iOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
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

Local participant is used to consume your video and audio streams.
it contains information about local participant such as displayName, id, quality and streams Map.

You can acces localParticipant from the [meeting object](/docs/guide/audio-and-video-calling/features/start-join-meeting#2-initialization).

### Participant object properties

| Property Name | Type    | Description                                            |
| ------------- | ------- | ------------------------------------------------------ |
| id            | string  | Unique id of the participant.                          |
| displayName   | string  | The name you define during the meeting initialization. |
| local         | boolean | Indicates the participant is local or not.             |
| quality       | string  | Indicates the participant streams quality.             |
| Streams       | Map     | Returns Audio and Video Streams.                       |

### Streams Map properties

| Property Name | Type   | Description        |
| ------------- | ------ | ------------------ |
| id            | string | Unique id          |
| codec         | string | Video/Audio codec. |
| kind          | string | Stream Kind.       |
| track         | string | MediaStreamTrack   |

## 2. Other Participants (Except You)

Other participants Map is used to get all the participants (except you) in the meeting at any given time.

Other participants Map contains same properties as [LocalParticipant](/docs/guide/audio-and-video-calling/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
/** localParticipant contains Participant object
  as displayed above local participant section */
const localParticipant = meeeting.localParticipant;

localParticipant.streams.forEach((stream) => {
  setTrack(stream, videoElement, audioElement, participant.id);
});

const participants = meeeting.participants;

/** to play other participants audio and video */
function loadOtherParticipants() {
  meeting.participants.forEach((participant) => {
    let videoElement = createVideoElement(participant.id);
    let audioElement = createAudioElement(participant.id);

    participant.streams.forEach((stream) => {
      setTrack(stream, videoElement, audioElement, participant.id);
    });

    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(audioElement);
  });
}

// creating video element
function createVideoElement(pId) {
  let videoElement = document.createElement("video");
  videoElement.setAttribute("id", `v-${pId}`);
  return videoElement;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  return audioElement;
}

//setting up tracks
function setTrack(stream, videoElem, audioElement, id) {
  if (stream.kind == "video") {
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    videoElem.srcObject = mediaStream;
    videoElem
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (id == meeting.localParticipant.id) return;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    audioElement.srcObject = mediaStream;
    audioElement
      .play()
      .catch((error) => console.error("audioElem.play() failed", error));
  }
}
```

</TabItem>
<TabItem value="react">

```js
import { useParticipant } from "@videosdk.live/react-sdk";

/** localParticipant contains Participant object
  as displayed above local participant section */

const localParticipant = meeeting.localParticipant;

const participants = meeeting.participants;

/** Render All Participant including local participant */
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      {k.map((l) => (
        <ParticipantView key={l} participantId={l} />
      ))}
    </div>
  ));
}

/** Participant View Component*/

const ParticipantView = ({ participantId }) => {
  /** Define Refs*/
  const webcamRef = useRef(null);
  const micRef = useRef(null);

  /** useParticipant Hooks which accept `participantId`
    as parameter then return participant properties such as displayName, webcamOn, micOn etc.  */
  const {
    displayName,
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isActiveSpeaker,
  } = useParticipant(participantId);

  useEffect(() => {
    if (webcamRef.current) {
      if (webcamOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(webcamStream.track);

        webcamRef.current.srcObject = mediaStream;
        webcamRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        webcamRef.current.srcObject = null;
      }
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <>
      <audio ref={micRef} autoPlay />
      <video height={"50%"} width={"50%"} ref={webcamRef} autoPlay />
    </>
  );
};
```

</TabItem>
<TabItem value="reactnative">

```js
import {
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";

/** localParticipant contains Participant object
  as displayed above local participant section */
const localParticipant = meeeting.localParticipant;

const participants = meeeting.participants;

/** Render All Participant including local participant */
{
  [...participants.keys()].map((k) => (
    <div style={{ display: "flex" }}>
      {k.map((l) => (
        <ParticipantView key={l} participantId={l} />
      ))}
    </div>
  ));
}

/** Participant View Component*/

const ParticipantView = ({ participantId }) => {
  /** useParticipant Hooks which accept `participantId`
    as parameter then return participant properties such as displayName, webcamOn, micOn etc.  */
  const { displayName, webcamStream, webcamOn, micOn, isActiveSpeaker } =
    useParticipant(participantId);

  return (
    <RTCView
      streamURL={new MediaStream([webcamStream?.track]).toURL()}
      style={{ flex: 1 }}
    />
  );
};
```

</TabItem>
<TabItem value="android">

```xml title="activity_main.xml"
  <org.webrtc.SurfaceViewRenderer
      android:id="@+id/svrLocal"
      android:layout_width="80dp"
      android:layout_height="100dp"
      android:layout_gravity="end" />

  <androidx.recyclerview.widget.RecyclerView
      android:id="@+id/rvParticipants"
      android:layout_width="match_parent"
      android:layout_height="match_parent" />
```

```js title="MainActivity.java"
  import org.webrtc.SurfaceViewRenderer;
  import org.webrtc.VideoTrack;

  private void displayLocalParticipant() {
    final SurfaceViewRenderer svrLocal = findViewById(R.id.svrLocal);

    // display local video when stream available
    meeting
      .getLocalParticipant()
      .addEventListener(
        new ParticipantEventListener() {
          @Override
          public void onStreamEnabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("video")) {
              VideoTrack track = (VideoTrack) stream.getTrack();
              track.addSink(svrLocal);
            }
          }
        }
      );
  }

  private void displayRemoteParticipants() {
    final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
    rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
    rvParticipants.setAdapter(new ParticipantAdapter(meeting));
  }

```

```xml title="item_remote_peer.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <org.webrtc.SurfaceViewRenderer
        android:id="@+id/svrParticipant"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</FrameLayout>
```

```js title="ParticipantAdapter.java"

public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

    private final List<Participant> participants = new ArrayList<>();
    private int containerHeight;

    public ParticipantAdapter(Meeting meeting) {
        Handler mHandler = new Handler(Looper.getMainLooper());

        meeting.addEventListener(new MeetingEventListener() {
            @Override
            public void onParticipantJoined(Participant participant) {
                participants.add(participant);
                mHandler.post(() -> notifyItemInserted(participants.size() - 1));
            }

            @Override
            public void onParticipantLeft(Participant participant) {
                // remove participant from grid
            }
        });
    }

    @NonNull
    @Override
    public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        containerHeight = parent.getHeight();

        return new PeerViewHolder(LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_remote_peer, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
        final Participant participant = participants.get(position);

        ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
        layoutParams.height = containerHeight / 3;
        holder.itemView.setLayoutParams(layoutParams);

        for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
            Stream stream = entry.getValue();
            if (stream.getKind().equalsIgnoreCase("video")) {
                VideoTrack videoTrack = (VideoTrack) stream.getTrack();
                videoTrack.addSink(holder.svrParticipant);
                break;
            }
        }

        participant.addEventListener(new ParticipantEventListener() {
            @Override
            public void onStreamEnabled(Stream stream) {
                if (stream.getKind().equalsIgnoreCase("video")) {
                    VideoTrack videoTrack = (VideoTrack) stream.getTrack();
                    videoTrack.addSink(holder.svrParticipant);
                }
            }
        });

    }

    @Override
    public int getItemCount() {
        return participants.size();
    }


    static class PeerViewHolder extends RecyclerView.ViewHolder {
        public SurfaceViewRenderer svrParticipant;
        public View itemView;

        PeerViewHolder(@NonNull View view) {
            super(view);

            itemView = view;

            svrParticipant = view.findViewById(R.id.svrParticipant);
            svrParticipant.init(PeerConnectionUtils.getEglContext(), null);
        }
    }
}

```

Please refer the [example code](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example/blob/master/app/src/main/java/live/videosdk/rtc/android/java) on Github for more details.

</TabItem>
<TabItem value="ios">

```js
// show local participant in the grid if available
guard let localParticipant = self.meeting?.localParticipant else { return }

// event listener for self
localParticipant.addEventListener(self)
```

</TabItem>
<TabItem value="flutter">

```js
// Get local participants
meeting?.localParticipant;

// Get remote participants
meeting?.participants;
```

</TabItem>
</Tabs>

## 3. Participant Related Events

1. **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the [participant object](/docs/guide/audio-and-video-calling/features/manage-participants#participant-object-properties).

2. **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participant-left` event trigger and return the [participant object](/docs/guide/audio-and-video-calling/features/manage-participants#participant-object-properties)

3. **presenter-changed** - Whenever any participant present/screenshare their screen/window in meeting, `presenter-changed` event will trigger and return the presenter `participantId`.

4. **stream-enabled** - Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return [Stream Map](/docs/guide/audio-and-video-calling/features/manage-participants#streams-map-properties).

5. **stream-disabled** - Whenever any participant disabled mic/webcam in meeting, `stream-disabled` event will trigger and return [Stream Map](/docs/guide/audio-and-video-calling/features/manage-participants#streams-map-properties).

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("participant-joined", (participant) => {
  participant.on("stream-enabled", (stream) => {
    // You can find this setTrack() helper function on previous code snippet
    setTrack(stream, videoElement, audioElement, participant.id);
  });
});
meeting.on("participant-left", (participant) => {
  participant.on("stream-disabled", (stream) => {
    // You can find this setTrack() helper function on previous code snippet
    setTrack(stream, videoElement, audioElement, participant.id);
  });
});
meeting.on("presenter-changed", (participantId) => {});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

  /** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantJoined: (participant) => {},
  onParticipantLeft: (participant) => {},
  onPresenterChanged: (presenterId) => {},
});

  /** useParticipant hooks events */
const {
  /** Methods */
} = useParticipant(participantId, {
  onStreamEnabled:(stream) => {};
  onStreamDisabled(stream) => {};
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";

  /** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onParticipantJoined: (participant) => {},
  onParticipantLeft: (participant) => {},
  onPresenterChanged: (presenterId) => {},
});

  /** useParticipant hooks events */
const {
  /** Methods */
} = useParticipant(participantId, {
  onStreamEnabled:(stream) => {};
  onStreamDisabled(stream) => {};
});
```

</TabItem>
<TabItem value="android">

```js
 meeting.addEventListener(new MeetingEventListener() {
    @Override
    public void onParticipantJoined(Participant participant) {
      participant.addEventListener(new ParticipantEventListener() {
          @Override
          public void onStreamEnabled(Stream stream) {
              if (stream.getKind().equalsIgnoreCase("video")) {
                  // participant video enabled
              } else if (stream.getKind().equalsIgnoreCase("audio")) {
                  // participant mic enabled
              }
          }

          @Override
          public void onStreamDisabled(Stream stream) {
              if (stream.getKind().equalsIgnoreCase("video")) {
                  // participant video disabled
              } else if (stream.getKind().equalsIgnoreCase("audio")) {
                  // participant mic disabled
              }
          }
      });
    }

    @Override
    public void onParticipantLeft(Participant participant) {
      Toast
        .makeText(
          MainActivity.this,
          participant.getDisplayName() + " left",
          Toast.LENGTH_SHORT
        )
        .show();
    }
 });
```

</TabItem>
<TabItem value="ios">

```js
 /// A new participant joined
    func onParticipantJoined(_ participant: Participant) {
        // add listener
        participant.addEventListener(self)

        // add new participant to list and show in grid
        participants.append(participant)
        addParticipantToGridView()
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

        // remove participant from list and grid
        participants.remove(at: index)
        removeParticipantFromGridView(at: index)
    }

    /// Participant has enabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: enabled stream object
    ///   - participant: participant object
    func onStreamEnabled(_ stream: MediaStream, forParticipant participant: Participant) {
        // show stream in cell
        if let cell = self.cellForParticipant(participant) {
            cell.updateView(forStream: stream, enabled: true)
        }

        if participant.isLocal {
            // turn on controls for local participant
            self.buttonControlsView.updateButtons(forStream: stream, enabled: true)
        }
    }

    /// Participant has disabled mic, video or screenshare
    /// - Parameters:
    ///   - stream: disabled stream object
    ///   - participant: participant object
    func onStreamDisabled(_ stream: MediaStream, forParticipant participant: Participant) {
        // hide stream in cell
        if let cell = self.cellForParticipant(participant) {
            cell.updateView(forStream: stream, enabled: false)
        }

        if participant.isLocal {
            // turn off controls for local participant
            self.buttonControlsView.updateButtons(forStream: stream, enabled: false)
        }
    }
```

</TabItem>
<TabItem value="flutter">

```js
// Adding event listner
meeting.on("participant-joined", (Participant participant) {
  print("new participant => $participant");
  },
);

meeting.on("participant-left", (Participant participant) {
  print("new participant => $participant");
  },
);
```

</TabItem>
</Tabs>
