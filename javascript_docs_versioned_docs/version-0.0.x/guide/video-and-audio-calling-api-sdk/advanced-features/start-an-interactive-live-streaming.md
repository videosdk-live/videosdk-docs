---
title: Start an Interactive Live Streaming - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide is dedicated to learn more about RTMP siulcasting of meetings. It includes topics such as customisation in layouts.
sidebar_label: Start an Interactive Live Streaming
pagination_label: Start an Interactive Live Streaming
keywords:
  - interactive live streaming
  - HLS Streaming
  - live broadcasting
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: start-an-interactive-live-streaming
---

# Start an Interactive Live Streaming
Video SDK Interactive Live Streaming enables on-demand composed live streaming of voice calls, video calls. It supports thousands of concurrent users at the same time in one single room. 

## Start HLS
Call `livestreams/start` to start RTMP out to specific RTMP URL. You can call it using client or server side javascript function.

```js
import fetch from 'node-fetch';
const params = {
    "roomId" : "abcd-efgh-ijkl"
}
const token = "$YOUR_TOKEN";
const options = {
	method: "POST",
	headers: {
		"Authorization": `${token}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(params),
};
const url= `https://api.videosdk.live/v2/hls/start`;
const response = await fetch(url, options);
const data = await response.json();
```

## Stop HLS
Call `/hls/start` API to start interactive live streaming. You can also build with customised layout for your live streaming. 

```js
import fetch from 'node-fetch';
const params = {
    "roomId" : "abcd-efgh-ijkl"
}
const token = "$YOUR_TOKEN";
const options = {
	method: "POST",
	headers: {
		"Authorization": `${token}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(params),
};
const url= `https://api.videosdk.live/v2/hls/end`;
const response = await fetch(url, options);
const data = await response.json();
```

## Listen for starting and stopping of Interactive Live Streaming
You can always listen when cloud recording has been started for users. Video SDK provides events such as `recording-started` and `recording-stopped`. 

```js
meeting.on("hls-started", ({ downstreamUrl }) => {
  // operations needs to be done after HLS has been started. 
});

meeting.on("hls-stopped", ({ downstreamUrl }) => {
  // operations required to be done after HLS has been stopped. 
});
```

### API Reference
- [Start HLS](/javascript/api/sdk-reference/meeting-class/events#hls-started)
- [Stop HLS](/javascript/api/sdk-reference/meeting-class/events#hls-stopped)
- [on("hls-started")](/javascript/api/sdk-reference/meeting-class/events#hls-started)
- [on("hls-stopeed")](/javascript/api/sdk-reference/meeting-class/events#hls-stopped)