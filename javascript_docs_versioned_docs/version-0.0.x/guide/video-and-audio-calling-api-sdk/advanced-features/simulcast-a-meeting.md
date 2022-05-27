---
title: Simulcast a Meeting - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide is dedicated to learn more about RTMP siulcasting of meetings. It includes topics such as customisation in layouts.
sidebar_label: Simulcast a meeting
pagination_label: Simulcast a meeting
keywords:
  - Record a meeting
  - Cloud Recording
  - SFU Recording
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: simulcast-a-meeting
---

# Simulcast a Meeting
Video SDK cloud simulcasting enables on-demand RTMP of your voice calls, video calls and interactive live streaming to RTMP enables platforms such as YouTube, Meta(Facebook) etc. 

## Start RTMP Out 
Call `livestreams/start` to start RTMP out to specific RTMP URL. You can call it using client or server side javascript function.

```js
import fetch from 'node-fetch';
const params = {
    "roomId" : "abcd-efgh-ijkl",
    "outputs": "[ {'streamKey': 'Platform_StreamKey1', 'url': 'RTMP-URL1'} ]"
}
const token = "$YOUR_TOKEN";
const options = {
	method: "POST",
	headers: {
		"Authorization": `${token}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(params)
};
const url= `https://api.videosdk.live/v2/livestreams/start`;
const response = await fetch(url, options);
const data = await response.json();
```

## Stop RTMP Out
Call `/livestreams/end` API to start the RTMP out. Similarly, You can call it using client or server side javascript function.
```js
import fetch from 'node-fetch';
const params = {"roomId" : "abcd-efgh-lmno"}
const token = "$YOUR_TOKEN";
const options = {
	method: "POST",
    headers: {
		"Authorization": `${token}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(params)
};
const url= `https://api.videosdk.live/v2/livestreams/end`;
const response = await fetch(url, options);
const data = await response.json();
```

## Listen for triggers & events
You can always listen when cloud recording has been started for users. Video SDK provides events such as `livestream-started` and `livestream-stopped`.
```js
meeting.on("livestream-started", () => {
  // Operation needs to be done after live streaming started.
});

meeting.on("livestream-stopped", () => {
  // Operation needs to be done after live streaming stopped.
});
```
### API Reference
- [Start Live Stream](/api-reference/realtime-communication/start-livestream)
- [Stop Live Stream](/api-reference/realtime-communication/stop-livestream)
- [on("livestream-started")](/javascript/api/sdk-reference/meeting-class/events#livestream-started)
- [on("livestream-stopped")](/javascript/api/sdk-reference/meeting-class/events#livestream-stopped)


