---
sidebar_position: 1
sidebar_label: Properties
pagination_label: VideoSDK Class Properties
title: VideoSDK Class Properties
---

# VideoSDK Class Properties - Flutter

<div class="sdk-api-ref-only-h4">

### mediaDevices

- type: [`Map<MediaDeviceType, List<MediaDeviceInfo>>`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html)

- It contains all the connected media devices i.e. Video Devices, Audio Devices.

- This will be the [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) of `MediaDeviceType` and [`List<MediaDeviceInfo>`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html).

```javascript
// Audio Devices
List<MediaDeviceInfo> audioDevices = VideoSDK.mediaDevices[MediaDeviceType.audioInput];

// Video Devices
List<MediaDeviceInfo> videoDevices = VideoSDK.mediaDevices[MediaDeviceType.videoInput];
```

---

</div>
