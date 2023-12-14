---
title: Image Capturer | Video SDK
hide_title: true
hide_table_of_contents: false
description: Stream Image Capturer.
sidebar_label: Image Capturer
pagination_label: Image Capturer
keywords:
  - image capturer
  - stream image capturer
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: image-capturer
---

# Image Capturer - React Native

This guide will help us to capture image of participant from video stream.

This can be very helpful in Video KYC use cases where you can capture the image of user holding their identity.

### `captureImage()`

- By using `captureImage()` function of `useParticipant` hook, you can capture image of a local participant from their video stream.
- You can specify the desired height and width in the `captureImage()` function, but these are optional. If not provided, the VideoSDK will automatically use the dimensions of the local participant's webcamStream.
- The `captureImage()` function returns the image in the form of a `base64` string.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-native-sdk";

const { localParticipant } = useMeeting();

const { webcamStream, webcamOn, captureImage } = useParticipant(
  localParticipant.id
);

async function imageCapture() {
  if (webcamOn && webcamStream) {
    const base64 = await captureImage({ height: 400, width: 400 }); // captureImage will return base64 string
    console.log("base64", base64);
  } else {
    console.error("Camera must be on to capture an image");
  }
}
```

:::note

You can only capture an image of local participant. If you called `captureImage()` function on remote participant, you will receive an error. If you want to capture an image of a remote participant, check the documentation below.

:::

### How to capture image of remote participant ?

- Before proceeding, it's crucial to comprehend the [VideoSDK's temporary file storage system](/react-native/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/upload-fetch-temporary-file) and the underlying [pubsub mechanism](/react-native/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/chat-using-pubsub).

- Let's break down the steps using the names Participant A and Participant B for clarity:

#### Step 1 : Initiate Image Capture Request

- In this step, we'll send a request to the Participant B whom we want to capture image using pubsub.
- In order to do that, we will create pubsub topic called `IMAGE_CAPTURE` in `ParticipantView` Component.​
- Here, we are using `sendOnly` property of `publish()` method. Therefore, the request will be send to that participant only.

```js
import {usePubSub} from '@videosdk.live/react-native-sdk';
import {
  TouchableOpacity,
  Text
} from 'react-native';

function ParticipantView({ participantId }) {
  // create pubsub topic to send Request
  const { publish } = usePubSub('IMAGE_CAPTURE');
​
  // send Request to participant
  function sendRequest() {
    // Pass the participantId of the participant to whom you want to capture an image
    // Here, it will be Participant B id, because we want to capture the the image of Participant B
    publish("Sending request to capture image", { persist: false, sendOnly: [participantId] });
  };

  return <>
    // other components
    <TouchableOpacity style={{ width: 80, height : 45, backgroundColor: 'red', position: 'absolute', top: 10 }} onPress={() => {
        sendRequest()
    }}>
      <Text style={{ fontSize: 15, color: 'white', left:10 }}>
          Capture Image
      </Text>
    </TouchableOpacity>
  </>;
}
​
```

#### Step 2 : Capture and Upload File

- To capture image from remote participant [Participant B], we've created the `CaptureImageListener` component. When a participant receives an image capture request, this component uses the `captureImage` function of `useParticipant` hook to capture the image.

```js
import {
  useFile,
  usePubSub,
  useParticipant
} from '@videosdk.live/react-native-sdk';
​
const CaptureImageListner = ({ localParticipantId }) => {
​
  const { captureImage } = useParticipant(localParticipantId);
​
  // subscribe to receive request
  usePubSub('IMAGE_CAPTURE', {
    onMessageReceived: (message) => {
      _handleOnImageCaptureMessageReceived(message);
    },
  });
​
  const _handleOnImageCaptureMessageReceived = (message) => {
    try {
      if (message.senderId !== localParticipantId) {
        // capture and store image when message received
        captureAndStoreImage({ senderId: message.senderId });
      }
    } catch (err) {
      console.log("error on image capture", err);
    }
  };

  async function captureAndStoreImage({ senderId }) {
    // capture image
    const base64Data = await captureImage({height:400,width:400});
    console.log('base64Data',base64Data);
  }

  return <></>;
};

