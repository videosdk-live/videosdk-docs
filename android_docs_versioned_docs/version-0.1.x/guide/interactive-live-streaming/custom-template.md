---
title: Customized Live Stream
sidebar_position: 1
sidebar_label: Customized Live Stream
hide_table_of_contents: false
---

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

- **`Watermark:`** Host can add & update watermark anywhere in the template. In below image we have added VideoSDK watermark on top right side of the screen.

- **`News Mode:`** Host can add dynamic text in lower third banner. in below image we have added some sample text in bottom left of the screen.

![Mobile Custom Template ](https://cdn.videosdk.live/website-resources/docs-resources/mobile_custom_template.png)

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

**`Step 1:`** Create a new React App using the below command

```js
npx create-react-app videosdk-custom-template
```

:::note

You can use VideoSDK's React or JavaScript SDK to create custom template. Following is the example of building custom template with React SDK.

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

**`Step 3:`** Next we will fetch the query parameters, from the URL which we will later use to initialize the meeting

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

**`Step 4:`** Now we will initialize the meeting with the parameters we extracted from the URL. Make sure `joinWithoutUserInteraction` is specified, so that the template engine is able to join directly into the meeting, on the page load.

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

**`Step 5:`** Let us create the `MeetingContainer` which will render the meeting view for us.

- It will also listen to the PubSub messages from the `CHANGE_BACKGROUND` topic, which will change the background color of the meeting.
- It will have `Notification` component which will show any messages share by Host

:::note

We will be using the PubSub mechanism to communicate with the template. You can learn more about [PubSub from here](../video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

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

**`Step 6:`** Let us create the `ParticipantView` and `ParticipantsAudioPlayer` which will render the video and audio of the participants respectively.

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

**`Step 7:`** Let us create the `Notification` component which will listen to PubSub messages for the topic `VIEWER_MESSAGE` and show a notification on the lower left corner.

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

For the CSS stylings and animations used in the project, please [refer to this file](https://github.com/videosdk-live/quickstart/blob/main/react-custom-template-manager/src/index.css).

:::

**`Step 9:`** Once tested, you can deploy it using your backend or host it on services like [firebase](https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/) or vercel.

:::tip

You can checkout the github repository for sample custom template we just [created here](https://github.com/videosdk-live/videosdk-custom-recording-template-react-example).

:::

### Setup Livestream Using Custom Template

- To use Custom Template, you will need Host and Viewer setup from where the host will start the livestream and viewer can watch them.

![Android Custom Template Example](https://cdn.videosdk.live/website-resources/docs-resources/android_custom_template.png)


- You can clone this example and run it on your system.

```bash
git clone https://github.com/videosdk-live/quickstart.git
```

- The cloned example will contain two directories under the `android-custom-template-manager` directory which has to runned.

  -  **For Kotlin** : `Videosdk_android_kotlin_hls_quickstart`
  - **For Java** : `Videosdk_android_java_hls_quickstart`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
cd android-custom-template-manager
cd Videosdk_android_kotlin_hls_quickstart
```

</TabItem>

<TabItem value="Java">

```js
cd android-custom-template-manager
cd Videosdk_android_java_hls_quickstart
```
</TabItem>

</Tabs>

- To use the custom template which we just deployed, we will call the start HLS API instead of the `startHls` method from the `Meeting` class. This code has already been added in the example you cloned.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
btnHls!!.setOnClickListener {
  //Update your Custom Template URL here if you have deployed your own
  //highlight-start
  val templateUrl =
      "https://lab.videosdk.live/react-custom-template-demo?meetingId=" + meeting!!.meetingId + "&token=" + token
  //highlight-end
      
  val bodyJson = JSONObject()
  JsonUtils.jsonPut(bodyJson, "roomId", meeting!!.meetingId)
  JsonUtils.jsonPut(bodyJson, "templateUrl", templateUrl)

  val config= new JSONObject()
  JsonUtils.jsonPut(config,"orientation","portrait")
  JsonUtils.jsonPut(bodyJson,"config",config)

  AndroidNetworking.post("https://api.videosdk.live/v2/hls/start")
    .addHeaders(
        "Authorization",
        token
    ) //we will pass the token in the Headers
    .addJSONObjectBody(bodyJson)
    .build()
    .getAsJSONObject(object : JSONObjectRequestListener {
        override fun onResponse(response: JSONObject) {
            try {
                Log.d("TAG", "onResponse: $response") // result will have downstreamUrl
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
        override fun onError(anError: ANError) {
            anError.printStackTrace()
            Toast.makeText(
                mContext,
                anError.message,
                Toast.LENGTH_SHORT
            ).show()
        }
    })
}
```

</TabItem>

<TabItem value="Java">

```js
btnHls.setOnClickListener(v -> {
  //Update your Custom Template URL here if you have deployed your own
  //highlight-start
  final String templateUrl = 
  "https://lab.videosdk.live/react-custom-template-demo?meetingId=" + meeting.getMeetingId() + "&token=" + token;
  //highlight-end

  JSONObject bodyJson = new JSONObject();
  JsonUtils.jsonPut(bodyJson, "roomId", meeting.getMeetingId());
  JsonUtils.jsonPut(bodyJson, "templateUrl", templateUrl);

  JSONObject config= new JSONObject();
  JsonUtils.jsonPut(config,"orientation","portrait");
  JsonUtils.jsonPut(bodyJson,"config",config);

  AndroidNetworking.post("https://api.videosdk.live/v2/hls/start")
    .addHeaders("Authorization", token) //we will pass the token in the Headers
    .addJSONObjectBody(bodyJson)
    .build()
    .getAsJSONObject(new JSONObjectRequestListener() {
        @Override
        public void onResponse(JSONObject response) {
            try {
                Log.d("TAG", "onResponse: " + response.toString()); // result will have downstreamUrl
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        @Override
        public void onError(ANError anError) {
            anError.printStackTrace();
            Toast.makeText(mContext, anError.getMessage(), Toast.LENGTH_SHORT).show();
        }
    });
});
```

</TabItem>

</Tabs>

- This example has two option on the Host side which will allow them to change the background and send the messages to the viewer.

- Let's give this example a test run.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing controls url="https://cdn.videosdk.live/website-resources/docs-resources/android_custom_template_video.mp4" height="500px" width={"100%"} />

</div>

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [Start HLS API](/api-reference/realtime-communication/start-hlsStream)
- [onHlsStateChanged](/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onhlsstatechanged)