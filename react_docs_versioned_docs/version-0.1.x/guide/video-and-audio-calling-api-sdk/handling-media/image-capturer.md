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

This guide explains how to capture images from participants' video streams using the Image Capturer feature.

### Step 1 : Create Pubsub Topic

- We will create a pubsub topic called `IMAGE_CAPTURE` in `ParticipantView` Component.

```js
function ParticipantView({ participantId }) {
  //..
  //highlight-start
  const [showImagePreview, setShowImagePreview] = useState(false);

  const { publish: imageCaptureUpload } = usePubSub(
    `IMAGE_CAPTURE_${participantId}`,
    {
      onMessageReceived: ({ message }) => {
        if (message.showImagePreviewDialog && isAgent) {
          setShowImagePreview(true);
        }
      },
    }
  );
  //highlight-end
}
```

### Step 2: Place a Button For Image Capture

- Place a button for image capture and publish topic `IMAGE_CAPTURE` on click of the button.

```js
import { CameraIcon } from "@heroicons/react/24/solid";

function ParticipantView({ participantId }) {
  //..
  //highlight-start
  return (
    <div
      style={{
        backgroundColor: "#00000066",
        position: "absolute",
        top: "2px",
        left: "2px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        cursor: "pointer",
      }}
      onClick={() => {
        imageCaptureUpload({ showImagePreviewDialog: true }, { persist: true });
      }}
    >
      <CameraIcon className="w-6 h-6 text-white" />
    </div>
  );
  //highlight-end
}
```

### Step 3 : Create `ImageUploadListener` Component.

Now create `ImageUploadListener` component for subscribe on `IMAGE_CAPTURE` topic

- In this, we will capture the webcam’s current frame track. After getting the current track, we will add a video element.

- After adding the video element, we will add that video element to the canvas element.

```js
import {
  useMeeting,
  useParticipant,
  usePubSub,
} from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";

const ImageUploadListner = () => {
  //highlight-start
  const mMeeting = useMeeting();

  const { webcamStream } = useParticipant(mMeeting?.localParticipant?.id);

  const webcamStreamRef = useRef();

  // ..

  useEffect(() => {
    webcamStreamRef.current = webcamStream;
  }, [webcamStream]);

  const _handleOnImageCaptureMessageReceived = () => {
    try {
      const track = new MediaStream();
      track.addTrack(webcamStreamRef.current.track);

      const video = document.createElement("video");
      video.srcObject = track;
      video.playsInline = true;

      const canvas = document.createElement("canvas");
      canvas.id = "canvasId";

      video.addEventListener("loadeddata", async () => {
        const { videoWidth, videoHeight } = video;
        canvas.width = videoWidth;
        canvas.height = videoHeight;

        try {
          await video.play();
          document.body.appendChild(video);
          let ratio = 16 / 9;
          let x = (canvas.width - videoWidth * ratio) / 2;
          let y = (canvas.height - videoHeight * ratio) / 2;
          canvas.getContext("2d").clearRect(0, 0, x / 2, y / 2);
          canvas.getContext("2d").drawImage(video, 0, 0);

          const url = canvas.toDataURL("image/png");
          document.body.appendChild(canvas);

          uploadImage({ data: url });

          document.body.removeChild(canvas);
          document.body.removeChild(video);
        } catch (error) {
          console.log("error in video", error);
        }
      });
    } catch (err) {
      console.log("err on image capture", err);
    }
  };

  // ..

  return <></>;
  //highlight-end
};

export default ImageUploadListner;
```

- After that, we will upload an image using `uploadImage` function. In that function, we will divide image into chunks and publish `IMAGE_TRANSFER` topic for publishing the chunks of image data.

