---
title: Setup HLS Player | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Setup HLS Player
pagination_label: Setup HLS Player
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: setup-hls-player
---

# Setup HLS Player

In this guide, we will add player which will be responsible for playing the HLS stream.
Before starting this guide, make sure you have a VideoSDK meetings setup allowing you to join the room. To learn more about setting up a VideoSDK meeting, follow this [quick start guide](/android/guide/video-and-audio-calling-api-sdk/quick-start).

To play the HLS stream we will be using the [Exoplayer](https://github.com/google/ExoPlayer) library.

### `1. Setup player into your project`

**`Step 1:`** Let's first add ExoPlayer module dependency into the project.

```js title="app/build.gradle"
dependencies {
  implementation 'com.google.android.exoplayer:exoplayer:2.18.5'
  // other app dependencies
  }
```

**`Step 2:`** Now let's add the `StyledPlayerView` which will display livestreaming. And also add the `TextView` which will be shown when there is no active HLS. For these, we will use the `onHlsStateChanged` event from the `MeetingEventListener` abstract class to identify if there is an active HLS.

```xml title="activity_viewer.xml"
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/waitingLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:text="Waiting for host \n to start the live streaming"
        android:textFontWeight="700"
        android:textSize="20sp"
        android:gravity="center"/>

    <com.google.android.exoplayer2.ui.StyledPlayerView
        android:id="@+id/player_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:visibility="gone"
        app:resize_mode="fixed_width"
        app:show_buffering="when_playing"
        app:show_subtitle_button="false"
        app:use_artwork="false"
        app:show_next_button="false"
        app:show_previous_button="false"
        app:use_controller="true"/>

</LinearLayout>
```

### `2. Initialize player and Playing HLS stream`

**`Step 1:`** Now that player is setup, let's initialize player and play the HLS once it becomes playable. For these, we will get the `downstreamUrl` when the `onHlsStateChanged` event of `MeetingEventListener` state changes to `HLS_PLAYABLE`.

**`Step 2:`** We also need to release player and show `TextView` which shows there is no active HLS. We will release player when the `onHlsStateChanged` event of `MeetingEventListener` state changes to `HLS_STOPPED`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="ViewerActivity.kt"
class ViewerActivity : AppCompatActivity() {
    private val meeting: Meeting? = null
    private var playerView: StyledPlayerView? = null
    private var waitingLayout: TextView? = null
    private var player: ExoPlayer? = null
    private var dataSourceFactory: DefaultHttpDataSource.Factory? = null
    private val startAutoPlay = true
    private var downStreamUrl: String? = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_meeting)
        playerView = findViewById(R.id.player_view)
        waitingLayout = findViewById(R.id.waitingLayout)

        // setup meeting
        //...

        //highlight-next-line
        // add listener to the meeting 
        meeting!!.addEventListener(meetingEventListener)
    }

    private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
        override fun onMeetingJoined() {
            Log.d("VideoSDK", "onMeetingJoined: ")
        }

        override fun onMeetingLeft() {
            Log.d("VideoSDK", "onMeetingLeft: ")
        }

        //highlight-start
        @RequiresApi(api = Build.VERSION_CODES.P)
        override fun onHlsStateChanged(HlsState: JSONObject) {
            if (HlsState.has("status")) {
                try {
                    if (HlsState.getString("status") == "HLS_PLAYABLE" && HlsState.has("downstreamUrl")) {
                        downStreamUrl = HlsState.getString("downstreamUrl")
                        waitingLayout!!.visibility = View.GONE
                        playerView!!.visibility = View.VISIBLE
                        // initialize player
                        initializePlayer()
                    }
                    if (HlsState.getString("status") == "HLS_STOPPED") {
                        // release the player
                        releasePlayer()
                        downStreamUrl = null
                        waitingLayout!!.text = "Host has stopped \n the live streaming"
                        waitingLayout!!.visibility = View.VISIBLE
                        playerView!!.visibility = View.GONE
                    }
                } catch (e: JSONException) {
                    e.printStackTrace()
                }
            }
            //highlight-end
        }
    }

    private fun initializePlayer() {
        if (player == null) {
            dataSourceFactory = DefaultHttpDataSource.Factory()
            val mediaSource = HlsMediaSource.Factory(dataSourceFactory!!).createMediaSource(
                MediaItem.fromUri(Uri.parse(downStreamUrl))
            )
            val playerBuilder = ExoPlayer.Builder( /* context= */this@ViewerActivity)
            player = playerBuilder.build()
            // auto play when player is ready
            player!!.playWhenReady = startAutoPlay
            player!!.setMediaSource(mediaSource)
            // if you want display setting for player then remove this line
            playerView!!.findViewById<View>(com.google.android.exoplayer2.ui.R.id.exo_settings).visibility =
                View.GONE
            playerView!!.player = player
        }
        player!!.prepare()
    }

    private fun releasePlayer() {
        if (player != null) {
            player!!.release()
            player = null
            dataSourceFactory = null
            playerView!!.player = null
        }
    }
}
```

</TabItem>

<TabItem value="Java">

```java title="ViewerFragment.java"
public class ViewerActivity extends AppCompatActivity {
    private Meeting meeting;
    protected StyledPlayerView playerView;
    private TextView waitingLayout;
    protected @Nullable
    ExoPlayer player;

