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

In these guide we will see how you can request a viewer to join your livestream by using the `changeMode()`.

:::note
Before going forward in these guide, do make sure all the attendees join the meeting with mode as `VIEWER` and the host joins with mode as `CONFERENCE`
:::

Let's first have a look at how we will be using the `PubSub` mechanism to acheive the requesting and switching of the participant's mode.

// Visual - Whimsical Request Co host

### Step 1: Loading Viewer List

We will be showing a list of participants who have joined as `VIEWER` to the host along with a button which when clicked will request that particular participant to join the livestream.

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

### Step 2: Requesting a Viewer to Join Livestream

We have a Viewer list ready. Now let us handle the click event for the Join LIvestream button.

We will be using `CHANGE_MODE_$participantId` as the topic for PubSub.

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
  //higlight-end
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

Now that we have implemented the Host requesting the viewer to join the livestream, let's show the request dialog on the viewer side and check his mode to `CONFERENCE`.

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

:::note
Once the viewer has joined the livestream, you can switch the users view similar to that of `CONFERENCE` participant.
:::

### Step 4: Pin the participant

We need to pin the participant so that he comes on the livestream. For these we will listen to the callback on the `onParticipantModeChanged` of `useMeeting` hook.

```js
function MeetingView() {
  const mMeeting = useMeeting({});

  //We are using a reference to the meeting object because
  //While referencing it in the callbacks we want to use its latest state
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

// Video -- React example change mode

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useMeeting](/react/api/sdk-reference/use-meeting/introduction)
- [usePubSub](/react/api/sdk-reference/use-pubsub)
- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
