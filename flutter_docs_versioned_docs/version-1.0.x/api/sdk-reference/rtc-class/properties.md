---
sidebar_position: 1
sidebar_label: Properties
pagination_label: RTC Class Properties
title: RTC Class Properties
---

<div class="sdk-api-ref-only-h4">

### isInitialized

- type: [`bool`](https://api.dart.dev/stable/2.15.1/dart-core/bool-class.html)

- States that if SDK has been initialized or not.

---

### mediaDevices

- type: `Map<`[`MediaDeviceType`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html)`, List<`[`MediaDeviceInfo`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html)`>>`

- It contains all connected media devices i.e. Video Devices, Audio Devices.

- This will be the [`Map`](https://api.dart.dev/stable/2.15.1/dart-core/Map-class.html) of [`MediaDeviceType`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html) and [`List<MediaDeviceInfo>`](https://api.flutter.dev/flutter/dart-html/MediaDeviceInfo-class.html).

```javascript
// Audio Devices
List<MediaDeviceInfo> audioDevices = RTC.mediaDevices[MediaDeviceType.audioInput];

// Video Devices
List<MediaDeviceInfo> videoDevices = RTC.mediaDevices[MediaDeviceType.videoInput];
```

---

</div>
