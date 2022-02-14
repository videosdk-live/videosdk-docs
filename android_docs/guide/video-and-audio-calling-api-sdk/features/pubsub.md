---
sidebar_label: PubSub (BETA)
pagination_label: PubSub (BETA)
---

# PubSub (BETA)

PubSub feature allows the participant to send and receive messages of the topics which he has subscribed.

## Methods

### publish()

This method is use for publishing message of specific topic.

#### Syntax

```js
public void publish(String topic, String message, PubSubPublishOptions options)
```

| Parameter Name | Type                 | Description                                                                                                                                       |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic          | String               | This should be the topic for which you are publishing a message.                                                                                  |
| message        | String               | This is the actual message, which will be published to participants, who had subscribed to a particular topic.                                    |
| options        | PubSubPublishOptions | This is an object of PubSubPublishOptions, which provides an option, such as `persist`, which persists message history for upcoming participants. |


#### Example

```js
protected void sendMessage() {
  PubSubPublishOptions options = new PubSubPublishOptions();
  options.setPersist(true);
  meeting.pubSub.publish("CHAT", "Hello from Android", options);
}
```


### subscribe()

This method is used to subscribe for particular topic. This method returns a list of messages which were sent earlier.

#### Syntax


```js
public List<PubSubMessage> subscribe(String topic, PubSubMessageListener listener)
```

| Parameter Name | Type                  | Description                                                                                                                                      |
| -------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be subscribed.                                                                                                       |
| listener       | PubSubMessageListener | This is an object of PubSubMessageListener, which listens for upcoming messages and calls onMessageReceived function, when new message received. |

#### Example


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

### unsubscribe()

This method is used to unsubscribe the message topic.

#### Syntax


```js
public void unsubscribe(String topic, PubSubMessageListener listener)
```

| Parameter Name | Type                  | Description                                                                    |
| -------------- | --------------------- | ------------------------------------------------------------------------------ |
| topic          | String                | This should be the topic to be unsubscribed.                                   |
| listener       | PubSubMessageListener | This is an object of PubSubMessageListener, which was passed in `subscribe()`. |

#### Example


```js
public void unsubscribe(){
  // Unsubscribe 'CHAT' topic
  meeting.pubSub.unsubscribe("CHAT", pubSubMessageListener);
}
```

## Sample Code


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
