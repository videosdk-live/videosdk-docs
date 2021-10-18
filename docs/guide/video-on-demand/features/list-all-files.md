---
title: List All Files
hide_title: false
hide_table_of_contents: false
description: This guide will explain list of all files.
sidebar_label: List All Files
pagination_label: List All Files
keywords:
  - list all files
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: list-all-files
---

# List All Files

This guide will provide an overview of how to list all files that you created by passing userId as query parameter.

### Query Params

| Property Name | Type   | Description       |
| ------------- | ------ | ----------------- |
| userId        | string | Unique id of user |

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of video file." />
      <MethodListItemLabel name="type"  type={"String"}  description="type of file uploaded video or image." />
      <MethodListItemLabel name="size"  type={"Number"}  description="size of uploaded file(in bytes)." />
      <MethodListItemLabel name="meta"  type={"Object"}  description="information about uploaded file such as resolution, format, etc." />
        <MethodListItemLabel name="fileUrl"  type={"String"}  description="The url where the file is stored." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
