---
sidebar_position: 1
sidebar_label: useFile
pagination_label: Intro to Video SDK useFile Hook
title: Video SDK useFile Hook
---

# Video SDK useFile Hook - React Native

## useFile Hook

`useFile` returns two methods `uploadBase64File()` and `fetchBase64File()` to upload and retrieve files from the VideoSDK's temporary file storage system.

### `uploadBase64File()`

- By using `uploadBase64File()` function, you can upload your file to Videosdk's Temporary storage.

- The function will return the corresponding `fileUrl`, which will use to retrieve the file.

```js
const { uploadBase64File } = useFile();

async function uploadFile() {
    const base64Data = "<Your File's base64Data>"; // Convert your file to base64 and pass here 
    const token = "<Your Token>";
    const fileName = "myImage.jpeg";  // Provide name with extension here
    const url = await uploadBase64File({base64Data,token,fileName});
    console.log("fileUrl",url);
}
```

### `fetchBase64File()`

- By using `fetchBase64File()` function, you can retrieve your file from the Videosdk's Temporary storage.

- `fetchBase64File()` will return image in form of `base64`.

```js
const { fetchBase64File } = useFile();

async function fetchFile() {
    const url = "<Your FileUrl>"; // Provide fileUrl which is returned by uploadBase64File()
    const token = "<Your Token>";
    const base64 = await fetchBase64File({url,token});
    console.log("base64",base64);
}
```



