---
title: Start OR Join Meeting
hide_title: false
hide_table_of_contents: false
description: This guide will explain joining process of meeting.
sidebar_label: Start OR Join Meeting
pagination_label: Start OR Join Meeting
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-join-meeting
---

<div style={{display:'flex',flexDirection:'row',alignItems:'stretch',}}>
<div style={{}}>
<p>
After the successful installation of videoSDK, the next step is to integrate videoSDK features with your webApp/MobileApp.</p>

<p>To Communicate with other participant's audio or video call, you will need to join the meeting.</p>

<p>This guide will provide an overview of how to configure, initialize and join a VideoSDK meeting.</p>

</div>
<div>
<img src="/img/New Meeting.gif"/>
</div>

</div>

1. **Configure** - To configure a meeting, you will need generated token from [Server Setup](/docs/guide/audio-and-video-calling/server-setup).

2. **Initialize** - After configuration, you will have to Initialize meeting by providing name, meetingId, micEnabled, webcamEnabled & maxResolution. For meetingId generation you can follow our guide [Server Setup](/docs/guide/audio-and-video-calling/server-setup).

3. **Join** - After configuration & initialization, the third step is to call `join()`function to join a meeting.

**NOTE** : For React & React native developer, you have to be familiar with hooks concept. You can undesratnd hooks concept on [React Hooks](https://reactjs.org/docs/hooks-intro.html).

### Configuration And Initialization

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
import VideoSDK from "@videosdk.live/js";

// Configure authentication token got earlier
VideoSDK.config("<Authentication-token>");

// Initilize meeting
const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-on-meeting>", // required
  name: "<Name-of-participant>", // required
  micEnabled: "<Flag-to-enable-mic>", // optional, default: true
  webcamEnabled: "<Flag-to-enable-webcam>", // optional, default: true
  maxResolution: "<Maximum-resolution>", // optional, default: "hd"
});
```

</TabItem>
<TabItem value="react">

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

const App = () => {
  // Init Meeting Provider
  return (
    <MeetingProvider
      config={{
        meetingId: "<Id-on-meeting>",
        name: "<Name-of-participant>",
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        maxResolution: "<Maximum-resolution>",
      }}
      token={"<Authentication-token>"}
    >
      <MeetingView>...</MeetingView>
    </MeetingProvider>
  );
};

const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const meeting = useMeeting();

  return <>...</>;
};
```

</TabItem>
<TabItem value="reactnative">

```js
import { MeetingProvider, useMeeting } from "@videosdk.live/react-sdk";

const App = () => {
  // Init Meeting Provider
  return (
    <MeetingProvider
      config={{
        meetingId: "<Id-on-meeting>",
        name: "<Name-of-participant>",
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        maxResolution: "<Maximum-resolution>",
      }}
      token={"<Authentication-token>"}
    >
      <MeetingView>...</MeetingView>
    </MeetingProvider>
  );
};

const MeetingView = () => {
  // Get Meeting object using useMeeting hook
  const meeting = useMeeting();

  return <>...</>;
};
```

</TabItem>
<TabItem value="android">

```js
import live.videosdk.rtc.android.VideoSDK;
import live.videosdk.rtc.android.Meeting;

public class MainActivity extends AppCompatActivity {
    private Meeting meeting;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        // Configure parameters
        final String token = getIntent().getStringExtra("token");
        final String meetingId = getIntent().getStringExtra("meetingId");
        final String participantName = "John Doe";
        final boolean micEnabled = true;
        final boolean webcamEnabled = true;

        // Configure authentication token got earlier
        VideoSDK.config(token);

        // create a new meeting instance
        meeting = VideoSDK.initMeeting(
                    MainActivity.this, // Reference to this activity
                    meetingId,
                    participantName,
                    micEnabled,
                    webcamEnabled
                );

    }
}

```

</TabItem>
<TabItem value="ios">

```js
import VideoSDK

// Configure parameters
struct MeetingData {
    let token: String
    let name: String
    let meetingId: String
    let micEnabled: Bool
    let cameraEnabled: Bool
}

class MeetingViewController: UICollectionViewController {
    var meetingData: MeetingData!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Configure authentication token got earlier
        VideoSDK.config(token: meetingData.token)
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        // create a new meeting instance
        meeting = VideoSDK.initMeeting(
            meetingId: meetingData.meetingId,
            participantName: meetingData.name,
            micEnabled: meetingData.micEnabled,
            webcamEnabled: meetingData.cameraEnabled
        )
    }

    override func viewDidDisappear(_ animated: Bool) {
        super.viewDidAppear(animated)

        meeting = nil
    }

}
```

</TabItem>
<TabItem value="flutter">

```js
import 'package:videosdk/rtc.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MeetingBuilder(
        meetingId: "<Id-on-meeting>",
        displayName: "<Name-of-participant>",
        micEnabled: "<Flag-to-enable-mic>",
        webcamEnabled: "<Flag-to-enable-webcam>",
        token: "<Authentication-token>",
        builder: (Meeting _meeting) {
            print('builder _meeting => $_meeting');
        }
    );
  }
}
```

</TabItem>
</Tabs>

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

### Methods

<MethodListGroup>
  <MethodListItemLabel name="config()" description="Method to configure authentication token in SDK. It established connection between client and server"   >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="token" type={"String"} option="required" description="Authentication token generated earlier" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

<MethodListGroup>
  <MethodListItemLabel name="initMeeting()"  description="Factory method to initialize Meeting object" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="meetingId"  type={"String"} option="required" description="meetingId generated using API" />
      <MethodListItemLabel name="name"  type={"String"}  option="required" description="name of the participant" />
      <MethodListItemLabel name="micEnabled"  type={"Boolean"}  option="optional" defaultValue="true"  description="Flag to enable and disable mic" />
      <MethodListItemLabel name="webcamEnabled"  type={"Boolean"} option="optional" defaultValue="true"  description="Flag to enable and disable camera" />
      <MethodListItemLabel name="maxResolution"  type={"String"} option="optional" defaultValue="hd"  description="Maximum resoultion a particular participant should have" />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>

### Join

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'ReactNative', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

```js
const onPress = () => {
  // Joining Meeting
  meeting?.join();
};
```

</TabItem>
<TabItem value="react">

```js
const onPress = () => {
  // Joining Meeting
  meeting?.join();
};
```

</TabItem>
<TabItem value="reactnative">

```js
const onPress = () => {
  // Joining Meeting
  meeting?.join();
};
```

</TabItem>
<TabItem value="android">

```js
COMING SOON!
```

</TabItem>
<TabItem value="ios">

```js
COMING SOON!
```

</TabItem>
<TabItem value="flutter">

```js
COMING SOON!
```

</TabItem>
</Tabs>
