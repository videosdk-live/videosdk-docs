---
sidebar_label: PubSub
pagination_label: PubSub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PubSub

PubSub feature allows the participant to send and receive messages of the topics which he has subscribed.

## Methods

### publish()

This method is use for publishing message of specific topic.

#### Syntax

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
function publish(topic: String, message: String, { persist : Boolean });
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| topic          | String | This should be the topic for which you are publishing a message.                                                          |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is an object, which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>

<TabItem value="react">

```js
function publish(message: String, { persist : Boolean });
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is an object, which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>
<TabItem value="reactnative">

```js
function publish(message: String, { persist : Boolean });
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is an object, which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>

<TabItem value="android">

```js
public void publish(String topic, String message, PubSubPublishOptions options)
```

| Parameter Name | Type                 | Description                                                                                                                                       |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic          | String               | This should be the topic for which you are publishing a message.                                                                                  |
| message        | String               | This is the actual message, which will be published to participants, who had subscribed to a particular topic.                                    |
| options        | PubSubPublishOptions | This is an object of PubSubPublishOptions, which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>

<TabItem value="ios">

```js
func publish(topic: String, message: String, options: [String : Any] = [:])
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| topic          | String | This should be the topic for which you are publishing a message.                                                          |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is the object which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>

<TabItem value="flutter">

```js
  Future<void> publish(
    String topic,
    String message,
    [PubSubPublishOptions options]
  )
```

| Parameter Name | Type                 | Description                                                                                                                                       |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic          | String               | This should be the topic for which you are publishing a message.                                                                                  |
| message        | String               | This is the actual message, which will be published to participants, who had subscribed to a particular topic.                                    |
| options        | PubSubPublishOptions | This is an object of PubSubPublishOptions, which provides an option, such as `persist`, which persists message history for upcoming participants. |

</TabItem>
</Tabs>

#### Example

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
function sendMessage() {
  meeting?.pubSub?.publish(topic: "CHAT", message: "Hello Everyone!", { persist: true })
}
```

</TabItem>

<TabItem value="react">

```js
// importing usePubSub hook from react-sdk
import { usePubSub } from "@videosdk.live/react-sdk";

// destructure publish method from usePubSub hook
const { publish } = usePubSub("CHAT");

// publish message
const message = "Hello Everyone!";
publish(message, { persist: true });
```

</TabItem>
<TabItem value="reactnative">

```js
// importing usePubSub hook from react-native-sdk
import { usePubSub } from "@videosdk.live/react-native-sdk";

// destructure publish method from usePubSub hook
const { publish } = usePubSub("CHAT");

// publish message
const message = "Hello Everyone!";
publish(message, { persist: true });
```

</TabItem>
<TabItem value="android">

```js
protected void sendMessage() {
  PubSubPublishOptions options = new PubSubPublishOptions();
  options.setPersist(true);
  meeting.pubSub.publish("CHAT", "Hello from Android", options);
}
```

</TabItem>

<TabItem value="ios">

```js
func sendMessage() {
  meeting.pubsub.publish(topic: "CHAT", message: "Hello Everyone!", options: ["persist": true])
}
```

</TabItem>
<TabItem value="flutter">

```js
  // publish()
  ElevatedButton(
    onPressed: () async {
      // Publish a message
      await meeting.pubSub.publish(
        "CHAT", // Topic
        "Hello from Flutter!", // Message Content
        const PubSubPublishOptions(
          "persist": true // Stores the message in server for future participants
        ),
      );

      print("Message published");
    },
    child: Text("Publish"),
  ),
```

</TabItem>
</Tabs>

<br />

### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
function subscribe(topic: String, onMessageReceived: function);
```

| Parameter Name    | Type     | Description                                                                   |
| ----------------- | -------- | ----------------------------------------------------------------------------- |
| topic             | String   | This should be the topic to be subscribed.                                    |
| onMessageReceived | function | This is a callback function, which will be called, when new message received. |

</TabItem>

<TabItem value="react">

```js
// react-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="reactnative">

