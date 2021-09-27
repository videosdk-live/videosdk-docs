---
title: Initialize Video Calling SDK
hide_title: false
hide_table_of_contents: false
description: This guide will explain initilization process of .
sidebar_label: Initialize Meeting via Factory
pagination_label: Initialize Video Calling SDK
keywords:
  - Initialize audio calling
  - Initialize video calling
  - Initialize real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: initilize-meeting-factory
---

A meeting is the main construct in Video SDK. Upon a successful connection, you're provided a meeting object to interact with. The two key properties on a meeting object are **localParticipant** object, representing current user, and **participants**, an array of other users in the meeting. 

To initilize meeting object, you have to use **initMeeting** factory method which returns **Meeting** object.

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
VideoSDK.config("<Authentication-token>")

// Initilize meeting
const meeting = VideoSDK.initMeeting({
  meetingId: "<Id-on-meeting>", // required
  name: "<Name-of-participant>", // required
  micEnabled: "<Flag-to-enable-mic>", // optional, default: true
  webcamEnabled: "<Flag-to-enable-webcam>", // optional, default: true
  maxResolution: "<Maximum-resolution>", // optional, default: "hd"
});

// Get local participant of the meeting 
meeting?.localParticipant 

// Get all the participant of the meeting 
meeting?.participants 
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
                maxResolution: "<Maximum-resolution>"
            }}
            token={"<Authentication-token>"}
        >
            <MeetingView>...</MeetingView>
        </MeetingProvider>
    );
}

const MeetingView = () => {
     // Get Meeting object using useMeeting hook
    const meeting = useMeeting()

    // Get local participant of the meeting 
    meeting?.localParticipant 

    // Get all the participant of the meeting 
    meeting?.participants 

    return <>...</>
}

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
                maxResolution: "<Maximum-resolution>"
            }}
            token={"<Authentication-token>"}
        >
            <MeetingView>...</MeetingView>
        </MeetingProvider>
    );
}

const MeetingView = () => {
     // Get Meeting object using useMeeting hook
    const meeting = useMeeting()

    // Get local participant of the meeting 
    meeting?.localParticipant 

    // Get all the participant of the meeting 
    meeting?.participants 

    return <>...</>
}

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

        // Get local participant of the meeting 
        meeting.localParticipant 

        // Get all the participant of the meeting 
        meeting.participants 
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

        // Get local participant of the meeting 
        meeting.localParticipant 

        // Get all the participant of the meeting 
        meeting.participants 
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