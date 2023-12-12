---
title: Generate HLS Thumbnail | Video SDK
hide_title: true
hide_table_of_contents: false
description: Effortlessly capture HLS stream thumbnails in React using VidoeSDK with a simple API call. Enhance your video streaming application seamlessly. Explore concise API references for quick integration.
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

After initiating the HLS stream, you can effortlessly capture a thumbnail from the ongoing HLS stream in various formats.

The use cases of HLS thumbnail include:

1. **Content Preview**: HLS thumbnails provide a quick preview of the content being streamed, helping users decide whether to join or continue watching.

2. **Enhanced User Experience**: Thumbnails offer a visual cue about the content, improving the overall user experience by making it more interactive and engaging.

3. **Adaptive Thumbnails**: Thumbnails can dynamically update to reflect changes in the live stream, providing users with real-time snapshots of the ongoing content.

Follow these steps to achieve this functionality.

## Step 1: Implement `captureHLSThumbnail()` to Call API

In this step, make a call to the HLS capture API by providing the `roomId` parameter. Refer to the [guide](/api-reference/realtime-communication/fetch-an-hls-thumbnail) for detailed explanations.

```js
const captureHLSThumbnail = async ({ roomId }) => {
  try {
    const response = await fetch(`https://api.videosdk.live/v2/hls/capture`, {
      method: "POST",
      headers: {
        authorization: `YOUR_TOKEN`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomId: roomId }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error capturing HLS thumbnail:", error);
    throw error;
  }
};
```

## Step 2: Create a Button to Capture Thumbnail

To capture an HLS thumbnail while the stream is active, include a condition based on the [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate). Store the captured image and error message in the `useState` for display.

```js
function Controls(props) {
  const { hlsState } = useMeeting();
  const [hlsThumbnailImage, setHlsThumbnailImage] = useState(null);

  return (
    <div>
      {(hlsState === "HLS_STARTED" || hlsState === "HLS_PLAYABLE") && (
        <button
          onClick={async () => {
            try {
              const { filePath, message } = await captureHLSThumbnail({
                roomId: props.meetingId,
              });
              setHlsThumbnailImage({
                imageLink: filePath,
                message: message,
              });
            } catch (error) {
              // Handle error gracefully
              console.error("Error capturing HLS thumbnail:", error);
            }
          }}
        >
          Capture HLS Thumbnail
        </button>
      )}
    </div>
  );
}
```

## Step 3: Display Captured Image

Display the image returned by the [captureHlsThumbnail](#step-1-implement-capturehlsthumbnail-to-call-api) API call. If the capture fails, show an error message from the API response.

```js
function Controls(props) {
  // ... (existing code)

  return (
      {/* ... (existing code) */}
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
            <p>Error In Capturing HLS Thumbnail</p>
            <p>{hlsThumbnailImage?.message}</p>
          </>
        )
      )}
  );
}
```

## Output

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url="/video/capture_hls_thumbnail.mp4" height="500px" width={"100%"} />

</div>

## API Reference

Refer to the following API references for detailed information on the methods used in this guide:

- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
- [HLS Thumbnail API](/api-reference/realtime-communication/fetch-an-hls-thumbnail)
