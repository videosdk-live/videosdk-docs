---
sidebar_position: 1
---

# Meeting Provider

Meeting Provider simplifies configuration of meeting with by wrapping up core logic with `react-context`.

Every Context object in `react-js` comes with a Provider React component that allows consuming components to subscribe to context changes. To know more about context provider follow <a href="https://reactjs.org/docs/context.html#contextprovider">official document</a>

## Meeting Provider

```js title="Meeting Provider"
<MeetingProvider
  config={{
    meetingId: "meeting-id",
    micEnabled: true,
    webcamEnabled: true,
    name: "Participant Name",
  }}
  token={"token"}
  joinWithoutUserInteraction // Boolean
></MeetingProvider>
```

## MeetingProvider Parameters

---

### meetingId

- Unique Id of the meeting where that participant will be joining.

  - type : `String`
  - `REQUIRED`

Please refer this documentation to craete a room.

---

### name

- Name of the participant who will be joining the meeting, this name will be displayed to other participants in the same meeting.

  - type : String
  - `REQUIRED`

---

### micEnabled

- Whether `mic` of the participant will be on while joining the meeting. If it is set to `false`, then mic of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### webcamEnabled

- Whether `webcam` of the participant will be on while joining the meeting. If it is set to `false`, then webcam of that participant will be `disabled` by default, but can be `enabled` or `disabled` later.

  - type: `Boolean`
  - `REQUIRED`

---

### token

- The auth token generated from your server.

  - type: `String`
  - `REQUIRED`

---

### joinWithoutInteraction

- If `joinWithoutInteraction` is `true`, participant will directly join the meeting with requring to explicitly calling `join()`.

- If `joinWithoutInteraction` is `false`, participant has to call `join()` to join the meeting.

  - type: `Boolean`
  - default: false
  - `OPTIONAL`

---
