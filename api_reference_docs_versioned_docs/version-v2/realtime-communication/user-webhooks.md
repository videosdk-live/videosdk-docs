---
sidebar_position: 2
sidebar_label: User Webhooks
pagination_label: User Webhooks
title: User Webhooks
---

<div class="sdk-api-ref-only-h4">

---

### participant-joined

- this webhook is called when new participant join the meeting with following payload.

#### Example

```javascript
{
	"webhookType": "participant-joined",
	"data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
        "participantId": "fkd74h",
        "participantName": "John",
    },
}
```

---

### participant-left

- this webhook is called when participant left the meeting with following payload

#### Example

```javascript
{
	"webhookType": "participant-left",
	"data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
        "participantId": "fkd74h",
        "participantName": "John",
    },
}
```

---

### session-started

- this webhook is called when new meeting session is successfully started

#### Example

```javascript
{
    "webhookType": "session-started",
    "data": {
        "sessionId": "613731342f27f56e4fc4b6d0",
        "meetingId": "jvsg-8rjn-j304",
        "start": "2022-07-05T15:55:35.047+00:00",
    },
}
```

---

### session-ended

- this webhook is called when all participants lefts and meeting session is closed

#### Example

```javascript
{
    "webhookType": "session-ended",
    "data": {
        "sessionId": "613731342f27f56e4fc4b6d0",
        "meetingId": "jvsg-8rjn-j304",
        "start": "2022-07-05T15:55:35.047+00:00",
        "end": "2022-07-05T15:60:35.047+00:00",
    },
}
```

---

### recording-started

- recording started webhook will be received when successfully recording is started in meeting

#### Example

```javascript
{
    "webhookType": "recording-started",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
    },
}
```

---

### recording-stopped

- recording stopped webhook will be received when recording is successfully stopped in meeting.

#### Example

```javascript
{
    "webhookType": "recording-stopped",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
        "fileId": "61dff29d9e5b1a4e4a34d17e"
    },
}
```

---

### livestream-started

- when you use live-streaming in our meeting service you will receive this webhook when livestream is successfully started.

#### Example

```javascript
{
    "webhookType": "livestream-started",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
    },
}
```

---

### livestream-stopped

- when live-stream is stopped in meeting this webhook is fired with following payload

#### Example

```javascript
{
    "webhookType": "livestream-stopped",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
    },
}
```

---

### hls-started

- when you use Http live streaming(HLS) in meeting this event will be fired
  with `downstreamUrl` url which you can embed in hls player

#### Example

```javascript
{
    "webhookType": "hls-started",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
        "downstreamUrl": "https://cdn.videosdk.live/meetings-hls/b8a770ef-d713-4a27-9ab7-e5a0b724caaf/index.m3u8"
    },
}
```

---

### hls-stopped

- this event is fired when you stop a http live streaming in meeting it has following payload

#### Example

```javascript
{
    "webhookType": "hls-stopped",
    "data": {
        "meetingId": "jvsg-8rjn-j304",
        "sessionId": "613731342f27f56e4fc4b6d0",
    },
}
```

</div>
