---
title: Customized Live Stream
sidebar_position: 1
sidebar_label: Customized Live Stream
hide_table_of_contents: false
---

# Customized Live Stream - Javascript

VideoSDK is a platform that offers a range of video streaming tools and solutions for content creators, publishers, and developers.

### Custom Template

- Custom template is template for live stream, which allows users to add real-time graphics to their streams.
- With custom templates, users can create unique and engaging video experiences by overlaying graphics, text, images, and animations onto their live streams. These graphics can be customized to match the branding.
- Custom templates enable users to create engaging video content with real-time graphics, with live scoreboards, social media feeds, and other customizations, users can easily create unique and visually appealing streams that stands out from the crowd.

:::note

Custom templates can be used with recordings and RTMP service provided by VideoSDK as well.

:::

### What you can do with Custom Template

Using a custom template, you may create a variety of various modes. Here are a few of the more well-known modes that you can create.

- **`PK Host:`** Host can organise player vs player battle. Below image is example of gaming battle.

![pk host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_pk_battle.png)

- **`Watermark:`** Host can add & update watermark anywhere in the template. In below image we have added VideoSDK watermark on top right side of the screen.

![watermark host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_water_mark.png)

- **`News Mode:`** Host can add dynamic text in lower third banner. in below image we have added some sample text in bottom left of the screen.

![news mode](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_news_live.png)

### Custom template with VideoSDK

In this section, we will discuss how Custom Templates work with VideoSDK.

- **`Host`**: The host is responsible for starting the live streaming by passing the `templateURL`. The `templateURL` is the URL of the hosted template webpage. The host is also responsible for managing the template, such as changing text, logos, and switching template layout, among other things.

- **`VideoSDK Template Engine`** : The VideoSDK Template Engine accepts and opens the templateURL in the browser. It listens to all the events performed by the Host and enables customization of the template according to the Host's preferences.

- **`Viewer`**: The viewer can stream the content. They can watch the live stream with the added real-time graphics, which makes for a unique and engaging viewing experience.

