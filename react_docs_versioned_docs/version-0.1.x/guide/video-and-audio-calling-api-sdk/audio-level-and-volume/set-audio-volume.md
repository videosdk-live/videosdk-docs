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

# Setting Audio Volume

- By giving the ability to adjust the volume of participants in a meeting. This can help to improve the overall audio quality and ensure that everyone can be heard clearly.

- When there are multiple participants in a meeting, it is common for there to be variations in the volume of each person's voice. Some people may speak more softly or have a quieter microphone, while others may speak louder or have a microphone that picks up more background noise.

- By allowing hosts or participants to adjust the volume of individual participants, it becomes easier to balance out these differences and ensure that everyone can be heard clearly. This can lead to more productive and efficient meetings, as people will be able to communicate more effectively.

## Meeting Volume

- To the set the audio volume for the meeting, you can set the volume property for each of the `<audio>` you are using to render the paricipant audio.

- Value for the `volume` property for the `<audio>` can be betwenn `0` and `1`.

```js
const setAudioVolume = (volume) => {
  const audioTags = document.getElementsByTagName("audio");
  audioTags.forEach((tag) => {
    tag.volume = volume;
  });
};
```

:::note
To learn more about changing the audio volume [check these documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume).
:::

## Participant Volume

- You can perform these operation for individual participants as well by providing a unique ID for each participant's `<audio>` element and then setting the volume for the participant participant.

- Assuming, you provide `<audio>` element id like `a-<participantId>`, you can set the volume for that participant as shown below.

```js
const setAudioVolume = (volume, participantId) => {
  const audioTag = document.getElementById(`a-${participantId}`);
  audioTag.volume = volume;
};
```
