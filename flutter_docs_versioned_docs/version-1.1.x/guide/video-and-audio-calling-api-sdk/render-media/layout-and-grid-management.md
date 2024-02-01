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
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: layout-and-grid-management
---

# Layout and Grid Management - Flutter

In this guide, we will take a look at how to efficiently manage the participants in different types of layout.

## Grid Layout

The most usual way to showing participants within a grid. There are multiple things you should keep in mind when showing participants in the grid.

This includes the number of participants being shown on the screens, number of participants in the background(in the meeting but not on the grid), quality which is being consumed for each and every participant in the grid.

### Quality of Participant's Video

When there are large number of participants present on the screen, it is best to consume them in lower resolutions. For this we recommend you to call the `setQuality` method on the participants present in the grid with dynamic values based on the number of participants on the screen.

Here is the recommended video quality:

1. Participants less than 3: `setQuality("high")`
2. Participants between 3 to 4: `setQuality("med")`
3. Participants greater than 4: `setQuality("low")`

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/grid_quality_mobile.png' />
</center>

### Grid with Screen Share

When you are rendering a small grid along with the screen share of the presenter or you are showing a simple sidebar video of the participants while the screenshare is on, it is recommended to do `setQuality("low")` for the participants who are present in the sidebar.

## Grid with Pagination

If you are having large video calls where there are multiple speakers with video turned on, it is best to implement a pagination type setup where only a few (4-6) participants are shown on the grid and rest can be seen by changing the page.

To best utilize the resourses, you should pause the streams of the participants who are not present in the grid and resume them when the come in to the grid, you can resume their streams.

<center>
<img src='https://cdn.videosdk.live/website-resources/docs-resources/grid_pagination.png' />
</center>

###### Example to pause and resume streams

```js
import 'package:flutter/material.dart';
import 'package:videosdk/videosdk.dart';

class ParticipantTile extends StatefulWidget {
  final Participant participant;
  //highlight-next-line
  ...
}

class _ParticipantTileState extends State<ParticipantTile> {

  @override
  void initState() {
    //highlight-next-line
    ...
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        //highlight-start
        ElevatedButton(
          onPressed:(){
            widget.participant.streams.forEach((stream){
              if(stream.kind == "video"){
                stream.pause();
              }
            });
          },
          child: const Text("Pause Stream"),
        ),
        ElevatedButton(
          onPressed:(){
            widget.participant.streams.forEach((stream){
              if(stream.kind == "video"){
                stream.resume();
              }
            });
          },
          child: const Text("Resume Stream"),
        ),
        //highlight-end
      ],
    );
  }
}
```

## API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [setQuality](/flutter/api/sdk-reference/participant-class/methods#setquality)
