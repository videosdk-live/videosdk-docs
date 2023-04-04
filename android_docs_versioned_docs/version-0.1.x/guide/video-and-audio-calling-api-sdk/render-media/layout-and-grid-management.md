---
title: Layout and Grid Management | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Layout and Grid Management
pagination_label: Layout and Grid Management
keywords:
  - audio calling
  - video calling
  - pause/resume video stream
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: layout-and-grid-management
---

# Layout and Grid Management

In this guide we will take a look at how to efficiently manage the participants in different types of layout.

## Grid Layout

The most usual way to showing participants within a grid. There are multiple things you should keep in mind when showing participants in the grid.

This includes the number of participants being shown on the screens, number of participants in the background(in the meeting but not showing on the screen).

To best utilize the resourses, you should pause the streams of the participants who are not showing on the screen and resume them when they showing on the screen.

In the recycleView, `onViewAttachedToWindow` called when a view created by the adapter has been attached to a window & `onViewDetachedFromWindow` called when a view created by the adapter has been detached from its window. Hence, you can pause the streams of the participants in `onViewAttachedToWindow` and resume the streams in `onViewDetachedFromWindow` methods of `RecyclerView`. You can [follow this guide](#pauseresume-stream) to pause/resume the stream.

:::note
To know how to render participant in `RecyclerView` [click here](/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/render-participant).
:::

## Grid with Pagination

If you are having large video calls where there are multiple speakers with video turned on, it is best to implement a pagination type setup where only a few (4-6) participants are shown on the grid and rest can be seen by changing the page.

To best utilize the resourses, you should pause the streams of the participants who are not present in the grid and resume them when the come in to the grid. You can [follow this guide](#pauseresume-stream) to pause/resume the stream.

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/grid_pagination.png' />
</center>

:::note
You can get the sample code for grid with pagination [here](https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example/tree/main/app/src/main/java/live/videosdk/rtc/android/kotlin/GroupCall).
:::

## Pause/Resume Stream

Whenver you wish to stop/resume download stream(webcam, screenShare and mic) of participant, you can simply do it by using `pause`, `resume` methods.

### Pause stream

- `pause()` method is used for pause stream(webcam, screenShare and mic) of a particular participant.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
for ((_, stream) in participant.streams) {
  //highlight-next-line
  stream.pause()
}
```

</TabItem>

<TabItem value="Java">

```js
for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
  Stream stream = entry.getValue();
  //highlight-next-line
  stream.pause();
}
```

</TabItem>

</Tabs>

### Resume stream

- `resume()` method is used to resume stream(webcam, screenShare and mic) of a particular participant.


<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
for ((_, stream) in participant.streams) {
  //highlight-next-line
  stream.resume()
}
```

</TabItem>

<TabItem value="Java">

```js
for (Map.Entry<String, Stream> entry : participant.getStreams().entrySet()) {
  Stream stream = entry.getValue();
  //highlight-next-line
  stream.resume();
}     
```

</TabItem>

</Tabs>

