---
sidebar_position: 1
sidebar_label: Branding Parameters
pagination_label: Branding Parameters
title: Branding Parameters
---

<div class="sdk-api-ref-only-h4">

## branding

- type: `object`

### enabled

- type: `Boolean`

- If `true`, then branding will be visible on topbar of the meeting layout.

### logoURL

- type: `String`

- `url` of your brand logo, to be shown on the topbar of the meeting screen layout.

### name

- type: `String`

- It represents your brand name, that will be shown on the topbar of the meeting screen layout.

### poweredBy

- type: `Boolean`

- It it is `true`, powered by [videosdk.live](https://www.videosdk.live) will be shown below the branch name else it eill be hidden.

```js
meeting.init({
  //other params
  branding: {
    enabled: true,
    logoURL: "https://your-brand.logo",
    name: "Prebuilt",
    poweredBy: true,
  },
  //other params
});
```

</div>