    private DefaultHttpDataSource.Factory dataSourceFactory;
    private boolean startAutoPlay = true;
    private String downStreamUrl = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meeting);
        playerView = findViewById(R.id.player_view);
        waitingLayout = findViewById(R.id.waitingLayout);

        // setup meeting
        //...

        //highlight-next-line
        // add listener to the meeting 
        meeting.addEventListener(meetingEventListener);
    }

    private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
        @Override
        public void onMeetingJoined() {
            Log.d("VideoSDK", "onMeetingJoined: ");
        }

        @Override
        public void onMeetingLeft() {
            Log.d("VideoSDK", "onMeetingLeft: ");
        }

        //highlight-start
        @RequiresApi(api = Build.VERSION_CODES.P)
        @Override
        public void onHlsStateChanged(JSONObject HlsState) {
            if (HlsState.has("status")) {
                try {
                    if (HlsState.getString("status").equals("HLS_PLAYABLE") && HlsState.has("downstreamUrl")) {
                        downStreamUrl = HlsState.getString("downstreamUrl");
                        waitingLayout.setVisibility(View.GONE);
                        playerView.setVisibility(View.VISIBLE);
                        // initialize player
                        initializePlayer();
                    }
                    if (HlsState.getString("status").equals("HLS_STOPPED")) {
                        // release the player
                        releasePlayer();
                        downStreamUrl = null;
                        waitingLayout.setText("Host has stopped \n the live streaming");
                        waitingLayout.setVisibility(View.VISIBLE);
                        playerView.setVisibility(View.GONE);
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
            //highlight-end
        }
    };

    protected void initializePlayer() {
        if (player == null) {
            dataSourceFactory = new DefaultHttpDataSource.Factory();
            HlsMediaSource mediaSource = new HlsMediaSource.Factory(dataSourceFactory).createMediaSource(
                    MediaItem.fromUri(Uri.parse(this.downStreamUrl)));

            ExoPlayer.Builder playerBuilder =
                    new ExoPlayer.Builder(/* context= */ ViewerActivity.this);
            player = playerBuilder.build();
            // auto play when player is ready
            player.setPlayWhenReady(startAutoPlay);
            player.setMediaSource(mediaSource);
            // if you want display setting for player then remove this line
            playerView.findViewById(com.google.android.exoplayer2.ui.R.id.exo_settings).setVisibility(View.GONE);
            playerView.setPlayer(player);
        }
        player.prepare();
    }

    protected void releasePlayer() {
        if (player != null) {
            player.release();
            player = null;
            dataSourceFactory = null;
            playerView.setPlayer(/* player= */ null);
        }
    }
}
```

</TabItem>

</Tabs>

With this, the player is setup to play the HLS.

<div style={{textAlign: 'center'}}>

<img style={{height: '450px',marginRight:'15px'}} src="/img/android/android_ils_quickstart_viewer_screen_waiting.jpg" />

<img style={{height: '450px'}} src="/img/android/android_ils_quickstart_viewer_screen.jpg" />

</div>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [onHlsStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)
