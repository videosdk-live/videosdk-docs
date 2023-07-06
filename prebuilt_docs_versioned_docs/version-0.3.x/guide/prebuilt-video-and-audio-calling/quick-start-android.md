---
title: Quick Start with Prebuilt in Android
hide_title: false
hide_table_of_contents: false
description: Video SDK enables the opportunity to integrate native IOS, Android & Web SDKs to add live video & audio conferencing to your applications.
sidebar_label: Quick Start with Prebuilt in Android
pagination_label: Quick Start with Prebuilt in Android
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: quick-start-android
---

Prebuilt SDK enables the opportunity to integrate real-time video & audio communication SDK without writing explicit code. It just requires 10 minutes to integrate.

### Prerequisites

:::important

One should have a VideoSDK account to generate a token.
Visit VideoSDK **[dashboard](https://app.videosdk.live/api-keys)** to generate token

:::

### Permissions

In order to embed VideoSDK in Android, add these permissions to the manifest:

```js
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.CAMERA" />

  <!-- Needed to communicate with already-paired Bluetooth devices. (Legacy up to Android 11) -->
  <uses-permission
      android:name="android.permission.BLUETOOTH"
      android:maxSdkVersion="30" />
  <uses-permission
      android:name="android.permission.BLUETOOTH_ADMIN"
      android:maxSdkVersion="30" />

  <!-- Needed to communicate with already-paired Bluetooth devices. (Android 12 upwards)-->
  <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
```

### Embeding Prebuilt in Android

You will need to use the [WebView](https://developer.android.com/reference/android/webkit/WebView) class.

1. We will start by creating a web view and setup some javascript settings on it.

```js
public class MainActivity extends AppCompatActivity {

    private WebView myWebView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        myWebView = new WebView(this);
        setContentView(myWebView);

        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);

    }
}
```

2. We need to setup a `WebChromeClient` for the webview which will handle the permissions of audio and video of the user.

```js
public class MainActivity extends AppCompatActivity {

  @SuppressLint("SetJavaScriptEnabled")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    //.... WebView Setup here

    //.... WebChromeClient Setup
    myWebView.setWebViewClient(new WebViewClient());
    myWebView.setWebChromeClient(new WebChromeClient() {
      @Override
      public void onPermissionRequest(final PermissionRequest request) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            request.grant(request.getResources());
        }
      }
    });

  }
}
```

3. Next step is to load the URL of the prebuilt. Make sure you replace the `token` and `meetingId` with respective variables.

```js
public class MainActivity extends AppCompatActivity {

  //Declare following variables
  private String token  = "REPLACE_YOUR_TOKEN_HERE";

  private String prebuiltVersion = "0.3.31";

  private String meetingId = "MEETING_ID";

  private String name = "John Doe";
  private String micEnabled = "true";
  private String webcamEnabled = "true";

  @Override
  protected void onResume() {
    super.onResume();
    if (myWebView.getUrl() == null) {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && isPendingPermissions()) {
        // This explicitly requests the camera and audio permissions.
        // It's fine for a demo app but should probably be called earlier in the flow,
        // on a user interaction instead of onResume.
        requestCameraAndAudioPermissions();
      } else {
        loadPrebuilt();
      }
    }
  }

  private void loadPrebuilt() {
    Uri.Builder builder = new Uri.Builder();

    builder.scheme("https")
            .authority("embed.videosdk.live")
            .appendPath("rtc-js-prebuilt")
            .appendPath(prebuiltVersion)
            .appendQueryParameter("name", name) // Name Parameter
            .appendQueryParameter("micEnabled", micEnabled) // initial Mic Status Parameter
            .appendQueryParameter("webcamEnabled", webcamEnabled) // initial webcam status paramter
            .appendQueryParameter("meetingId", meetingId)
            .appendQueryParameter("redirectOnLeave", "https://videosdk.live")
            .appendQueryParameter("token", token);

    String url = builder.build().toString();
    myWebView.loadUrl(url);
  }
}
```

4. Handle the runtime permissions.

```js
public class MainActivity extends AppCompatActivity {

  private int PERMISSION_REQUEST_CODE = 1234;
  private String[] requiredDangerousPermissions = {
      Manifest.permission.CAMERA,
      Manifest.permission.MODIFY_AUDIO_SETTINGS,
      Manifest.permission.RECORD_AUDIO
  };

  @Override
  public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

    if (requestCode == PERMISSION_REQUEST_CODE) {
      if (grantResultsContainsDenials(grantResults)) {
        // Show some permissions required dialog.
      } else {
        // All necessary permissions granted, continue loading.
        loadPrebuilt();
      }
    } else {
      super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
  }

  @RequiresApi(api = Build.VERSION_CODES.M)
  private void requestCameraAndAudioPermissions() {
    requestPermissions(getPendingPermissions(), PERMISSION_REQUEST_CODE);
  }

  @RequiresApi(api = Build.VERSION_CODES.M)
  private String[] getPendingPermissions() {
    String[] permissions = {};
    ArrayList<String> pendingPermissions = new ArrayList<String>();
    for (String permission : requiredDangerousPermissions) {
      if (checkSelfPermission(permission) == PackageManager.PERMISSION_DENIED) {
        pendingPermissions.add(permission);
      }
    }
    return pendingPermissions.toArray(permissions);
  }

  private boolean isPendingPermissions() {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
      return false;
    } else return getPendingPermissions().length > 0;
  }

  private boolean grantResultsContainsDenials(int[] grantResults){
    for (int result : grantResults) {
      if (result == PackageManager.PERMISSION_DENIED) {
        return true;
      }
    }
    return false;
  }
}
```

5. Run the app.

:::note

You can checkout the sample project for **[prebuilt implementation of android in webview ](https://github.com/videosdk-live/videosdk-rtc-prebuilt-examples/tree/main/android-webview)** here.

:::
