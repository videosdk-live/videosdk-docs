---
title: Delete file
hide_title: false
hide_table_of_contents: false
description: This guide will explain how to delete file.
sidebar_label: Delete file
pagination_label: Delete file
keywords:
  - Delete file
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: delete-file
---

# Delete File

This guide will provide an overview of delete particular file by passing file id in path params, which you get while you uploaded file.

### Path Params

| Property Name | Type   | Description       |
| ------------- | ------ | ----------------- |
| id            | string | Unique id of file |

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of file." />
      <MethodListItemLabel name="type"  type={"String"}  description="type of file uploaded video or image." />
      <MethodListItemLabel name="size"  type={"Number"}  description="size of uploaded file(in bytes)." />
      <MethodListItemLabel name="meta"  type={"Object"}  description="information about uploaded file such as resolution, format, etc." />
        <MethodListItemLabel name="fileUrl"  type={"String"}  description="The url where the video is stored." />
        <MethodListItemLabel name="user" type={"Object"} description="user info such as email, name and id of the user."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