```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="android">

```js
public List<PubSubMessage> subscribe(String topic, PubSubMessageListener listener)
```

| Parameter Name | Type                  | Description                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be subscribed.                                                                                                       |
| listener       | PubSubMessageListener | This is an object of PubSubMessageListener, which listens for upcoming messages and calls onMessageReceived function, when new message received. |

</TabItem>

<TabItem value="ios">

```js
func subscribe(topic: String, forListener listener: PubSubMessageListener)
```

| Parameter Name | Type                  | Description                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be subscribed.                                                                                                       |
| forListener    | PubSubMessageListener | This is an object of PubSubMessageListener, which listens for upcoming messages and calls onMessageReceived function, when new message received. |

</TabItem>
<TabItem value="flutter">

```js
  Future<PubSubMessages> subscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

| Parameter Name | Type   | Description                                                                 |
| -------------- | ------ | --------------------------------------------------------------------------- |
| topic          | String | This should be the topic to be subscribed.                                  |
| messageHandler | String | This is a handler function, which will be called when new message received. |

</TabItem>
</Tabs>

#### Example

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
// Callback function
function onMessageReceived(data) {
  console.log(`New message received: ${data.message}`);
}

function subscribe() {
  // Subscribe 'CHAT' topic
  meeting?.pubSub?.subscribe("CHAT", onMessageReceived);
}
```

</TabItem>

<TabItem value="react">

```js
// react-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

| Parameter Name | Type                  | Description                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be subscribed.                                                                                                       |
| forListener    | PubSubMessageListener | This is an object of PubSubMessageListener, which listens for upcoming messages and calls onMessageReceived function, when new message received. |

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="reactnative">

```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="android">

```js
PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
  @Override
  public void onMessageReceived(PubSubMessage message) {
    // Logs new message
    Log.v("New Message Received", "Message : " + message.getMessage());
  }
};

@Override
protected void onCreate(Bundle savedInstanceState) {
  //...

  // Subscribe for 'CHAT' topic
  List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("CHAT",pubSubMessageListener);

  // Logs persisted message list
  for(PubSubMessage message : pubSubMessageList){
    Log.v("Message List: ", "Message : " + message.getMessage());
  }
}
```

</TabItem>

<TabItem value="ios">

```js
class ChatMessageListener: PubSubMessageListener {
    func onMessageReceived(_ message: PubSubMessage) {
        // Print new message
        print("Message Received:= " + message.message)
    }
}
const listener = ChatMessageListener()

func subscribe() {
  // Subscribe 'CHAT' topic
  meeting?.pubsub.subscribe(topic: "CHAT", forListener: listener)
}
```

</TabItem>

<TabItem value="flutter">

```js
  // subscribe()
  ElevatedButton(
    onPressed: () async {
      // Subscribe 'CHAT' topic and get persisted messages
      var messages = await meeting.pubSub.subscribe("CHAT", messageHandler);

      // Printing message list
      print("Messages: ${messages.messages.map((msg) => msg.message).join(" ")}");
    },
    child: Text("Subscribe"),
  ),

  // Message Handler
  void messageHandler(msg){
    // Do something
    print("New message received: $msg");
  }
```

</TabItem>
</Tabs>

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
function unsubscribe(topic:String, onMessageReceived: function);
```

| Parameter Name    | Type     | Description                                                     |
| ----------------- | -------- | --------------------------------------------------------------- |
| topic             | String   | This should be the topic to be unsubscribed.                    |
| onMessageReceived | function | This is a callback function, which was passed in `subscribe()`. |

</TabItem>

<TabItem value="react">

```js
// react-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="reactnative">

```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="android">

```js
public void unsubscribe(String topic, PubSubMessageListener listener)
```

| Parameter Name | Type                  | Description                                                                    |
| -------------- | --------------------- | ------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be unsubscribed.                                   |
| listener       | PubSubMessageListener | This is an object of PubSubMessageListener, which was passed in `subscribe()`. |

