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
cURL -H 'Authorization: $YOUR_TOKEN' \ 
	-H 'Content-Type: application/json' \ 
	-XPOST https://api.videosdk.live/v2/rooms
```

Apart from that, you can always validate this room ids before joining the room using:
```js
cURL 	-H 'Authorization: $YOUR_TOKEN' \ 
	-H 'Content-Type: application/json' \ 
	-L -XGET https://api.videosdk.live/v2/rooms/validate/${roomId}
```

**API Reference:**
- [Create Room API](https://api.videosdk.live/v2/rooms)
- [Validate Room API](/api-reference/realtime-communication/validate-room)
