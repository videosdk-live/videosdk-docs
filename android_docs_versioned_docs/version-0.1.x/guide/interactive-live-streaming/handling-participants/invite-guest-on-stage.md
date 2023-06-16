---
title: Invite Guest on Stage - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Invite Guest on Stage
pagination_label: Invite Guest on Stage
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: invite-guest-on-stage
---

# Invite Guest on Stage

In this guide, we will see how you can request a viewer to join your livestream by using the `changeMode()`.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER` and the host joins with mode as `CONFERENCE`
:::

Let's first have a look at how we will be using the `PubSub` mechanism to acheive the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading Viewer List

The host will see a list of participants who have joined as `VIEWER` along with a button that, when selected, will invite that user to join the livestream.

Here we are using `RecyclerView` to display viewer list with button.

```xml title="layout_viewers_list_view.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:background="#2B3034"
    android:id="@+id/layout_participants">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:paddingVertical="15sp"
        android:text="Viewer List"
        android:textSize="20sp"
        android:textColor="@color/white"/>

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/rvViewersLinearView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingHorizontal="15sp" />

</LinearLayout>
```

```xml title="item_viewer_list_layout.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginBottom="10dp"
    android:gravity="center"
    android:orientation="horizontal"
    android:padding="12dp">


    <TextView
        android:id="@+id/viewerName"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:textSize="20sp"
        android:textColor="@color/white"/>

    <Button
        android:id="@+id/btnRequest"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:text="Request to join Stage"
        android:textAllCaps="false" />


</LinearLayout>
```

- Create a recycler view adapter named `ViewerListAdapter` which will show the viewer list. Create `PeerViewHolder` in the adapter which will extend `RecyclerView.ViewHolder`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ViewerListAdapter(items: ArrayList<Participant?>?, private val meeting: Meeting) :
    RecyclerView.Adapter<ViewerListAdapter.ViewHolder?>() {
    private var viewers = ArrayList<Participant?>()

    init {
      viewers.addAll(items!!)

      //highlight-next-line
      // adding Meeting Event listener to get the participant join/leave and panticipant mode change event in the meeting.
      meeting.addEventListener(object : MeetingEventListener() {
        override fun onParticipantJoined(participant: Participant) {
            super.onParticipantJoined(participant)
            viewers = ArrayList()
            viewers.addAll(allViewers)
            notifyDataSetChanged()
        }

        override fun onParticipantLeft(participant: Participant) {
            super.onParticipantLeft(participant)
            viewers = ArrayList()
            viewers.addAll(allViewers)
            notifyDataSetChanged()
        }

        override fun onParticipantModeChanged(data: JSONObject) {
            viewers = ArrayList()
            viewers.addAll(allViewers)
            notifyDataSetChanged()
        }
      })
    }

    private val allViewers: ArrayList<Participant?>
        private get() {
            val viewerList: ArrayList<Participant?> = ArrayList()
            val participants: Iterator<Participant> = meeting.participants.values.iterator()
            for (i in 0 until meeting.participants.size) {
                val participant = participants.next()
                //highlight-start
                if (participant.mode == "VIEWER") {
                    viewerList.add(participant)
                }
                //highlight-end
            }
            return viewerList
        }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(
            LayoutInflater.from(parent.context)
                .inflate(R.layout.item_viewer_list_layout, parent, false)
        )
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val participant = viewers[position]
        holder.viewerName.text = viewers[position]!!.displayName
    }

    override fun getItemCount(): Int {
        return viewers.size
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var viewerName: TextView
        var btnRequest: Button

        init {
            viewerName = itemView.findViewById(R.id.viewerName)
            btnRequest = itemView.findViewById(R.id.btnRequest)
        }
    }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ViewerListAdapter extends RecyclerView.Adapter<ViewerListAdapter.ViewHolder> {
    private ArrayList<Participant> viewers = new ArrayList<>();
    private Meeting meeting;

    public ViewerListAdapter(ArrayList<Participant> items, Meeting meeting) {
      this.meeting = meeting;
      viewers.addAll(items);

      //highlight-next-line
      // adding Meeting Event listener to get the participant join/leave and panticipant mode change event in the meeting.
      meeting.addEventListener(new MeetingEventListener() {
        @Override
        public void onParticipantJoined(Participant participant) {
            super.onParticipantJoined(participant);
            viewers = new ArrayList<>();
            viewers.addAll(getAllViewers());
            notifyDataSetChanged();
        }

        @Override
        public void onParticipantLeft(Participant participant) {
            super.onParticipantLeft(participant);
            viewers = new ArrayList<>();
            viewers.addAll(getAllViewers());
            notifyDataSetChanged();
        }

        @Override
        public void onParticipantModeChanged(JSONObject data) {
            viewers = new ArrayList<>();
            viewers.addAll(getAllViewers());
            notifyDataSetChanged();
        }
      });

    }

    private ArrayList<Participant> getAllViewers() {
        ArrayList<Participant> viewerList = new ArrayList();
        Iterator<Participant> participants = meeting.getParticipants().values().iterator();

        for (int i = 0; i < meeting.getParticipants().size(); i++) {
            //highlight-start
            final Participant participant = participants.next();
            if (participant.getMode().equals("VIEWER")) {
                viewerList.add(participant);
            }
            //highlight-end
        }
        return viewerList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_viewer_list_layout, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        final Participant participant = viewers.get(position);
        holder.viewerName.setText(viewers.get(position).getDisplayName());
    }

    @Override
    public int getItemCount() {
        return viewers.size();
    }

    static class ViewHolder extends RecyclerView.ViewHolder {
        TextView viewerName;
        Button btnRequest;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            viewerName = itemView.findViewById(R.id.viewerName);
            btnRequest = itemView.findViewById(R.id.btnRequest);
        }
    }

}
```

