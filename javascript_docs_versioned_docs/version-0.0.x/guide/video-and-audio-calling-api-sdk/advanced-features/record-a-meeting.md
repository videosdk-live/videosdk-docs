---
title: Record a meeting - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide is dedicated to learn more about cloud recording of meetings. It includes topics such as customisation, recording, upload it to s3 etc. 
sidebar_label: Record a meeting
pagination_label: Record a meeting
keywords:
  - Record a meeting
  - Cloud Recording
  - SFU Recording
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: record-a-meeting
---

# Record a Meeting
Video SDK cloud recording enables on-demand cloud recording of your voice calls, video calls and interactive live streaming to your cloud storage.  

## Start Cloud Recording
Call `recordings/start` API to start the recording. You can call it using client or server side javascript function.

```js
import fetch from 'node-fetch';
const params = {
	"roomId" : "abcd-efgh-ijkl"
}
const token = "$YOUR_TOKEN"
const options = {
	method: "POST",
	headers: {
		"Authorization": `${token}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(params),
};
const url= `https://api.videosdk.live/v2/recordings/start`;
const response = await fetch(url, options);
const data = await response.json();
```

## Stop Cloud Recording
Call `/recordings/end` API to start the recording. Similarly, You can call it using client or server side javascript function.

```js
import fetch from 'node-fetch';
const params = {
	"roomId" : "abcd-efgh-ijkl"
}
const options = {
	method: "POST",
	body: JSON.stringify(params),
};
const url= `https://api.videosdk.live/v2/recordings/end`;
const response = await fetch(url, options);
const data = await response.json();
```

## Listen for starting and stopping of Recording
You can always listen when cloud recording has been started for users. Video SDK provides events such as `recording-started` and `recording-stopped`. 

```js
meeting.on("recording-started", () => {
  // operations needs to be done after recording has been started. 
});

meeting.on("recording-stopped", () => {
  // operations required to be done after recording has been stopped. 
});
```
### API Reference
- [Start Cloud Recording](/api-reference/realtime-communication/start-recording)
- [Stop Cloud Recording](/api-reference/realtime-communication/stop-recording)
- [on("recording-started")](/javascript/api/sdk-reference/meeting-class/events#recording-started)
- [on("recording-stopped")](/javascript/api/sdk-reference/meeting-class/events#recording-stopped)