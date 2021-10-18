---
title: Delete Encoding Job
hide_title: false
hide_table_of_contents: false
description: This guide will explain delete encoding job.
sidebar_label: Delete Encoding Job
pagination_label: Delete Encoding Job
keywords:
  - Delete Encoding Job
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: delete-encoding-job
---

# Delete Encoding Job

NOTE: You can only deleted those encoding job which current status is "queued".

This guide will provide an overview of how to delete encoded job using videoSDK API.

### Path Params

| Property Name | Type   | Description               |
| ------------- | ------ | ------------------------- |
| jobId         | string | unique id of encoding job |

import MethodListGroup from '@theme/MethodListGroup';
import MethodListItemLabel from '@theme/MethodListItemLabel';
import MethodListHeading from '@theme/MethodListHeading';

<MethodListGroup>
  <MethodListItemLabel  description="Response Body" >
    <MethodListGroup>
      <MethodListHeading heading="parameters" />
      <MethodListItemLabel name="id"  type={"String"}  description="Unique identifier of encoded job." />
      <MethodListItemLabel name="status"  type={"String"}  description="status of encoding job either queued, processing, completed, failed." />
      <MethodListItemLabel name="videoId"  type={"String"}  description="unique identifier of video file." />
      <MethodListItemLabel name="videoUrl"  type={"String"}  description="Url of video where the video is stored." />
        <MethodListItemLabel name="presets"  type={"Array"}  description="It contains an array of object that you provided in body params." />
        <MethodListItemLabel name="thumbnails" type={"Array"} description="It contains an array of object that you provided in body params."/>
        <MethodListItemLabel name="user" type={"Object"} description="User information such as id of that user, name and email."/>
    </MethodListGroup>

  </MethodListItemLabel>
</MethodListGroup>
