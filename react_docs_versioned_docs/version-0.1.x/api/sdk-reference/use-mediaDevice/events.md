---
title: useMediaDevice Hook Event Callbacks
sidebar_position: 1
sidebar_label: Event Callbacks
pagination_label: useMediaDevice Hook Event Callbacks
---

# useMediaDevice Hook Event Callbacks - React

<div class="sdk-api-ref-only-h4">

### onDeviceChanged()

- `onDeviceChanged()` is a callback which gets triggered whenever a media device, such as a camera, microphone, or speaker is connected to or removed from the system.

#### Example

```js
function onDeviceChanged(devices) {
  console.log("onDeviceChanged ", devices);
}

const {
  ...
} = useMediaDevice({
  onDeviceChanged
});
```

---

</div>