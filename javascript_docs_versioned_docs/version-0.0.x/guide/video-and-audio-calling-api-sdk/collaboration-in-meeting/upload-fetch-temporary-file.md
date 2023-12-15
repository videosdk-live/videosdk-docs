---
title: Upload & Fetch Temporary File | Video SDK
hide_title: true
hide_table_of_contents: false
description: Upload & Fetch Temporary File.
sidebar_label: Upload-Fetch Temporary File
pagination_label: Upload-Fetch Temporary File
keywords:
  - upload temporary file
  - fetch temporary file
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: upload-fetch-temporary-file
---

# Upload and Retrieve the Temporary File - Javascript

In this guide, we'll demonstrate how to upload and retrieve files from the VideoSDK's temporary file storage system.

### `uploadBase64File()`

- By using `uploadBase64File()` method of `Meeting` class, you can upload your file to Videosdk's Temporary storage.

- The `uploadBase64File()` method only works with `base64`. Therefore, it is necessary to convert your file into `base64` format.

- You have to pass `base64Data`,`token`,`fileName` as parameter in `uploadBase64File()` method.

- The method will return the corresponding `fileUrl`, which will use to retrieve the file.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

const fileUrl = await meeting.uploadBase64File({
  base64Data: "<Your File's base64>", // Convert your file to base64 and pass here
  token: "<VIDEOSDK_TOKEN>",
  fileName: "myImage.jpeg", // Provide name with extension here,
});
```

### `fetchBase64File()`

- By using `fetchBase64File()` method of `Meeting` class, you can retrieve your file from the Videosdk's Temporary storage.

- You have to pass `fileUrl` which is returned by `uploadBase64File()` method and `token` as parameter to retrieve file.

- `fetchBase64File()` will return image in form of `base64`.

```js
let meeting;

// Initialize Meeting
meeting = VideoSDK.initMeeting({
  // ...
});

let base64 = await meeting.fetchBase64File({
  url: "<Your FileUrl>"; // Provide fileUrl which is returned by uploadBase64File(),
  token :"<VIDEOSDK_TOKEN>",
});

console.log("base64", base64);
```

:::note

The file stored in the system will be automatically deleted once the current room/meeting comes to an end.

:::
