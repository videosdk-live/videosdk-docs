---
title: useMediaDevice Hook Event Callbacks
sidebar_position: 1
sidebar_label: Event Callbacks
pagination_label: useMediaDevice Hook Event Callbacks
---

# useMediaDevice Hook Event Callbacks - React Native

<div class="sdk-api-ref-only-h4">

### onAudioDeviceChanged()

- `onAudioDeviceChanged()` is a callback which gets triggered whenever a audio devices, such as a microphone or speaker is connected to or removed from the device.

:::info
Make sure you have microphone permission granted on the device, otherwise, this event will not return the list.
:::

#### Example

```js
import { Constants, useMediaDevice } from "@videosdk.live/react-native-sdk";

function onAudioDeviceChanged(devices) {
  console.log("onAudioDeviceChanged ", devices);
}

const {
  ...
} = useMediaDevice({
  onAudioDeviceChanged
});
```

</div>
