---
title: Create Encoding Job
hide_title: false
hide_table_of_contents: false
description: This guide will explain create encoding job.
sidebar_label: Create Encoding Job
pagination_label: Create Encoding Job
keywords:
  - Create Encoding Job
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: Create Encoding Job
---

# Create Encoding Job

Encoding API converts source video into compressed version in multiple formats and resolutions up to 1080p resolutions.

Once you created encoding job, then you will able to see the status of encoding job and also more details about encoding jobs in your dashboard.

![Create Encoding Job](/img/tutorial/create_encoding_job.png)

### Body Params

| Property Name | Type   | Description                                                                          |
| ------------- | ------ | ------------------------------------------------------------------------------------ |
| videoId       | string | unique id of video file                                                              |
| videoUrl      | string | Url of video where the video is stored                                               |
| presets       | Array  | It contains an object with the properties of resolutions and format.                 |
| thumbnails    | Array  | It contains an object with the properties of timestamp, resolutions, formats,filters |
| webhookUrl    | string | It's Url, where we notify once encoding is complete.                                 |

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
        <MethodListItemLabel name="webhookUrl" type={"String"} description="It's Url, where we notify once encoding is complete."/>
    </MethodListGroup>
  </MethodListItemLabel>
</MethodListGroup>