![custom template](https://cdn.videosdk.live/website-resources/docs-resources/custom_template.png)

### Understanding Template URL

The template URL is the webpage that VideoSDK Template Engine will open while composing the live stream.

The template URL will appear as shown below.

![template url](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_url.png)

The Template URL consists of two parts:

- Your actual page URL, which will look something like `https://example.com/videosdk-template`.
- Query parameters, which will allow the VideoSDK Template Engine to join the meeting when the URL is opened. There are a total of three query parameters:
  - `token`: This will be your token, which will be used to join the meeting.
  - `meetingId`: This will be the meeting ID that will be joined by the VideoSDK Template Engine.
  - `participantId`: This will be the participant ID of the VideoSDK Template Engine, which should be passed while joining the template engine in your template so that the tempalte engine participant is not visible to other participants. **This parameter will be added by the** **VideoSDK**.

:::info

Above mentioned query parameters are mandatory. Apart from these parameters, you can pass any other extra parameters which are required according to your use-case.

:::

### **Creating Template**

**`Step 1:`** Import VideoSDK using `<script>` tag or you can install the VideoSDK using the below-mentioned npm command.
Make sure you are in your app directory before you run this command.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="<script>" label="<script>" default>

```html
<html>
  <head></head>
  <body>
    // highlight-next-line
    <script src="https://sdk.videosdk.live/js-sdk/0.0.67/videosdk.js"></script>
  </body>
</html>
```

</TabItem>
<TabItem value="npm" label="npm">

```bash
npm install @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @videosdk.live/js-sdk
```

</TabItem>
</Tabs>

:::note

You can use VideoSDK's React or JavaScript SDK to create custom template. Following is the example of building custom template with JavaScript SDK.

:::

###### Structure of the Project

```jsx title="Project Structure"
  root
   ├── index.html
   ├── index.js
```

**`Step 2:`** Create UI that will be shown to your live stream.

```html title="index.html"
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <div id="textDiv">Starting live stream...</div>

    <!-- render Video -->
    <div class="row" id="videoContainer"></div>

    <script src="https://sdk.videosdk.live/js-sdk/0.0.67/videosdk.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

**`Step 3:`** Next we will fetch the query parameters, from the URL which we will later use to initialize the meeting and get the elements from DOM

```js title=index.js
const url = window.location;
const urlParams = new URLSearchParams(url.search);

const meetingId = urlParams.get("meetingId");
const token = urlParams.get("token");
const participantId = urlParams.get("participantId");

const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");
```

**`Step 4:`** Now we will initialize the meeting with the parameters we extracted from the URL. Make sure to directly initialize, so that the template engine is able to join directly into the meeting, on the page load.

```js title=index.js
window.VideoSDK.config(token);

const meeting = window.VideoSDK.initMeeting({
  meetingId: meetingId, // required
  name: "recorder", // required
  micEnabled: false,
  webcamEnabled: false,
  participantId: participantId,
});

meeting.join();

meeting.on("meeting-joined", () => {
  textDiv.style.display = "none";
});
```

**`Step 5:`** Let us create the container which will render the meeting view for us on `participant-joined` event.

```js title=index.js
//  participant joined
meeting.on("participant-joined", (participant) => {
  let videoElement = createVideoElement(
    participant.id,
    participant.displayName
  );
  let audioElement = createAudioElement(participant.id);

  participant.on("stream-enabled", (stream) => {
    setTrack(stream, audioElement, participant, false);
  });
  videoContainer.appendChild(videoElement);
  videoContainer.appendChild(audioElement);
});

// participants left
meeting.on("participant-left", (participant) => {
  let vElement = document.getElementById(`f-${participant.id}`);
  vElement.remove(vElement);

  let aElement = document.getElementById(`a-${participant.id}`);
  aElement.remove(aElement);
});

// creating video element
function createVideoElement(pId, name) {
  let videoFrame = document.createElement("div");
  videoFrame.setAttribute("id", `f-${pId}`);

  //create video
  let videoElement = document.createElement("video");
  videoElement.classList.add("video-frame");
  videoElement.setAttribute("id", `v-${pId}`);
  videoElement.setAttribute("playsinline", true);
  videoElement.setAttribute("width", "300");
  videoElement.muted = true;
  videoFrame.appendChild(videoElement);

  let displayName = document.createElement("div");
  displayName.innerHTML = `Name : ${name}`;
  videoFrame.appendChild(displayName);

  return videoFrame;
}

// creating audio element
function createAudioElement(pId) {
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("autoPlay", "false");
  audioElement.setAttribute("playsInline", "true");
  audioElement.setAttribute("controls", "false");
  audioElement.setAttribute("id", `a-${pId}`);
  audioElement.style.display = "none";
  return audioElement;
}

// setting media track
function setTrack(stream, audioElement, participant, isLocal) {
  if (stream.kind == "video") {
    isWebCamOn = true;
    const mediaStream = new MediaStream();
    mediaStream.addTrack(stream.track);
    let videoElm = document.getElementById(`v-${participant.id}`);
    videoElm.srcObject = mediaStream;
    videoElm
      .play()
      .catch((error) =>
        console.error("videoElem.current.play() failed", error)
      );
  }
  if (stream.kind == "audio") {
    if (isLocal) {
      isMicOn = true;
    } else {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(stream.track);
      audioElement.srcObject = mediaStream;
      audioElement
        .play()
        .catch((error) => console.error("audioElem.play() failed", error));
    }
  }
}
```

**`Step 6:`** Now listen to the PubSub messages from the `CHANGE_BACKGROUND` topic, which will change the background color of the meeting.

:::note

We will be using the PubSub mechanism to communicate with the template. You can learn more about [PubSub from here](../video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

:::

```js title=index.js
meeting.on("meeting-joined", () => {
  //  ...

  meeting.pubSub.subscribe("CHANGE_BACKGROUND", (data) => {
    let { message } = data;
    document.body.style.backgroundColor = message;
  });
});
```

**`Step 9:`** Once tested, you can deploy it using your backend or host it on services like [firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) or vercel.

:::tip

You can checkout the github repository for sample custom template we just [created here](https://github.com/videosdk-live/videosdk-custom-recording-template-js-example).

:::

### Setup Livestream Using Custom Template

- To use Custom Template, you will need Host and Viewer setup from where the host will start the livestream and viewer can watch them.

![template manager](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_manager.png)

- You can clone this example and run it on your system.

```bash
git clone https://github.com/videosdk-live/quickstart.git
```

- The cloned example will have a directory `react-custom-template-manager` which has to runned.

```js
cd react-custom-template-manager
npm install
npm run start
```

- To use the custom template which we just deployed, we will call the [Start HLS API](https://docs.videosdk.live/api-reference/realtime-communication/start-hlsStream) instead of the `startHls` method from the `Meeting` class. This code has already been added in the example you cloned.

:::important

You can create your own custom template manager in JavaScript. In this example, we are using a React template manager for better understanding.

:::

```js
<button
  onClick={async () => {
    const url = `https://api.videosdk.live/v2/hls/start`;
    //Update your Custom Template URL here if you have deployed your own, if not deployed you can use this template from our URL.
    //highlight-next-line
    const templateUrl = `https://lab.videosdk.live/react-custom-template-demo?meetingId=${meetingId}&token=${authToken}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        roomId: meetingId,
        templateUrl: templateUrl,
      }),
    };

    const result = await fetch(url, options)
      .then((response) => response.json()) // result will have playbackHlsUrl and livestreamUrl
      .catch((error) => console.error("error", error));
  }}
>
  Start HLS
</button>
```

- This example has two option on the Host side which will allow them to change the background and send the messages to the viewer.

- Let's give this example a test run.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/custom_template_example.mp4" height="500px" width={"100%"} />

</div>

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [Start HLS API](/api-reference/realtime-communication/start-hlsStream)
- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
- [hlsUrls](/react/api/sdk-reference/use-meeting/properties#hlsurls)
- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
