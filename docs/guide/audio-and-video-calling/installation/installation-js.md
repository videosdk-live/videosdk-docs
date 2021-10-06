---
title: Install Audio and Video Calling SDK in Java Script
hide_title: false
hide_table_of_contents: false
description: This guide explains installation of javascript SDK in your application. it provides npm and yarn package for the same. 
sidebar_label: "JavaScript"
pagination_label: "JavaScript"
keywords:
  - install sdk
  - javascript
  - install via npm
  - install via yarn
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: installation-javascript
---

# Installation: Java Script
There are two ways to install JavaScript SDK.

## First Way: Install via using `<script>` tag

You can import this library using `<script>` tag. The easiest way to get started is to load this library from CDN, and add a couple of lines of code to your web page or app.

```js title="Install via <script>"
<html>
  <head>....</head>
  <body>
    .....
    <script src="https://sdk.zujonow.com/zujo-sdk-2.0.0.min.js"></script>
  </body>
</html>
```

## Second Way: Install using package manager

Another interesting option is to install library in your app and bundle it using webpack or rollup.

### Npm

```js
npm install @videosdk.live/js-sdk
```

### Yarn

```js
yarn add @videosdk.live/js-sdk
```




## Example
Next step is to import the library and start using it.

### Webpack/node-style require

```js title="Webpack/node-style require"
const VideoSDK = require("@videosdk.live/js");
VideoSDK.initMeeting({...})
```

### ES6 import

```js title="ES6 import"
import VideoSDK from "@videosdk.live/js";
VideoSDK.initMeeting({...})
```