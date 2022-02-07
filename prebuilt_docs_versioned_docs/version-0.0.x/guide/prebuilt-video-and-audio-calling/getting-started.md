---
title: Video & Audio Calling API | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Prebuilt Video SDK Embedded is an easy-to-use audio video calling API. Embed video meetings add live video & audio conferencing to your applications or website.
sidebar_label: Getting Started
pagination_label: Getting Started Prebuilt Video & Audio Calling
keywords:
  - embed video meetings
  - audio conferencing
  - live video
  - prebuilt video sdk
  - video sdk embed
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

# Getting Started with Prebuilt Video & Audio Calling

Prebuilt SDK is an easy-to-use video meeting SDK. Embed video meetings into an application or website with the API allowing your team to build faster and ship more often.

## Steps

import Card from '@theme/Card';

<div class="container guide-steps-block">
  <div class="row ">
    <div class="col col--6">
      <Card heading="1. Signup & Create API Key" link="/docs/guide/prebuilt-video-and-audio-calling/signup-and-create-api" description="Generate Your API Key" />
    </div>
    <div class="col col--6" >
      <Card heading="2. Client Setup" link="/docs/guide/prebuilt-video-and-audio-calling/using-script" description="Integrate Prebuilt with API key"  />
    </div>
  </div>
  <div class="row " >
    <div class="col col--6">
      <Card heading="3. Customize Prebuilt" link="/docs/guide/prebuilt-video-and-audio-calling/features/join-screen" description="Start with customizing the Join screen" />
    </div>
    
  </div>
</div>

<!-- ## Embed a meeting

Embedding a meeting into a website and app requires you to add script into page or application.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="html"
groupId={"client-group-id"}
values={[
{label: 'HTML', value: 'html'},
{label: 'Java', value: 'java'},
{label: 'Kotlin', value: 'kotlin'},
{label: 'Swift IOS 14.5 onwards', value: 'swift145'},
{label: 'Swift IOS 14.3 and 14.4', value: 'swift144'},
{label: 'Swift IOS lower 14.3', value: 'swift143'}
]}>
<TabItem value="html">

```js
<script>
  var script = document.createElement("script");
  script.type = "text/javascript";

  script.addEventListener("load", function (event) {
    const meeting = new VideoSDKMeeting();

    const config = {
      name: "John Doe",
      apiKey: "<API KEY>", // generated in Get Stared
      meetingId: "milkyway", // enter your unique id for room

      containerId: null,
      redirectOnLeave: "https://www.videosdk.live/",

      micEnabled: true,
      webcamEnabled: true,

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Daily Scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },
    };

    meeting.init(config);
  });

  script.src =
    "https://sdk.videosdk.live/rtc-js-prebuilt/0.1.29/rtc-js-prebuilt.js";
  document.getElementsByTagName("head")[0].appendChild(script);
</script>
```

</TabItem>
<TabItem value="java">

```js
import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    public String roomUrlString = ""; // Replace by your own
    private String roomParameters = "?skipMediaPermissionPrompt";

    private static final int PERMISSION_REQUEST_CODE = 1234;
    private String[] requiredDangerousPermissions = {
            Manifest.permission.CAMERA,
            Manifest.permission.MODIFY_AUDIO_SETTINGS,
            Manifest.permission.RECORD_AUDIO
    };

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        this.webView = findViewById(R.id.webView);
        WebViewUtils.configureWebView(this.webView);
        this.webView.setWebChromeClient(new CustomWebChromeClient(this));
        this.webView.setWebViewClient(new WebViewClient());
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (this.webView.getUrl() == null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && this.isPendingPermissions()) {
                // This explicitly requests the camera and audio permissions.
                // It's fine for a demo app but should probably be called earlier in the flow,
                // on a user interaction instead of onResume.
                this.requestCameraAndAudioPermissions();
            } else {
                this.loadEmbeddedRoomUrl();
            }
        }
    }

    private void loadEmbeddedRoomUrl() {
        this.webView.loadUrl(roomUrlString + roomParameters);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        switch (requestCode) {
            case PERMISSION_REQUEST_CODE:
                if (this.grantResultsContainsDenials(grantResults)) {
                    // Show some permissions required dialog.
                } else {
                    // All necessary permissions granted, continue loading.
                    this.loadEmbeddedRoomUrl();
                }
                break;
            default:
                super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void requestCameraAndAudioPermissions() {
        this.requestPermissions(this.getPendingPermissions(), PERMISSION_REQUEST_CODE);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private String[] getPendingPermissions() {
        List<String> pendingPermissions = new ArrayList<>();
        for (String permission : this.requiredDangerousPermissions) {
            if (this.checkSelfPermission(permission) == PackageManager.PERMISSION_DENIED) {
                pendingPermissions.add(permission);
            }
        }
        return pendingPermissions.toArray(new String[pendingPermissions.size()]);
    }

    private boolean isPendingPermissions() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            return false;
        }
        return this.getPendingPermissions().length > 0;
    }

    private boolean grantResultsContainsDenials(int[] grantResults) {
        for (int result : grantResults) {
            if (result == PackageManager.PERMISSION_DENIED) {
                return true;
            }
        }
        return false;
    }
}
```

