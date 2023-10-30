---
title: On / Off Camera | Video SDK
hide_title: true
hide_table_of_contents: false
description: Camera Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: On / Off Camera
pagination_label: On / Off Camera
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: on-off-camera
---

# On / Off Camera

Any participant can turn on or off his camera in the meeting using below methods.

### `enableWebcam()`

- By using `enableWebcam()` function of `Meeting` class, local participant can publish video to other participants.

- You can call this method when the local participant is not broadcasting any video to others.

- You can pass customised video track in `enableWebcam()` by using [Custom Video Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-video-track#custom-video-track).

- Video stream of the participant can be accessed from the `onStreamEnabled` event of `ParticipantEventListener`.

### `disableWebcam()`

- By using `disableWebcam()` function of `Meeting` class, local participant can stop publish video to other participants.

- You can call this method when the local participant is broadcasting any video to others.

#### Example


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  btnWebcam!!.setOnClickListener {
    if (webcamEnabled) {
      // Disabling camera
      //highlight-next-line
      meeting!!.disableWebcam()
    } else {
      // Enabling camera
      //highlight-next-line
      meeting!!.enableWebcam()
    }
    webcamEnabled=!webcamEnabled
  }
```

</TabItem>

<TabItem value="Java">

```js
  btnWebcam.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        if (webcamEnabled) {
          // Disabling camera
          //highlight-next-line
          meeting.disableWebcam();
        } else {
          // Enabling camera
          //highlight-next-line
          meeting.enableWebcam();
        }
        webcamEnabled=!webcamEnabled;
      }
  });
```

</TabItem>

</Tabs>

:::important
To learn, how to render video in the meeting, [follow this](/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/render-participant) detailed guide.
:::

### Events associated with enableWebcam

- Every Participant will receive a callback on [`onStreamEnabled()`](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled) of the [`Participant`](/android/api/sdk-reference/participant-class/introduction) with `Stream` object.

### Events associated with disableWebcam

- Every Participant will receive a callback on [`onStreamDisabled()`](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled) of the [`Participant`](/android/api/sdk-reference/participant-class/introduction) with `Stream` object.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  meeting!!.localParticipant.addEventListener(object : ParticipantEventListener() {
    //Callback for when the participant starts a stream
    //highlight-start
    override fun onStreamEnabled(stream: Stream) {
        if(stream.getKind().equals("video")){
          Log.d("VideoSDK","Video Stream On: onStreamEnabled $stream");
        }
    }
    //highlight-end

    //Callback for when the participant stops a stream
    //highlight-start
    override fun onStreamDisabled(stream: Stream) {
        if(stream.getKind().equals("video")){
          Log.d("VideoSDK","Video Stream On: onStreamDisabled $stream");
        }
    }
    //highlight-end
  });
```

</TabItem>

<TabItem value="Java">

```js
  participant.addEventListener(new ParticipantEventListener() {
    //Callback for when the participant starts a stream
    //highlight-start
    @Override
    public void onStreamEnabled(Stream stream) {
        if(stream.getKind().equals("video")){
          Log.d("VideoSDK","Video Stream On: onStreamEnabled" + stream);
        }
    }
    //highlight-end

    //Callback for when the participant stops a stream
    //highlight-start
    @Override
    public void onStreamDisabled(Stream stream) {
        if(stream.getKind().equals("video")){
          Log.d("VideoSDK","Video Stream Off: onStreamDisabled" + stream);
        }
    }
    //highlight-end
  });
```

</TabItem>

</Tabs>

### Video Permissions

- To use the camera in a meeting, you need to add permission in `app/src/main/AndroidManifest.xml` after `</application>`.           

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.CAMERA" />
```

- You need to set up a permission request that provides this access. 

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {
    private val PERMISSION_REQUEST_CODE: Int = 1;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //highlight-start
        if (checkPermission()) {
            // . write your main code to execute, It will execute if the permission is already given.
        } else {
            requestPermission()
        }
        //highlight-end
    }
    private fun checkPermission(): Boolean {
        //highlight-next-line
        return ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED
    }

    private fun requestPermission() {
      //highlight-start
        ActivityCompat.requestPermissions(
            this, arrayOf(Manifest.permission.CAMERA),
            PERMISSION_REQUEST_CODE
        )
      //highlight-end
    }

    override
    fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        when (requestCode) {
            PERMISSION_REQUEST_CODE -> if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(applicationContext, "Permission Granted", Toast.LENGTH_SHORT).show()
                // main logic
            } else {
                Toast.makeText(applicationContext, "Permission Denied", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
```

</TabItem>

<TabItem value="Java">

```js
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private static final int PERMISSION_REQUEST_CODE = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //highlight-start
        if (checkPermission()) {
            // . write your main code to execute, It will execute if the permission is already given.
        } else {
            requestPermission();
        }
        //highlight-end
    }

    private boolean checkPermission() {
        //highlight-next-line
        return ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED;
    }

    private void requestPermission() {
        List<String> permissionList = new ArrayList<String>();
        String[] permissions = {};
        permissionList.add(Manifest.permission.CAMERA);
        //highlight-start
        ActivityCompat.requestPermissions(
                this, permissionList.toArray(permissions),
                PERMISSION_REQUEST_CODE
        );
        //highlight-end
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        switch (requestCode) {
            case PERMISSION_REQUEST_CODE:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    Toast.makeText(MainActivity.this, "Permission Granted", Toast.LENGTH_SHORT).show();
                    // main logic
                } else {
                    Toast.makeText(MainActivity.this, "Permission Denied", Toast.LENGTH_SHORT).show();
                }
                break;
        }
    }
}
```

</TabItem>

</Tabs>

:::important
If the app goes to the background, VideoSDK detectes this event based on activity lifecycle and release the camera so that it can be used by other apps. In order to make sure this functionality works properly use  `VideoSDK.setActivityForLifeCycle(activity)` to specify which activity VideoSDK should monitor for lifecycle changes.
:::

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [enableWebcam()](/android/api/sdk-reference/meeting-class/methods#enablewebcam)
- [disableWebcam()](/android/api/sdk-reference/meeting-class/methods#disablewebcam)
- [onStreamEnabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled)
- [onStreamDisabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled)