---
sidebar_position: 1
sidebar_label: WaitingScreen Parameters
pagination_label: WaitingScreen Parameters
title: WaitingScreen Parameters
---

<div class="sdk-api-ref-only-h4">

## waitingScreen

- type: `object`

### imageURL

- type: `String`

- `url` of your lottie or image, to be shown on the waiting screen.

### text

- type: `String`

- It represents your customize message, that will be shown on the waiting screen.

```js
meeting.init({
  //other params
  waitingScreen: {
    imageUrl: "<imageUrl || lottieUrl>",
    text: "Connecting to the meeting...",
  },
  //other params
});
```

</div>
