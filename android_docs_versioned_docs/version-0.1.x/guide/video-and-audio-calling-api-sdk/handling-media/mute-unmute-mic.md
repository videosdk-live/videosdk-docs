---
title: Mute / Unmute Mic | Video SDK
hide_title: true
hide_table_of_contents: false
description: Mic Controls features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Mute / Unmute Mic
pagination_label: Mute / Unmute Mic
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: mute-unmute-mic
---

# Mute / Unmute Mic - Android

Muting and Unmuting your microphone refers to turning your microphone off and on, respectively.

When you mute your microphone, you prevent any sound from your microphone from being transmitted to other meeting participants, while unmuting it allows others to hear you.

### `unmuteMic()`

- By using `unmuteMic()` function of `Meeting` class, local participant can publish audio to other participants.

  - You can call this method when the local participant is not broadcasting any audio to others.

- You can pass customised audio track in `unmuteMic()` by using [Custom Audio Track](/android/guide/video-and-audio-calling-api-sdk/render-media/optimize-audio-track).

- Audio stream of the participant can be accessed from the `onStreamEnabled` event of `ParticipantEventListener`.

### `muteMic()`

- By using `muteMic()` function of `Meeting` class, local participant can stop publish audio to other participants.

- You can call this method when the local participant is broadcasting any audio to others.

#### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
  private var micEnabled = false

  btnMic!!.setOnClickListener { _: View? ->
     if (micEnabled) {
      // Muting Mic
      //highlight-next-line
       meeting!!.muteMic()
       micEnabled=false
     } else {
      // Unmuting Mic
      //highlight-next-line
      meeting!!.unmuteMic()
      micEnabled=true
     }
  }
```

</TabItem>

<TabItem value="Java">

```js
  private boolean micEnabled = false;

  btnMic.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
          if (micEnabled) {
              // Muting Mic
              //highlight-next-line
              meeting.muteMic();
              micEnabled = false;
          } else {
            // Unmuting Mic
            //highlight-next-line
              meeting.unmuteMic();
              micEnabled = true;
          }
      }
  });
```

</TabItem>

</Tabs>

### Events associated with unmuteMic

- Every Participant will receive a callback on [`onStreamEnabled()`](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled) of the [`Participant`](/android/api/sdk-reference/participant-class/introduction) with `Stream` object.

### Events associated with muteMic

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
        if(stream.getKind().equals("audio")){
          Log.d("VideoSDK","Audio Stream On: onStreamEnabled $stream");
        }
    }
    //highlight-end

    //Callback for when the participant stops a stream
    //highlight-start
    override fun onStreamDisabled(stream: Stream) {
        if(stream.getKind().equals("audio")){
          Log.d("VideoSDK","Audio Stream On: onStreamDisabled $stream");
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
        if(stream.getKind().equals("audio")){
          Log.d("VideoSDK","Audio Stream On: onStreamEnabled" + stream);
        }
    }
    //highlight-end

    //Callback for when the participant stops a stream
    //highlight-start
    @Override
    public void onStreamDisabled(Stream stream) {
        if(stream.getKind().equals("audio")){
          Log.d("VideoSDK","Audio Stream Off: onStreamDisabled" + stream);
        }
    }
    //highlight-end
  });
```

</TabItem>

</Tabs>

### Audio Permissions

- To use the microphone in a meeting, you need to add permission in `app/src/main/AndroidManifest.xml` after `</application>`.

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.RECORD_AUDIO" />
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
        return ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED
    }

    private fun requestPermission() {
      //highlight-start
        ActivityCompat.requestPermissions(
            this, arrayOf(Manifest.permission.RECORD_AUDIO),
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
        return ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED;
    }

    private void requestPermission() {
        List<String> permissionList = new ArrayList<String>();
        String[] permissions = {};
        permissionList.add(Manifest.permission.RECORD_AUDIO);
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

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [unmuteMic()](/android/api/sdk-reference/meeting-class/methods#unmutemic)
- [muteMic()](/android/api/sdk-reference/meeting-class/methods#mutemic)
- [onStreamEnabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamenabled)
- [onStreamDisabled()](/android/api/sdk-reference/participant-class/participant-event-listener-class#onstreamdisabled)
