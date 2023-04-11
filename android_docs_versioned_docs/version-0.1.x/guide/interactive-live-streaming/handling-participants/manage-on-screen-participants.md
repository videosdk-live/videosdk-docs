---
title: Manage On-Screen Participants - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage On-Screen Participants
pagination_label: Manage On-Screen Participants
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-on-screen-participants
---

# Manage On-Screen Participants

It is important that only the necessary person are present on the screen when livestream is on. To handle these, we will be using the `pin` and `unpin` methods of the `Participant` class.

:::note
To ensure only the hosts/speakers are shown in the grid, you should use the `SPOTLIGHT` layout and `pin` as the priority when starting the interactive livestream.
:::

Let us first explore two methods that we will be using to manage on-screen participants.

### `pin()`

With these method you can pin any participant's Camera, Screen Share or both. These can be usefull to identify the participants based on which you can perform rendering participant grid.

### `unpin()`

With these methods you can unpin any participant's Camera, Screen Share or both. These can be usefull to reset pin state of the participant.

### Managing On-Screen Participants

1. If you want to pin all the hosts/speakers automatically, you can do it by listenting to the `onMeetingJoined` callback and `onParticipantModeChanged`, where you can `pin` and `unpin` based on the mode.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  override fun onMeetingJoined() {
        //highlight-start
        val localParticipant = meeting!!.localParticipant
        //We will pin the participant if mode is conference
        if (localParticipant.mode == "CONFERENCE") {
            localParticipant.pin()
        } else {
            localParticipant.unpin()
        }
        //highlight-end
   }

  override fun onParticipantModeChanged(data: JSONObject) {
    //highlight-start
    val localParticipant = meeting!!.localParticipant
    //We will pin the participant if mode is conference else unpin him
    if(localParticipant.id.equals(data.getString("peerId"))
    {
        if(localParticipant.mode == "CONFERENCE")
        {
            localParticipant.pin()
        }else{
            localParticipant.unpin()
        }
    }
    //highlight-end
  }
}

override fun onCreate(savedInstanceState: Bundle?) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting!!.addEventListener(meetingEventListener)
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  @Override
  public void onMeetingJoined() {
    //highlight-start
    Participant localParticipant = meeting.getLocalParticipant();
    //We will pin the participant if mode is conference
    if (localParticipant.getMode() == "CONFERENCE") {
        localParticipant.pin();
    } else {
        localParticipant.unpin();
    }
    //highlight-end
  }

  @Override
  public void onParticipantModeChanged(JSONObject data) {
    //highlight-start
    Participant localParticipant = meeting.getLocalParticipant();
    //We will pin the participant if mode is conference else unpin him
    if(localParticipant.getId().equals(data.getString("peerId"))
    {
        if(localParticipant.getMode() == "CONFERENCE")
        {
            localParticipant.pin();
        }else{
            localParticipant.unpin();
        }
    }
    //highlight-end
  }
};

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // add listener to meeting
  //highlight-next-line
  meeting.addEventListener(meetingEventListener);
}
```

</TabItem>

</Tabs>

2. When rendering the participant grid on the Speaker side, make sure to show only the participants who are in `CONFERENCE` mode. You can filter the participants as shown in below example.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
 private fun getSpeakerList(): List<Participant?>? {
    val speakerList: MutableList<Participant?> = ArrayList()
    val participants = meeting!!.participants
    for (entry: Map.Entry<String, Participant> in participants.entries) {
        val participant = entry.value
        if (participant.mode == "CONFERENCE") {
            speakerList.add(participant)
        }
    }
    return speakerList
}
```

</TabItem>

<TabItem value="Java">

```js
private List<Participant> getSpeakerList() {
    List<Participant> speakerList = new ArrayList();
    Map<String, Participant> participants = meeting.getParticipants();
    for (Map.Entry<String, Participant> entry : participants.entrySet()) {
        Participant participant = entry.getValue();
        if (participant.getMode().equals("CONFERENCE")) {
            speakerList.add(participant);
        }
    }
    return speakerList;
}
```

</TabItem>

</Tabs>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [pin](/android/api/sdk-reference/participant-class/methods#pin)
- [unpin](/android/api/sdk-reference/participant-class/methods#unpin)
