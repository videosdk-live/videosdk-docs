---
sidebar_position: 1
---

# Meeting Consumer

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
<div class="col col--4 margin-bottom--lg" >

- [meetingId](./use-meeting/properties#meetingid)

</div>

<div class="col col--4 margin-bottom--lg" >

- [meeting](./use-meeting/properties#meeting)

</div>

<div class="col col--4 margin-bottom--lg" >

- [localParticipant](./use-meeting/properties#localparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [mainParticipant](./use-meeting/properties#mainparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMainParticipantChanged](./use-meeting/properties#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activeSpeakerId](./use-meeting/properties#activespeakerid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [presenterId](./use-meeting/properties#presenterid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pinnedParticipants](./use-meeting/properties#pinnedparticipants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participants](./use-meeting/properties#participants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localMicOn](./use-meeting/properties#localmicon)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localWebcamOn](./use-meeting/properties#localwebcamon)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localScreenShareOn](./use-meeting/properties#localscreenshareon)

</div>

<div class="col col--4 margin-bottom--lg" >

- [isRecording](./use-meeting/properties#isrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [isLiveStreaming](./use-meeting/properties#islivestreaming)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connections](./use-meeting/properties#connections)

</div>
<div class="col col--4 margin-bottom--lg" >

- [messages](./use-meeting/properties#messages)

</div>
</div>

## Methods

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [join](./use-meeting/methods#join)

</div>
<div class="col col--4 margin-bottom--lg" >

- [leave](./use-meeting/methods#leave)

</div>
<div class="col col--4 margin-bottom--lg" >

- [end](./use-meeting/methods#end)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableWebcam](./use-meeting/methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam](./use-meeting/methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleWebcam](./use-meeting/methods#togglewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unmuteMic](./use-meeting/methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [muteMic](./use-meeting/methods#mutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleMic](./use-meeting/methods#togglemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableScreenShare](./use-meeting/methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableScreenShare](./use-meeting/methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [toggleScreenShare](./use-meeting/methods#togglescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startRecording](./use-meeting/methods#startrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopRecording](./use-meeting/methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startLivestream](./use-meeting/methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopLivestream](./use-meeting/methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startHls](./use-meeting/methods#starthls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopHls](./use-meeting/methods#stophls)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getWebcams](./use-meeting/methods#getwebcams)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeWebcam](./use-meeting/methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getMics](./use-meeting/methods#getmics)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeMic](./use-meeting/methods#changemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startVideo](./use-meeting/methods#startvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopVideo](./use-meeting/methods#stopvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [pauseVideo](./use-meeting/methods#pausevideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [resumeVideo](./use-meeting/methods#resumevideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [seekVideo](./use-meeting/methods#seekvideo)

</div>
<div class="col col--4 margin-bottom--lg" >

- [connectTo](./use-meeting/methods#connectto)

</div>
</div>

## Event Callbacks

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [onParticipantJoined](./use-meeting/events#onparticipantjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onParticipantLeft](./use-meeting/events#onparticipantleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onSpeakerChanged](./use-meeting/events#onspeakerchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onPresenterChanged](./use-meeting/events#onpresenterchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMainParticipantChanged](./use-meeting/events#onmainparticipantchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onEntryRequested](./use-meeting/events#onentryrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStarted](./use-meeting/events#onrecordingstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onRecordingStopped](./use-meeting/events#onrecordingstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMeetingJoined](./use-meeting/events#onmeetingjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMeetingLeft](./use-meeting/events#onmeetingleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLiveStreamStarted](./use-meeting/events#onlivestreamstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onLiveStreamStopped](./use-meeting/events#onlivestreamstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onHlsStarted](./use-meeting/events#onhlsstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onHlsStopped](./use-meeting/events#onhlsstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onVideoStateChanged](./use-meeting/events#onvideostatechanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onVideoSeeked](./use-meeting/events#onvideoseeked)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onPinStateChanged](./use-meeting/events#onpinstatechanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onWebcamRequested](./use-meeting/events#onwebcamrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onMicRequested](./use-meeting/events#onmicrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onSwitchMeeting](./use-meeting/events#onswitchmeeting)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onConnectionOpen](./use-meeting/events#onconnectionopen)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onConnectionClose](./use-meeting/events#onconnectionclose)

</div>
<div class="col col--4 margin-bottom--lg" >

- [onError](./use-meeting/events#onerror)

</div>
</div>
