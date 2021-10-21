---
title: Start a Video & Audio Call in React JS SDK - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with React JS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "React JS"
pagination_label: "React JS"
keywords:
  - react sdk
  - react js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-react-js
---

# Getting Started - React JS SDK

React JS SDK wraps up out JavaScript SDK into usable hooks API. It simplifies the code for React JS.

## Install a React SDK

The easiest way to get started is by installing the sdk in your app.

### Npm

```js
$ npm install "@videosdk.live/react-sdk"
```

### Yarn

```js
$ yarn add "@videosdk.live/react-sdk"
```

## Use hooks API

Our React JS SDK provides two important hooks API:

- useMeeting
- useParticipant

Also, React Provider and Consumer to listen changes in meeting environment.

- MeetingProvider
- MeetingConsumer

## Example

```js title="Example: using React JS SDK"
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MeetingConsumer,
} from "@videosdk.live/react-sdk";

const Meeting = () => {
  const { sendChatMessage, messages } = useMeeting();
  const { displayName, webcamStream, micStream } = useParticipant(participantId);

  return (...)
}

```

:::note

Check out official example of React JS SDK implementation: [videosdk-rtc-react-sdk-example](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example)

:::
