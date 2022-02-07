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

You can acces localParticipant from the [meeting object](/android/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

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

Other participants Map contains same properties as [LocalParticipant](/android/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

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


## 3. Participant Related Events

1. **participant-joined** - Whenever any new participant join the meeting, `participant-joined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `participant-joined` event trigger and return the [participant object](/android/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **participant-left** - Whenever any participant leave/exit the meeting, `participant-left` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `participant-left` event trigger and return the [participant object](/android/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **presenter-changed** - Whenever any participant present/screenshare their screen/window in meeting, `presenter-changed` event will trigger and return the presenter `participantId`.

4. **stream-enabled** - Whenever any participant enabled mic/webcam in meeting, `stream-enabled` event will trigger and return [Stream Map](/android/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).

5. **stream-disabled** - Whenever any participant disabled mic/webcam in meeting, `stream-disabled` event will trigger and return [Stream Map](/android/video-and-audio-calling-api-sdk/features/manage-participants#streams-map-properties).


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