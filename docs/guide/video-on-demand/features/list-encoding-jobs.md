---
title: List Encoding Jobs
hide_title: false
hide_table_of_contents: false
description: This guide will explain List Encoding Jobs.
sidebar_label: List Encoding Jobs
pagination_label: List Encoding Jobs
keywords:
  - List Encoding Jobs
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: List Encoding Jobs
---

# List Encoding Jobs

This guide will provide an overview of how to list all encoding jobs that you created by passing userId as query parameter.
You can list same encoding job and original file information in dashboard .

![List Encoding Job](/img/tutorial/create_encoding_job.png)

### Query Params

| Property Name | Type   | Description       |
| ------------- | ------ | ----------------- |
| userId        | string | unique id of user |

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of encoded job." />
      <MethodListItemLabel name="status"  type={"String"}  description="status of encoding job either queued, processing, completed, failed." />
      <MethodListItemLabel name="videoId"  type={"Number"}  description="Unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"Object"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"Array"}  description="It contains an array of object that you provided in body params. " />
        <MethodListItemLabel name="thumbnails" type={"Array"} description="It contains an array of object that you provided in body params."/>
        <MethodListItemLabel name="files" type={"Array"} description="It contains an array of object with the properties of meta information about file, jobId, size, fileUrl, type and id of the file."/>
        <MethodListItemLabel name="webhookUrl" type={"String"} description="It's Url, where we notify once encoding is complete."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
