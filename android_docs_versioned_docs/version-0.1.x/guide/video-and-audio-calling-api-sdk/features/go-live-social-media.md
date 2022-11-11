---
title: RTMP Live Social Media Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: RTMP Live Social Media features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Go Live On Social Media
pagination_label: Go Live On Social Media
keywords:
  - Facebook Live
  - Youtube Live
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: go-live-social-media
---

# Go Live On Social Media

This feature allows participant to broadcast meeting on various social media platforms such as Facebook or Youtube.
This guide will provide an overview of how participant can start and stop broadcasting meeting.

1. **Start LiveStream** - By using `startLivestream()` function, a participant can start broadcasting meeting on various platforms by provding url and stream keys as an argument.
2. **Stop LiveStream** - By using `stopLivestream()` function, a participant can stop broadcasting on all platforms.

### Start And Stop Live Stream

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val YOUTUBE_RTMP_URL: String? = null
private val YOUTUBE_RTMP_STREAM_KEY: String? = null

//
findViewById<View>(R.id.btnLivestream).setOnClickListener {
    if (!livestreaming) {
        if (YOUTUBE_RTMP_URL == null || YOUTUBE_RTMP_STREAM_KEY == null) {
            throw Error("RTMP url or stream key missing.")
        }
        val outputs: MutableList<LivestreamOutput> = ArrayList()
        outputs.add(LivestreamOutput(YOUTUBE_RTMP_URL, YOUTUBE_RTMP_STREAM_KEY))

        meeting!!.startLivestream(outputs)
    } else {
        meeting!!.stopLivestream()
    }
}
```

</TabItem>

<TabItem value="Java">

```js
private static final String YOUTUBE_RTMP_URL = null;
private static final String YOUTUBE_RTMP_STREAM_KEY = null;

//
findViewById(R.id.btnLivestream).setOnClickListener(view -> {
    if (!livestreaming) {
        if (YOUTUBE_RTMP_URL == null || YOUTUBE_RTMP_STREAM_KEY == null) {
            throw new Error("RTMP url or stream key missing.");
        }

        List<LivestreamOutput> outputs = new ArrayList<>();
        outputs.add(new LivestreamOutput(YOUTUBE_RTMP_URL, YOUTUBE_RTMP_STREAM_KEY));

        meeting.startLivestream(outputs);
    } else {
        meeting.stopLivestream();
    }
});
```

</TabItem>

</Tabs>

### Events

- **onLiveStreamStateChanged** - A `onLiveStreamStateChanged` event will be triggered any time the broadcasting state of a meeting changes.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
object : MeetingEventListener() {
  override fun onLivestreamStateChanged(livestreamState: String?) {
    when (livestreamState) {
        "LIVESTREAM_STARTING" -> Log.d( "LivestreamStateChanged",
            "Meeting livestream is starting"
        )
        "LIVESTREAM_STARTED" -> Log.d( "LivestreamStateChanged",
            "Meeting livestream is started"
        )
        "LIVESTREAM_STOPPING" -> Log.d("LivestreamStateChanged",
            "Meeting livestream is stopping"
        )
        "LIVESTREAM_STOPPED" -> Log.d("LivestreamStateChanged",
            "Meeting livestream is stopped"
        )
    }
  }

}
```

</TabItem>

<TabItem value="Java">

```js
new MeetingEventListener() {
  @Override
  public void onLivestreamStateChanged(String livestreamState) {
      switch (livestreamState) {
          case "LIVESTREAM_STARTING":
              Log.d("LivestreamStateChanged", "Meeting livestream is starting");
              break;
          case "LIVESTREAM_STARTED":
              Log.d("LivestreamStateChanged", "Meeting livestream is started");
              break;
          case "LIVESTREAM_STOPPING":
              Log.d("LivestreamStateChanged", "Meeting livestream is stopping");
              break;
          case "LIVESTREAM_STOPPED":
              Log.d("LivestreamStateChanged", "Meeting livestream is stopped");
              break;
      }
  }
}
```

</TabItem>

</Tabs>
