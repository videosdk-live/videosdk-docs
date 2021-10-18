---
title: Prebuilt Branding Logo Audio & Video Call | Video SDK Embed Docs
hide_title: false
hide_table_of_contents: false
description: Branding Logo features prebuilt Video SDK embedded is an easy-to-use video calling API. Video SDK Prebuilt makes it easy for developers to add video calls 10 in minutes to any website or app.
sidebar_label: Branding
pagination_label: Branding
keywords:
  - brand
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: branding
---

# Branding Logo

This feature allows you to embed your branding to top of the meeting .

### How it works. ?

- While `brandingEnabled` value set to `true`, you will show branding as display in below image.

- While `brandingEnabled` value set to `false`, the branding will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-branding.png)

### Branding Attributes

- `brandingEnabled`: If it is true, then branding will be visible on top bar of the meeting. If it is false, then branding won't be available on top bar of the meeting.
- `brandLogoURL`: Provide public URL of your logo.
- `brandName`: Provide your brand title.
- `poweredBy`: If it is true, then `Powered by videosdk.live` text will appear in bottm of branding. If it is false, then text will not appear in bottm of branding

:::note

If you set `brandingEnabled` true, then you should have to provide `brandLogoURL` and `brandName`.

:::

```js title="index.html"
const config = {
  // ...
  brandingEnabled: true,
  brandLogoURL: "<Logo url>",
  brandName: "Room#1",
  poweredBy: false,
  // ...
};
```
