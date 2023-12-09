---
title: Generate HLS Thumbnail | Video SDK
hide_title: true
hide_table_of_contents: false
description: Using VideoSDK to do the interactive livestreaming.
sidebar_label: Generate HLS Thumbnail
pagination_label: Generate HLS Thumbnail
keywords:
  - audio calling
  - video calling
  - real-time communication
  - interactive live streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: generate-hls-thumbnail
---

# Generate HLS Thumbnail - React

After starting the HLS, you can capture thubnail from the ongoing HLS stream in different formats. For achieving this follow this steps.

### Step 1 : Create `captureHLSThumbnail()` to Call API

- In this step, we call the HLS capture API with the `roomId` parameter. For detailed explanation, refer to this [guide].(/api-reference/realtime-communication/fetch-an-hls-thumbnail).

```js
const captureHLSThumbnail = async ({ roomId }) => {
  const res = await fetch(`https://api.videosdk.live/v2/hls/capture`, {
    method: "POST",
    headers: {
      authorization: `YOUR_TOKEN`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roomId: roomId }),
  });

  const data = await res.json();
  return data;
};
```

### Step 2 : Create a Button to Capture Thumbnail

- To capture an HLS thumbnail while the stream is active, we added a condition based on the [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate). The captured image and message are stored in the state for display.

```js
//..
function Controls(props) {
  //highlight-start
  const { hlsState } = useMeeting();
  const [hlsThumbnailImage, setHlsThumbnailImage] = useState(null);

  return (
    <div>
      {(hlsState === "HLS_STARTED" || hlsState === "HLS_PLAYABLE") && (
        <button
          onClick={async () => {
            const { filePath, message } = await captureHLSThumbnail({
              roomId: props.meetingId,
            });
            setHlsThumbnailImage({
              imageLink: filePath,
              message: message,
            });
          }}
        >
          Capture HLS Thumbnail
        </button>
      )}
    </div>
  );
  //highlight-end
}
```

### Step 3 : Display Captured Image

- Here, we display the image returned by the [captureHlsThumbnail](api-reference/realtime-communication/fetch-an-hls-thumbnail) API call. If the capture fails, an error message from the API response is shown.

```js
function Controls(props) {
  // ..
  //highlight-start
  return (
    <>
      {/* //.. */}
      {hlsThumbnailImage && hlsThumbnailImage?.imageLink ? (
        <>
          <p>Captured HLS Thumbnail</p>
          <img
            src={hlsThumbnailImage?.imageLink}
            alt={"capture_image"}
            height={200}
            width={300}
          />
        </>
      ) : (
        hlsThumbnailImage && (
          <>
            <p>Error In Capture HLS Thumbnail</p>
            <p>{hlsThumbnailImage?.message}</p>
          </>
        )
      )}
    </>
  );
  //highlight-end
}
```

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url="/video/capture_hls_thumbnail.mp4" height="500px" width={"100%"} />

</div>

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
- [hlsThumbnailCaptureAPI](/api-reference/realtime-communication/fetch-an-hls-thumbnail)
