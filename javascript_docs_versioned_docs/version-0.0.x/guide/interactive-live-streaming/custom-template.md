---
title: Customized Live Stream
sidebar_position: 1
sidebar_label: Customized Live Stream
hide_table_of_contents: false
---

# Customized Live Stream - Javascript

VideoSDK offers a range of video streaming tools and solutions for content creators, publishers, and developers.

### Custom Template

- A custom template is a specialized layout for a live stream that allows users to integrate real-time graphics into their broadcasts.

- With custom templates, users can enhance their video content by overlaying graphics, text, images, and animations onto their live streams. These elements can be customized to align with specific branding requirements.

- By leveraging custom templates, users can craft dynamic and engaging video experiences. Whether incorporating live scoreboards, social media feeds, or other personalized elements, users have the flexibility to create visually appealing streams that stand out and capture audience attention.

:::note

Custom templates can also be used with recordings and RTMP service provided by VideoSDK.

:::

### What you can do with Custom Template

By utilizing a custom template, you have the flexibility to create various modes for your live stream. Here are some popular modes that you can design:

- **`PK Host:`** The host can organize a player vs. player battle, as illustrated in the example of a gaming battle shown below.

![pk host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_pk_battle.png)

- **`Watermark:`** The host has the ability to add and update watermarks anywhere in the template; for instance, the image below features a VideoSDK watermark on the top right side of the screen.

![watermark host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_water_mark.png)

- **`News Mode:`** Additionally, the host can incorporate dynamic text in the lower third banner, as demonstrated by the sample text in the bottom left of the screen.

![news mode](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_news_live.png)

### Custom template with VideoSDK

In this section, we will discuss how Custom Templates work with VideoSDK.

- **`Host`**: The host initiates live streaming by providing the `templateURL`. The `templateURL` is the URL of the hosted template webpage. The host is also responsible for managing the template, including tasks such as altering text, logos, and switching template layouts.

- **`VideoSDK Template Engine`** : The VideoSDK Template Engine accepts and opens the templateURL in the browser, actively listening to all events initiated by the Host. It facilitates the customization of the template in accordance with the host's preferences.

- **`Viewer`**: Viewers can stream the content, experiencing the live stream with added real-time graphics. This feature contributes to a distinctive and engaging viewing experience.

![custom template](https://cdn.videosdk.live/website-resources/docs-resources/custom_template.png)

### Understanding Template URL

The template URL is a webpage that VideoSDK Template Engine will open while composing the live stream.

It will appear as shown below.

![template url](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_url.png)

The Template URL comprises of two essential parts:

- Your actual page URL, resembling something like `https://example.com/videosdk-template`.
- Query parameters, designed to enable the VideoSDK Template Engine to seamlessly join the meeting upon opening the URL. There are three key query parameters in total:
  - `token`: Your token, serving as the authentication key to join the meeting.
  - `meetingId`: The meeting Id of the meeting that the VideoSDK Template Engine will join.
  - `participantId`: The participant ID of the VideoSDK Template Engine. This should be included when joining the template engine in your template, ensuring that the template engine participant remains invisible to other participants. **This parameter is automatically added by the VideoSDK**.

:::info

Above mentioned query parameters are mandatory. Apart from these parameters, you can pass any other extra parameters which are required according to your use-case.

:::

### **Creating Template**

**`Step 1:`** Import VideoSDK using `<script>` tag or install it using the below-mentioned npm command.
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
    <script src="https://sdk.videosdk.live/js-sdk/0.0.82/videosdk.js"></script>
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

**`Step 2:`** Craft a user interface (UI) tailored for your live stream presentation.

```html title="index.html"
<!DOCTYPE html>
<html>
  <head> </head>

  <body>
    <div id="textDiv">Starting live stream...</div>

    <!-- render Video -->
    <div class="row" id="videoContainer"></div>

    <script src="https://sdk.videosdk.live/js-sdk/0.0.82/videosdk.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

**`Step 3:`** Next, fetch the query parameters, from the URL which will be later used to initialize the meeting and get the elements from DOM.

```js title=index.js
const url = window.location;
const urlParams = new URLSearchParams(url.search);

const meetingId = urlParams.get("meetingId");
const token = urlParams.get("token");
const participantId = urlParams.get("participantId");

const videoContainer = document.getElementById("videoContainer");
const textDiv = document.getElementById("textDiv");
```

**`Step 4:`** Subsequently, initialize the meeting with the parameters that were extracted from the URL. Ensure direct initialization so that the template engine seamlessly joins the meeting upon page load.

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

**`Step 5:`** Next step is to create the container that will render the meeting view on the `participant-joined` event.

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

**`Step 6:`** Now, listen to PubSub messages from the `CHANGE_BACKGROUND` topic, triggering a change in the meeting's background color accordingly.

:::note

The PubSub mechanism is utilized to communicate with the template. You can learn more about [PubSub from here](../video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

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

**`Step 7:`** Once tested, you can deploy it using your backend or host it on services like [firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) or vercel.

:::tip

You can checkout the github repository for sample custom template [created here](https://github.com/videosdk-live/videosdk-custom-recording-template-js-example).

:::

### Setup Livestream Using Custom Template

- To utilize Custom Templates with Livestream, you need to establish both the Host and Viewer setups. The Host initiates the livestream, while Viewers can watch the broadcast.

![template manager](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_manager.png)

- To understand custom templates, clone this example and run it on your system.

```bash
git clone https://github.com/videosdk-live/videosdk-custom-recording-template-js-example.git
```

- To utilize the custom template that has been deployed, invoke the [Start HLS API](https://docs.videosdk.live/api-reference/realtime-communication/start-hlsStream) instead of the `startHls` method from the `Meeting` class. The necessary code has already been incorporated in the cloned example above.

:::important

You can create your own custom template manager in JavaScript. In this example, we are using one for better understanding.

:::

```js
<button
  onClick={async () => {
    const url = `https://api.videosdk.live/v2/hls/start`;
    //Update your Custom Template URL here if you have deployed your own, if not deployed you can use this template from our URL.
    //highlight-next-line
    const templateUrl = `https://lab.videosdk.live/js-template-demo/?meetingId=${meetingId}&token=${authToken}`;
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
      .then((response) => response.json()) // result will have downstreamUrl
      .catch((error) => console.error("error", error));
  }}
>
  Start HLS
</button>
```

- In this example, the host has two options on their side, enabling them to change the background and send messages to the viewers.

- Given below is a test run of the example.

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
