---
title: Prebuilt Branding Logo Video & Audio Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Branding Logo features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Customize Branding
pagination_label: Customize Branding
keywords:
  - brand
  - audio calling
  - video calling
  - real-time communication
  - video sdk embed
  - video sdk prebuilt
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: customize-branding
---

# Branding Logo

This feature allows you to embed your branding to top of the meeting .

### How it works ?

- While `branding.enabled` value is set to `true`, you will see branding as shown in below image.

- While `branding.enabled` value is set to `false`, the branding will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-branding.png)

### Branding Attributes

- `branding.enabled`: If it is true, then branding will be visible on top bar of the meeting. If it is false, then branding won't be available on top bar of the meeting.
- `branding.logoURL`: Provide public URL of your logo.
- `branding.name`: Provide your brand title.
- `branding.poweredBy`: If it is true, then `Powered by videosdk.live` text will appear in bottom of the branding. If it is false, then text will not appear in bottom of the branding

:::note

If you set `branding.enabled` true, then you should have to provide `branding.logoURL` and `branding.name`.

:::

```js title="index.html"
const config = {
  // ...
  branding: {
    enabled: true,
    logoURL:
      "https://static.videosdk.live/videosdk.live/videosdk_logo_circle_big.png",
    name: "Prebuilt",
    poweredBy: false,
  },
  // ...
};
```
