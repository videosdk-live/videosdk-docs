---
title: Reactions with PubSub - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: PubSub features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Reactions
pagination_label: Reactions
keywords:
  - Start Livestream meeting
  - Stop Livestream meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: reactions
---

# Reactions - Android

When doing a livestream, one of the way to increase the interaction in between the viewer and speaker is by showing the viewers reaction to all. You might have seen emojis flying around during the livestream happening on instagram.

Lets create a similar flying emoji by using the VideoSDK PubSub mechanism.

### Step 1: Creating a button to send reaction

When `btnReaction` is clicked we will send the emoji name to all the participants using the VideoSDK PubSub mechanism and also shows emoji to localParticipant.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ILSViewActivity : AppCompatActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    //...
    findViewById(R.id.btnReaction).setOnClickListener { v: View? ->
        showEmoji(resources.getDrawable(R.drawable.love_eyes_emoji))
        meeting!!.pubSub.publish("REACTION", "love_eyes", pubSubPublishOptions)
    }
  }

  private fun showEmoji(drawable: Drawable?) {
    // we will implement this method in step 2
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ILSViewActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //...
    findViewById(R.id.loveEyes).setOnClickListener(v -> {
        showEmoji(getResources().getDrawable(R.drawable.love_eyes_emoji));
        meeting.pubSub.publish("REACTION", "love_eyes", pubSubPublishOptions);
    });
  }

  public void showEmoji(Drawable drawable) {
    // we will implement this method in step 2
  }
}
```

</TabItem>

</Tabs>

### Step 2: Displaying the Reactions to all the users

Here we will listen to the `onMessageReceived` event of `PubSubMessageListener` to know someone send the reactions, and show the flying emoji whenever it triggered.

To Display flyingEmoji, we are using `DirectionGenerator` class to specify direction and `ZeroGravityAnimation` class to give animation to the flyingEmoji.

Copy `DirectionGenerator` and `ZeroGravityAnimation` classes from our [code sample](https://github.com/videosdk-live/videosdk-hls-android-kotlin-example/tree/main/app/src/main/java/live/videosdk/android/hlsdemo/common/reactions).

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ILSViewActivity : AppCompatActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    //...
    var emojiListener =
    PubSubMessageListener { pubSubMessage ->
        when (pubSubMessage.message) {
            //Showing other participants reactions
            "loveEyes" -> showEmoji(resources.getDrawable(R.drawable.love_eyes_emoji))
        }
    }
    //Subscribing to the PubSub topic REACTION to recive other participants reactions.
    //highlight-start
    meeting!!.pubSub.subscribe("REACTION", emojiListener)
  }
}
```

</TabItem>

<TabItem value="Java">

```js
public class ILSViewActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //...
    private PubSubMessageListener pubSubMessageListener = new PubSubMessageListener() {
    @Override
    public void onMessageReceived(PubSubMessage pubSubMessage) {
            switch (pubSubMessage.getMessage()) {
                case "loveEyes":
                    //Showing other participants reactions
                    showEmoji(getResources().getDrawable(R.drawable.love_eyes_emoji));
                    break;
            }

        }
    };
    //Subscribing to the PubSub topic REACTION to recive other participants reactions.
    //highlight-start
    meeting.pubSub.subscribe("REACTION", emojiListener);
  }
}
```

</TabItem>

</Tabs>

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun showEmoji(drawable: Drawable?) {
    // You can change the number of emojis that will be flying on screen
    for (i in 0..4) {
        flyObject(
            drawable,
            3000,
            DirectionGenerator.Direction.BOTTOM,
            DirectionGenerator.Direction.TOP,
            1f
        )
    }
}

private fun flyObject(
    drawable: Drawable?,
    duration: Int,
    from: DirectionGenerator.Direction?,
    to: DirectionGenerator.Direction?,
    scale: Float
) {
    val animation = ZeroGravityAnimation()
    animation.setCount(1)
    animation.setScalingFactor(scale)
    animation.setOriginationDirection((from)!!)
    animation.setDestinationDirection((to)!!)
    animation.setImage(drawable)
    animation.setDuration(duration)
    animation.setAnimationListener(object : Animation.AnimationListener {
        override fun onAnimationStart(animation: Animation) {}
        override fun onAnimationEnd(animation: Animation) {}
        override fun onAnimationRepeat(animation: Animation) {}
    })
    viewerEmojiHolder!!.bringToFront()
    animation.play(mActivity, viewerEmojiHolder)
}
```

</TabItem>

<TabItem value="Java">

```js
public void showEmoji(Drawable drawable) {
    // You can change the number of emojis that will be flying on screen
    for (int i = 0; i < 5; i++) {
        flyObject(drawable, 3000, DirectionGenerator.Direction.BOTTOM, DirectionGenerator.Direction.TOP, 1);
    }
}

public void flyObject(final Drawable drawable, final int duration, final DirectionGenerator.Direction from, final DirectionGenerator.Direction to, final float scale) {
    ZeroGravityAnimation animation = new ZeroGravityAnimation();
    animation.setCount(1);
    animation.setScalingFactor(scale);
    animation.setOriginationDirection(from);
    animation.setDestinationDirection(to);
    animation.setImage(drawable);
    animation.setDuration(duration);
    animation.setAnimationListener(new Animation.AnimationListener() {
        @Override
        public void onAnimationStart(Animation animation) {

        }

        @Override
        public void onAnimationEnd(Animation animation) {
        }

        @Override
        public void onAnimationRepeat(Animation animation) {

        }
    });
    viewerEmojiHolder.bringToFront();
    animation.play(mActivity, viewerEmojiHolder);
}

```

</TabItem>

</Tabs>

:::note
Here `viewerEmojiHolder` is FrameLayout, you can change recording to your requirement.
:::

<center>

<img style={{height: '450px',marginRight:'15px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_emoji_viewer.gif" />

<img style={{height: '450px'}} src="https://cdn.videosdk.live/website-resources/docs-resources/android_emoji_speaker.gif"/>

</center>

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [pubSub()](/android/api/sdk-reference/pubsub-class/introduction)
