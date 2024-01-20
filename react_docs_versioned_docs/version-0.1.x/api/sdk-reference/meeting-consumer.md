---
title: "Meeting Consumer"
sidebar_position: 1
---

# Meeting Consumer - React

## Using meeting consumer

A React component that subscribes to context changes. Meeting Consumer updated to every change in the instance of meeting, participant and streams.

It requires <a href="https://reactjs.org/docs/render-props.html#using-props-other-than-render">function as child</a>. The function receives the current context value and returns a React node.

```js title="Meeting Provider"
<MeetingConsumer
  {...{
    onParticipantJoined: (participant) => {
      setParticipant(participant);
    },
    //All Event Callbacks can be specified here
  }}
>
  {({
    meetingId,
    //All Properties can be specified here

    join,
    leave,
    //All methods can be specified here
  }) => {
    return <MeetingView />;
  }}
</MeetingConsumer>
```

## Properties

<div class="row">
<div class="col col--4 margin-bottom--sm" >

- [meetingId](./use-meeting/properties#meetingid)

</div>

<div class="col col--4 margin-bottom--sm" >

- [meeting](./use-meeting/properties#meeting)

</div>

<div class="col col--4 margin-bottom--sm" >

- [localParticipant](./use-meeting/properties#localparticipant)

</div>
<div class="col col--4 margin-bottom--sm" >

- [mainParticipant](./use-meeting/properties#mainparticipant)

</div>
<div class="col col--4 margin-bottom--sm" >

- [activeSpeakerId](./use-meeting/properties#activespeakerid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [presenterId](./use-meeting/properties#presenterid)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pinnedParticipants](./use-meeting/properties#pinnedparticipants)

</div>
<div class="col col--4 margin-bottom--sm" >

- [participants](./use-meeting/properties#participants)

</div>
<div class="col col--4 margin-bottom--sm" >

- [localMicOn](./use-meeting/properties#localmicon)

</div>
<div class="col col--4 margin-bottom--sm" >

- [localWebcamOn](./use-meeting/properties#localwebcamon)

</div>
<div class="col col--4 margin-bottom--sm" >

- [localScreenShareOn](./use-meeting/properties#localscreenshareon)

</div>

<div class="col col--4 margin-bottom--sm" >

- [isRecording](./use-meeting/properties#isrecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [isLiveStreaming](./use-meeting/properties#islivestreaming)

</div>
<div class="col col--4 margin-bottom--sm" >

- [isHls](./use-meeting/properties#ishls)

</div>
</div>

## Methods

<div class="row">
<div class="col col--4 margin-bottom--sm" >

- [join](./use-meeting/methods#join)

</div>
<div class="col col--4 margin-bottom--sm" >

- [leave](./use-meeting/methods#leave)

</div>
<div class="col col--4 margin-bottom--sm" >

- [end](./use-meeting/methods#end)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableWebcam](./use-meeting/methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableWebcam](./use-meeting/methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [toggleWebcam](./use-meeting/methods#togglewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [unmuteMic](./use-meeting/methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [muteMic](./use-meeting/methods#mutemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [toggleMic](./use-meeting/methods#togglemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [enableScreenShare](./use-meeting/methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [disableScreenShare](./use-meeting/methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [toggleScreenShare](./use-meeting/methods#togglescreenshare)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startRecording](./use-meeting/methods#startrecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopRecording](./use-meeting/methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startLivestream](./use-meeting/methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopLivestream](./use-meeting/methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startHls](./use-meeting/methods#starthls)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopHls](./use-meeting/methods#stophls)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getWebcams](./use-meeting/methods#getwebcams)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeWebcam](./use-meeting/methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--sm" >

- [getMics](./use-meeting/methods#getmics)

</div>
<div class="col col--4 margin-bottom--sm" >

- [changeMic](./use-meeting/methods#changemic)

</div>
<div class="col col--4 margin-bottom--sm" >

- [startVideo](./use-meeting/methods#startvideo)

</div>
<div class="col col--4 margin-bottom--sm" >

- [stopVideo](./use-meeting/methods#stopvideo)

</div>
<div class="col col--4 margin-bottom--sm" >

- [pauseVideo](./use-meeting/methods#pausevideo)

</div>
<div class="col col--4 margin-bottom--sm" >

- [resumeVideo](./use-meeting/methods#resumevideo)

</div>
<div class="col col--4 margin-bottom--sm" >

- [seekVideo](./use-meeting/methods#seekvideo)

</div>
</div>

## Event Callbacks

<div class="row">
<div class="col col--4 margin-bottom--sm" >

- [onParticipantJoined](./use-meeting/events#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onParticipantLeft](./use-meeting/events#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onSpeakerChanged](./use-meeting/events#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onPresenterChanged](./use-meeting/events#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMainParticipantChanged](./use-meeting/events#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onEntryRequested](./use-meeting/events#onentryrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStateChanged](./use-meeting/events#onrecordingstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStarted](./use-meeting/events#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onRecordingStopped](./use-meeting/events#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMeetingJoined](./use-meeting/events#onmeetingjoined)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMeetingLeft](./use-meeting/events#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLivestreamStateChanged](./use-meeting/events#onlivestreamstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLiveStreamStarted](./use-meeting/events#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onLiveStreamStopped](./use-meeting/events#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onHlsStateChanged](./use-meeting/events#onhlsstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onHlsStarted](./use-meeting/events#onhlsstarted)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onHlsStopped](./use-meeting/events#onhlsstopped)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onVideoStateChanged](./use-meeting/events#onvideostatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onVideoSeeked](./use-meeting/events#onvideoseeked)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onPinStateChanged](./use-meeting/events#onpinstatechanged)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onWebcamRequested](./use-meeting/events#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onMicRequested](./use-meeting/events#onmicrequested)

</div>
<div class="col col--4 margin-bottom--sm" >

- [onError](./use-meeting/events#onerror)

</div>
</div>
