---
title: Connection Class
sidebar_label: Connection Class
pagination_label: Connection Class
---

<div class="sdk-api-ref-only-h4">

Connection class is used for making connections to different rooms, and it also provides facility to switch between rooms of a meeting

Whenever a new connection establishes between meetings, a Connection instance is created inside [Meeting](../meeting-class/introduction.md) property connections.

## Properties

### roomId

- type : `String`

- unique id of a meeting

### meeting

- type : `ConnectionMeeting`

- Connected Meeting Instance.

### payload

- type : `String`

- Any arbitrary payload you define during the connection.

---

## Methods

### close()

- `close()` is used to close the connection with the meeting.

#### Events associated with `close()`:

- `connection-close` event of meeting class is triggered whenever `connection.close()` being called for both local and remote participants.

#### Returns

- `void`

#### Example

```js
connection.close();
```

</div>
