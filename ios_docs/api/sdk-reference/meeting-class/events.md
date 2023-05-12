---
title: Meeting Class Events
sidebar_position: 1
sidebar_label: Events
pagination_label: Meeting Class Events
---

<div class="sdk-api-ref-only-h4">

---

### onMeetingJoined

- This event will be emitted when a [localParticipant](./properties#localparticipant) successfully joined the meeting.

#### Example

```js
  meeting.listeners.onMeetingJoined()
```

---

### onMeetingLeft

- This event will be emitted when a [localParticipant](./properties#localparticipant) left the meeting.

#### Example

```js
meeting.listeners.onMeetingLeft()
```

---

### onParticipantJoined

- This event will be emitted when a new [participant](../participant-class/introduction) joined the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```js
meeting.listeners.onParticipantJoined(participant)
```

---

### onParticipantLeft

- This event will be emitted when a joined [participant](../participant-class/introduction) left the meeting.

#### Event callback parameters

- **participant**: [Participant](../participant-class/introduction)

#### Example

```js
meeting.listeners.onParticipantLeft(participant)
```
---

### onSpeakerChanged

- This event will be emitted when a active speaker changed.
- If you want to know which participant is actively speaking, then this event will be used.
- If no participant is actively speaking, then this event will pass `null` as en event callback parameter.

#### Event callback parameters

- **participantId**: String?

#### Example

```js
meeting.listeners.onSpeackerChanged(participantId: participantId)
```

---

### onMicRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable mic of participant `B`.
- On accepting the request, mic of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String?
- **accept**: Closure
- **reject**: Closure

#### Example

```js
meeting.listeners.onMicRequested(participantId: participantId) {
    // request accepted 
} reject: {
    // request rejected
}
```

---

### onWebcamRequested

- This event will be emitted to the participant `B` when any other participant `A` requests to enable webcam of participant `B`.
- On accepting the request, webcam of participant `B` will be enabled.

#### Event callback parameters

- **participantId**: String?
- **accept**: Closure
- **reject**: Closure

#### Example

```js
meeting.listeners.onWebcamRequested(participantId: participantId) {
    // request accepted 
} reject: {
    // request rejected
}
```

---

### onRecordingStateChanged()

- This event will be emitted when the meeting's recording status changed.

#### Example

```js

meeting.listeners.onRecordingStateChanged(state: RecordingState) {
    switch(state) {
        case .RECORDING_STARTING:
            print("recording starting")
        
        case .RECORDING_STARTED:
            print("recording started")
            
        case .RECORDING_STOPPING:
            print("recording stoping")
    
        case .RECORDING_STOPPED:
            print("recording stopped")
    }
}

```

---

### onRecordingStarted

- This event will be emitted when recording of the meeting is started.

#### Example

```js
meeting.listeners.onRecordingStarted()
```

---

### onRecordingStopped

- This event will be emitted when recording of the meeting is stopped.

#### Example

```js
meeting.listeners.onRecordingStopped()
```

---

### onLivestreamStateChanged()

- This event will be emitted when the meeting's livestream status changed.

#### Example

```js

meeting.listeners.onLivestreamStateChanged(state: LiveStreamState) {
    switch(state) {
        case .LIVESTREAM_STARTING:
            print("livestream starting")
        
        case .LIVESTREAM_STARTED:
            print("livestream started")
            
        case .LIVESTREAM_STOPPING:
            print("livestream stoping")
    
        case .LIVESTREAM_STOPPED:
            print("livestream stopped")
    }
}

```

---

### onLivestreamStarted

- This event will be emitted when `RTMP` live stream of the meeting is started.

#### Example

```js
meeting.listeners.onLivestreamStarted()
```

---

### onLivestreamStopped

- This event will be emitted when `RTMP` live stream of the meeting is stopped.

#### Example

```js
meeting.listeners.onLivestreamStopped()
```

---

### onHlsStateChanged()

- This event will be emitted when the meeting's HLS(Http Livestreaming) status changed.

#### Example

```js

meeting.listeners.onHlsStateChanged(state: HLSState, hlsUrl: HLSUrl?) {
    switch(state) {
        case .HLS_STARTING:
            print("HLS Starting")
            
        case .HLS_STARTED:
            self.hlsStreamStarted = true
            print("HLS Started")
            
        case .HLS_PLAYABLE:
            print("HLS Playable")
            
        case .HLS_STOPPING:
            print("HLS Stopping")
            
        case .HLS_STOPPED:
            self.hlsStreamStarted = false
            print("HLS Stopped")
    }
}

```

---

### onMeetingStateChanged()

- This event will be triggered when state of meeting changes.
- It will pass **`state`** as an event callback parameter which will indicate current state of the meeting.
- All available states are `CONNECTING`, `CONNECTED`, `CLOSING`, `CLOSED` and `CANCELLED`.

#### Event callback parameters

- **data**: { **meetingState**: MeetingState }
  - **meetingState**: MeetingState

#### Example

```js

meeting.listeners.onMeetingStateChanged(meetingState: MeetingState) {
    switch meetingState {
        case .CONNECTING:
            print("Meeting is connecting")
            
        case .CONNECTED:
            print("Meeting is connected")
            
        case .CLOSING:
            print("Meeting is closing")
            
        case .CLOSED:
            print("Meeting connection closed")
            
        case .CANCELLED:
            print("Meeting is cancelled")
    }
}

```

---

### onError()

- This event will be triggered when any error occured.
- It will pass **`error`** as an event parameter.
- To see all available error codes from SDK. [Meeting Error Codes](../error-codes)

#### Example

```js
meeting.listeners.onError(error: VideoSDKError) {
    switch error {
        case .INVALID_TOKEN: print("Invalid Token")

        case .INVALID_MEETING_ID: print("Invalid Meeting Id")
        
        case .INVALID_API_KEY: print("Invalid API Key")
        
        case .INVALID_PERMISSIONS: print("Invalid Permissions")

        ...
    }
}

```


</div>
