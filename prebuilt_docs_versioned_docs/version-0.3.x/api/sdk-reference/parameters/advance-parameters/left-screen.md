---
sidebar_position: 1
sidebar_label: LeftScreen Parameters
pagination_label: LeftScreen Parameters
title: LeftScreen Parameters
---

<div class="sdk-api-ref-only-h4">

## leftScreen

- type: `object`

### actionButton

- type: `object`

- with the help of `leftScreen.actionButton` host of the meeting can customize button on left screen page

- `{href,label}`

  - href : URL of a customized action button

  - label : label of type `String` of a customized action button

### rejoinButtonEnabled

- type: `Boolean`

- If set to true one can see rejoin button on left screen page.

```js
meeting.init({
  //other params
  leftScreen: {
    actionButton: {
      label: "Video SDK",
      href: "https://www.videosdk.live",
    },
    rejoinButtonEnabled: true,
  },
  //other params
});
```

</div>
