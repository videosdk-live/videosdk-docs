---
title: Upload File
hide_title: false
hide_table_of_contents: false
description: This guide will explain upload file.
sidebar_label: Upload File
pagination_label: Upload File
keywords:
  - upload file
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: upload-file
---

# Upload File

This guide will provide an overview of how to upload video/image using generated token in previous step Authentication.

### Body Params

| Property Name | Type            | Description                         |
| ------------- | --------------- | ----------------------------------- |
| file          | form-data/ file | Video file you would like to upload |

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
        <MethodListItemLabel name="fileUrl"  type={"String"}  description="The url where the file is stored." />
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
