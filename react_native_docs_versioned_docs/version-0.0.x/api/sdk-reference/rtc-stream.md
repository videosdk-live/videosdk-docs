---
sidebar_position: 1
---

# RTC Stream

## using RTCView in your app

To display participant video and screen share, you have to use `RTCView` component.

```javascript title="Using RTCView"
<RTCView streamURL={this.state.stream.toURL()} />
```

## Parameters

### mirror

- type : `boolean`
- `OPTIONAL`
- dafault value : `false`

- Indicates whether the video specified by 'streamURL' should be mirrored during rendering. Commonly, applications choose to mirror theuser-facing camera.

---

### objectFit

- type : `string`
- `OPTIONAL`
- dafault value : `contain`

- Can be contain or cover

---

### streamURL

- type : `string`
- `OPTIONAL`

- It is the URL from which the stream will be played.

---

### zOrder

- type : `boolean`
- `OPTIONAL`
- default value : `true`

---

### maxResolution

- type : `number`
- `OPTIONAL`
- default value : `0`

- Similar to zIndex in web

---
