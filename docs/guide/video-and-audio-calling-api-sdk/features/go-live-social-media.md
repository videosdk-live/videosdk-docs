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
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Start Live Stream
  meeting?.startLivestream([
    {
      url: "rtmp://a.rtmp.youtube.com/live2",
      streamKey: "key",
    },
  ]);

  // Stop Live Stream
  meeting?.stopLivestream();
};
```

</TabItem>
<TabItem value="android">

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
<TabItem value="ios">

```js
/// keep track of livestream
private var livestreamStarted = false

@IBAction func livestreamButtonTapped(_ sender: Any) {
    if !livestreamStarted {
        // prepare output
        // specify social-media-url and stream-key
        let output = LivestreamOutput(url: "<rtmp://a.rtmp.youtube.com/live2>", streamKey: "<stream-key>")

        // start livestream
        self.meeting?.startLivestream(outputs: [output])
    }
    else {
        // stop livestream
        self.meeting?.stopLivestream()
    }
}
```

</TabItem>
<TabItem value="flutter">

```js
// Start Live Stream
meeting.startLivestream([
  {
    url: "rtmp://a.rtmp.youtube.com/live2",
    streamKey: "streamKey1",
  },
]);

// Stop Live Stream
meeting?.stopLivestream();
```

</TabItem>
</Tabs>

### Events

1. **livestream-started** - Whenever broadcasting of meeting started, `livestream-started` event will trigger.

2. **livestream-stopped** - Whenever broadcasting of meeting stopped, `livestream-stopped` event will trigger.

<Tabs
defaultValue="js"
groupId={"client-group-id"}
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'IOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
meeting.on("livestream-started", () => {
  console.log("LiveStream Started");
});

meeting.on("livestream-stopped", () => {
  console.log("LiveStream Stopped");
});
```

</TabItem>
<TabItem value="react">

```js
import { useMeeting } from "@videosdk.live/react-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onLiveStreamstarted: () => {
    console.log("LiveStream Started");
  },
  onLiveStreamStopped: () => {
    console.log("LiveStream Stopped");
  },
});
```

</TabItem>
<TabItem value="reactnative">

```js
import { useMeeting } from "@videosdk.live/react-native-sdk";

/** useMeeting hooks events */
const {
  /** Methods */
} = useMeeting({
  onLiveStreamstarted: () => {
    console.log("LiveStream Started");
  },
  onLiveStreamStopped: () => {
    console.log("LiveStream Stopped");
  },
});
```

</TabItem>
<TabItem value="android">

```js
new MeetingEventListener() {
  @Override
  public void onLivestreamStarted() {
      livestreaming = true;

      // TODO: show indication that meeting livestream is started.
  }

  @Override
  public void onLivestreamStopped() {
      livestreaming = false;

      // TODO: show indication that meeting livestream is stopped.
  }
}
```

</TabItem>
<TabItem value="ios">

```js
/// Called after livestream starts
func onLivestreamStarted() {
    liveStreamStarted = true

    // show indication that livestream is started
}

/// Called after livestream stops
func onLivestreamStopped() {
    liveStreamStarted = false

    // hide livestream indication
}
```

</TabItem>
<TabItem value="flutter">

```js
meeting.on(Events.livestreamStarted, () {
  print("meeting livestream started");
});
//
meeting.on(Events.livestreamStopped, () {
  print("meeting livestream stopped");
});

```

</TabItem>
</Tabs>