</TabItem>

</Tabs>

- Set this adapter to `RecyclerView`

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
btnViewerList.setOnClickListener { openViewerList() }

fun openViewerList() {
  val viewerListView: RecyclerView
  val bottomSheetDialog = BottomSheetDialog(mContext!!)
  val layout_participants = findViewById(R.id.layout_participants)
  val v3 = LayoutInflater.from(mContext)
      .inflate(R.layout.layout_viewers_list_view, layout_participants)
  bottomSheetDialog.setContentView(v3)
  viewerListView = v3.findViewById(R.id.rvViewersLinearView)
  viewerListView.minimumHeight = 400
  bottomSheetDialog.show()
  val viewerList: ArrayList<*> = ArrayList<Any?>()
  val participants: Iterator<Participant> = meeting!!.participants.values.iterator()
  for (i in 0 until meeting!!.participants.size) {
      val participant = participants.next()
      //highlight-start
      if (participant.mode == "VIEWER")
        viewerList.add(participant)
      //highlight-end
  }
  viewerListView.layoutManager = LinearLayoutManager(mContext)
  //highlight-next-line
  viewerListView.adapter = ViewerListAdapter(viewerList, meeting!!)
  viewerListView.setHasFixedSize(true)
}
```

</TabItem>

<TabItem value="Java">

```js
btnViewerList.setOnClickListener(v -> openParticipantList());

public void openViewerList() {
  RecyclerView viewerListView;
  BottomSheetDialog bottomSheetDialog = new BottomSheetDialog(mContext);
  LinearLayout layout_participants = findViewById(R.id.layout_participants);
  View v3 = LayoutInflater.from(mContext).inflate(R.layout.layout_viewers_list_view, layout_participants);
  bottomSheetDialog.setContentView(v3);
  viewerListView = v3.findViewById(R.id.rvViewersLinearView);
  viewerListView.setMinimumHeight(400);
  bottomSheetDialog.show();

  ArrayList viewerList = new ArrayList();
  final Iterator<Participant> participants = meeting.getParticipants().values().iterator();
  for (int i = 0; i < meeting.getParticipants().size(); i++) {
      final Participant participant = participants.next();
      //highlight-start
      if (participant.getMode().equals("VIEWER"))
          viewerList.add(participant);
      //highlight-end
  }
  viewerListView.setLayoutManager(new LinearLayoutManager(mContext));
  //highlight-next-line
  viewerListView.setAdapter(new ViewerListAdapter(viewerList, meeting));
  viewerListView.setHasFixedSize(true);
}

```

</TabItem>

</Tabs>

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_stage_request.jpg" />

</center>

### Step 2: Requesting a Viewer to Join Livestream

We have a Viewer list ready. Now, let us handle the click event for the `btnRequest`.

We will be using `CHANGE_MODE_ + participantId` as the topic for PubSub.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onBindViewHolder(holder: ViewHolder, position: Int) {
  //...

  holder.btnRequest.setOnClickListener { v: View? ->
    val pubSubPublishOptions = PubSubPublishOptions()
    pubSubPublishOptions.isPersist = false
    //highlight-start
    meeting.pubSub.publish(
        "CHANGE_MODE_" + participant!!.id,
        participant.id,
        pubSubPublishOptions
    )
    //highlight-end
  }
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
  //...

  holder.btnRequest.setOnClickListener(v -> {
    PubSubPublishOptions pubSubPublishOptions = new PubSubPublishOptions();
    pubSubPublishOptions.setPersist(false);
    //highloght-next-line
    meeting.pubSub.publish("CHANGE_MODE_"+ participant.getId(), participant.getId(), pubSubPublishOptions);
  });
}
```

</TabItem>

</Tabs>

### Step 3: Showing Viewer Request Dialog

