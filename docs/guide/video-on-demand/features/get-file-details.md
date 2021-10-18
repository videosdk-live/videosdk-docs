---
title: Get File Details
hide_title: false
hide_table_of_contents: false
description: This guide will explain how to get file details.
sidebar_label: Get File Details
pagination_label: Get File Details
keywords:
  - Get File Details
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: get-file-details
---

# Get File Details

This guide will provide an overview of retrieving particular file details using file id, which we have created in upload file.

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
