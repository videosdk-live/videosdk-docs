---
title: Screen Share | Video SDK
hide_title: true
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Screen Share
pagination_label: Screen Share
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screen-share
---

# Screen Share

Screen sharing in a meeting is the process of sharing your mobile screen with other participants in the meeting. It allows everyone in the meeting to see exactly what you are seeing on your screen, which can be helpful for presentations, demonstrations, or collaborations.

## How Screen share works?

- The following diagram shows flow of the screen sharing in android using VideoSDK :

<div style={{textAlign: 'center'}}>

![VideoSDK Android Screenshare Flow Diagram](/img/android/screenshare/flow_diagram.png)

</div>

### `enableScreenShare()`

- By using `enableScreenShare()` function of `Meeting` class, local participant can share his/her mobile screen to other participants.

- You can pass customised screenshare track in `enableScreenShare()` by using [Custom Screen Share Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-screen-share-track).

- Screen Share stream of the participant can be accessed from the `onStreamEnabled` event of `ParticipantEventListener`.

### Screenshare permission

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

- After permission is received from the user, you can call `enableScreenShare()` method.

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
        // Enabling screen share
        //highlight-next-line
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
        // Enabling screen share
        //highlight-next-line
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
    //highlight-next-line
    android:value="@string/notificationTitle"
  />
  <meta-data
    android:name="notificationContent"
    //highlight-next-line
    android:value="@string/notificationContent"
  />
  <meta-data
    android:name="notificationIcon"
    //highlight-next-line
    android:resource="@mipmap/ic_launcher_round"
  />
</application>
```

### `disableScreenShare()`

- By using `disableScreenShare()` function of `Meeting` class, local participant can stop sharing his/her mobile screen to other participants.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun disableScreenShare() {
    // Disabling screen share
    //highlight-next-line
    meeting!!.disableScreenShare()
}
```

</TabItem>

<TabItem value="Java">

```js
private void disableScreenShare(){
    // Disabling screen share
    //highlight-next-line
    meeting.disableScreenShare();
}
```

</TabItem>

</Tabs>

### Events associated with enableScreenShare

- Participant who share their mobile screen will receive a callback on [`onStreamEnabled()`](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled) of the [`Participant`](/android/api/sdk-reference/participant-class/introduction) with `Stream` object.

- While other Participants will receive [`onPresenterChanged()`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onpresenterchanged) callback of the [`Meeting`](/android/api/sdk-reference/meeting-class/introduction) class with the participantId as `presenterId` who started the screen share.

### Events associated with disableScreenShare

- Participant who shared their mobile screen will receive a callback on [`onStreamDisabled()`](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled) of the [`Participant`](/android/api/sdk-reference/participant-class/introduction) with `Stream` object.

- While other Participants will receive [`onPresenterChanged()`](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onpresenterchanged) callback of the [`Meeting`](/android/api/sdk-reference/meeting-class/introduction) class with the `presenterId` as `null` indicating there is no presenter.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private fun setLocalListeners() {
    meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
        //Callback for when the participant starts a stream
        //highlight-start
        override fun onStreamEnabled(stream: Stream) {
           if (stream.kind.equals("share", ignoreCase = true)) {
              Log.d("VideoSDK","Share Stream On: onStreamEnabled $stream");
            }
        }
        //highlight-end

        //Callback for when the participant stops a stream
        //highlight-start
        override fun onStreamDisabled(stream: Stream) {
            if (stream.kind.equals("share", ignoreCase = true)) {
               Log.d("VideoSDK","Share Stream On: onStreamDisabled $stream");
            }
        }
        //highlight-end
    });
}

private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
    //Callback for when the presenter changes
    //highlight-start
    override fun onPresenterChanged(participantId: String) {
        if(!TextUtils.isEmpty(participantId))
        {
          Log.d("VideoSDK","$participantId started screen share");
        }else{
          Log.d("VideoSDK","some one stopped screen share");
        }
    }
    //highlight-end
}
```

</TabItem>

<TabItem value="Java">

```js
private void setLocalListeners() {
    meeting.getLocalParticipant().addEventListener(new ParticipantEventListener() {
        //Callback for when the participant starts a stream
        //highlight-start
        @Override
        public void onStreamEnabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("share")) {
                Log.d("VideoSDK","Share Stream On: onStreamEnabled" + stream);
            }
        }
        //highlight-end

        //Callback for when the participant stops a stream
        //highlight-start
        @Override
        public void onStreamDisabled(Stream stream) {
            if (stream.getKind().equalsIgnoreCase("share")) {
                Log.d("VideoSDK","Share Stream Off: onStreamDisabled" + stream);
            }
        }
        //highlight-end
    });
}

private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
    //Callback for when the presenter changes
    //highlight-start
    @Override
    public void onPresenterChanged(String participantId) {
      if(participantId != null){
        Log.d("VideoSDK",participantId + "started screen share");
      }else{
        Log.d("VideoSDK","some one stopped screen share");
      }
    }
    //highlight-end
};
```

</TabItem>

</Tabs>

:::info

- Here screenShare stream is displayed using `VideoView`, but you may also use `SurfaceViewRender` for the same.
- For `VideoView`, SDK version should be `0.1.13` or higher.
- To know more about `VideoView`, please visit [here](/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/understand-videoView-component) 

:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableScreenShare()](/android/api/sdk-reference/meeting-class/methods#enablescreenshare)
- [disableScreenShare()](/android/api/sdk-reference/meeting-class/methods#disablescreenshare)
- [onStreamEnabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled)
- [onStreamDisabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled)
- [onPresenterChanged()](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onpresenterchanged)
