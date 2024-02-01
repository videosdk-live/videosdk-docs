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

# Layout and Grid Management - React

This guide focuses on how to efficiently manage the participants in different types of layout.

## Grid Layout

The most common way to display participants is within a grid. There are several factors to consider when showing participants in the grid, including the number of participants displayed on the screens, the number of participants in the background (in the meeting but not on the grid), and the quality being consumed for each participant in the grid.

### Quality of Participant's Video

When dealing with a large number of participants on the screen, it is advisable to consume their video streams at lower resolutions. To achieve this, we recommend using the `setQuality` method on the participants displayed in the grid, adjusting the values dynamically based on the number of participants visible on the screen.

The recommended video quality settings are as follows:

1. For fewer than 3 participants: `setQuality("high")`
2. For 4 to 6 participants: `setQuality("med")`
3. For more than 6 participants: `setQuality("low")`

![grid-quality](/img/grid-quality.png)

### Grid with Screen Share

When rendering a small grid alongside the screen share of the presenter, or when showing a simple sidebar video of the participants while the screenshare is on, it is recommended to set the quality to 'low' (`setQuality("low")`) for the participants present in the sidebar.

## Sidebar Layout

For a layout, where the speaker is displayed in the large view, and the rest of the participants are in small views in a sidebar, you should use `setQuality("high")` for the speaker participant, and `setQuality("low")` for the rest of the participants. 

![sidebar-quality](/img/sidebar-quality.png)

## Spotlight Layout

For a spotlight layout, where the speaker is the only one being displayed on the screen, you should use `setQuality("high")` for the speaker participant.

![spotlight-quality](/img/spotlight-quality.png)

## Grid with Pagination

When hosting large video calls with multiple speakers displaying their video feeds, it is recommended to implement a pagination-style setup. Display a limited number (6-9) of participants on the grid, allowing users to switch between pages to view additional participants.

**To optimize resources, consider pausing the streams of participants who are not currently visible on the grid. When they come into view, you can then resume their streams.**

![grid-pagination](/img/grid-pagination.png)

###### Example to pause and resume a participant's stream

```js
function ParticipantView(participantId) {
  const { webcamStream } = useParticipant(participantId);

  //Handler to pause the stream
  const handlePauseStream = () => {
    if (webcamStream) {
      webcamStream.pause();
    }
  };

  //Handler to resume the stream
  const handleResumeStream = () => {
    if (webcamStream) {
      webcamStream.resume();
    }
  };

  return (
    <>
      <button onClick={handlePauseStream}>Pause Stream</button>
      <button onClick={handleResumeStream}>Resume Stream</button>
    </>
  );
}
```

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [setQuality](/react/api/sdk-reference/use-participant/methods#setquality)
- [pause](/react/api/sdk-reference/stream-class/methods#pause)
- [resume](/react/api/sdk-reference/stream-class/methods#resume)
