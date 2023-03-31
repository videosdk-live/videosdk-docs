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

# Layout and Grid Management

In this guide we will take a look at how to efficiently manage the participants in different types of layout.

## Grid Layout

The most usual way to showing participants within a grid. There are multiple things you should keep in mind when showing participants in the grid.

This includes the number of participants being shown on the screens, number of participants in the background(in the meeting but not on the grid), quality which is being consumed for each and every participant in the grid.

### Quality of Participant's Video

When there are large number of participants present on the screen, it is best to consume them in lower resolutions. For this we recommend you to call the `setQuality` method on the participants present in the grid with dyanmic values based on the number of participants on the screen.

Here is the recommended video quality:

1. Participants less than 3: `setQuality("high")`
2. Participants between 4 to 6: `setQuality("med")`
3. Participants greater than 6: `setQuality("low")`

![grid-quality](/img/grid-quality.png)

### Grid with Screen Share

When you are rendering a small grid along with the screen share of the presenter or you are showing a simple sidebar video of the participants while the screenshare is on, it is recommended to do `setQuality("low")` for the participants who are present in the sidebar.

## Sidebar Layout

If you have a layout where the speaker is being displayed in the large view and rest of the participants of the meeting are in the small views in a sidebar, you should use `setQuality("high")` for the speaker participant in large view and for rest of the participants you should use `setQuality("low")`.

![sidebar-quality](/img/sidebar-quality.png)

## Spotlight Layout

If you have a spotlight layout where the speaker is the only one being displayed on the screen then you should use `setQuality("high")` for the speaker participant.

![spotlight-quality](/img/spotlight-quality.png)

## Grid with Pagination

If you are having large video calls where there are multiple speakers with video turned on, it is best to implement a pagination type setup where only a few (6-9) participants are shown on the grid and rest can be seen by changing the page.

To best utilize the resourses, you should pause the streams of the participants who are not present in the grid and resume them when the come in to the grid, you can resume their streams.

![grid-pagination](/img/grid-pagination.png)

:::note
You can get the sample code for each of the layouts discussed above here.
:::

## API Reference

The API references for all the methods and events utilized in this guide are provided below.

- [setQuality](/react/api/sdk-reference/use-participant/methods#setquality)
