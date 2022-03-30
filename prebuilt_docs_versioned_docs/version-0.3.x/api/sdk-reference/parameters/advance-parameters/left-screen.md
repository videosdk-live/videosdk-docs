---
sidebar_position: 1
sidebar_label: leftScreen feature Parameter
pagination_label: leftScreen feature Parameter
title: leftScreen feature Parameter
---

<div class="sdk-api-ref-only-h4">

## leftScreen

- type : `json object`

### actionButton

- type : `json object`

- with the help of `leftScreen.actionButton` host of the meeting can customize button on left screen page

- `{href,label}`

  - href : URL of a customized action button

  - label : label of type `String` of a customized action button

### rejoinButtonEnabled

- type : `Boolean`

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
