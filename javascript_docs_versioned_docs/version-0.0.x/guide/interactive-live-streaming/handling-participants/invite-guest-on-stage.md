---
title: Invite Guest on Stage - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Interactive Livestream features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Invite Guest on Stage
pagination_label: Invite Guest on Stage
keywords:
  - Start HLS meeting
  - Stop HLS meeting
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: invite-guest-on-stage
---

# Invite Guest on Stage

In this guide we will see how you can request a viewer to join your livestream by using the `changeMode()`.

:::note
Before going forward in this guide, do make sure all the attendees join the meeting with mode as `VIEWER` and the host joins with mode as `CONFERENCE`
:::

Let's first have a look at how we will be using the `PubSub` mechanism to acheive the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading Viewer List

The host will see a list of participants who have joined as `VIEWER` along with a button that, when selected, will invite that user to join the livestream.

```js
const participants = meeting.participants;

// Filtering only viewer participant
const viewers = [...participants.values()].filter((participant) => {
  return participant.mode == VideoSDK.Constants.modes.VIEWER;
});

viewers.map((participant) => {
  const name = participant.displayName;
  const participantId = participant.id;

  const textEle = document.createElement("p");
  textEle.textContent = name;

  // Create the button
  var button = document.createElement("button");
  button.innerHTML = "Request to join Livestream";

  // Append elements to your viewers list
});
```

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/react_ils_viewer_list.png)

### Step 2: Requesting a Viewer to Join Livestream

We have a Viewer list ready. Now, let us handle the click event for the Join Livestream button.

We will be using `CHANGE_MODE_$participantId` as the topic for PubSub.

```js
const participants = meeting.participants;

// Filtering only viewer participant
const viewers = [...participants.values()].filter((participant) => {
  return participant.mode == VideoSDK.Constants.modes.VIEWER;
});

viewers.map((participant) => {
  const name = participant.displayName;
  const participantId = participant.id;

  const textEle = document.createElement("p");
  textEle.textContent = name;

  // Create the button
  var button = document.createElement("button");
  button.innerHTML = "Request to join Livestream";

  // Append elements to your viewers list

  //highlight-start
  const topic = `CHANGE_MODE_${participantId}`;

  // Publishing the pubsub message with new mode
  button.addEventListener("click", function () {
    meeting?.pubSub.publish(topic, VideoSDK.Constants.modes.CONFERENCE);
  });
  //highlight-end
});
```

### Step 3: Showing Viewer Request Dialog

After implementing the Host requesting viewer to join the livestream, let's display the viewer's request dialogue and switch the `VIEWER` mode to `CONFERENCE`.

```js
function onMessageReceived(data) {
  let { message, senderId, senderName } = data;
  const textEle = document.createElement("p");
  textEle.textContent = `${senderName} requested you to join Livestream`;

  // Create the button
  var acceptButton = document.createElement("button");
  acceptButton.innerHTML = "Accept";

  acceptButton.addEventListener("click", function () {
    meeting?.changeMode(message);
  });

  var rejectButton = document.createElement("button");
  rejectButton.innerHTML = "Reject";
  rejectButton.addEventListener("click", function () {
    //
  });
}

meeting?.pubSub?.subscribe("CHAT", onMessageReceived);
```

![react_ils_cohost_join_request](https://cdn.videosdk.live/website-resources/docs-resources/react_ils_cohost_join_request.png)

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_ils_invite_guest.mp4" height="500px" width={"100%"} />

</div>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [Meeting](/javascript/api/sdk-reference/meeting-class/introduction)
- [pubSub](/javascript/api/sdk-reference/meeting-class/pubsub)
- [participant](/javascript/api/sdk-reference/participant-class/introduction)
