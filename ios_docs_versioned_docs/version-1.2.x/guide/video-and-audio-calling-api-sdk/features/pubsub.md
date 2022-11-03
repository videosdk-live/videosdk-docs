---
sidebar_label: PubSub
pagination_label: PubSub
---

# PubSub

PubSub feature allows the participant to send and receive messages of the topics which he has subscribed.

## Methods

### publish()

This method is use for publishing message of specific topic.

#### Syntax

```js
func publish(topic: String, message: String, options: [String : Any] = [:])
```

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| topic          | String | This should be the topic for which you are publishing a message.                                                          |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is the object which provides an option, such as `persist`, which persists message history for upcoming participants. |

#### Example

```js
func sendMessage() {
  meeting.pubsub.publish(topic: "CHAT", message: "Hello Everyone!", options: ["persist": true])
}
```

<br />

### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax

```js
func subscribe(topic: String, forListener listener: PubSubMessageListener)
```

| Parameter Name | Type                  | Description                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be subscribed.                                                                                                       |
| forListener    | PubSubMessageListener | This is an object of PubSubMessageListener, which listens for upcoming messages and calls onMessageReceived function, when new message received. |

#### Example

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

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax

```js
func unsubscribe(topic: String, forListener listener: PubSubMessageListener)
```

| Parameter Name | Type                  | Description                                                                    |
| -------------- | --------------------- | ------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be unsubscribed.                                   |
| forListener    | PubSubMessageListener | This is an object of PubSubMessageListener, which was passed in `subscribe()`. |

#### Example

```js
func unsubscribe() {
  // Unsubscribe 'CHAT' topic
  meeting?.pubsub.unsubscribe(topic: "CHAT", forListener: listener)
}
```

## Sample Code

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
