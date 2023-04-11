---
title: Chat messages with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Chat using PubSub
pagination_label: Chat using PubSub
keywords:
  - Chat in meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: chat-using-pubsub
---

# Chat using PubSub

For the communication or any kind of messaging in between the participants, VideoSDK provides `pubSub` class which use Publish-Subscribe mechanism and can be used to develope wide varitey of functionalities. For example, participants could use it to send chat messages to each other, share files or other media, or even trigger actions like muting or unmuting audio or video.

Now we will see, how we can use PubSub to implement Chat functionality. If you are not familiary with the PubSub mechanism and `pubSub` class, you can [follow this guide](/android/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

## Implementing Chat

### `Group Chat`

1. First step in creating a group chat is choosing the topic which all the participants will publish and subscribe to send and receive the messages. We will be using `CHAT` as the topic for this one. 
2. On the send button, publish the message that the sender typed in the `EditText` field. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.widget.Toolbar
import live.videosdk.rtc.android.Meeting
import live.videosdk.rtc.android.listeners.PubSubMessageListener
import live.videosdk.rtc.android.model.PubSubPublishOptions

class ChatActivity : AppCompatActivity() {
  // Meeting
  var meeting: Meeting? = null

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_chat)

    /**
     * Here, we have created 'MainApplication' class, which extends android.app.Application class.
     * It has Meeting property and getter and setter methods of Meeting property.
     * In your android manifest, you must declare the class implementing android.app.Application 
     * (add the android:name=".MainApplication" attribute to the existing application tag):
     * In MainActivity.kt, we have set Meeting property.
     *
     * For Example: (MainActivity.kt)
     * var meeting = VideoSDK.initMeeting(context, meetingId, ParticipantName, micEnabled, webcamEnabled,paricipantId,mode,customTrack)
     * (this.application as MainApplication).meeting = meeting
    */

    // Get Meeting
    meeting = (this.application as MainApplication).meeting

    findViewById(R.id.btnSend).setOnClickListener(view -> sendMessage());
  }

  private fun sendMessage() {
    // get message from EditText 
    val message: String = etmessage.getText().toString()
    if (!TextUtils.isEmpty(message)) {
        val publishOptions = PubSubPublishOptions()
        publishOptions.setPersist(true)

        // Sending the Message using the publish method
        //highlight-next-line
        meeting!!.pubSub.publish("CHAT", message, publishOptions)

        // Clearing the message input
        etmessage.setText("")
    } else {
        Toast.makeText(
            this@ChatActivity, "Please Enter Message",
            Toast.LENGTH_SHORT
        ).show()
    }
  }
}
```

</TabItem>

<TabItem value="Java">

```js
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import java.util.List;
import live.videosdk.rtc.android.Meeting;
import live.videosdk.rtc.android.lib.PubSubMessage;
import live.videosdk.rtc.android.listeners.PubSubMessageListener;
import live.videosdk.rtc.android.model.PubSubPublishOptions;

public class ChatActivity extends AppCompatActivity {
  // Meeting
  Meeting meeting;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_chat);

    /**
     * Here, we have created 'MainApplication' class, which extends android.app.Application class.
     * It has Meeting property and getter and setter methods of Meeting property.
     * In your android manifest, you must declare the class implementing android.app.Application 
     * (add the android:name=".MainApplication" attribute to the existing application tag):
     * In MainActivity.java, we have set Meeting property.
     *
     * For Example: (MainActivity.java)
     * Meeting meeting = VideoSDK.initMeeting(context, meetingId, ParticipantName, micEnabled, webcamEnabled,participantId,mode,customTrack);
     * ((MainApplication) this.getApplication()).setMeeting(meeting);
    */

    // Get Meeting
    meeting = ((MainApplication) this.getApplication()).getMeeting();

    findViewById(R.id.btnSend).setOnClickListener(view -> sendMessage());
  }

  private void sendMessage()
  {
    // get message from EditText
    String message = etmessage.getText().toString();
    if (!message.equals("")) {
        PubSubPublishOptions publishOptions = new PubSubPublishOptions();
        publishOptions.setPersist(true);

        // Sending the Message using the publish method
        //highlight-next-line
        meeting.pubSub.publish("CHAT", message, publishOptions);

        // Clearing the message input
        etmessage.setText("");
    } else {
        Toast.makeText(ChatActivity.this, "Please Enter Message",
                Toast.LENGTH_SHORT).show();
    }
  }
}
```

</TabItem>

</Tabs>

3. Next step would be to display the messages others send. For this we have to `subscribe` to that topic i.e `CHAT` and display all the messages.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ChatActivity : AppCompatActivity() {

  // PubSubMessageListener
  //highlight-start
  var pubSubMessageListener =
    PubSubMessageListener { message ->
      // New message
      Toast.makeText(
            this@ChatActivity, message.senderName + " says : " + message.message,
            Toast.LENGTH_SHORT
        ).show()
  }
  //highlight-end

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_chat)

    //...

    // Subscribe for 'CHAT' topic
    //highlight-next-line
    val pubSubMessageList = meeting!!.pubSub.subscribe("CHAT", pubSubMessageListener)

    for (message in pubSubMessageList) {
      // Persisted messages
      Toast.makeText(
            this@ChatActivity, message.senderName + " says : " + message.message,
            Toast.LENGTH_SHORT
        ).show()
    }
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ChatActivity extends AppCompatActivity {

  // PubSubMessageListener
  //highlight-start
  private PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        // New message
        Toast.makeText(
          ChatActivity.this, message.senderName + " says : "+ message.getMessag(), 
          Toast.LENGTH_SHORT
        ).show();
    }
  };
  //highlight-end

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_chat);

    //..

    // Subscribe for 'CHAT' topic
    //highlight-next-line
    List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("CHAT", pubSubMessageListener);

    for(PubSubMessage message : pubSubMessageList){
        // Persisted messages
        Toast.makeText(
          ChatActivity.this, message.senderName + " says : "+ message.getMessag(), 
          Toast.LENGTH_SHORT
        ).show();
    }
  }
}
```

</TabItem>

</Tabs>

4. Final step in the group chat would be `unsubscribe` to that topic, which you had previously subscribed but no longer needed. Here we are `unsubscribe` to `CHAT` topic on activity destroy.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ChatActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_chat)

    //...
  }

  override fun onDestroy() {
    // Unsubscribe for 'CHAT' topic
    //highlight-next-line
    meeting!!.pubSub.unsubscribe("CHAT", pubSubMessageListener)
    super.onDestroy()
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ChatActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_chat);

    //..
  }

  @Override
  protected void onDestroy() {
    // Unsubscribe for 'CHAT' topic
    //highlight-next-line
    meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
    super.onDestroy();
  }
}
```

</TabItem>

</Tabs>


### `Private Chat`

In the above example, if you want to convert into the private chat between two participants, then all you have to do is change the topic which will be unique to those two participants only.

So if we look at creating a private chat between two participants only, we can have the topic something like `<participantId_of_A>_<participantId_of_B>` or `<participantId_of_B>_<participantId_of_A>`.

So you can use either of this topics and the private chat is ready.

### Downloading Chat Messages

All the messages from the PubSub which where published with `persist : true` and can be downloaded as an `.csv` file. This file will be available in the VideoSDK dashboard as well as throught the [Sessions API](/api-reference/realtime-communication/fetch-session-using-sessionid).

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub()](/android/api/sdk-reference/pubsub-class/introduction)