```js
import {
  useMeeting,
  useParticipant,
  usePubSub,
} from "@videosdk.live/react-sdk";
import { useEffect, useRef } from "react";

const ImageUploadListner = () => {
  //highlight-start
  const mMeeting = useMeeting();

  //..

  // publish image Transfer
  const { publish: imageUpload } = usePubSub("IMAGE_TRANSFER", {});

  function splitStringIntoChunks(str, chunkSize) {
    const chunks = [];
    let index = 0;

    while (index < str.length) {
      chunks.push(str.substring(index, index + chunkSize));
      index += chunkSize;
    }

    return chunks;
  }

  function uploadImage({ data }) {
    // Chunk size, you can change it according to your requirements
    const chunkSize = 500; // bits

    // Total Chunks
    const chunks = splitStringIntoChunks(data, chunkSize);

    // Random String
    const result = Math.random().toString(36).substring(2, 7);

    // Iterate chunk
    for (let i = 0; i < chunks.length; i++) {
      const element = chunks[i];

      // Payload
      const data = {
        index: i,
        totalChunk: chunks.length,
        chunkdata: element,
        id: result.toString(),
      };

      // publish on `IMAGE_TRANSFER` topic
      imageUpload({ data });
    }
  }
  // end publish image transfer

  // subscribe image capture
  usePubSub(`IMAGE_CAPTURE_${mMeeting?.localParticipant?.id}`, {
    onMessageReceived: ({ message }) => {
      _handleOnImageCaptureMessageReceived({ message });
    },
  });
  // end of subscribe image capture

  return <></>;

  //highlight-end
};

export default ImageUploadListner;
```

### Step 4 : Place `ImageUploadListener` in `MeetingContainer`.

- Place `ImageUploadListner` In `MeetingContainer` for receiving and sending data to participants.

```js
function MeetingContainer() {
  //..

  return (
    // ..
    //highlight-start
    <ImageUploadListner />
    //highlight-end
  );

  //..
}
```

### Step 5 : Display ImagePreview

- In order to display ImagePreview, we will create `ImageCapturePreview` component.

- In this we will subscribe to `IMAGE_TRANSFER` topic for receiving image chunk data.

```js
import { Fragment, useState } from "react";
import { usePubSub } from "@videosdk.live/react-sdk";

//highlight-start
const ImageCapturePreview = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const imagesMessages = {};

  // subscribe imageTransfer
  const generateImage = (messages) => {
    // Getting src of image
    const srcImage = messages
      .sort((a, b) => parseInt(a.index) - parseInt(b.index))
      .map(({ chunkdata }) => chunkdata)
      .join("");

    // Setting src of image
    setImageSrc(srcImage);
  };

  usePubSub(`IMAGE_TRANSFER`, {
    onMessageReceived: ({ message }) => {
      const { id, index, totalChunk } = message.data;

      // If you select multiple images, then it will store images on basis of id in imagesMessages object
      if (imagesMessages[id]) {
        imagesMessages[id].push(message.data);
      } else {
        imagesMessages[id] = [message.data];
      }

      // Check whether the index of chunk and totalChunk is same, it means it is last chunk or not
      if (index + 1 === totalChunk) {
        generateImage(imagesMessages[id]);
      }
    },
  });

  // end subscribe imageTransfer

  return (
    <>
      <div className="flex mt-8 items-center justify-center h-full w-full">
        {imageSrc ? (
          <img src={imageSrc} width={300} height={300} />
        ) : (
          <div width={300} height={300}>
            <p className=" text-white  text-center">Loading Image...</p>
          </div>
        )}
      </div>
    </>
  );
};
//highlight-end

export default ImageCapturePreview;
```

### Step 6 : Place ImageCapturePreview Component

- Place the `ImageCapturePreviewcomponent` in `ParticipantView` component for showing capture image.

```js
function ParticipantView() {
  return (
    <div>
      {/* //.. */}
      {showImagePreview && !isLocal && <ImageCapturePreview />}
    </div>
  );
}
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
- [usePubSub()](/react/api/sdk-reference/use-pubsub)