</TabItem>

<TabItem value="ios">

```js
func unsubscribe(topic: String, forListener listener: PubSubMessageListener)
```

| Parameter Name | Type                  | Description                                                                    |
| -------------- | --------------------- | ------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be unsubscribed.                                   |
| forListener    | PubSubMessageListener | This is an object of PubSubMessageListener, which was passed in `subscribe()`. |

</TabItem>

<TabItem value="flutter">

```js
  Future<void> unsubscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

| Parameter Name | Type   | Description                                                    |
| -------------- | ------ | -------------------------------------------------------------- |
| topic          | String | This should be the topic to be unsubscribed.                   |
| messageHandler | String | This is a handler function, which was passed in `subscribe()`. |

</TabItem>
</Tabs>

#### Example

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
function subscribe() {
  // Unsubscribe 'CHAT' topic
  meeting?.pubSub?.unsubscribe("CHAT", onMessageReceived);
}
```

</TabItem>

<TabItem value="react">

```js
// react-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="reactnative">

```js
// react-native-sdk uses `usePubsub` hook,
// it automatically subscribes/unsubscribe particular topic by itself..
```

:::note
You can checkout [Sample Code](/docs/guide/video-and-audio-calling-api-sdk/features/pubsub#sample-code) for better understanding.
:::

</TabItem>
<TabItem value="android">

```js
public void unsubscribe(){
  // Unsubscribe 'CHAT' topic
  meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
}
```

</TabItem>

<TabItem value="ios">

```js
func unsubscribe() {
  // Unsubscribe 'CHAT' topic
  meeting?.pubsub.unsubscribe(topic: "CHAT", forListener: listener)
}
```

</TabItem>

<TabItem value="flutter">

```js
  // unsubscribe
  ElevatedButton(
    onPressed: () {
      // Unsubscribe 'CHAT' topic
      await meeting.pubSub.unSubscribe("CHAT", messageHandler);
    },
    child: Text("UnSubscribe"),
  ),
```

</TabItem>
</Tabs>

## Sample Code

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'}
]}>
<TabItem value="js">

```js
// Coming Soon
```

</TabItem>

<TabItem value="react">

```js
import { usePubSub } from "@videosdk.live/react-sdk";

const MyComponent = () => {
  // CHAT Topic
  const { publish, messages } = usePubSub("CHAT");

  // publish message
  const sendMessage = () => {
    const message = "Hello People!";
    publish(message, { persist: true });
  };

  // get latest messages
  console.log("Messages : ", messages);
};
export default MyComponent;
```

</TabItem>
<TabItem value="reactnative">

```js
import { usePubSub } from "@videosdk.live/react-native-sdk";

const MyComponent = () => {
  // CHAT Topic
  const { publish, messages } = usePubSub("CHAT");

  // publish message
  const sendMessage = () => {
    const message = "Hello People!";
    publish(message, { persist: true });
  };

  // get latest messages
  console.log("Messages : ", messages);
};
export default MyComponent;
```

</TabItem>

<TabItem value="android">

```js
package live.videosdk.rtc.android.java;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import java.util.List;
import live.videosdk.rtc.android.Meeting;
import live.videosdk.rtc.android.lib.PubSubMessage;
import live.videosdk.rtc.android.listeners.PubSubMessageListener;
import live.videosdk.rtc.android.model.PubSubPublishOptions;

public class ChatActivity extends AppCompatActivity {

    // Meeting
    Meeting meeting;

