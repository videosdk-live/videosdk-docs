---
title: Raise Hand with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Raise Hand using PubSub
pagination_label: Raise Hand using PubSub
keywords:
  - Raise Hand
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: raise-hand-using-pubsub
---

# Raise Hand using PubSub

Let us see, how we can use PubSub to implement Raise Hand functionality. If you are not familiar with the PubSub mechanism and `pubSub` class, you can [follow this guide](./pubsub).

## Implementing Raise Hand

1. First step in raise hand is choosing the topic which all the participants will publish and subscribe to know some participant raise their hand. We will be using `RAISE_HAND` as the topic for this one.
2. On the raiseHand button, publish any message to that specific topic.

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

    //...

    findViewById(R.id.btnRaiseHand).setOnClickListener(view -> sendRaiseHandMessage());
  }

  private fun sendRaiseHandMessage() {
    val publishOptions = PubSubPublishOptions()
    publishOptions.setPersist(false)

    // Sending the Message using the publish method
    //highlight-next-line
    meeting!!.pubSub.publish("RAISE_HAND", "Raise Hand", publishOptions)
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class MainActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_chat);

    //...

    findViewById(R.id.btnRaiseHand).setOnClickListener(view -> sendRaiseHandMessage());
  }

  private void sendRaiseHandMessage()
  {
    PubSubPublishOptions publishOptions = new PubSubPublishOptions();
    publishOptions.setPersist(false);

    // Sending the Message using the publish method
    //highlight-next-line
    meeting.pubSub.publish("RAISE_HAND", "Raise Hand", publishOptions);
  }
}
```

</TabItem>

</Tabs>

3. Now let us show an alert to all the participants showing who raised the hand.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class MainActivity : AppCompatActivity() {

  // PubSubMessageListener
  //highlight-start
  var pubSubMessageListener =
    PubSubMessageListener { message ->
      // Partcipant raise hand
      Toast.makeText(
            this@MainActivity, message.senderName + " raise hand",
            Toast.LENGTH_SHORT
        ).show()
  }
  //highlight-end

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_chat)

    //...

    // Subscribe for 'RAISE_HAND' topic
    //highlight-next-line
    val pubSubMessageList = meeting!!.pubSub.subscribe("RAISE_HAND", pubSubMessageListener)
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class MainActivity extends AppCompatActivity {

  // PubSubMessageListener
  //highlight-start
  private PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage message) {
        // Partcipant raise hand
        Toast.makeText(
          MainActivity.this, message.senderName + " raise hand",
          Toast.LENGTH_SHORT
        ).show();
    }
  };
  //highlight-end

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    //..

    // Subscribe for 'RAISE_HAND' topic
    //highlight-next-line
    List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("RAISE_HAND", pubSubMessageListener);
  }
}
```

</TabItem>

</Tabs>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub()](/android/api/sdk-reference/pubsub-class/introduction)
