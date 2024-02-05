---
title: Set Audio Volume | Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Setting audio volume features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Set Audio Volume
pagination_label: Set Audio Volume
keywords:
  - Active Speaker
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-audio-volume
---

# Setting Audio Volume - React

- Providing the ability to adjust the volume of participants in a meeting enhances the overall audio quality and ensures that everyone can be heard clearly.

- In meetings with multiple participants, variations in the volume of each person's voice are common. Some may speak more softly or have a quieter microphone, while others may speak louder or have a microphone that picks up more background noise.

- By allowing hosts or participants to adjust the volume of individual participants, it becomes easier to balance out these differences and ensure that everyone can be heard clearly. This can lead to more productive and efficient meetings, as people will be able to communicate more effectively.


## Meeting Volume

- To set the audio volume for the meeting, adjust the volume property for each `<audio>` element used, to render the paricipant audio.

- Value for the `volume` property for the `<audio>` can be between `0` and `1`.

```js
const setAudioVolume = (volume) => {
  const audioTags = document.getElementsByTagName("audio");
  audioTags.forEach((tag) => {
    tag.volume = volume;
  });
};
```

:::note
To learn more about changing the audio volume [check this documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume).
:::

## Participant Volume

- This operation can be performed for individual participants as well by providing a unique ID for each participant's `<audio>` element and then setting the volume for them.

- Assuming you provide `<audio>` element IDs like `a-<participantId>`, you can set the volume for a specific participant as shown below.

```js
const setAudioVolume = (volume, participantId) => {
  const audioTag = document.getElementById(`a-${participantId}`);
  audioTag.volume = volume;
};
```
