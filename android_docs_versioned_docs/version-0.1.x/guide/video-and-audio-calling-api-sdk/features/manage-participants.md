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

# Manage Participants - Android

## 1. Local Participant (self)

Local participant is used to consume your video & audio streams.
it contains information about local participant such as displayName, id, quality and streams Map.

You can acces localParticipant from the [meeting object](/android/guide/video-and-audio-calling-api-sdk/features/start-join-meeting#2-initialization).

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

Other participants Map contains same properties as [LocalParticipant](/android/guide/video-and-audio-calling-api-sdk/features/manage-participants#localparticipant-object-properties).

### Local And Other Participants

```xml title="activity_main.xml"
  <live.videosdk.rtc.android.VideoView
      android:id="@+id/localView"
      android:layout_width="80dp"
      android:layout_height="100dp"
      android:layout_gravity="end" />

  <androidx.recyclerview.widget.RecyclerView
      android:id="@+id/rvParticipants"
      android:layout_width="match_parent"
      android:layout_height="match_parent" />
```

:::info

- Here the participant's video is displayed using `VideoView`, but you may also use `SurfaceViewRender` for the same.
- For `VideoView`, SDK version should be `0.1.13` or higher.
- To know more about `VideoView`, please visit [here](/android/guide/video-and-audio-calling-api-sdk/components/videoView)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="MainActivity.kt"
  import live.videosdk.rtc.android.VideoView
  import org.webrtc.VideoTrack

  private fun displayLocalParticipant() {
    var localView: VideoView = findViewById(R.id.localView)

    // display local video when stream available
    meeting!!.localParticipant.addEventListener(
       object : ParticipantEventListener() {
         override fun onStreamEnabled(stream: Stream) {
           if (stream.kind.equals("video", ignoreCase = true)) {
             val videoTrack = stream.track as VideoTrack
             localView.addTrack(videoTrack)
            }
         }
      }
    )
  }

  private fun displayRemoteParticipants() {
    val rvParticipants = findViewById<RecyclerView>(R.id.rvParticipants)
    rvParticipants.layoutManager = GridLayoutManager(this, 2)
    rvParticipants.adapter = ParticipantAdapter(meeting!!)
  }

```

</TabItem>

<TabItem value="Java">

```js title="MainActivity.java"
  import live.videosdk.rtc.android.VideoView;
  import org.webrtc.VideoTrack;

  private void displayLocalParticipant() {
    final VideoView localView = findViewById(R.id.localView);

    // display local video when stream available
    meeting.getLocalParticipant().addEventListener(
        new ParticipantEventListener() {
          @Override
          public void onStreamEnabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("video")) {
              VideoTrack track = (VideoTrack) stream.getTrack();
              localView.addTrack(track);
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

</TabItem>

</Tabs>

```xml title="item_remote_peer.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <live.videosdk.rtc.android.VideoView
        android:id="@+id/participantView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</FrameLayout>
```

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="ParticipantAdapter.kt"

class ParticipantAdapter(meeting: Meeting) : RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder>() {
    private val participants: MutableList<Participant> = ArrayList()
    private var containerHeight = 0

    init {
        participants.add(meeting.localParticipant)
        meeting.addEventListener(object : MeetingEventListener() {
            override fun onParticipantJoined(participant: Participant) {
                participants.add(participant)
                notifyItemInserted(participants.size - 1)
            }

            override fun onParticipantLeft(participant: Participant) {
                // remove participant from grid
            }
        })
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PeerViewHolder {
        containerHeight = parent.height
        return PeerViewHolder(
            LayoutInflater.from(parent.context)
                .inflate(R.layout.item_remote_peer, parent, false)
        )
    }

    override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
        val participant = participants[position]

        val layoutParams = holder.itemView.layoutParams
        layoutParams.height = containerHeight / 3
        holder.itemView.layoutParams = layoutParams

        for ((_, stream) in participant.streams) {
            if (stream.kind.equals("video", ignoreCase = true)) {
                val videoTrack = stream.track as VideoTrack
                holder.participantView.addTrack(videoTrack)
                break
            }
        }

        participant.addEventListener(object : ParticipantEventListener() {
            override fun onStreamEnabled(stream: Stream) {
                if (stream.kind.equals("video", ignoreCase = true)) {
                    val videoTrack = stream.track as VideoTrack
                    holder.participantView.addTrack(videoTrack)
                }
            }
        })
    }

    override fun getItemCount(): Int {
        return participants.size
    }

    class PeerViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        var participantView: VideoView = view.findViewById(R.id.participantView)
    }
}

```

Please refer the [example code](https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example) on Github for more details.

</TabItem>

<TabItem value="Java">

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
                holder.participantView.addTrack(videoTrack);
                break;
            }
        }

        participant.addEventListener(new ParticipantEventListener() {
            @Override
            public void onStreamEnabled(Stream stream) {
                if (stream.getKind().equalsIgnoreCase("video")) {
                    VideoTrack videoTrack = (VideoTrack) stream.getTrack();
                    holder.participantView.addTrack(videoTrack);
                }
            }
        });

    }

    @Override
    public int getItemCount() {
        return participants.size();
    }

    static class PeerViewHolder extends RecyclerView.ViewHolder {
        public VideoView participantView;
        public View itemView;

        PeerViewHolder(@NonNull View view) {
            super(view);

            itemView = view;

            participantView = view.findViewById(R.id.participantView);
        }
    }
}
```

Please refer the [example code](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example/blob/master/app/src/main/java/live/videosdk/rtc/android/java) on Github for more details.

</TabItem>

</Tabs>

## 3. Participant Related Events

1. **onParticipantJoined** - Whenever any new participant join the meeting, `onParticipantJoined` event will trigger. For example, the meeting is running with **Alice** and **Bob**, then **Eve** join that meeting, after that `onParticipantJoined` event trigger and return the [participant object](/android/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties).

2. **onParticipantLeft** - Whenever any participant leave/exit the meeting, `onParticipantLeft` event will trigger.For example, the meeting is running with **Alice** and **Bob**, then **Bob** leave that meeting, after that `onParticipantLeft` event trigger and return the [participant object](/android/guide/video-and-audio-calling-api-sdk/features/manage-participants#participant-object-properties)

3. **onPresenterChanged** - Whenever any participant present/screenshare their screen/window in meeting, `onPresenterChanged` event will trigger and return the presenter `participantId`.

4. **onStreamEnabled** - Whenever any participant enabled mic/webcam in meeting, `onStreamEnabled` event will trigger and return [Stream](/android/guide/video-and-audio-calling-api-sdk/features/manage-participants#stream-object-properties).

5. **onStreamDisabled** - Whenever any participant disabled mic/webcam in meeting, `onStreamDisabled` event will trigger and return [Stream](/android/guide/video-and-audio-calling-api-sdk/features/manage-participants#stream-object-properties).

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
 meeting.addEventListener(object : MeetingEventListener() {
    override fun onParticipantJoined(participant: Participant) {
        participant.addEventListener(object : ParticipantEventListener() {
                override fun onStreamEnabled(stream: Stream) {
                    if (stream.kind.equals("video", ignoreCase = true)) {
                         // participant video enabled
                    } else if (stream.kind.equals("audio", ignoreCase = true)) {
                         // participant mic enabled
                    }
                }
                override fun onStreamDisabled(stream: Stream) {
                    if (stream.kind.equals("video", ignoreCase = true)) {
                         // participant video disabled
                    } else if (stream.kind.equals("audio", ignoreCase = true)) {
                        // participant mic disabled
                    }
                }
        })
    }

    override fun onParticipantLeft(participant: Participant) {
        Toast.makeText(this@MainActivity, participant.displayName + " left", Toast.LENGTH_SHORT).show()
    }

    override fun onPresenterChanged(presenterId: String) {
        Toast.makeText(this@MainActivity, presenterId + " started presenting", Toast.LENGTH_SHORT).show()
    }
 })
```

</TabItem>

<TabItem value="Java">

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
    @Override
    public void onPresenterChanged(String presenterId) {
      Toast
        .makeText(
          MainActivity.this,
          presenterId + " started presenting",
          Toast.LENGTH_SHORT
        )
        .show();
    }
 });
```

</TabItem>

</Tabs>
