---
title: Render Participant | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Render Participant
pagination_label: Render Participant
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: render-participant
---

# Render Participant

In this guide, we will take a look at how to render the participant's video on the screen.

:::info

- Here the participant's video is displayed using `VideoView`, but you may also use `SurfaceViewRender` for the same.
- For `VideoView`, SDK version should be `0.1.13` or higher.
- To know more about `VideoView`, please visit [here](./understand-videoView-component)

:::

## Steps to render panticipant

**`Step 1:`** Create a new layout for the participant view named `item_participant.xml` in the `res/layout` folder.

```xml title="item_participant.xml"
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="#616161"
    tools:layout_height="200dp">

    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:background="#99000000"
        android:contentDescription="webcam_turned_off"
        android:gravity="center"
        android:padding="4dp"
        android:src="@drawable/ic_outline_videocam_off_24"
        app:tint="@color/white" />

    <live.videosdk.rtc.android.VideoView
        android:id="@+id/participantView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:visibility="gone" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom"
        android:background="#99000000"
        android:orientation="horizontal">

        <TextView
            android:id="@+id/tvName"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:gravity="center"
            android:padding="4dp"
            android:textColor="@color/white" />

    </LinearLayout>
</FrameLayout>
```

**`Step 2:`** Now, Create a recycler view adapter named `ParticipantAdapter` which will show the participant list. Create `PeerViewHolder` in the adapter which will extend `RecyclerView.ViewHolder`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="ParticipantAdapter.kt"
class ParticipantAdapter(meeting: Meeting) : RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder>() {

  override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PeerViewHolder {
      //highlight-start
      return PeerViewHolder(
        LayoutInflater.from(parent.context)
          .inflate(R.layout.item_participant, parent, false)
        )
      //highlight-end
  }

  override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
  }

  override fun getItemCount(): Int {
    return 0
  }

  class PeerViewHolder(view: View) : RecyclerView.ViewHolder(view) {
    // 'VideoView' to show Video Stream
    //highlight-next-line
    var participantView: VideoView = view.findViewById(R.id.participantView)
    var tvName: TextView = view.findViewById(R.id.tvName)
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    //highlight-next-line
    return new PeerViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_participant, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {

  }

  @Override
  public int getItemCount() {
      return 0;
  }

  static class PeerViewHolder extends RecyclerView.ViewHolder {
    // 'VideoView' to show Video Stream
    //highlight-next-line
    public VideoView participantView;
    public TextView tvName;
    public View itemView;

    PeerViewHolder(@NonNull View view) {
      super(view);
      itemView = view;
      tvName = view.findViewById(R.id.tvName);
      participantView = view.findViewById(R.id.participantView);
    }
  }
}
```

</TabItem>

</Tabs>

**`Step 3:`** Next, we will render a list of `Participant` for the meeting.
We will initialize this list in the constructor of the `ParticipantAdapter`

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="ParticipantAdapter.kt"
class ParticipantAdapter(meeting: Meeting) :
    RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder>() {

  //highlight-next-line
  // creating a empty list which will store all participants
  private val participants: MutableList<Participant> = ArrayList()

  init {
    //highlight-next-line
    // adding the local participant(You) to the list
    participants.add(meeting.localParticipant)

    //highlight-next-line
    // adding Meeting Event listener to get the participant join/leave event in the meeting.
    meeting.addEventListener(object : MeetingEventListener() {
      override fun onParticipantJoined(participant: Participant) {
        // add participant to the list
        participants.add(participant)
        notifyItemInserted(participants.size - 1)
      }

      override fun onParticipantLeft(participant: Participant) {
        var pos = -1
        for (i in participants.indices) {
          if (participants[i].id == participant.id) {
            pos = i
            break
          }
        }
        // remove participant from the list
        participants.remove(participant)
        if (pos >= 0) {
          notifyItemRemoved(pos)
        }
      }
    })
  }

  // replace getItemCount() method with following.
  // this method returns the size of total number of participants
  override fun getItemCount(): Int {
    //highlight-next-line
    return participants.size
  }
  //...
}
```

</TabItem>

<TabItem value="Java">

```java title="ParticipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  //highlight-next-line
  // creating a empty list which will store all participants
  private final List<Participant> participants = new ArrayList<>();

  public ParticipantAdapter(Meeting meeting) {
    //highlight-next-line
    // adding the local participant(You) to the list
    participants.add(meeting.getLocalParticipant());

    //highlight-next-line
    // adding Meeting Event listener to get the participant join/leave event in the meeting.
    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
        // add participant to the list
        participants.add(participant);
        notifyItemInserted(participants.size() - 1);
      }

      @Override
      public void onParticipantLeft(Participant participant) {
        int pos = -1;
        for (int i = 0; i < participants.size(); i++) {
          if (participants.get(i).getId().equals(participant.getId())) {
            pos = i;
            break;
          }
        }
        // remove participant from the list
        participants.remove(participant);

        if (pos >= 0) {
          notifyItemRemoved(pos);
        }
      }
    });
  }

  // replace getItemCount() method with following.
  // this method returns the size of total number of participants
  @Override
  public int getItemCount() {
    //highlight-next-line
    return participants.size();
  }
  //...
}
```

