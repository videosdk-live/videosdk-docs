---
title: Custom Screen Share Track
hide_title: false
hide_table_of_contents: false
description: Custom Screen Share Track features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Custom Screen Share Track
pagination_label: Custom Screen Share Track
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

# Custom Screen Share Track

We have introduced the ability to pass a custom Screen Share track while sharing the screen of participants. This feature can be used to add custom video encoder config,background removal & video filter from external SDK(e.g., [Banuba](https://www.banuba.com/)) and send it to other participants.

## Creating a Custom Screen Share Track

- You can create a Video Track using `createScreenShareVideoTrack()` method of `VideoSDK`.
- This method can be used to create video track using different encoding parameters.

### Parameters

- **encoderConfig**:

  - type: `String`
  - required: `false`
  - default: `h720p_15fps`
  - Allowed values : `h360p_30fps` | `h720p_5fps` | `h720p_15fps` | `h1080p_15fps` | `h1080p_30fps`
  - It will be the encoderConfigs you can want to use for the Video Track.

:::note

Above mentioned encoder configurations are valid for both, landscape as well as portrait mode.

:::

- **data**
  - type: `Intent`
  - required: `true`
  - It is Intent received from onActivityResult when user provide permission for ScreenShare.

- **context**
  - type: `Context`
  - required: `true`
  - Pass the Android Context for this parameter.

- **listener**
  - type: `CustomTrackListener`
  - required: `true`
  - Callback to this listener will be made when track is ready with CustomTrack as parameter.

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
// data is received from onActivityResult mehod.
VideoSDK.createScreenShareVideoTrack("h720p_5fps", data, this) { track ->
    meeting!!.enableScreenShare(track)
}
```

</TabItem>

<TabItem value="Java">

```javascript
// data is received from onActivityResult mehod.
VideoSDK.createScreenShareVideoTrack("h720p_5fps", data, this, (track)->{
    meeting.enableScreenShare(track);
});
```

</TabItem>

</Tabs>

## Using Custom Screen Share Track

### Custom Track with `enableScreenShare()`

In order to switch tracks during the meeting, you have to pass the `CustomStreamTrack` in the `enableScreenShare()` method of `Meeting`.

:::note

Make sure to call `disableScreenShare()` before you create a new track as it may lead to unexpected behaviour.

:::

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```javascript
@TargetApi(21)
private fun askPermissionForScreenShare() {
    val mediaProjectionManager = application.getSystemService<Any>(
        Context.MEDIA_PROJECTION_SERVICE
    ) as MediaProjectionManager
    startActivityForResult(
        mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE
    )
}

@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)
    if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE) return
    if (resultCode == RESULT_OK) {
        VideoSDK.createScreenShareVideoTrack("h720p_5fps", data, this) { track ->
            meeting!!.enableScreenShare(track)
        }
    }
}

```

</TabItem>

<TabItem value="Java">

```javascript
@TargetApi(21)
private void askPermissionForScreenShare() {
    MediaProjectionManager mediaProjectionManager =
        (MediaProjectionManager) getApplication().getSystemService(
            Context.MEDIA_PROJECTION_SERVICE);
    startActivityForResult(
        mediaProjectionManager.createScreenCaptureIntent(), CAPTURE_PERMISSION_REQUEST_CODE);
}

@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (requestCode != CAPTURE_PERMISSION_REQUEST_CODE)
        return;
    if (resultCode == Activity.RESULT_OK) {
        VideoSDK.createScreenShareVideoTrack("h720p_5fps", data, this, (track)->{
            meeting.enableScreenShare(track);
        });
    }
}

```

</TabItem>

</Tabs>
