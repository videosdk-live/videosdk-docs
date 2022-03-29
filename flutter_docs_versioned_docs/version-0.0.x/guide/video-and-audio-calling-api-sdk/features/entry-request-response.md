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

- When anyone joins meeting, he/she will request for joining meeting and that request will get either accepted or denied by host.

## Entry Request

- When anyone asks for joining in your meeting, `Events.entryRequested` event is triggered with data having

  - `participantId` - This is the Id of participant, who have requested for joining meeting
  - `name` - This is the name of the participant.
  - `allow()` - Call this method if you want to allow that participant
  - `deny()` - Call this method if you want to deny that participant

```js
meeting.on(Events.entryRequested, (data) {
  var participantId = data['participantId'];
  var name = data["name"];
  var allow = data["allow"];
  var deny = data["deny"];

  showDialog(
    context: context,
    builder: (context) => AlertDialog(
      title: const Text("Join Request"),
      content: Text("Do you want to allow $name to join meeting?"),
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

- If you have requested for joining meeting, `Events.entryResponded` is triggered when host accept or deny meeting.

  - `decision` - This will tell you, if you are allowed to join or not

```js
meeting.on(Events.entryResponded, (data) {
  var decision = data['decision'];
  if (id == meeting.localParticipant.id) {
    if (decision == 'allowed') {
      print("Allowed to join the meeting.");
    } else {
      print("Denied to join the meeting.");
    }
  }
});
```
