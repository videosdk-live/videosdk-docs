---
title: Integrating React JS SDK - Video SDK
hide_title: false
hide_table_of_contents: false
description: Create customizable real-time video & audio calling applications with React JS SDK with Video SDK add live Video & Audio conferencing to your applications.
sidebar_label: "Integrate React SDK"
pagination_label: "Integrate React SDK"
keywords:
  - react sdk
  - react js sdk
  - video call hooks
  - audio call hooks
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: integrate-sdk
---

Our React JS SDK provides a wrapper over JavaScript SDK converting it into usable React hooks API. It simplifies the code for React JS and makes integrating the Video and Audio calls in your app very simple.

### Installing React SDK

You can install our React SDK by using Yarn or [NPM](https://www.npmjs.com/package/@videosdk.live/react-sdk) package managers.

Before installing the React SDK make sure you have Node environment already setup on your machine.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install "@videosdk.live/react-sdk"
```

</TabItem>
<TabItem value="yarn">

```js
yarn add "@videosdk.live/react-sdk"
```

</TabItem>
</Tabs>

:::caution
If you are using Windows machine, make sure to include the **double-quotes** while installation.
:::

### Typescript Support

From version `0.1.52` and higher, typescript is supported by our React JS SDK. It is not necessary to install additional types because they are already part of the NPM package.
