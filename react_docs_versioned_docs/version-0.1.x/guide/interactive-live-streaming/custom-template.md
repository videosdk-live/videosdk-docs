---
title: Customized Live Stream
sidebar_position: 1
sidebar_label: Customized Live Stream
hide_table_of_contents: false
---

# Customized Live Stream - React

VideoSDK offers a range of video streaming tools and solutions for content creators, publishers, and developers.

### Custom Template

- A custom template is a specialized layout for a live stream that allows users to integrate real-time graphics into their broadcasts. 

- With custom templates, users can enhance their video content by overlaying graphics, text, images, and animations onto their live streams. These elements can be customized to align with specific branding requirements.

- By leveraging custom templates, users can craft dynamic and engaging video experiences. Whether incorporating live scoreboards, social media feeds, or other personalized elements, users have the flexibility to create visually appealing streams that stand out and capture audience attention.

:::note

Custom templates can also be used with recordings and RTMP service provided by VideoSDK.

:::

### What you can do with Custom Templates?

By utilizing a custom template, you have the flexibility to create various modes for your live stream. Here are some popular modes that you can design:

- **`PK Host:`** The host can organize a player vs. player battle, as illustrated in the example of a gaming battle shown below.

![pk host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_pk_battle.png)

- **`Watermark:`** The host has the ability to add and update watermarks anywhere in the template; for instance, the image below features a VideoSDK watermark on the top right side of the screen.

![watermark host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_water_mark.png)

- **`News Mode:`**  Additionally, the host can incorporate dynamic text in the lower third banner, as demonstrated by the sample text in the bottom left of the screen.

![news mode](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_news_live.png)

### Custom template with VideoSDK

This section focuses on how Custom Templates work, with VideoSDK.

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

**`Step 1:`** Create a new React App using the below command

```js
npx create-react-app videosdk-custom-template
```

:::note

You can use VideoSDK's React or JavaScript SDK to create custom template. Following is the example of building a custom template with React SDK.

:::

**`Step 2:`** Install the VideoSDK using the below-mentioned npm command.

Make sure you are in your react app directory before you run this command.

```js
npm install "@videosdk.live/react-sdk"

//For the Participants Video
npm install "react-player"
```

###### App Architecture

![template architechture](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_arch.png)

###### Structure of the Project

```jsx title="Project Structure"
   root
   ├── node_modules
   ├── public
   ├── src
   │    ├── components
   │          ├── MeetingContainer.js
   │          ├── ParticipantsAudioPlayer.js
   │          ├── ParticipantsView.js
   │          ├── Notification.js
   │    ├── icons
   │    ├── App.js
   │    ├── index.js
   ├── package.json
   .
```

**`Step 3:`** Next, fetch the query parameters, from the URL which will be later used to initialize the meeting.

```js title=App.js
function App() {
  const { meetingId, token, participantId } = useMemo(() => {
    //highlight-start
    const location = window.location;

    const urlParams = new URLSearchParams(location.search);

    const paramKeys = {
      meetingId: "meetingId",
      token: "token",
      participantId: "participantId",
    };

    Object.keys(paramKeys).forEach((key) => {
      paramKeys[key] = urlParams.get(key)
        ? decodeURIComponent(urlParams.get(key))
        : null;
    });

    return paramKeys;
    //highlight-end
  }, []);
}
```

**`Step 4:`** Subsequently, initialize the meeting with the parameters that were extracted from the URL. Make sure `joinWithoutUserInteraction` is specified, so that the template engine is able to join directly into the meeting, on the page load.

```js title=App.js
function App(){
//highlight-next-line
...

return meetingId && token && participantId ? (
  <div>
    <MeetingProvider
      //highlight-start
      config={{
        meetingId,
        micEnabled: false,
        webcamEnabled: false,
        name: "recorder",
        participantId,
      }}
      token={token}
      joinWithoutUserInteraction
      //highlight-end
    >
      {/* We will create this in upcoming steps */}
      <MeetingContainer />
    </MeetingProvider>
  </div>
) : null;

}
```

**`Step 5:`** Next step is to create the `MeetingContainer` which will render the meeting view.

- The container will listen to the PubSub messages from the `CHANGE_BACKGROUND` topic, which will change the background color of the meeting.
- It will also have  the `Notification` component which will show any messages shared by the Host

:::note

