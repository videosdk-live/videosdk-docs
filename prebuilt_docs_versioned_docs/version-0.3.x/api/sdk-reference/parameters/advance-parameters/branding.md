---
sidebar_position: 1
sidebar_label: Branding Feature Parameter
pagination_label: Branding Feature Parameter
title: Branding Feature Parameter
---

<div class="sdk-api-ref-only-h4">

## branding

- type : `json object`

### enabled

- type : `Boolean`

- if true then one can promote their brand

### logoURL

- type : `String`

- url of your brand logo to be shown on the meeting screen

### name

- type : `String`

- it represents your brand name

### poweredBy

- type : `Boolean`

- it enables poweredBy feature of prebuiltSDK SDK.

```js
meeting.init({
  //other params
  branding: {
    enabled: true,
    logoURL:
      "https://static.zujonow.com/videosdk.live/videosdk_logo_circle_big.png",
    name: "Prebuilt",
    poweredBy: false,
  },
  //other params
});
```

</div>
