---
title: Prebuilt Waiting Meeting Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Waiting Meeting features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Waiting Screen
pagination_label: Waiting Screen
keywords:
  - Waiting audio calling
  - Waiting video calling
  - Waiting real-time communication
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: waiting-screen
---

# Waiting Screen - Prebuilt

After the successfull integrating VideoSDK prebuilt features with your webApp, after joining the meeting you can see waiting screen.

This guide will provide an overview of how to do customize waiting screen feature in VideoSDK prebuilt.

### How it works ?

- You have to pass public URL of your image or lottie in `imageUrl` param that you want to display on your waiting screen.

- Then pass your customize message in `text` param that you want to display on your waiting screen.

:::note

It is not compulsory to pass both paramaters. If you want to display just an image or a text you can pass parameters accordingly.

If you do not pass any of the parameters it will display the default waiting screen.

:::

![Go live with VideoSDK](/img/prebuilt/waiting-screen.png)

### Waiting Screen Attributes

To configure waiting screen feature, you need to add waiting screen object in meeting config.

`waitingScreen` object has following attributes:

- `imageUrl`: Provide public URL of your image or lottie.

- `text`: Provide your message.

```js title="index.html"
const config = {
  // ...
  waitingScreen: {
    imageUrl: "<imageUrl || lottieUrl>",
    text: "Connecting to the meeting...",
  },
  // ...
};
```
