---
title: Join Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Join Meeting
pagination_label: Join Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: join-meeting
---

# Join Meeting

### Overview

After meeting initialization by `initMeeting()` it returns a new instance of `Meeting`. If you have not initialized a meeting yet, you can [follow the guide here.](./initialize-meeting) However, by default, it will not automatically join the meeting. Hence, to join the meeting you have to call `join()` .

### `join()`

- To join the meeting you can call the `join()` method of `Meeting` class.
- This method can be called after the meeting is initialized using `VideoSDK` class.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class MainActivity : AppCompatActivity() {
 override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    // initialize the meeting
    ...

    // join meeting
    // highlight-next-line
    meeting!!.join()
  }
}
```
</TabItem>

<TabItem value="Java">

```java
public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    // initialize the meeting
    ...

    // join meeting
    // highlight-next-line
    meeting.join();
  }
}
```
</TabItem>

</Tabs>


### Events associated with Join

Following callbacks are received when a participant is successfully joined.

- [Local Participant](../concept-and-architecture#2-participant) will receive a [`onMeetingJoined`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingjoined) event, when successfully joined.
- [Remote Participant](../concept-and-architecture#2-participant) will receive a [`onParticipantJoined`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantjoined) event with the newly joined `Participant` object from the event callback.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class MainActivity : AppCompatActivity() {
 override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    // initialize the meeting
    ...

    // join meeting
    meeting!!.join()

    // Add event listener for listening upcoming events of meeting
    // highlight-next-line
    meeting!!.addEventListener(meetingEventListener)
  }

  private val meetingEventListener: MeetingEventListener = object : MeetingEventListener(){
    // Event to know meeting is joined
    //highlight-start
    fun onMeetingJoined() {
        Log.d("VideoSDK", "onMeetingJoined")
    }
    //highlight-end
    // Event to know some other participant joined
    //highlight-start
    fun onParticipantJoined(participant: Participant) {
        Log.d("#VideoSDK", participant.displayName + " joined");
    } 
    //highlight-end
  }
}
```
</TabItem>

<TabItem value="Java">

```java
public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    // initialize the meeting
    ...

    // join meeting
    meeting.join();

    // Add event listener for listening upcoming events of meeting
    //highlight-next-line
    meeting.addEventListener(meetingEventListener);
  }

  private final MeetingEventListener meetingEventListener=new MeetingEventListener() {
    // Event to know meeting is joined
    //highlight-start
    @Override
    public void onMeetingJoined() {
        Log.d("VideoSDK", "onMeetingJoined");
    }
    //highlight-end

    // Event to know some other participant joined
    //highlight-start
    @Override
    public void onParticipantJoined(Participant participant) {
        Log.d("#VideoSDK", participant.getDisplayName() + " joined");
    }
    //highlight-end
  };
}
```
</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [initMeeting](/android/api/sdk-reference/initMeeting)
- [join()](/android/api/sdk-reference/meeting-class/methods#join)
- [onMeetingJoined()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingjoined)
- [onParticipantJoined()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onparticipantjoined)
