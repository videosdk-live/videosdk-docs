---
title: Create and Validate Meeting ID - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: This guide will describe how to create and validate unique Meeting Id acts like one room where all participants can join.
sidebar_label: Create and Validate Room Id
pagination_label: Create and Validate Room Id
keywords:
  - Create Room
  - Validate Room
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: create-and-validate-room-id
---

# Create and Validate Room Id
Video SDK uses unique ID of meeting as reference to initialise meeting object which represent overall meeting environment. 

## Create Meeting
As we understood earlier about [Authentication and tokens](/javascript/guide/video-and-audio-calling-api-sdk/server-setup). We are going to use authorised tokens to generate unique meeting ids.

To generate meeting Id, you need two parameters 
- Token: Authentication token generated from your server.
- Region: A supported region from of Video SDK. 

### Supported Regions
- **sg001:** Region Code for Singapore, SG.
- **uk001:** Region Code for London, UK.
- **us001:** Region Code for Fremont, CA.
- **eu001:** Region Code for Frankfurt, DE.

First we have to create unique room Id, following is API to create the room Id

```js
import fetch from 'node-fetch';
const options = {
	method: "POST",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
};
const url= `https://api.videosdk.live/v2/rooms`;
const response = await fetch(url, options);
const data = await response.json();
const roomId = data.roomId;
```

Apart from that, you can always validate this room ids before joining the room using:
```js
import fetch from 'node-fetch';
const options = {
	method: "GET",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
};
const roomId = "your_roomId";
const url= `https://api.videosdk.live/v2/rooms/validate/${roomId}`;
const response = await fetch(url, options);
const data = await response.json();
```

**API Reference:**
- [Create Room API](https://api.videosdk.live/v2/rooms)
- [Validate Room API](/api-reference/realtime-communication/validate-room)



