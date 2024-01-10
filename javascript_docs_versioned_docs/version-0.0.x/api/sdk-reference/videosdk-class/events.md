---
title: VideoSDK Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: VideoSDK Class Events
---

# VideoSDK Class Events - Javascript

<div class="sdk-api-ref-only-h4">

---

### device-changed

- A `device-changed` event is triggered whenever a media device such as a camera, microphone, or speaker is connected to or removed from the system.

#### Event callback parameters

- devices : `Array<DeviceInfo>`

#### Example

```javascript
meeting.on("device-changed", (devices) => {
  //
});
```

---

</div>