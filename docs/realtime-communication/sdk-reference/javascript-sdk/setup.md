---
sidebar_position: 1
---

# Setup

With javascript SDK, you can

- Customise call layout and interface
- Manage all the events related to meetings and partcipants
- Call routines on particular event.

To use `javascript-sdk`, you have two choices to make either use `npm` module or `<script>` tag in your bundler or direct in HTML.

## Loading the library using `<script>` tag

You can import this library using `<script>` tag. The easiest way to get started is to load this library from CDN, and add a couple of lines of code to your web page or app.

```js {5} title="Load JS SDK in your app"
<html>
  <head>....</head>
  <body>
    .....
    <script src="https://sdk.videosdk.live/js-sdk/0.0.50/videosdk.js"></script>
  </body>
</html>
```

## Install JS SDK in your app / Bundling with webpack and other tools

Another interesting option is to install library in your app and bundle it using webpack or rollup.

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
npm install @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/js-sdk
```

</TabItem>
</Tabs>

Then in your application code:

```js title="Webpack/node-style require"
const VideoSDK = require("@videosdk.live/js-sdk");

VideoSDK.config("<token>")

VideoSDK.initMeeting({...})
```

Or

```js title="ES6 import"
import { VideoSDK } from "@videosdk.live/js-sdk";

VideoSDK.config("<token>")

VideoSDK.initMeeting({...})
```
