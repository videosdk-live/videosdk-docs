---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

# Share Your Screen - Android

- Whenever any participant wants to share a complete screen of mobile, they can simply do it with VideoSDK Meeting.

- This guide will provide an overview of how to enable or disable Screen Share in a meeting.

## How Screen share works?

- The following diagram shows flow of the screen sharing in android using VideoSDK:

<div style={{textAlign: 'center'}}>

![VideoSDK Android Screenshare Flow Diagram](/img/android/screenshare/flow_diagram.png)

</div>

## Enable Screen Share

- A participant’s Screen share stream is provided via the `MediaProjection` API. This API is only compatible with `Build.VERSION_CODES.LOLLIPOP` or higher.

- Get an instance of the `MediaProjectionManager` and Call the `createScreenCaptureIntent()` method in an activity. This initiates a prompt dialog for the user to confirm screen projection.

- One will get a prompt dialog like this:

<div style={{textAlign: 'center'}}>

<img
src={require('/img/android/screenshare/user_permission.jpg').default}
alt="user permission"
width="450"
/>

</div>

<br/>

- After permission is received from the user, call `meeting.enableScreenShare()` method.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun enableScreenShare() {
    val mediaProjectionManager = application.getSystemService(
        MEDIA_PROJECTION_SERVICE
    ) as MediaProjectionManager
    startActivityForResult(
        mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE
    )
}

public override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE) return
    if (resultCode == RESULT_OK) {
        meeting!!.enableScreenShare(data)
    }
}
```

</TabItem>

<TabItem value="Java">

```js
private void enableScreenShare() {
    MediaProjectionManager mediaProjectionManager =
        (MediaProjectionManager) getApplication().getSystemService(
            Context.MEDIA_PROJECTION_SERVICE);
    startActivityForResult(
        mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE);
}

@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE)
        return;
    if (resultCode == Activity.RESULT_OK) {
        meeting.enableScreenShare(data);
    }
}
```

</TabItem>

</Tabs>

### Customise notification

- When a presenter starts screen share, presenter will receive a notification with a pre-defined title and message.

- Notification with pre-defined title and message will look like this:

<div style={{textAlign: 'center'}}>

<img
src={require('/img/android/screenshare/notification.jpg').default}
alt="notification"
width="450"
/>

</div>

- You can Customise those title, message and icon as per your requirements using `<meta-data>` specified in `app/src/main/AndroidManifest.xml`.

```js
<application>
  <meta-data
    android:name="notificationTitle"
    android:value="@string/notificationTitle"
  />
  <meta-data
    android:name="notificationContent"
    android:value="@string/notificationContent"
  />
  <meta-data
    android:name="notificationIcon"
    android:resource="@mipmap/ic_launcher_round"
  />
</application>
```

## Disable Screen Share

By using `meeting.disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun disableScreenShare() {
    meeting!!.disableScreenShare()
}
```

</TabItem>

<TabItem value="Java">

```js
private void disableScreenShare(){
    meeting.disableScreenShare();
}
```

</TabItem>

</Tabs>

## Display Screen Share Stream

#### Local Participant

When a Local participant share the screen, `onStreamEnabled()` of `ParticipantEventListener` is triggered with the `Stream` which can be added to a `SurfaceViewRenderer`.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
    //...
    svrShare!!.init(PeerConnectionUtils.getEglContext(), null)
}

private fun setLocalListeners() {
    meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
        override fun onStreamEnabled(stream: Stream) {
           if (stream.kind.equals("share", ignoreCase = true)) {
                // display share video
                val videoTrack = stream.track as VideoTrack
                videoTrack.addSink(svrShare)
            }
        }
        override fun onStreamDisabled(stream: Stream) {
            if (stream.kind.equals("share", ignoreCase = true)) {
               val track: VideoTrack? = stream.track as VideoTrack
               track?.removeSink(svrShare)
               svrShare!!.clearImage()
            }
        }
    });
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onCreate(Bundle savedInstanceState) {
    //...
    svrShare.init(PeerConnectionUtils.getEglContext(), null);
}

private void setLocalListeners() {
    meeting.getLocalParticipant().addEventListener(new ParticipantEventListener() {
        @Override
        public void onStreamEnabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("share")) {
                // display share video
                VideoTrack videoTrack = (VideoTrack) stream.getTrack();
                videoTrack.addSink(svrShare);
            }
        }
        @Override
        public void onStreamDisabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("share")) {
                VideoTrack track = (VideoTrack) stream.getTrack();
                if (track != null) track.removeSink(svrShare);
                svrShare.clearImage();
            }
        }
    });
}
```

</TabItem>

</Tabs>

#### Other Participants

When other participant(Except you) share their screen, `onPresenterChanged()` in the `MeetingEventListener` is triggered with the `participantId` of the screen share.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
override fun onCreate(savedInstanceState: Bundle?) {
    //...
    svrShare!!.init(PeerConnectionUtils.getEglContext(), null)
}

private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    override fun onPresenterChanged(participantId: String) {
        updatePresenter(participantId)
    }
}

//Getting the stream from the participantId
private fun updatePresenter(participantId: String?) {
    // find participant
    val participant = meeting!!.participants.get(participantId) ?: return

    // find share stream in participant
    var shareStream: Stream? = null
    for (stream: Stream in participant.streams.values) {
        if ((stream.kind == "share")) {
            shareStream = stream
            break
        }
    }
    if (shareStream == null) return

    // display share video
    val videoTrack = shareStream.track as VideoTrack
    videoTrack.addSink(svrShare)

    // listen for share stop event
    participant.addEventListener(object : ParticipantEventListener() {
        override fun onStreamDisabled(stream: Stream) {
            if ((stream.kind == "share")) {
                val track: VideoTrack? = stream.track as VideoTrack
                track?.removeSink(svrShare)

                svrShare!!.clearImage()
            }
        }
    })
}
```

</TabItem>

<TabItem value="Java">

```js
@Override
protected void onCreate(Bundle savedInstanceState) {
    //...
    svrShare.init(PeerConnectionUtils.getEglContext(), null);
}

private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    //Triggered when Presenter changes
    @Override
    public void onPresenterChanged(String participantId) {
        updatePresenter(participantId);
    }
};

//Getting the stream from the participantId
private void updatePresenter(String participantId) {
    // find participant
    Participant participant = meeting.getParticipants().get(participantId);
    if (participant == null) return;

    // find share stream in participant
    Stream shareStream = null;
    for (Stream stream: participant.getStreams().values()) {
        if (stream.getKind().equals("share")) {
            shareStream = stream;
            break;
        }
    }
    if (shareStream == null) return;

    // display share video
    VideoTrack videoTrack = (VideoTrack) shareStream.getTrack();
    videoTrack.addSink(svrShare);

    // listen for share stop event
    participant.addEventListener(new ParticipantEventListener() {
        @Override
        public void onStreamDisabled(Stream stream) {
            if (stream.getKind().equals("share")) {
                VideoTrack track = (VideoTrack) stream.getTrack();
                if (track != null) track.removeSink(svrShare);

                svrShare.clearImage();
            }
        }
    });
}
```

</TabItem>

</Tabs>
