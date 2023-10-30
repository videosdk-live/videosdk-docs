---
sidebar_position: 2
sidebar_label: Initializing a Meeting
pagination_label: Initializing a Meeting
title: Initializing a Meeting
---

# Initializing a Meeting - Android

<div class="sdk-api-ref">

## initialize()

To initialize the meeting, first you have to initialize the `VideoSDK`.
You can initialize the `VideoSDK` using `initialize()` method provided by the SDK.

#### Parameters

- **context**: Context

#### Returns

- _`void`_

```js title="initialize"
  VideoSDK.initialize(Context context)
```

---

## config()

Now, you have to set `token` property of `VideoSDK` class.
By using `config()` method, you can set the `token` property of `VideoSDK` class.

Please refer this [documentation](/api-reference/realtime-communication/intro/) to generate a token.

#### Parameters

- **token**: String

#### Returns

- _`void`_

```js title="config"
 VideoSDK.config(String token)
```

---

## initMeeting()

- Now, you can initialize the meeting using a factory method provided by the SDK called `initMeeting()`.
- `initMeeting()` will generate a new [`Meeting`](./meeting-class/introduction.md) class and the initiated meeting will be returned.

```js title="initMeeting"
   VideoSDK.initMeeting(
        Context context,
        String meetingId,
        String name,
        boolean micEnabled,
        boolean webcamEnabled,
        String participantId,
        String mode,
        boolean multiStream,
        Map<String, CustomStreamTrack> customTracks
        JSONObject metaData,
      )
```

## Parameters

### context

- Context of activity.

  - type : Context
  - `REQUIRED`

### meetingId

- Unique Id of the meeting where that participant will be joining.

  - type : `String`
  - `REQUIRED`

Please refer this [documentation](/api-reference/realtime-communication/create-room) to create a room.

### name

- Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.

  - type : String
  - `REQUIRED`

### micEnabled

- Whether `mic` of the participant will be on while joining the meeting. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

### webcamEnabled

- Whether `webcam` of the participant will be on while joining the meeting. If it is set to `false`, then webcam of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

### participantId

- Unique Id of the participant. If you passed `null` then SDK will create an Id by itself and will use that id.

  - type : `String` or `null`
  - `REQUIRED`

### mode

- There are 2 types of modes:

  1. `CONFERENCE` : Both audio and video streams will be produced and consumed in this mode.

  2. `VIEWER` : Audio and video streams will not be produced or consumed in this mode.

- type : `String` or `null`
- defaultValue : `CONFERENCE`
- `REQUIRED`

### multiStream

- It will specifiy if the stream should send multiple resolution layers or single resolution layer.

  - type: `boolean`
  - `REQUIRED`

### customTracks

- If you want to use custom tracks from start of the meeting, you can pass map of custom tracks in this paramater.

  - type : `Map<String, CustomStreamTrack>` or `null`
  - `REQUIRED`

Please refer this [documentation](../../guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track) to know more about CustomTrack.

### metaData

- If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.

  - type: `JSONObject`
  - `REQUIRED`

## Returns

### meeting

- After initializing the meeting, `initMeeting()` will return a new [`Meeting`](./meeting-class/introduction.md) instance.

---

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js title="initMeeting"

VideoSDK.initialize(applicationContext)

// Configure the token
VideoSDK.config(token) // pass the token generated from VideoSDK Dashboard

// Initialize the meeting
var meeting = VideoSDK.initMeeting(
  arrayOf(
    this@MainActivity,
    "abc-1234-xyz",
    "John Doe",
    true,
    true,
    null,
    null,
    false,
    null,
    null,
  )
)
```

</TabItem>

<TabItem value="Java">

```js title="initMeeting"

VideoSDK.initialize(getApplicationContext());

// Configure the token
VideoSDK.config(token);  // pass the token generated from VideoSDK Dashboard

// Initialize the meeting
Meeting meeting = VideoSDK.initMeeting({
  MainActivity.this,
  "abc-1234-xyz",
  "John Doe",
  true,
  true,
  null,
  null,
  false,
  null,
  null,
});
```

</TabItem>

</Tabs>

</div>