The PubSub mechanism is utilized to communicate with the template. You can learn more about [PubSub from here](../video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

:::

```js title=MeetingContainer.js
import { Constants, useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import { Notification } from "./Notification";
import { ParticipantsAudioPlayer } from "./ParticipantsAudioPlayer";
import { ParticipantView } from "./ParticipantView";

export const MeetingContainer = () => {
  const { isMeetingJoined, participants, localParticipant } = useMeeting();
  //highlight-next-line
  const { messages } = usePubSub("CHANGE_BACKGROUND");

  const remoteSpeakers = [...participants.values()].filter((participant) => {
    return participant.mode == Constants.modes.CONFERENCE && !participant.local;
  });

  return isMeetingJoined ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        //highlight-start
        backgroundColor:
          messages.length > 0
            ? messages.at(messages.length - 1).message
            : "#fff",
        //highlight-end
      }}
    >
      //highlight-next-line
      <ParticipantsAudioPlayer />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: remoteSpeakers?.length > 1 ? "1fr 1fr" : "1fr",
          flex: 1,
          maxHeight: `100vh`,
          overflowY: "auto",
          gap: "20px",
          padding: "20px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {[...remoteSpeakers].map((participant) => {
          return (
            //highlight-start
            <ParticipantView
              key={participant.id}
              participantId={participant.id}
            />
            //highlight-end
          );
        })}
      </div>
      //highlight-next-line
      <Notification />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="loader"></div>
    </div>
  );
};
```

**`Step 6:`** Following the creation of `MeetingContainer`, create the `ParticipantView` and `ParticipantsAudioPlayer` which will render the video and audio of the participants respectively.

```js title=ParticipantView.js
import { useParticipant } from "@videosdk.live/react-sdk";
import { useMemo } from "react";
import ReactPlayer from "react-player";
import MicOffIcon from "../icons/MicOffIcon";

export const ParticipantView = (props) => {
  const { webcamStream, webcamOn, displayName, micOn } = useParticipant(
    props.participantId
  );

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        maxWidth: "600px",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#1A1C22",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      class="video-cover"
    >
      {webcamOn && webcamStream ? (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"100%"}
          width={"100%"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      ) : (
        <div
          style={{
            fontSize: "50px",
            color: "#fff",
          }}
        >
          {String(displayName).charAt(0).toUpperCase()}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          left: "10px",
          bottom: "10px",
          backgroundColor: "#050A0E",
          color: "#fff",
          padding: "4px",
          borderRadius: "4px",
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
        }}
      >
        {displayName}{" "}
        {!micOn && <MicOffIcon fillcolor="#fff" height="18" width="18" />}
      </div>
    </div>
  );
};
```

```js title=ParticipantsAudioPlayer.js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";

const ParticipantAudio = ({ participantId }) => {
  const { micOn, micStream, isLocal } = useParticipant(participantId);
  const audioPlayer = useRef();

  useEffect(() => {
    if (!isLocal && audioPlayer.current && micOn && micStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(micStream.track);

      audioPlayer.current.srcObject = mediaStream;
      audioPlayer.current.play().catch((err) => {});
    } else {
      audioPlayer.current.srcObject = null;
    }
  }, [micStream, micOn, isLocal, participantId]);

  return <audio autoPlay playsInline controls={false} ref={audioPlayer} />;
};

export const ParticipantsAudioPlayer = () => {
  const mMeeting = useMeeting();

  const participants = mMeeting?.participants;

  return participants ? (
    [...participants.keys()].map((participantId) => (
      <ParticipantAudio
        key={`participant_audio_${participantId}`}
        participantId={participantId}
      />
    ))
  ) : (
    <></>
  );
};
```

**`Step 7:`** To complete the setup, create the `Notification` component, which will actively listen to PubSub messages for the topic `VIEWER_MESSAGE` and display notifications in the lower-left corner.

```js title=Notification.js
import { usePubSub } from "@videosdk.live/react-sdk";
import { useEffect, useRef, useState } from "react";

export const Notification = () => {
  const timeoutRef = useRef(null);
  const handleChatMessage = (msg) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(msg);
    timeoutRef.current = setTimeout(() => {
      setMessage(null);
    }, 3200);
  };
  const [message, setMessage] = useState(null);
  const { publish } = usePubSub("VIEWER_MESSAGE", {
    onMessageReceived: handleChatMessage,
  });
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return message ? (
    <div
      style={{
        backgroundColor: "#232830",
        padding: "10px",
        textAlign: "center",
        color: "#fff",
        position: "absolute",
        bottom: "50px",
        left: "30px",
        borderRadius: "10px",
        animation: "fadein 0.5s",
      }}
    >
      <strong>
        {message.senderName} says {message.message}
      </strong>
    </div>
  ) : null;
};
```

:::note

For the CSS stylings and animations used in the project, [refer to this file](https://github.com/videosdk-live/quickstart/blob/main/react-custom-template-manager/src/index.css).

:::

**`Step 8:`** Once tested, you can deploy it using your backend or host it on services like [firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) or vercel.

:::tip

You can checkout the github repository for sample custom template [created here](https://github.com/videosdk-live/videosdk-custom-recording-template-react-example).

:::

### Setup Livestream Using Custom Template

- To utilize Custom Templates with Livestream, you need to establish both the Host and Viewer setups. The Host initiates the livestream, while Viewers can watch the broadcast.

![template manager](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_manager.png)

- To understand custom templates, clone this example and run it on your system.

```bash
git clone https://github.com/videosdk-live/quickstart.git
```

- The cloned example will contain a directory named `react-custom-template-manager` which needs to be executed.

```js
cd react-custom-template-manager
npm install
npm run start
```

- To utilize the custom template that has been deployed, invoke the [Start HLS API](https://docs.videosdk.live/api-reference/realtime-communication/start-hlsStream) instead of the `startHls` method from the `useMeeting` hook. The necessary code has already been incorporated in the cloned example above.

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
      .then((response) => response.json()) // result will have downstreamUrl
      .catch((error) => console.error("error", error));
  }}
>
  Start HLS
</button>
```

- In this example, the host has two options on their side, enabling them to change the background and send messages to the viewers.

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
