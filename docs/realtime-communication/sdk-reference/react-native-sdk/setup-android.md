# Android Setup

## Follow below steps if you are setting up for Android

### Update AndroidManifest.xml file

```xml title="AndroidManifest.xml"
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.cool.app"
>
    <!-- Give all the required permissions to app -->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK" />
​
  <application>
    <!-- Enable foreground service -->
    <service android:name="live.videosdk.rnfgservice.ForegroundService" android:foregroundServiceType="mediaProjection">
    </service>
  </application>
</manifest>
```

### Link couple of library dependencies manually

### 1. Add below lines in `android/app/build.gradle`

```java title="android/app/build.gradle"
  dependencies {
    compile project(':rnfgservice') compile project(':rnwebrtc') compile project(':rnincallmanager')
  }
```

### 2. Add below lines in `android/settings.gradle`

```gradle title="android/settings.gradle"
include ':rnwebrtc'
project(':rnwebrtc').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-webrtc/android')

include ':rnincallmanager'
project(':rnincallmanager').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-incallmanager/android')

include ':rnfgservice'
project(':rnfgservice').projectDir = new File(rootProject.projectDir, '../node_modules/@videosdk.live/react-native-foreground-service/android')
```

### 3. Add below lines in `MainApplication.java`

```java title="MainApplication.java"
import live.videosdk.rnfgservice.ForegroundServicePackage;
import live.videosdk.rnincallmanager.InCallManagerPackage;
import live.videosdk.rnwebrtc.WebRTCModulePackage;

public class MainApplication extends Application implements ReactApplication {
  private static List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          /* Initialise foreground service, incall manager and webrtc module */
          new ForegroundServicePackage(),
          new InCallManagerPackage(),
          new WebRTCModulePackage(),
      );
  }
}
```

## Final Steps

### Import Example

The easiest way to start is import `@videosdk.live/react-native-sdk`.

```javascript title="meeting.js"
import {
  register,
  useMeeting,
  MeetingConsumer,
  MeetingProvider,
  useParticipant,
  RTCView,
  MediaStream,
} from "@videosdk.live/react-native-sdk";
```

### Register services at start of meeting

Call register event from the `index.js` file to initialize services such as incall manager and foreground services.

```js title="index.js"
// Import the library
import { register } from '@videosdk.live/react-native-sdk';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App.js';
​
// Register the service
register();
AppRegistry.registerComponent(appName, () => App);
```
