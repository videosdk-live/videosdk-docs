---
title: Entry - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Entry features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Entry Request-Response
pagination_label: Entry Request-Response
keywords:
  - entry request response
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: entry-request-response
---

# Entry Request-Response

- When anyone joins room, he/she will request for joining room and that request will get either accepted or denied by host.

## Entry Request

- When anyone asks for joining in your room, `Events.entryRequested` event is triggered with data having

  - `participantId` - This is the Id of participant, who have requested for joining room
  - `name` - This is the name of the participant.
  - `allow()` - Call this method if you want to allow that participant
  - `deny()` - Call this method if you want to deny that participant

```js
room.on(Events.entryRequested, (data) {
  var participantId = data['participantId'];
  var name = data["name"];
  var allow = data["allow"];
  var deny = data["deny"];

  showDialog(
    context: context,
    builder: (context) => AlertDialog(
      title: const Text("Join Request"),
      content: Text("Do you want to allow $name to join room?"),
      actions: [
        TextButton(
          child: const Text("Deny"),
          onPressed: () {
            deny();
            Navigator.of(context).pop();
          },
        ),
        TextButton(
          child: const Text("Allow"),
          onPressed: () {
            allow();
            Navigator.of(context).pop();
          },
        ),
      ],
    ),
  );
});
```

## Entry Respond

- If you have requested for joining room, `Events.entryResponded` is triggered when host accept or deny room.

  - `decision` - This will tell you, if you are allowed to join or not

```js
room.on(Events.entryResponded, (data) {
  var decision = data['decision'];
  if (id == room.localParticipant.id) {
    if (decision == 'allowed') {
      print("Allowed to join the room.");
    } else {
      print("Denied to join the room.");
    }
  }
});
```
