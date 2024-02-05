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

This guide demonstrates how to upload and retrieve files from VideoSDK's temporary file storage system.

### `uploadBase64File()`

- By using the `uploadBase64File()` function of the `Meeting` class, you can upload your file to Videosdk's Temporary storage.

- The `uploadBase64File()` function only works with `base64`. Therefore, it is necessary to convert your file into `base64` format.

- You have to pass `base64Data`,`token`,`fileName` as parameter in `uploadBase64File()` function.

- The function will return the corresponding `fileUrl`, which you can then use to retrieve the file.

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

- By using the `fetchBase64File()` method of the `Meeting` class, you can retrieve your file from the Videosdk's Temporary storage.

- You have to pass the `fileUrl` which is returned by `uploadBase64File()` function, and the `token` as parameters to retrieve a file.

- This method will return the image in the form of `base64`.

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