</TabItem>

</Tabs>

**`Step 4:`** Now, We have listed our participants. Let's set up the view holder to display a participant video.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="PartipantAdapter.kt"
class ParticipantAdapter(meeting: Meeting) :
    RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder>() {

  //highlight-next-line
  // replace onBindViewHolder() method with following.
  override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
    val participant = participants[position]

    holder.tvName.text = participant.displayName

    //highlight-next-line
    // adding the initial video stream for the participant into the 'VideoView'
    for ((_, stream) in participant.streams) {
      if (stream.kind.equals("video", ignoreCase = true)) {
        holder.participantView.visibility = View.VISIBLE
        val videoTrack = stream.track as VideoTrack
        //highlight-next-line
        holder.participantView.addTrack(videoTrack)
        break
      }
    }

    //highlight-next-line
    // add Listener to the participant which will update start or stop the video stream of that participant
    participant.addEventListener(object : ParticipantEventListener() {
      override fun onStreamEnabled(stream: Stream) {
        if (stream.kind.equals("video", ignoreCase = true)) {
          holder.participantView.visibility = View.VISIBLE
          val videoTrack = stream.track as VideoTrack
          //highlight-next-line
          holder.participantView.addTrack(videoTrack)
       }
      }

      override fun onStreamDisabled(stream: Stream) {
        if (stream.kind.equals("video", ignoreCase = true)) {
          //highlight-next-line
          holder.participantView.removeTrack()
          holder.participantView.visibility = View.GONE
        }
      }
    })
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="PartipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  //highlight-next-line
  // replace onBindViewHolder() method with following.
  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    Participant participant = participants.get(position);

    holder.tvName.setText(participant.getDisplayName());

    //highlight-next-line
    // adding the initial video stream for the participant into the 'VideoView'
    for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
      Stream stream = entry.getValue();
      if (stream.getKind().equalsIgnoreCase("video")) {
        holder.participantView.setVisibility(View.VISIBLE);
        VideoTrack videoTrack = (VideoTrack) stream.getTrack();
        //highlight-next-line
        holder.participantView.addTrack(videoTrack)
        break;
      }
    }

    //highlight-next-line
    // add Listener to the participant which will update start or stop the video stream of that participant
    participant.addEventListener(new ParticipantEventListener() {
      @Override
      public void onStreamEnabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          holder.participantView.setVisibility(View.VISIBLE);
          VideoTrack videoTrack = (VideoTrack) stream.getTrack();
          //highlight-next-line
          holder.participantView.addTrack(videoTrack)
        }
      }

      @Override
      public void onStreamDisabled(Stream stream) {
        if (stream.getKind().equalsIgnoreCase("video")) {
          //highlight-next-line
          holder.participantView.removeTrack();
          holder.participantView.setVisibility(View.GONE);
        }
      }
    });
  }
}
```

</TabItem>

</Tabs>

**`Step 5:`** Final step is to add this adapter to the `MeetingActivity`

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="MeetingActivity.kt"
override fun onCreate(savedInstanceState: Bundle?) {
  //Meeting Setup...
  //...
  val rvParticipants = findViewById<RecyclerView>(R.id.rvParticipants)
  rvParticipants.layoutManager = GridLayoutManager(this, 2)
  //highlight-next-line
  rvParticipants.adapter = ParticipantAdapter(meeting!!)
}
```

</TabItem>

<TabItem value="Java">

```java title="MeetingActivity.java"
@Override
protected void onCreate(Bundle savedInstanceState) {
  //Meeting Setup...
  //...
  final RecyclerView rvParticipants = findViewById(R.id.rvParticipants);
  rvParticipants.setLayoutManager(new GridLayoutManager(this, 2));
  //highlight-next-line
  rvParticipants.setAdapter(new ParticipantAdapter(meeting));
}
```

</TabItem>

</Tabs>

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_display_video.jpeg" />

</center>

## Mirror Local Video View

If you wish to show the mirror view of the local participant, you can set `setMirror` property to `true` of `VideoView` class.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="PartipantAdapter.kt"
class ParticipantAdapter(meeting: Meeting) :
    RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder>() {

  override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
    //...
    holder.tvName.text = participant.displayName
    //highlight-next-line
    holder.participantView.setMirror(true)
    //...
  }
}
```

</TabItem>

<TabItem value="Java">

```java title="PartipantAdapter.java"
public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    //...
    holder.tvName.setText(participant.getDisplayName());
    //highlight-next-line
    holder.participantView.setMirror(true);
    //...
  };
}
```

</TabItem>

</Tabs>

##### Sample of mirror view video

![mirror view](/img/mirror-view.jpg)

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [Participant](/android/api/sdk-reference/participant-class/introduction)
- [VideoView](./understand-videoView-component)
