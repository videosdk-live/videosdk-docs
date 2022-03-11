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

# Share Your Screen

 - Whenever any participant wants to share a complete screen of mobile, they can simply do it with VideoSDK Meeting.  

 - This guide will provide an overview of how to enable or disable Screen Share in a meeting.

## Enable Screen Share 

- A participant’s Screen share stream is provided via the `MediaProjection` API. This API is only compatible with `Build.VERSION_CODES.LOLLIPOP` or higher.  

- Get an instance of the `MediaProjectionManager` and Call the `createScreenCaptureIntent()` method in an activity. This initiates a prompt dialog for the user to confirm screen projection.

- After permission is received from the user, call `meeting.enableScreenShare()` method.


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

###	 Customise notification

- When a presenter starts screen share, presenter will receive a notification with a pre-defined title and messages. 

- You can Customise those title, message and icon as per your requirements using `<meta-data>` specified in `app/src/main/AndroidManifest.xml`.


```js
<application>
	<meta-data
            android:name="notificationTitle"
            android:value="@string/notificationTitle" />
	<meta-data
            android:name="notificationContent"
            android:value="@string/notificationContent" />
	<meta-data
            android:name="notificationIcon"
            android:resource="@mipmap/ic_launcher_round" />
</application>
```

## Disable Screen Share 

By using  `meeting.disableScreenShare()`  function, a participant can stop publishing screen stream to other participants.

```js
private void disableScreenShare(){
     meeting.disableScreenShare();
}
```

## Display Screen Share Stream 

#### Local Participant

When a Local participant share the screen, `onStreamEnabled()`  of  `ParticipantEventListener`  is triggered with the  `Stream`  which can be added to a  `SurfaceViewRenderer`.  
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
#### Other Participants

When other participant(Except you) share their screen, `onPresenterChanged()` in the  `MeetingEventListener` is triggered with the `participantId` of the screen share. 

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
