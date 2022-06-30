<h1 align="center">
  <img src="https://www.linkpicture.com/q/videosdk_Full-Logo_blue.png"/><br/>
<p align="center">
  Video SDK Documentation<br/>
  <a href="https://docs.videosdk.live/">docs.videosdk.live</a>
</p>
</h1>

<p align="center">
   <a href="https://discord.gg/kgAvyxtTxv">
<img src="https://img.shields.io/discord/734858252939952248?logo=discord&style=for-the-badge" />
</a>
<a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Evideo_sdk&screen_name=video_sdk">
<img src="https://img.shields.io/twitter/follow/video_sdk?label=Twitter&logo=twitter&style=for-the-badge" />
</a>
<a href="http://youtube.com/videosdk?sub_confirmation=1">
<img src="https://img.shields.io/youtube/channel/subscribers/UCuY7JzXnpp874oa7uQbUwsA?logo=Youtube&style=for-the-badge" />
</a>
</p>

## Getting Started

This section describes how you can setup our documentation on your machine.

### Prerequisites

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/videosdk-live/videosdk-docs.git
```

2. Install NPM packages

```sh
npm install
```

3. Run the app

```sh
npm run dev
```

## Usage

<!-- In usage, mention how to edit the docs, how to update versions, etc. -->

### Writing Documentation

To just edit older documentation, go to the specified versioned folder for a section, for example, you want to edit documentation for React SDK v0.25.x, open up [react_versioned_docs/version-0.25.x](./react_versioned_docs/version-0.25.x) and edit the required files there.

For updating documentation, go to specific SDK folder, for example, you want to change documentation for JS SDK so you have to open [react_versioned_docs/version-0.25.x](./javascript_docs_versioned_docs/version-0.0.x)
After opening this, you may seen below folder structure
```jsx title="Project Structure"
   javascript_docs_versioned_docs/version-0.0.x
   ├── api
   │     ├── sdk-reference
   ├── guide
   │     ├── video-and-audio-calling-api-sdk
   .    .
```
If you want to modify the [sdk-reference](https://docs.videosdk.live/javascript/api/sdk-reference/setup) of JS SDK, you have to open up `api/sdk-reference` and make changes accordingly or want to modify the [Guide](https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/getting-started) of JS SDK, you have to open up `guide/video-and-audio-calling-api-sdk` and make changes accordingly.
