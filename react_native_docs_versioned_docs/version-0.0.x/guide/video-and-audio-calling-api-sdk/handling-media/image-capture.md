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

# Image Capturer - ReactNative

In this guide, we will see how to capture image of participant from video stream.

### `captureImage()`

- By using `captureImage()` function of `useParticipant` hook, you can capture image of a local participant from video stream. 

- You can pass your desired height and width in `captureImage()` as parameter. They are not mandatory parameters. If you don't pass height/width or pass invalid values[null,0] for height/width, videosdk will automatically take height/width based on local participant's webcamStream.

- `captureImage()` will return image in a form of `base64`.

```js
const { webcamStream, webcamOn, captureImage } = useParticipant(mMeeting.localParticipant.id);

async function imageCapture() {
    if (webcamOn && webcamStream) {
      const base64 = await captureImage({height:400,width:400}); // captureImage will return base64
      console.log("base64",base64);
    }else{
      conssole.error("Camera must be on to capture an image");
    }
}
```

:::note

You can only capture an image of local participant. If you called `captureImage()` function on Remote participant, you will receive an error. If you want to capture an image of a remote participant, check the documentation below.

:::


### How to capture image of remote participant ?


- You can capture image of remote participant using [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) and [pubsub mechanism](../collaboration-in-meeting/pubsub.md).

- The following example will demonstrate how you can capture image of remote participant.

1. First, we'll send a request to the participant whom we want to capture image using pubsub. In order to do that, we will create pubsub topic called `IMAGE_CAPTURE` in `ParticipantView` Component.

```js
function ParticipantView({ participantId }) {

  // create pubsub topic to send Request
  const { publish } = usePubSub('IMAGE_CAPTURE');
  
  return <>...</>;
}

```

2. Now, we make a request to the participant using `publish()` method. Here, we are using `sendOnly` property `publish()` method. Therefore, the request will be send to that participant only.

```js
function ParticipantView({ participantId }) {
  //

  // send Request to participant
  function sendRequest() {
    // Pass the participantId of the participant to whom you want to capture an image
    publish("Sending request to capture image", { persist: false, sendOnly: [participantId] });
  };
  
  return <>
    <></>
    <TouchableOpacity style={{ width: 80, height : 45, backgroundColor: 'red', position: 'absolute', top: 10 }} onPress={() => {
        sendRequest()
      }}>
        <Text style={{ fontSize: 15, color: 'white', left:10 }}>
            Capture Image
        </Text>
      </TouchableOpacity>
  <></>
  </>;
}

```

3. Now, we'll create `CaptureImageListner` component to subscribe `IMAGE_CAPTURE` topic.
    - In this, we will capture image of remote participant using `captureImage()` function of the `useParticipant` hook when participant received the request.
    - After capturing the image, we will store it in [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) using `uploadBase64File()` function of the `useFile` hook. `uploadBase64File` function will return `fileUrl`. 
    - We will now send that `fileUrl` to the participant who initiated the request. We will use `IMAGE_TRANSFER` as topic to send `fileUrl`.
- We will render this `CaptureImageListner` component in the `MeetingView` Component.

```js title="captureImageListner.js"
import {
    useFile,
    usePubSub,
    useParticipant
  } from '@videosdk.live/react-native-sdk';

  const CaptureImageListner = ({ localParticipantId }) => {

    const { uploadBase64File } = useFile();
    const { captureImage } = useParticipant(localParticipantId);

    // subscribe to receive request
    usePubSub('IMAGE_CAPTURE', {
        onMessageReceived: (message) => {
          _handleOnImageCaptureMessageReceived(message);
        },
      });

    const _handleOnImageCaptureMessageReceived = (message) => {
      try {
        if (message.senderId !== localParticipantId) {
            // capture and store image when message received
            captureAndStoreImage({ senderId: message.senderId });
          }
      } catch (err) {
        console.log("err on image capture", err);
      }
    };

    // publish image Transfer
    const { publish: imageTransferPublish } = usePubSub('IMAGE_TRANSFER');

    async function captureAndStoreImage({ senderId }) {
        // capture image
        const base64Data = await captureImage({height:400,width:400});
        const token = "<YOUR-TOKEN>";
        const fileName = "myCapture.jpeg";  // specify a name for image file with extension
        // upload image to videosdk storage system
        const fileUrl = await uploadBase64File({base64Data,token,fileName});
        imageTransferPublish(fileUrl, { persist: false , sendOnly: [senderId] });
      }
  
    return <></>;
  };
  
export default CaptureImageListner
```

```js title="App.js"
import CaptureImageListner from './captureImageListner';

function MeetingView() {

  //...

  // Get `localParticipant` from useMeeting Hook
  const {localParticipant } = useMeeting({});

  return (
    <View>
      <></>
      <CaptureImageListner localParticipantId={localParticipant?.id} />
    </View>
  );
}
```

4. Now, we will create `ShowImage` componenet to retrieve a `fileUrl` and display a captured image.
    - In this, we will subscribe to a `IMAGE_TRANSFER` topic to get the `fileUrl`.
    - Once we have obtained the `fileUrl`, the next step involves retrieving the corresponding file from the [VideoSDK's temporary file storage system](../collaboration-in-meeting/upload-fetch-temporary-file.md) 
    - We can retrieve the file using `fetchBase64File()` function of `useFile` hook. `fetchBase64File()` will return file in the form of `base64`, we will use this `base64` and show an image in Modal.

- We will render this `ShowImage` component in the `MeetingView` Component.

```js
function ShowImage() {

  const mMeeting = useMeeting();
  const { fetchBase64File } = useFile();

  const topicTransfer = "IMAGE_TRANSFER";

  const [bitMapImg, setbitMapImg] = useState(null);

  usePubSub(topicTransfer, {
    onMessageReceived: (message) => {
      if (message.senderId !== mMeeting.localParticipant.id) {
        fetchFile({ url: message.message }); // pass fileUrl to fetch the file
      } 
    }
  });

  async function fetchFile({ url }) {
    const token = "<YOUR-TOKEN>";
    const base64 = await fetchBase64File({ url, token });
    console.log("base64",base64); // here is your image in a form of base64
    setbitMapImg(base64);
  }

  return <>
    {bitMapImg ? (
      <View>
        <Modal animationType={"slide"} transparent={false} >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View>
              <Image
                style={{ height: 400, width: 300, objectFit: "contain" }}
                source={{ uri: `data:image/jpeg;base64,${bitMapImg}` }}
              />
              <Pressable
              onPress={() => setbitMapImg(null)}>
              <Text style={{color:"black"}}>Close Dialog</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    ) : null}
  </>;
}
```

```js
function MeetingView() {
  // ...
  return (
    <View>
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