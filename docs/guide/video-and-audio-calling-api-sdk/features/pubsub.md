---
sidebar_label: PubSub (BETA)
pagination_label: PubSub (BETA)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PubSub (BETA)

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

</TabItem>

<TabItem value="react">

```js
function publish(message: String, { persist : Boolean });
```

</TabItem>
<TabItem value="reactnative">

```js
function publish(message: String, { persist : Boolean });
```

</TabItem>

<TabItem value="android">

```js
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
func publish(topic: String, message: String, options: [String : Any] = [:])
```

</TabItem>

<TabItem value="flutter">

```js
  Future<void> publish(
    String topic,
    String message,
    [PubSubOptions options]
  )
```

</TabItem>
</Tabs>

| Parameter Name | Type   | Description                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| topic          | String | This should be the topic for which you are publishing a message.                                                          |
| message        | String | This is the actual message, which will be published to participants, who had subscribed to a particular topic.            |
| options        | Object | This is the object which provides an option, such as `persist`, which persists message history for upcoming participants. |

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
function publishMessage() {
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
func publishMessage() {
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
      await meeting.pubsub.publish(
        "CHAT", // Topic
        "Hello Everyone!", // Message Content
        const PubSubOptions(
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

This method is used to subscribe message topic. This method returns a list of messages which were sent earlier.

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
// Coming Soon
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
func subscribe(topic: String, forListener listener: PubSubMessageListener)
```

</TabItem>
<TabItem value="flutter">

```js
  Future<PubSubMessages> subscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

</TabItem>
</Tabs>

| Parameter Name | Type   | Description                                                                 |
| -------------- | ------ | --------------------------------------------------------------------------- |
| topic          | String | This should be the topic to be subscribed.                                  |
| messageHandler | String | This is a handler function, which will be called when new message received. |

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
// Coming Soon
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
class ChatMessageListener: PubSubMessageListener {
    func onMessageReceived(_ message: PubSubMessage) {
        print("Message Received:= " + message.message)
        // show chat message to user
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
      var messages = await meeting.pubsub.subscribe(topic: "CHAT", callback: messageCallback);

      // Printing message list
      print("Messages: ${messages.messages.map((msg) => msg.message).join(" ")}");
    },
    child: Text("Subscribe"),
  ),
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
// Coming Soon
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
func unsubscribe(topic: String, forListener listener: PubSubMessageListener)
```

</TabItem>

<TabItem value="flutter">

```js
  Future<void> unsubscribe(
    String topic,
    Function(PubSubMessage) messageHandler,
  )
```

</TabItem>
</Tabs>

| Parameter Name | Type   | Description                                                    |
| -------------- | ------ | -------------------------------------------------------------- |
| topic          | String | This should be the topic to be unsubscribed.                   |
| messageHandler | String | This is a handler function, which was passed in `subscribe()`. |

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
// Coming Soon
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
func unsubscribe() {
  // unsubscribe to the same listener used in subscribe()
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
      await meeting.pubsub.unSubscribe(topic: "CHAT", messageCallback);

    },
    child: Text("UnSubscribe"),
  ),

  // Message Callback
  void messageCallback(msg){
    // Do something
    print("New message received: $msg");
  }
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
// Coming Soon
```

</TabItem>

<TabItem value="ios">

```js
import UIKit
import VideoSDKRTC

class ChatViewController: UIViewController {

    // Meeting
    public var meeting: Meeting

    /// Chat Topic
    public var topic: String = "CHAT"

    /// Message List
    private var messages: [Message] = []

    // MARK: - Init
    init(meeting: Meeting) {
        self.meeting = meeting

        meeting.pubsub.subscribe(topic: topic, forListener: self)

        let pubsubMessages = meeting.pubsub.getMessagesForTopic(topic)
        messages = pubsubMessages.map({ Message(pubsubMessage: $0) })

        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    // MARK: - Lifecycle

    override func viewDidLoad() {
        super.viewDidLoad()

        setupNavigationBar()
        configureMessageCollectionView()
        configureMessageInputBar()
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)

        reloadAndScrollToLast()
    }

    // MARK: - Public

    func showNewMessage(_ pubsubMessage: PubSubMessage) {
        let message = Message(pubsubMessage: pubsubMessage)
        messages.append(message)

        // Reload last section to update header/footer labels and insert a new one
        messagesCollectionView.performBatchUpdates({
            messagesCollectionView.insertSections([messages.count - 1])
            if messages.count >= 2 {
                messagesCollectionView.reloadSections([messages.count - 2])
            }
        }, completion: { [weak self] _ in
            if self?.isLastSectionVisible() == true {
                self?.messagesCollectionView.scrollToLastItem(animated: true)
            }
        })
    }
}

// MARK: - Helpers
extension ChatViewController {

    // relod and scroll to last message
    func reloadAndScrollToLast() {
        messagesCollectionView.reloadData()
        messagesCollectionView.scrollToLastItem()
    }

    // checks if last section is visible
    func isLastSectionVisible() -> Bool {
        guard !messages.isEmpty else { return false }

        let lastIndexPath = IndexPath(item: 0, section: messages.count - 1)
        return messagesCollectionView.indexPathsForVisibleItems.contains(lastIndexPath)
    }
}

// MARK: - MessagesDataSource
extension ChatViewController: MessagesDataSource {

    func currentSender() -> SenderType {
        ChatUser(senderId: meeting.localParticipant.id, displayName: meeting.localParticipant.displayName)
    }

    func numberOfSections(in messagesCollectionView: MessagesCollectionView) -> Int {
        messages.count
    }

    func messageForItem(at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> MessageType {
        messages[indexPath.section]
    }
}

// MARK: - MessagesDisplayDelegate, MessagesLayoutDelegate
extension ChatViewController: MessagesDisplayDelegate, MessagesLayoutDelegate {

    func messageTopLabelAttributedText(for message: MessageType, at indexPath: IndexPath) -> NSAttributedString? {
        let name = message.sender.senderId == meeting.localParticipant.id ? "You" : message.sender.displayName
        return NSAttributedString(
            string: name,
            attributes: [.foregroundColor: UIColor.lightGray, .font: UIFont.systemFont(ofSize: 15)])
    }

    func messageTopLabelHeight(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> CGFloat {
        return 25
    }

    func messageBottomLabelAttributedText(for message: MessageType, at indexPath: IndexPath) -> NSAttributedString? {
        return NSAttributedString(
            string: timeFormatter.string(from: message.sentDate),
            attributes: [.foregroundColor: UIColor.lightGray, .font: UIFont.systemFont(ofSize: 15)])
    }

    func messageBottomLabelHeight(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> CGFloat {
        return 25
    }

    func textColor(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> UIColor {
        UIColor.white
    }

    func backgroundColor(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> UIColor {
        UIColor.systemDarkBackground.withAlphaComponent(0.4)
    }

    func messageStyle(for message: MessageType, at indexPath: IndexPath, in messagesCollectionView: MessagesCollectionView) -> MessageStyle {
        return MessageStyle.bubble
    }
}

// MARK: - MessageInputBarDelegate
extension ChatViewController: InputBarAccessoryViewDelegate {

    func inputBar(_ inputBar: InputBarAccessoryView, didPressSendButtonWith text: String) {
        // send (publish) message
        meeting.pubsub.publish(topic: topic, message: text, options: ["persist": true])

        // reset textView
        messageInputBar.inputTextView.text = String()
        messageInputBar.invalidatePlugins()
    }
}


// MARK: - Setup
extension ChatViewController {

    func setupNavigationBar() {
        edgesForExtendedLayout = []
        self.navigationItem.title = topic
        self.setNavigationBarAppearance(self.navigationController!.navigationBar)
    }

    func configureMessageCollectionView() {
        messagesCollectionView.backgroundColor = UIColor.systemLightBackground

        messagesCollectionView.messagesDataSource = self
        messagesCollectionView.messagesDisplayDelegate = self
        messagesCollectionView.messagesLayoutDelegate = self

        // no avatars
        let layout = messagesCollectionView.messagesCollectionViewFlowLayout
        layout.setMessageIncomingAvatarSize(.zero)
        layout.setMessageOutgoingAvatarSize(.zero)

        let incomingInsets = UIEdgeInsets(top: 0, left: 12, bottom: 0, right: 0)
        let outgoingInsets = UIEdgeInsets(top: 0, left: 0, bottom: 0, right: 12)

        layout.setMessageIncomingMessageBottomLabelAlignment(LabelAlignment(textAlignment: .left, textInsets: incomingInsets))
        layout.setMessageIncomingMessageTopLabelAlignment(LabelAlignment(textAlignment: .left, textInsets: incomingInsets))
        layout.setMessageOutgoingMessageBottomLabelAlignment(LabelAlignment(textAlignment: .right, textInsets: outgoingInsets))
        layout.setMessageOutgoingMessageTopLabelAlignment(LabelAlignment(textAlignment: .right, textInsets: outgoingInsets))

        scrollsToLastItemOnKeyboardBeginsEditing = true
        maintainPositionOnKeyboardFrameChanged = true
    }

    func configureMessageInputBar() {
        messageInputBar.delegate = self
        messageInputBar.backgroundView.backgroundColor = UIColor.systemDarkBackground
        messageInputBar.inputTextView.backgroundColor = UIColor.systemDarkBackground

        // textview
        messageInputBar.inputTextView.tintColor = UIColor.gray
        messageInputBar.inputTextView.textColor = UIColor.white
        messageInputBar.inputTextView.isImagePasteEnabled = false

        // send button
        messageInputBar.sendButton.setTitleColor(UIColor.white, for: .normal)
        messageInputBar.sendButton.setTitleColor(UIColor.gray.withAlphaComponent(0.4), for: .highlighted)
        messageInputBar.sendButton.activityViewColor = UIColor.lightGray
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
            const PubSubOptions(persist: true),
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
