---
title: Notify Attendees with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Notify Attendees in Realtime
pagination_label: Notify Attendees in Realtime
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: notify-attendees
---

# Notify Attendees in Realtime

When doing livestream, you may want to broadcast message to all the viewers at once.

Let us see, how we can use PubSub to implement this functionality. If you are not familiar with the PubSub mechanism, you can [follow this guide](/android/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

### Notifying Attendees

1. We will be publish the message that the sender typed in the `EditText` field to the topic `NOTIFY_ATTENDEES`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js

class SpeakerActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    //...
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
        meeting!!.pubSub.publish("NOTIFY_ATTENDEES", message, publishOptions)

        // Clearing the message input
        etmessage.setText("")
    } else {
        Toast.makeText(
            this@SpeakerActivity, "Please Enter Message",
            Toast.LENGTH_SHORT
        ).show()
    }
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class SpeakerActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //...
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
        meeting.pubSub.publish("NOTIFY_ATTENDEES", message, publishOptions);

        // Clearing the message input
        etmessage.setText("");
    } else {
        Toast.makeText(SpeakerActivity.this, "Please Enter Message",
                Toast.LENGTH_SHORT).show();
    }
  }
}
```

</TabItem>

</Tabs>

2. Now let us show an alert to all the viewers displaying the message posted by the speaker.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ViewerActivity : AppCompatActivity() {

  // PubSubMessageListener
  //highlight-start
  var pubSubMessageListener =
    PubSubMessageListener { message ->
      if(meeting!!.localparticipant.mode == "VIEWER"){
        Toast.makeText(
                this@ViewerActivity, message.message,
                Toast.LENGTH_SHORT
            ).show()
      }
  }
  //highlight-end

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_chat)

    //...

    // Subscribe for 'NOTIFY_ATTENDEES' topic
    //highlight-next-line
    val pubSubMessageList = meeting!!.pubSub.subscribe("NOTIFY_ATTENDEES", pubSubMessageListener)

    for (message in pubSubMessageList) {
      // Persisted messages
      if(meeting!!.localparticipant.mode == "VIEWER"){
        Toast.makeText(
                this@ViewerActivity, message.message,
                Toast.LENGTH_SHORT
            ).show()
      }
    }
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ViewerActivity extends AppCompatActivity {

  // PubSubMessageListener
  //highlight-start
  private PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        if(meeting.getLocalParticipant().getMode() == "VIEWER"){
            Toast.makeText(
                ViewerActivity.this, message.getMessage(),
                Toast.LENGTH_SHORT
                ).show();
        }
    }
  };
  //highlight-end

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    //..

    // Subscribe for 'NOTIFY_ATTENDEES' topic
    //highlight-next-line
    List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("NOTIFY_ATTENDEES", pubSubMessageListener);

    for(PubSubMessage message : pubSubMessageList){
        // Persisted messages
        if(meeting.getLocalParticipant().getMode() == "VIEWER"){
            Toast.makeText(
            ViewerActivity.this, message.getMessage(),
            Toast.LENGTH_SHORT
            ).show();
        }
    }
  }
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub()](/android/api/sdk-reference/pubsub-class/introduction)
