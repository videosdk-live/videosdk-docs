---
title: Set Viewport
hide_title: false
hide_table_of_contents: false
sidebar_label: Set Viewport
pagination_label: Set Viewport
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: set-viewport
---

When you are working with Video Calling, video quality is the most important part of communication. When a participant is shown on the screen, consuming multiple high quality although not required, will result in more memory and CPU usage of the device, eventually degrading quality. 

The way to optimze around these situation is to consume the video quality which is required to fit the view of a particular participant, resulting in better quality, less usage of network bandwith and providing a better experience.

Viewport is the size of window or visible area in which video for the participant is shown. We can optimize the consuming video quality based on the viewport size of the participant. For example if the viewport size of a particular participant view is `480x360`, VideoSDK will download a `480x360` stream.  If a participant on screen is present in bigger size, VideoSDK will provide a higher quality video for that particular participant only.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/img/viewport_illustration.mp4' width={"100%"}/>

</div>

<br/>

:::info

MultiStream is not supported by the Android SDK. Use `customTrack` instead of `setViewPort()` if you want to change participant's quality who joined using our Android SDK.

To know more about customTrack visit [here](/android/guide/video-and-audio-calling-api-sdk/features/custom-track/custom-video-track)

:::

### setViewPort()

`setViewPort()` can be used to achieve the best optimization of the video. This method is called with the `width` and `height` of the participant view on the `Participant` object and VideoSDK will handle the rest.

##### Parameters

- `width`
  - type: `int`
  - Width of the participant view for which the quliaty of video is to be adjusted.

- `height`
  - type: `int`
  - Height of the participant view for which the quliaty of video is to be adjusted.

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class ParticipantAdapter(meeting: Meeting) : RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder() {

  //Your variables here

  override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PeerViewHolder {
    containerHeight = parent.height
    return PeerViewHolder(
      LayoutInflater.from(parent.context)
        .inflate(R.layout.item_remote_peer, parent, false)
    )
  }

  override fun onBindViewHolder(holder: PeerViewHolder, position: Int) {
    val participant = participants[position]
    
    //View updates here

    //Update Consuming quality using setViewPort
    participant.setViewPort(holder.itemView.getWidth(), holder.itemView.getHeight());
  }
}

```

</TabItem>

<TabItem value="Java">

```js

public class ParticipantAdapter extends RecyclerView.Adapter<ParticipantAdapter.PeerViewHolder> {

  //Your variables here
  
  @NonNull
  @Override
  public PeerViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    containerHeight = parent.getHeight();

    return new PeerViewHolder(LayoutInflater.from(parent.getContext())
            .inflate(R.layout.item_remote_peer, parent, false));
  }

  @Override
  public void onBindViewHolder(@NonNull PeerViewHolder holder, int position) {
    final Participant participant = participants.get(position);

    //View updates here

    //Update Consuming quality using setViewPort
    participant.setViewPort(holder.itemView.getWidth(), holder.itemView.getHeight());
  }
}

```

</TabItem>

</Tabs>

The complete usage of this method can be seen here in the [code sample](https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example/blob/master/app/src/main/java/live/videosdk/rtc/android/java/ParticipantAdapter.java#L134)