export default CaptureImageListner;
```

- The captured image is then stored in the VideoSDK's temporary file storage system using the `uploadBase64File()` function of `useFile` hook. This operation returns a unique `fileUrl` of the stored image.

```js
const CaptureImageListner = ({ localParticipantId }) => {
  const { uploadBase64File } = useFile();

  async function captureAndStoreImage({ senderId }) {
    // capture image
    const base64Data = await captureImage({ height: 400, width: 400 });
    const token = "<YOUR-TOKEN>";
    const fileName = "myCapture.jpeg"; // specify a name for image file with extension
    // upload image to videosdk storage system
    const fileUrl = await uploadBase64File({ base64Data, token, fileName });
    console.log("fileUrl", fileUrl);
  }

  //...
};
```

- Next, the `fileUrl` is sent back to the participant who initiated the request using the `IMAGE_TRANSFER` topic.

```js
const CaptureImageListner = ({ localParticipantId }) => {
  //...

  // publish image Transfer
  const { publish: imageTransferPublish } = usePubSub("IMAGE_TRANSFER");

  async function captureAndStoreImage({ senderId }) {
    //...
    const fileUrl = await uploadBase64File({ base64Data, token, fileName });
    imageTransferPublish(fileUrl, { persist: false, sendOnly: [senderId] });
  }

  //...
};
```

- We've rendered the `CaptureImageListener` component within the `MeetingView` component.

```js
import CaptureImageListner from './captureImageListner';
import {useMeeting} from '@videosdk.live/react-native-sdk';
​
function MeetingView() {
​
 //...
​
 // Get `localParticipant` from useMeeting Hook
 const {localParticipant } = useMeeting({});
​
 return (
  <View>
    // other components
    <CaptureImageListner localParticipantId={localParticipant?.id} />
  </View>
 );
}
```

#### Step 3 : Fetch and Display Image

- To display a captured image, we introduce the `ShowImage` component. Here's how it works:

- Within `ShowImage`, we subscribe to the `IMAGE_TRANSFER` topic, receiving the `fileUrl` associated with the captured image. Once obtained, we leverage the `fetchBase64File()` function from the `useFile` hook to retrieve the file in `base64` format from VideoSDK's temporary storage.

```js
import {
  useMeeting,
  useFile
} from '@videosdk.live/react-native-sdk';

function ShowImage() {
  const mMeeting = useMeeting();
  const { fetchBase64File } = useFile();
  ​
  const topicTransfer = "IMAGE_TRANSFER";
  ​
  const [bitMapImg, setbitMapImg] = useState(null);
  ​
  usePubSub(topicTransfer, {
    onMessageReceived: (message) => {
      if (message.senderId !== mMeeting.localParticipant.id) {
        fetchFile({ url: message.message }); // pass fileUrl to fetch the file
      }
    }
  });
  ​
  async function fetchFile({ url }) {
    const token = "<YOUR-TOKEN>";
    const base64 = await fetchBase64File({ url, token });
    console.log("base64",base64); // here is your image in a form of base64
    setbitMapImg(base64);
  }
}
```

- With the `base64` data in hand, we display the image in a modal. This seamless image presentation is integrated into the `MeetingView` component.

```js
import { Image, Modal, Pressable } from "react-native";

function ShowImage() {
  //...

  return (
    <>
      {bitMapImg ? (
        <View>
          <Modal animationType={"slide"} transparent={false}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  style={{ height: 400, width: 300, objectFit: "contain" }}
                  source={{ uri: `data:image/jpeg;base64,${bitMapImg}` }}
                />
                <Pressable onPress={() => setbitMapImg(null)}>
                  <Text style={{ color: "black" }}>Close Dialog</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
}
```

```js
function MeetingView() {
  // ...
  return (
    <View>
      // other componets
      <CaptureImageListner localParticipantId={localParticipant?.id} />
      <ShowImage />
    </View>
  );
}
```

:::note

The file stored in the [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) will be automatically deleted once the current room/meeting comes to an end.

:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react-native/api/sdk-reference/use-participant/introduction)
- [pub-sub](/react-native/api/sdk-reference/use-pubsub)
- [useFile](/react-native/api/sdk-reference/use-file)
