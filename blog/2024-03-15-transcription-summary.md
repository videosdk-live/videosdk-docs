---
title: How to Enable Transcription and Summary in VideoSDK
description: Explore the seamless transition from Twilio to Video SDK for android with our comprehensive migration guide. Elevate your video communication with expert insights and step-by-step instructions.
keywords:
  - Twilio to Video SDK migration guide for Android
  - Twilio to Video SDK migration guide
  - Twilio to Video SDK migration tutorial
slug: transcription-summary

hide_table_of_contents: false
---
<!-- truncate -->

## Overview

Transcription API empowers developers to convert spoken language into written text automatically. In this tutorial, we'll delve into how to effectively utilize a Transcription API to transcribe meeting recordings. We'll explore two distinct methods for initiating transcription: enabling transcription via the start recording API and enabling transcription via auto-configuration while creating a meeting using API.

This feature is currently in BETA.

## Prerequisites
Before diving into the Transcription API, ensure you have:
- Basic knowledge of REST APIs.
- Understanding of JSON formatting.
- An [Auth Token](https://dev-docs.videosdk.live/react/guide/video-and-audio-calling-api-sdk/authentication-and-token) for the Transcription API.


## Step 1: Understand the workflow

Before enabling transcription and summary features in VideoSDK, it's important to understand the basic workflow. Transcription and summarization occur after recording, meaning that recording is a necessary step before these features can be used. To activate the transcription and summary APIs, you must first start recording using either the Start Recording API or by auto config recording within the Create Meeting API.
To use transcription, recordings needs to be stored in VideoSDK Cloud

## Step 2: Choosing Your Method

There are two primary methods for initiating transcription
- via the [start recording API](https://dev-docs.videosdk.live/api-reference/realtime-communication/start-recording#config)
- via auto configuration while [creating a meeting API](https://dev-docs.videosdk.live/api-reference/realtime-communication/create-room#autoStartConfig)

Choose the method that best fits your use case.

#### Option 1: Enabling Transcription via Recording API

In this method, transcription is enabled by including a transcription object with the property enabled set to true in the start recording API request. Below is an example implementation in Node.js:


Request
```js
import fetch from 'node-fetch';
const options = {
	method: "POST",
	headers: {
		"Authorization": "YOUR_TOKEN",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
				"roomId" : "room-id",
				"transcription": {
					"enabled": true
				},
				"summary": {
					"enabled": true
				}
			}),
};
const url= `https://api.videosdk.live/v2/recordings/start`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
```

Response

```js
"Recording started successfully"
```

Replace **`room-id`** with the ID of your meeting or room and **`YOUR_TOKEN` with your auth token**. 

Additionally, you can enable summary feature by setting the **`enabled`** property to **`true`** within the summary object.

#### Option 2: Enabling Transcription via Auto Configuration while creating meeting using API 

If you prefer transcription to be enabled by default when creating a meeting, you can configure this during the meeting creation process. Here's an example implementation in Node.js:

Request

```js
import fetch from 'node-fetch';
const options = {
	method: "POST",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
				"autoStartConfig" : {
					"recording": 
						"transcription": {
							"enabled": true
						},
						"summary": {
							"enabled": true
						}
					}
				}
			}),
};
const url= `https://api.videosdk.live/v2/rooms`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
```

Response

```js
{
  "roomId": "abc-xyzw-lmno",
  "disabled": false,
  "createdAt": "2024-02-27T04:49:11.024Z",
  "updatedAt": "2024-02-27T04:49:11.024Z",
  "id": "623d49c760a18e699abcc8a4",
  "links": {
    "get_room": "https://api.videosdk.live/v2/rooms/abc-xyzw-lmno",
    "get_session": "https://api.videosdk.live/v2/sessions/"
  }
```

Replace **`"YOUR_TOKEN"`** with your authentication token and set the summary object's **`enabled`** property to **`true`** if you wish to utilize the summary feature.

In this method, recording will automatically start with transcription enabled when initiating a session with a specified Meeting ID or Room ID.

## Step 3: Conducting a Meeting

You can initiate a meeting using any of our SDKs (Prebuilt, React, React Native, JS, Flutter, Android, iOS).
- Option 1: If you opt to enable transcription via the recording API, pass the transcription object as described in Step 2. The recording will commence with the transcription feature enabled.
- Option 2: If you prefer enabling the transcription feature during meeting creation using the API, the recording will automatically begin with transcription enabled when initiating your meeting.

## Step 4: Retrieving Transcription and Summary

After the recording concludes and transcription was enabled for that recording or meeting, you can retrieve the transcription and summary using the API.

To retrieve the transcription of a meeting, make a GET request to the Transcription API endpoint with the meeting ID. Below is an example using Node.js:

Request

```js
import fetch from 'node-fetch';
const options = {
	method: "GET",
	headers: {
		"Authorization": "$YOUR_TOKEN",
		"Content-Type": "application/json",
	}
};
const roomId = 'room-id';
const url= `https://api.videosdk.live/v2/transcriptions?roomId=${roomId}`;
const response = await fetch(url, options);
const data = await response.json();
console.log(data);
```

Response

```js
{
    "pageInfo": {
        "currentPage": 1,
        "perPage": 20,
        "lastPage": 1,
        "total": 1
    },
    "transcriptions": [
        {
            "id": "transcription-id",
            "status": "completed",
						"roomId": "room-id",
						"sessionId": "session-id",
            "recordingId": "recording-id",
            "filePath": "https://cdn.videosdk.live/encoded/videos/dummy.mp4",
            "transcriptionFilePaths": {
                "json": "https://cdn.videosdk.live/transcriptions/dummy/dummy.json",
                "srt": "https://cdn.videosdk.live/transcriptions/dummy/dummy.srt",
                "txt": "https://cdn.videosdk.live/transcriptions/dummy/dummy.txt",
                "tsv": "https://cdn.videosdk.live/transcriptions/dummy/dummy.tsv",
                "vtt": "https://cdn.videosdk.live/transcriptions/dummy/dummy.vtt"
            },
            "summarizedFilePaths": {
                "txt": "https://cdn.videosdk.live/transcriptions/dummy/dummy-summary.txt"
            },
            "userStorage": null,
            "start": "2024-02-27T16:00:36.828Z",
            "end": "2024-02-27T16:01:46.939Z"
        }
    ]
}
```

Replace **`'YOUR_AUTH_TOKEN'`** with your authentication token and **`'room-id'`** with the ID of your meeting or room.

Here, you will receive `transcriptionFilePaths`  object containing paths of the transcribed files with various formats such as json, srt, txt, tsv, vtt.

Additionally, if you have enabled summary feature, you will receive a  `summarizedFilePaths` object containing path of the summarized text file.

## Conclusion

In this tutorial, you've learned how to enable transcription for meetings using the Transcription API. By following the steps outlined above, you can easily integrate transcription capabilities into your applications and retrieve transcribed text and summaries for your meetings. Transcription can greatly enhance the accessibility and usability of your meeting recordings, making them more searchable and comprehensible. Experiment with these methods and explore further possibilities to unlock the full potential of transcription in your applications and enhance the efficiency and productivity of your meetings.