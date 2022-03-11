# IOS Setup

## Follow below steps if you are setting up for IOS

### Step 1: Install incall manager

```sh title="Install react-native-incallmanager"
$ yarn add @videosdk.live/react-native-incallmanager
```

### Step 2: IMPORTANT: Make sure you are using CocoaPods 1.10 or higher.

To update CocoaPods you simply install the gem again

```gem title="Update cocoapods"
$[sudo] gem install cocoapods
```

### Step 3: Manual linking (if react-native-incall-manager is not linked automatically)

2.1 Drag node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager.xcodeproj under <your_xcode_project>/Libraries

2.2 Select <your_xcode_project> --> Build Phases --> Link Binary With Libraries

- Drag Libraries/RNInCallManager.xcodeproj/Products/libRNInCallManager.a to Link Binary With Libraries

  2.3 Select <your_xcode_project> --> Build Settings
  In Header Search Paths, add $(SRCROOT)/../node_modules/@videosdk.live/react-native-incall-manager/ios/RNInCallManager

### Step 4: Change path of `react-native-webrtc`

```sh title="Change path of react-native-webrtc"
pod ‘react-native-webrtc’, :path => ‘../node_modules/@videosdk.live/react-native-webrtc’
```

### Step 5: Change your platform version

You have change platform field of podfile to 11.0 or above it, as react-native-webrtc doesn’t support IOS < 11
platform :ios, ‘11.0’

### Step 6: Install pods

After updating the version, you have to install pods.

```sh title="Install pods"
Pod install
```

### Step 7: Add “libreact-native-webrtc.a” binary

Add “libreact-native-webrtc.a” in Link Binary with libraries. In target of main project folder.

### Step 8: Declare permissions in Info.plist :

Add following lines to info.plist (project folder/IOS/projectname/info.plist):

```sh title="Update permissions"
	<key>NSCameraUsageDescription</key>
	<string>Camera permission description</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>Microphone permission description</string>
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
