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

When you are working with Video Calling, video quality is the most important part of communication. When a participant is shown on the screen, consuming multiple high quality although not required will result in more memory and CPU usage of the device, eventually degrading quality. 

The way to optimze around these situation is to consume the video quality which is required to fit the view of a particular participant, resulting in better quality, less usage of network bandwith and providing a better experience.

Viewport is the size of window or visible area in which some content is shown in our case, video for the participant. We can optimize the consuming video quality based on the viewport size of the participant. For example if the viewport size of a particular participant view is `480x360`, VideoSDK will download a `480x360` stream.  If a participant on screen is present in bigger size, VideoSDK will provide a higher quality video for that particular participant only.

import ReactPlayer from 'react-player'

<div style={{textAlign: 'center'}}>

<ReactPlayer autoplay muted loop playing url='/img/viewport_illustration.mp4' width={"100%"}/>

</div>

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

```js
class ParticipantTile extends StatefulWidget {
  final Participant participant;
  final bool isLocalParticipant;
  const ParticipantTile(
      {Key? key, required this.participant, this.isLocalParticipant = false})
      : super(key: key);

  @override
  State<ParticipantTile> createState() => _ParticipantTileState();
}

class _ParticipantTileState extends State<ParticipantTile> {
  //create a widgetKey which can be used to refer the Video container
  GlobalKey _widgetKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Container(
        key: _widgetKey, //assign key to reference this view
        child: <Your Widget Here for Displaying participant>
    );
  }

  //call this method whenever the widget height of width gets changed.
  //it can be during stream enabled, stream resume, etc
  onViewPortChange() {
    try {
      //get the renderbox
      final RenderBox renderBox =
          _widgetKey.currentContext?.findRenderObject() as RenderBox;
      _widgetKey.currentContext?.size;

      //Get Size of the renderbox
      final Size size = renderBox.size;

      //apply setViewPort on the participant with height and width of view
      widget.participant.setViewPort(size.width, size.height);
    } catch (exception) {
      log("Unable to set Viewport $exception");
    }
  }
}
```