</TabItem>
<TabItem value="kotlin">

```js
import android.Manifest
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    var roomUrlString = "" // Replace by your own
    private val roomParameters = "?skipMediaPermissionPrompt"

    companion object {
        private const val PERMISSION_REQUEST_CODE = 1234
    }

    private val requiredDangerousPermissions = arrayOf(
        Manifest.permission.CAMERA,
        Manifest.permission.MODIFY_AUDIO_SETTINGS,
        Manifest.permission.RECORD_AUDIO
    )

    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        webView = findViewById(R.id.webView)
        WebViewUtils.configureWebView(webView!!)
        webView!!.setWebChromeClient(CustomWebChromeClient(this))
        webView!!.setWebViewClient(WebViewClient())
    }

    override fun onResume() {
        super.onResume()
        if (webView!!.url == null) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && isPendingPermissions()) {
                // This explicitly requests the camera and audio permissions.
                // It's fine for a demo app but should probably be called earlier in the flow,
                // on a user interaction instead of onResume.
                requestCameraAndAudioPermissions()
            } else {
                loadEmbeddedRoomUrl()
            }
        }
    }

    private fun loadEmbeddedRoomUrl() {
        webView!!.loadUrl(roomUrlString + roomParameters)
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ) {
        when (requestCode) {
            PERMISSION_REQUEST_CODE -> if (grantResultsContainsDenials(grantResults)) {
                // Show some permissions required dialog.
            } else {
                // All necessary permissions granted, continue loading.
                loadEmbeddedRoomUrl()
            }
            else -> super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private fun requestCameraAndAudioPermissions() {
        requestPermissions(pendingPermissions, PERMISSION_REQUEST_CODE)
    }

    @get:RequiresApi(api = Build.VERSION_CODES.M)
    private val pendingPermissions: Array<String>
        private get() {
            val pendingPermissions: MutableList<String> = ArrayList()
            for (permission in requiredDangerousPermissions) {
                if (checkSelfPermission(permission) == PackageManager.PERMISSION_DENIED) {
                    pendingPermissions.add(permission)
                }
            }
            return pendingPermissions.toTypedArray()
        }

    private fun isPendingPermissions(): Boolean {
        return if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            false
        } else pendingPermissions.isNotEmpty()
    }

    private fun grantResultsContainsDenials(grantResults: IntArray): Boolean {
        for (result in grantResults) {
            if (result == PackageManager.PERMISSION_DENIED) {
                return true
            }
        }
        return false
    }

}
```

</TabItem>
<TabItem value="swift145">

```js
// Use WKWebView for IOS 14.5 and onwards
import WebKit

class WKWebViewController: UIViewController, WKNavigationDelegate {

    public var roomUrlString = "" // Replace by your own
    private var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        webView = WKWebView(frame: view.frame, configuration: config)
        webView.navigationDelegate = self
        view = webView
        guard let roomUrl = URL(string: roomUrlString) else {
            return
        }
        webView.load(URLRequest(url: roomUrl))
    }
}
```

</TabItem>
<TabItem value="swift144">

```js
// Use SFSafariViewController for IOS 14.3 and 14.4
import SafariServices

class ViewController: UIViewController, SFSafariViewControllerDelegate {

    public var roomUrlString = "" // Replace by your own

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        guard let roomUrl = URL(string: roomUrlString) else {
            return
        }
        let safariVC = SFSafariViewController(url: roomUrl)
        safariVC.delegate = self
        present(safariVC, animated: true)
    }
}
```

</TabItem>
<TabItem value="swift143">

```js
// IOS versions lower than 14.3
import UIKit

class ViewController: UIViewController {

    public var roomUrlString = "" // Replace by your own

    override func viewDidLoad() {
        super.viewDidLoad()
        guard let roomUrl = URL(string: roomUrlString),
            UIApplication.shared.canOpenURL(roomUrl) else {
            return
        }
        UIApplication.shared.open(roomUrl)
    }
}
```

</TabItem>
</Tabs>

## What Next

Explore tutorials and code samples to customise prebuilt SDK. -->
