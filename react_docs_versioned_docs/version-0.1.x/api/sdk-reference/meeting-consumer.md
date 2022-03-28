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
  {
    ({ 
      meetingId, 
      //All Properties can be specified here

      join,
      leave,
      //All methods can be specified here
    }) => {
      return <MeetingView />;
    }
  }
</MeetingConsumer>
```

## Properties

<div class="links-grid">
<div>

- [meetingId](./use-meeting/properties#meetingid)

</div>

<div>

- [meeting](./use-meeting/properties#meeting)

</div>

<div>

- [localParticipant](./use-meeting/properties#localparticipant)

</div>
<div>

- [mainParticipant](./use-meeting/properties#mainparticipant)

</div>
<div>

- [onMainParticipantChanged](./use-meeting/properties#onmainparticipantchanged)

</div>
<div>

- [activeSpeakerId](./use-meeting/properties#activespeakerid)

</div>
<div>

- [presenterId](./use-meeting/properties#presenterid)

</div>
<div>

- [pinnedParticipants](./use-meeting/properties#pinnedparticipants)

</div>
<div>

- [participants](./use-meeting/properties#participants)

</div>
<div>

- [localMicOn](./use-meeting/properties#localmicon)

</div>
<div>

- [localWebcamOn](./use-meeting/properties#localwebcamon)

</div>
<div>

- [localScreenShareOn](./use-meeting/properties#localscreenshareon)

</div>

<div>

- [isRecording](./properties#isrecording)

</div>
<div>

- [isLiveStreaming](./properties#islivestreaming)

</div>
<div>

- [connections](./properties#connections)

</div>
<div>

- [messages](./use-meeting/properties#messages)

</div>
</div>


## Methods

<div class="links-grid">
<div>

- [join](./use-meeting/methods#join)

</div>
<div>

- [leave](./use-meeting/methods#leave)

</div>
<div>

- [end](./use-meeting/methods#end)

</div>
<div>

- [enableWebcam](./use-meeting/methods#enablewebcam)

</div>
<div>

- [disableWebcam](./use-meeting/methods#disablewebcam)

</div>
<div>

- [toggleWebcam](./use-meeting/methods#togglewebcam)

</div>
<div>

- [unmuteMic](./use-meeting/methods#unmutemic)

</div>
<div>

- [muteMic](./use-meeting/methods#mutemic)

</div>
<div>

- [toggleMic](./use-meeting/methods#togglemic)

</div>
<div>

- [enableScreenShare](./use-meeting/methods#enablescreenshare)

</div>
<div>

- [disableScreenShare](./use-meeting/methods#disablescreenshare)

</div>
<div>

- [toggleScreenShare](./use-meeting/methods#togglescreenshare)

</div>
<div>

- [startRecording](./use-meeting/methods#startrecording)

</div>
<div>

- [stopRecording](./use-meeting/methods#stoprecording)

</div>
<div>

- [startLivestream](./use-meeting/methods#startlivestream)

</div>
<div>

- [stopLivestream](./use-meeting/methods#stoplivestream)

</div>
<div>

- [startHls](./use-meeting/methods#starthls)

</div>
<div>

- [stopHls](./use-meeting/methods#stophls)

</div>
<div>

- [getWebcams](./use-meeting/methods#getwebcams)

</div>
<div>

- [changeWebcam](./use-meeting/methods#changewebcam)

</div>
<div>

- [getMics](./use-meeting/methods#getmics)

</div>
<div>

- [changeMic](./use-meeting/methods#changemic)

</div>
<div>

- [startVideo](./use-meeting/methods#startvideo)

</div>
<div>

- [stopVideo](./use-meeting/methods#stopvideo)

</div>
<div>

- [pauseVideo](./use-meeting/methods#pausevideo)

</div>
<div>

- [resumeVideo](./use-meeting/methods#resumevideo)

</div>
<div>

- [seekVideo](./use-meeting/methods#seekvideo)

</div>
<div>

- [connectTo](./use-meeting/methods#connectto)

</div>
</div>

## Event Callbacks

<div class="links-grid">
<div>

- [onParticipantJoined](./use-meeting/events#onparticipantjoined)

</div>
<div>

- [onParticipantLeft](./use-meeting/events#onparticipantleft)

</div>
<div>

- [onSpeakerChanged](./use-meeting/events#onspeakerchanged)

</div>
<div>

- [onPresenterChanged](./use-meeting/events#onpresenterchanged)

</div>
<div>

- [onMainParticipantChanged](./use-meeting/events#onmainparticipantchanged)

</div>
<div>

- [onEntryRequested](./use-meeting/events#onentryrequested)

</div>
<div>

- [onRecordingStarted](./use-meeting/events#onrecordingstarted)

</div>
<div>

- [onRecordingStopped](./use-meeting/events#onrecordingstopped)

</div>
<div>

- [onMeetingJoined](./use-meeting/events#onmeetingjoined)

</div>
<div>

- [onMeetingLeft](./use-meeting/events#onmeetingleft)

</div>
<div>

- [onLiveStreamStarted](./use-meeting/events#onlivestreamstarted)

</div>
<div>

- [onLiveStreamStopped](./use-meeting/events#onlivestreamstopped)

</div>
<div>

- [onHlsStarted](./use-meeting/events#onhlsstarted)

</div>
<div>

- [onHlsStopped](./use-meeting/events#onhlsstopped)

</div>
<div>

- [onVideoStateChanged](./use-meeting/events#onvideostatechanged)

</div>
<div>

- [onVideoSeeked](./use-meeting/events#onvideoseeked)

</div>
<div>

- [onPinStateChanged](./use-meeting/events#onpinstatechanged)

</div>
<div>

- [onWebcamRequested](./use-meeting/events#onwebcamrequested)

</div>
<div>

- [onMicRequested](./use-meeting/events#onmicrequested)

</div>
<div>

- [onSwitchMeeting](./use-meeting/events#onswitchmeeting)

</div>
<div>

- [onConnectionOpen](./use-meeting/events#onconnectionopen)

</div>
<div>

- [onConnectionClose](./use-meeting/events#onconnectionclose)

</div>
<div>

- [onError](./use-meeting/events#onerror)

</div>
</div>

