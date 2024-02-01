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

# Image Capturer - React

This guide provides instructions on capturing images of participants from a video stream. 

This capability proves particularly valuable in Video KYC scenarios, enabling the capture of images where users can hold up their identity for verification.

:::note

The `captureImage()` function is supported from version `0.0.79` onward.

Enhance the `captureImage()` function by making the height and width parameters, which is optional from version `0.0.81` onward.

:::

### `captureImage()`

- By using the `captureImage()` function of the `useParticipant` hook, you can capture image of a local participant from their video stream.
- You have the option to specify the desired height and width in the `captureImage()` function; however, these parameters are optional. If not provided, the VideoSDK will automatically use the dimensions of the local participant's webcamStream. 
- The `captureImage()` function returns the image in the form of a `base64` string.

```js
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";

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

You can only capture an image of the local participant. If you called `captureImage()` function on a remote participant, you will receive an error. To capture an image of a remote participant, refer to the documentation below.

:::

### How to capture image of a remote participant ?

- Before proceeding, it's crucial to understand [VideoSDK's temporary file storage system](/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/upload-fetch-temporary-file) and the underlying [pubsub mechanism](/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/pubsub).

- Here's a break down of the steps, using the names Participant A and Participant B for clarity:

#### Step 1 : Initiate Image Capture Request

- In this step, you'll send a request to Participant B, whose image you want to capture, using pubsub.
- In order to do that, you have to create a pubsub topic called `IMAGE_CAPTURE` in the `ParticipantView` Component.​
- Here, you will be using the `sendOnly` property of the `publish()` method. Therefore, the request will be sent to that participant only.

```js title="ParticipantView.js"
import {usePubSub,useParticipant} from '@videosdk.live/react-sdk';

function ParticipantView({ participantId }) {
  // create pubsub topic to send Request
  const { publish } = usePubSub('IMAGE_CAPTURE');
  const { isLocal } = useParticipant(participantId);
​
  // send Request to participant
  function sendRequest() {
    // Pass the participantId of the participant whose image you want to capture
    // Here, it will be Participant B's id, as you want to capture the the image of Participant B
    publish("Sending request to capture image", { persist: false, sendOnly: [participantId] });
  };

  return (
    <>
      // other components
      <button
        style={{
          position: 'absolute', backgroundColor: "#00000066", top: 10 , left:10
        }}
        onClick={async () => {
          if (!isLocal) {
            sendRequest();
          }
        }}
      >
        Capture Image
      </button>
    </>
  );
}
​
```

#### Step 2 : Capture and Upload File

- To capture an image from the remote participant [Participant B], you have to create the `CaptureImageListener` component. When a participant receives an image capture request, this component uses the `captureImage` function of the `useParticipant` hook to capture the image.

```js title="CaptureImageListner.js"
import {
  useFile,
  usePubSub,
  useParticipant
} from '@videosdk.live/react-sdk';
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

- The captured image is then stored in VideoSDK's temporary file storage system using the `uploadBase64File()` function of the `useFile` hook. This operation returns a unique `fileUrl` of the stored image.

```js title="CaptureImageListner.js"
const CaptureImageListner = ({ localParticipantId }) => {
  const { uploadBase64File } = useFile();

  async function captureAndStoreImage({ senderId }) {
    // capture image
    const base64Data = await captureImage({ height: 400, width: 400 });
    const token = "<VIDEOSDK_TOKEN>";
    const fileName = "myCapture.jpeg"; // specify a name for image file with extension
    // upload image to videosdk storage system
    const fileUrl = await uploadBase64File({ base64Data, token, fileName });
    console.log("fileUrl", fileUrl);
  }

  //...
};
```

- Next, the `fileUrl` is sent back to the participant who initiated the request using the `IMAGE_TRANSFER` topic.

```js title="CaptureImageListner.js"
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

- Then the `CaptureImageListener` component has to be rendered within the `MeetingView` component.

```js title="MeetingView.js"
import CaptureImageListner from './captureImageListner';
import {useMeeting} from '@videosdk.live/react-sdk';
​
function MeetingView() {
 //...
​
 // Get `localParticipant` from useMeeting Hook
 const {localParticipant } = useMeeting({});
​
 return (
  <div>
    // other components
    <CaptureImageListner localParticipantId={localParticipant?.id} />
  </div>
 );
}
```

#### Step 3 : Fetch and Display Image

- To display a captured image, the `ShowImage` component is used. Here's how it works:

- Within `ShowImage`, you need to subscribe to the `IMAGE_TRANSFER` topic, receiving the `fileUrl` associated with the captured image. Once obtained, leverage the `fetchBase64File()` function from the `useFile` hook to retrieve the file in `base64` format from VideoSDK's temporary storage.

```js title="ShowImage.js"
import {
  usePubSub,
  useMeeting,
  useFile
} from '@videosdk.live/react-sdk';
import { useState } from "react";

function ShowImage() {
  const mMeeting = useMeeting();
  const { fetchBase64File } = useFile();
  ​
  const topicTransfer = "IMAGE_TRANSFER";
  ​
  const [imageSrc, setImageSrc] = useState(null);
  const [open, setOpen] = useState(false);

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
    const token = "<VIDEOSDK_TOKEN>";
    const base64 = await fetchBase64File({ url, token });
    console.log("base64",base64); // here is your image in the form of base64
    setImageSrc(base64);
    setOpen(true);
  }
}
```

- With the `base64` data in hand, you can now display the image in a modal. This seamless image presentation is integrated into the `MeetingView` component.

```js title="ShowImage.js"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function ShowImage() {
  //...

  return (
    <>
      {imageSrc && (
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => {}}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-750 p-4 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-center text-gray-900"
                    >
                      Image Preview
                    </Dialog.Title>
                    <div className="mt-8 flex flex-col items-center justify-center">
                      {imageSrc ? (
                        <img
                          src={`data:image/jpeg;base64,${imageSrc}`}
                          width={300}
                          height={300}
                        />
                      ) : (
                        <div width={300} height={300}>
                          <p className=" text-white  text-center">
                            Loading Image...
                          </p>
                        </div>
                      )}
                      <div className="mt-4 ">
                        <button
                          type="button"
                          className="rounded border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
```

```js title="MeetingView.js"
function MeetingView() {
  // ...
  return (
    <div>
      // other components
      <CaptureImageListner localParticipantId={localParticipant?.id} />
      <ShowImage />
    </div>
  );
}
```

:::note

The file stored in the [VideoSDK's temporary file storage system](/react/guide/video-and-audio-calling-api-sdk/collaboration-in-meeting/upload-fetch-temporary-file) will be automatically deleted once the current room/meeting comes to an end.

:::

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/introduction)
- [pub-sub](/react/api/sdk-reference/use-pubsub)
- [useFile](/react/api/sdk-reference/use-file)
