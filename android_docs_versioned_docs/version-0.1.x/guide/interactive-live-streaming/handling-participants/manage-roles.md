---
title: Manage Roles - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Manage Roles
pagination_label: Manage Roles
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: manage-roles
---

# Manage Roles

## Roles with VideoSDK

When doing interactive live streaming maintaining the role of users is quite important. To help manage these roles better, VideoSDK allows a participant with two types of modes:

**`1. CONFERENCE`** When a participant is joining with mode set to `CONFERENCE`, we will be able to **publish and consume the media** of other participants and also interact with them using the features like chat, poll etc.

**`2. VIEWER`** When a participant is joining with mode set to `VIEWER`, that participant is **not allowed to publish or consume any media** from other participants. Although they can interact with other participants using chat, polls etc.

**_This image is for education purpose_**

![manage-roles](https://cdn.videosdk.live/website-resources/docs-resources/meeting_modes.jpg)

## When to use the Roles?

##### 1. Simple Adaptive Streaming

- Simple Adaptive Streaming (SAS) is a type of livestreaming that requires minimal interaction between the host and viewers.

- It is particularly useful for events with a large number of viewers who prefer not to engage with the host.

- In SAS, each speaker attends a VideoSDK meeting in `CONFERENCE` mode, while viewers can simply watch the livestream using the `downstreamUrl`. Unlike the speakers, viewers do not need to join the meeting in `CONFERENCE` or `VIEWER` mode. This allows for a seamless streaming experience without any unnecessary interruptions or distractions.

**_This video is for education purpose_**

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_simple_ils.mp4" height="500px" width={"100%"} />

</div>

##### 2. Adaptive Streaming with increased engagement

- If you're looking to increase engagement with your audience during a live streaming event, consider using Adaptive Streaming technology. With this approach, you can incorporate interactive features such as polls and conversations, and give viewers the ability to join and leave the livestream as the host decides.

- To set this up, have all speakers join as `CONFERENCE` mode participants, while the audience joins as `VIEWER` mode participants. This way, everyone can participate in the interactive elements of the live stream and create a more dynamic and engaging experience for all.

**_This video is for education purpose_**

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_livestream_interaction_1.mp4" height="500px" width={"100%"} />

</div>

## Using roles

When you initialize the meeting, you can set the mode of Participant.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class MainActivity : AppCompatActivity() {

  fun getToken(): String? {
    //highlight-next-line
    ...
  }

  fun getMeetingId(token: String?): String? {
    //highlight-next-line
    ...
  }

 override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    //We will fetch token and meetingId and store it in local variables
    val token: String = getToken()
    val meetingId = getMeetingId(token)

    // initialize the VideoSDK
    VideoSDK.initialize(this@MainActivity)

    // set token property of VideoSDK
    VideoSDK.config(token)

    // highlight-start
    // create a new meeting instance
    val meeting: Meeting = VideoSDK.initMeeting(
        this@MainActivity, meetingId, "NAME HERE",
        true, true, null, 
        //highlight-next-line
        "CONFERENCE", // allowed: CONFERENCE | VIEWER
        null
    )
    // highlight-end

    Log.d("VideoSDK", "onCreate: $meetingId")
  }
}
```
</TabItem>

<TabItem value="Java">

```java
public class MainActivity extends AppCompatActivity {

  public String getToken()
  {
    //highlight-next-line
    ...
  }

  public String getMeetingId(String token) {
    //highlight-next-line
    ...
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    //We will fetch token and meetingId and store it in local variables
    String token = getToken();
    String meetingId = getMeetingId(token);

    // initialize the VideoSDK
    VideoSDK.initialize(MainActivity.this);

    // set token property of VideoSDK
    VideoSDK.config(token);

    // highlight-start
    // create a new meeting instance
    Meeting meeting = VideoSDK.initMeeting(
            MainActivity.this, meetingId, "NAME HERE",
            true, true, null, 
            //highlight-next-line
            "CONFERENCE", // allowed: CONFERENCE | VIEWER
            , null
    );
    // highlight-end

    Log.d("VideoSDK", "onCreate: " + meetingId);
  }
}
```
</TabItem>

</Tabs>

## Getting Participant Mode

You can identify the participants role by using `mode` property from `Participant` class.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
  //...

  val localParticipant = meeting!!.localParticipant
  //highlight-next-line
  Log.d("VideoSDK", "Participant mode : " + localParticipant.mode)
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  Participant localParticipant = meeting.getLocalParticipant();
  //highlight-next-line
  Log.d("VideoSDK", "Participant mode : " + participant.getMode());
}
```

</TabItem>

</Tabs>


## Changing Participant's Mode

Let's say you are hosting a livestream and you want one of your viewer to join the livestream with you. In this case you can change the mode of the participant using the `changeMode()` of the `Meeting` class.


<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
findViewById<View>(R.id.btnConferenceMode).setOnClickListener { view: View? ->
    // change mode to CONFERENCE
    //highlight-next-line
    meeting!!.changeMode("CONFERENCE")
}

findViewById<View>(R.id.btnViewerMode).setOnClickListener { view: View? ->
    // change mode to VIEWER
    //highlight-next-line
    meeting!!.changeMode("VIEWER")
}
```

</TabItem>

<TabItem value="Java">

```js
findViewById(R.id.btnConferenceMode).setOnClickListener(view -> {
    // change mode to CONFERENCE
    //highlight-next-line
    meeting.changeMode("CONFERENCE");
});

findViewById(R.id.btnViewerMode).setOnClickListener(view -> {
    // change mode to VIEWER
    //highlight-next-line
   meeting.changeMode("VIEWER");
});
```

</TabItem>

</Tabs>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Meeting](/android/api/sdk-reference/meeting-class/introduction)
- [Participant](/android/api/sdk-reference/participant-class/introduction)
- [changeMode()](/android/api/sdk-reference/meeting-class/methods#changemode)
