---
title: Customized Live Stream
sidebar_position: 1
sidebar_label: Customized Live Stream
hide_table_of_contents: false
---

VideoSDK is a platform that offers a range of video streaming tools and solutions for content creators, publishers, and developers.

### Custom Template

- Custom template is template for live stream, which allows users to add real-time graphics to their streams.
- With custom templates, users can create unique and engaging video experiences by overlaying graphics, text, images, and animations onto their live streams. These graphics can be customized to match the branding.
- Custom templates enable users to create engaging video content with real-time graphics, with live scoreboards, social media feeds, and other customizations, users can easily create unique and visually appealing streams that stands out from the crowd.

:::note

Custom templates can be used with recordings and RTMP service provided by VideoSDK as well.

:::

### What you can do with Custom Template

Using a custom template, you may create a variety of various modes. Here are a few of the more well-known modes that you can create.

- **`PK Host:`** Host can organise player vs player battle. Below image is example of gaming battle.

![pk host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_pk_battle.png)

- **`Watermark:`** Host can add & update watermark anywhere in the template. In below image we have added VideoSDK watermark on top right side of the screen.

![watermark host](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_water_mark.png)

- **`News Mode:`** Host can add dynamic text in lower third banner. in below image we have added some sample text in bottom left of the screen.

![news mode](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_news_live.png)

### Custom template with VideoSDK

In this section, we will discuss how Custom Templates work with VideoSDK.

- **`Host`**: The host is responsible for starting the live streaming by passing the `templateURL`. The `templateURL` is the URL of the hosted template webpage. The host is also responsible for managing the template, such as changing text, logos, and switching template layout, among other things.

- **`VideoSDK Template Engine`** : The VideoSDK Template Engine accepts and opens the templateURL in the browser. It listens to all the events performed by the Host and enables customization of the template according to the Host's preferences.

- **`Viewer`**: The viewer can stream the content. They can watch the live stream with the added real-time graphics, which makes for a unique and engaging viewing experience.

![custom template](https://cdn.videosdk.live/website-resources/docs-resources/custom_template.png)

### Understanding Template URL

The template URL is the webpage that VideoSDK Template Engine will open while composing the live stream.

The template URL will appear as shown below.

![template url](https://cdn.videosdk.live/website-resources/docs-resources/custom_template_url.png)

The Template URL consists of two parts:

- Your actual page URL, which will look something like `https://example.com/videosdk-template`.
- Query parameters, which will allow the VideoSDK Template Engine to join the meeting when the URL is opened. There are a total of three query parameters:
  - `token`: This will be your token, which will be used to join the meeting.
  - `meetingId`: This will be the meeting ID that will be joined by the VideoSDK Template Engine.
  - `participantId`: This will be the participant ID of the VideoSDK Template Engine, which should be passed while joining the template engine in your template so that the tempalte engine participant is not visible to other participants. **This parameter will be added by the** **VideoSDK**.

:::info

Above mentioned query parameters are mandatory. Apart from these parameters, you can pass any other extra parameters which are required according to your use-case.

:::

### API Reference

The API references for all the methods utilized in this guide are provided below.

- [Start HLS API](/api-reference/realtime-communication/start-hlsStream)
- [hlsState](/react/api/sdk-reference/use-meeting/properties#hlsstate)
- [hlsUrls](/react/api/sdk-reference/use-meeting/properties#hlsurls)
- [onHlsStateChanged](/react/api/sdk-reference/use-meeting/events#onhlsstatechanged)
