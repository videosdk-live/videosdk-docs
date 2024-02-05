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

# Invite Guest on Stage - React

This guide explains the process of inviting a viewer to join a livestream using the `changeMode()` method.

:::note
Before proceeding with this guide, ensure that all attendees join the meeting with the mode set to `VIEWER`, while the host joins with the mode set to `CONFERENCE`.
:::

The diagram below illustrates the utilization of the `PubSub` mechanism to facilitate the requesting and switching of the participant's mode.

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/invite_guest_pubsub.png)

### Step 1: Loading the Viewer List

First, the host will be presented with a list of participants who have joined as `VIEWER`, accompanied by a button that, when selected, will invite that user to join the livestream.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

function MeetingView() {
  const { meetingId } = useMeeting();
  return (
    <>
      <p>{meetingId}</p>
      <ViewerList />
    </>
  );
}
function ViewerList() {
  const { participants } = useMeeting();

  //Filtering only viewer participant
  //highlight-start
  const viewers = [...participants.values()].filter((participant) => {
    return participant.mode == Constants.modes.VIEWER;
  });
  //highlight-end

  return (
    <div>
      {viewers.map((participant) => {
        return <ViewerListItem participantId={participant.id} />;
      })}
    </div>
  );
}
function ViewerListItem({ participantId }) {
  const { displayName } = useParticipant(participantId);
  return (
    <div>
      {displayName} <button>Request to join Livestream</button>
    </div>
  );
}
```

![invite-guest-pubsub](https://cdn.videosdk.live/website-resources/docs-resources/react_ils_viewer_list.png)

### Step 2: Requesting a Viewer to Join Livestream

Now, with the Viewer list in place, handle the click event for the "Join Livestream" button by utilizing `CHANGE_MODE_$participantId` as the topic for PubSub.

```js
import { usePubSub } from "@videosdk.live/react-sdk";

function ViewerListItem({ participantId }) {
  const { displayName } = useParticipant(participantId);
  const { publish } = usePubSub(`CHANGE_MODE_${participantId}`);

  //highlight-start
  //Publishing the pubsub message with new mode
  const onClickRequestJoinLiveStream = () => {
    publish("CONFERENCE");
  };
  //highlight-end

  return (
    <div>
      {displayName}{" "}
      <button
        onClick={() => {
          onClickRequestJoinLiveStream();
        }}
      >
        Request to join Livestream
      </button>
    </div>
  );
}
```

### Step 3: Showing Viewer Request Dialog

After implementing the host's request for a viewer to join the livestream, display the viewer's request dialogue and switch the mode from `VIEWER` to `CONFERENCE`.

```js
function MeetingView() {
  const { localParticipant, changeMode } = useMeeting();
  const [joinLivestreamRequest, setJoinLivestreamRequest] = useState();

  //Subscribe to new message on these topic and show confirmation dialog.
  //highlight-start
  const pubsub = usePubSub(`CHANGE_MODE_${localParticipant?.id}`, {
    onMessageReceived: (pubSubMessage) => {
      setJoinLivestreamRequest(pubSubMessage);
    },
  });
  //highlight-end

  return (
    <>
      ...
      {joinLivestreamRequest && (
        <div>
          {joinLivestreamRequest.senderName} requested you to join Livestream
          <button
            onClick={() => {
              changeMode(joinLivestreamRequest.message);
              setJoinLivestreamRequest(null);
            }}
          >
            Accept
          </button>
          <button
            onClick={() => {
              setJoinLivestreamRequest(null);
            }}
          >
            Reject
          </button>
        </div>
      )}
    </>
  );
}
```

![react_ils_cohost_join_request](https://cdn.videosdk.live/website-resources/docs-resources/react_ils_cohost_join_request.png)

### Step 4: Pin the participant

To ensure the participant appears on the livestream, they have to be pinned. This can be achieved by listening to the callback on the `onParticipantModeChanged` event of the `useMeeting` hook.

```js
function MeetingView() {
  const mMeeting = useMeeting({});

  //Here a reference to the meeting object is used because
  //while referencing it in the callbacks its latest state has to be obtained.
  const mMeetingRef = useRef();

  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  const { localParticipant, changeMode } = useMeeting({
    onParticipantModeChanged: ({ participantId, mode }) => {
      const localParticipant = mMeetingRef.current?.localParticipant;

      if (participantId == localParticipant.id) {
        if (mode == "CONFERENCE") {
          localParticipant.pin();
        } else {
          localParticipant.unpin();
        }
      }
    },
  });

  return <>...</>;
}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/react_ils_invite_guest.mp4" height="500px" width={"100%"} />

</div>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
- [usePubSub](/react/api/sdk-reference/use-pubsub)
- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