After implementing the Host requesting viewer to join the livestream, let's display the viewer's request dialogue and switch the `VIEWER` mode to `CONFERENCE`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
meeting!!.addEventListener(object : MeetingEventListener() {
  override fun onMeetingJoined() {
    val changeModeListener =
      PubSubMessageListener { pubSubMessage: PubSubMessage ->
          if (pubSubMessage.message == meeting!!.localParticipant.id) {
              showRequestDialog(pubSubMessage.senderName)
          }
      }
    //highlight-next-line
    meeting!!.pubSub.subscribe("CHANGE_MODE_" + meeting!!.localParticipant.id, changeModeListener)
  }
})

private fun showRequestDialog(name: String) {
    val builder = AlertDialog.Builder(
        mContext!!
    )
    builder.setMessage("$name has request you to go on stage")
    builder.setTitle("Change mode Request")
    builder.setCancelable(false)
    builder.setPositiveButton("Yes") { dialog: DialogInterface, _: Int ->
        //highlight-next-line
        meeting!!.changeMode("CONFERENCE")
        //...
        dialog.dismiss()
    }
    builder.setNegativeButton(
        "No"
    ) { dialog: DialogInterface, which: Int -> dialog.dismiss() }
    val alertDialog = builder.create()
    alertDialog.show()
}

```

</TabItem>

<TabItem value="Java">

```js
meeting.addEventListener(new MeetingEventListener() {
  @Override
  public void onMeetingJoined() {
    PubSubMessageListener changeModeListener = pubSubMessage -> {
        if (pubSubMessage.getMessage().equals(meeting.getLocalParticipant().getId())) {
            showRequestDialog(pubSubMessage.getSenderName());
        }
    };
    //highlight-next-line
    meeting.pubSub.subscribe("CHANGE_MODE_"+ meeting.getLocalParticipant().getId(), changeModeListener);
  }
}

private void showRequestDialog(String name) {
  AlertDialog.Builder builder = new AlertDialog.Builder(mContext);
  builder.setMessage(name + " has request you to go on stage");
  builder.setTitle("Change mode Request");
  builder.setCancelable(false);

  builder.setPositiveButton("Yes", (dialog, which) -> {
      //highlight-next-line
      meeting.changeMode("CONFERENCE");
      //...
      dialog.dismiss();
  });

  builder.setNegativeButton("No", (dialog, which) -> {
      dialog.dismiss();
  });

  AlertDialog alertDialog = builder.create();
  alertDialog.show();
}
```

</TabItem>

</Tabs>

<center>

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_stage_request_dialog.jpg" />

</center>

### Step 4: Pin the participant

We need to pin the participant so that he/she can appears on the livestream. To achieve this, we will listen to the callback on the `onParticipantModeChanged` of `Meeting` class.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ParticipantListAdapter(
    items: ArrayList<Participant?>?,
    private val meeting: Meeting,
    private val context: Context
) : RecyclerView.Adapter<ParticipantListAdapter.ViewHolder>() {
  // ...

 init {
    //...
    meeting.addEventListener(object : MeetingEventListener() {
      override fun onParticipantJoined(participant: Participant) {
          //...
      }

      override fun onParticipantLeft(participant: Participant) {
         // ...
      }

      //highlight-start
      override fun onParticipantModeChanged(data: JSONObject) {
        //...
         val participant = meeting.participants[data.getString("participantId")]
          if (data.getString("mode") == "CONFERENCE") {
              participant!!.pin("SHARE_AND_CAM")
          } else {
              participant!!.unpin("SHARE_AND_CAM")
          }
      }
      //highlight-end
    })
  }

  //...
  class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
      //...
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ParticipantListAdapter extends RecyclerView.Adapter<ParticipantListAdapter.ViewHolder> {
    // ...

  public ParticipantListAdapter(ArrayList<Participant> items, Meeting meeting, Context context) {
    //...
    meeting.addEventListener(new MeetingEventListener() {
      @Override
      public void onParticipantJoined(Participant participant) {
        //...
      }

      @Override
      public void onParticipantLeft(Participant participant) {
        //...
      }

      //highlight-start
      @Override
      public void onParticipantModeChanged(JSONObject data) {
        //...
        Participant participant = meeting.getParticipants().get(data.getString("participantId"));
        if (data.getString("mode").equals("CONFERENCE"))
        {
          participant.pin("SHARE_AND_CAM");
        }else
        {
          participant.unpin("SHARE_AND_CAM");
        }
      }
      //highlight-end
    });

  }

  //...
  static class ViewHolder extends RecyclerView.ViewHolder {
      //...
  }
}
```

</TabItem>

</Tabs>

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer muted controls url="https://cdn.videosdk.live/website-resources/docs-resources/android_stage_request_demo.mp4" height="500px" width={"100%"} />

</div>

<br/>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Meeting](/android/api/sdk-reference/meeting-class/introduction)
- [pubSub](/android/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub)
- [onParticipantModeChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantmodechanged)