    // PubSubMessageListener
    private PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
      @Override
      public void onMessageReceived(PubSubMessage message) {
          // Logs new message
          Log.v("New Message Received : ", "Message : " + message.getMessage());
      }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat);

        /**
         * Here, we have created 'MainApplication' class, which extends android.app.Application class.
         * It has Meeting property and getter and setter methods of Meeting property.
         * In your android manifest, you must declare the class implementing android.app.Application (add the android:name=".MainApplication" attribute to the existing application tag):
         * In MainActivity.java, we have set Meeting property.
         *
         * For Example: (MainActivity.java)
         * Meeting meeting = VideoSDK.initMeeting(context, meetingId, ParticipantName, micEnabled, webcamEnabled);
         * ((MainApplication) this.getApplication()).setMeeting(meeting);
        */

        // Get Meeting
        meeting = ((MainApplication) this.getApplication()).getMeeting();

        // Subscribe for 'CHAT' topic
        List<PubSubMessage> pubSubMessageList = meeting.pubSub.subscribe("CHAT", pubSubMessageListener);
        for(PubSubMessage message : pubSubMessageList){
            // Logs persisted messages
            Log.v("Message List : ", "Message : " + message.getMessage());
        }

        sendMessage();
    }

    protected void sendMessage() {
      PubSubPublishOptions publishOptions = new PubSubPublishOptions();
      publishOptions.setPersist(true);
      meeting.pubSub.publish("CHAT", "Hello from Android", publishOptions);
    }

    @Override
    protected void onDestroy() {
      // Unsubscribe for 'CHAT' topic
      meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
      super.onDestroy();
    }
}
```

</TabItem>

<TabItem value="ios">

```js
import UIKit
import VideoSDKRTC

class ChatViewController: UIViewController {

  // Meeting
  public var meeting: Meeting

  // Chat Topic
  var topic: String = "CHAT"

  var chatMessageListener: ChatMessageListener = ChatMessageListener()

  init(meeting: Meeting) {
    self.meeting = meeting;

    // Subscribe 'CHAT' topic
    meeting.pubsub.subscribe(topic: topic, forListener: chatMessageListener)

    // Get persisted chat messages
    let pubsubMessages = meeting.pubsub.getMessagesForTopic(topic)

    for msg in pubsubMessages! {
      print("Message: " + msg.message)
    }

    super.init(nibName: nil, bundle: nil)
  }

  override func viewDidLoad() {
    super.viewDidLoad()
  }

  required init?(coder: NSCoder) {
    fatalError("Fatal Error")
  }


  // Lifecycle
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    meeting.pubsub.publish(topic: topic, message: "Hii from iOS", options: ["persist": true])
    print("Chat Message Published")
  }

  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
    meeting.pubsub.unsubscribe(topic: topic, forListener: chatMessageListener)
    print("Unsubscribed 'CHAT' topic")
  }
}

class ChatMessageListener: PubSubMessageListener{
 func onMessageReceived(_ message: PubSubMessage){
  print("Message Received: " + message.message)
 }
}

```

</TabItem>

<TabItem value="flutter">

```js
import 'package:flutter/material.dart';
import 'package:videosdk/rtc.dart';

// ChatScreen
class ChatScreen extends StatefulWidget {
  final Meeting meeting;
  const ChatScreen({required this.meeting});

  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  @override
  void initState() {
    super.initState();

    widget.meeting.pubSub.subscribe("CHAT", messageHandler)
      .then((messages) =>
          print("Subscribed to chat: ${messages.messages.map((msg) => msg.message).join(" ")}"));
  }

  @override
  Widget build(BuildContext context) {
    final meeting = widget.meeting;
    return Scaffold(
      appBar: AppBar(title: const Text("PubSub Sample Code")),
      body: Center(
        child: ElevatedButton(
          child: const Text("Send Hello !"),
          // Publish Hello message
          onPressed: () => meeting.pubSub.publish(
            "CHAT",
            "Hello",
            const PubSubPublishOptions(persist: true),
          ),
        ),
      ),
    );
  }

  // Handle incoming messages
  void messageHandler(PubSubMessage message) {
    print("New message: ${message.message}");
  }

  @override
  void dispose() {
    // Unsubscribe
    widget.meeting.pubSub.unsubscribe("CHAT", messageHandler);
    super.dispose();
  }
}

```

</TabItem>
</Tabs>
