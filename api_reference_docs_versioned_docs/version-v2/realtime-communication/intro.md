---
title: Introduction to Real time communication API
hide_title: true
hide_table_of_contents: true
description: RTC SDK provides wide range of features to build your own custom video chat application without worrying about performance issues and scaling.
sidebar_label: Introduction
pagination_label: Introduction
keywords:
  - RTC API
  - RTC SDK
  - video API
  - audio rooms API
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: intro
---

import CodeBlock from "@theme/CodeBlock";

<div id="tailwind">
<div class="row">
<div class="col col--6">
<br />
<h2> API Reference </h2>
<div >
VideoSDK provides REST APIs for RealTime Communication, which includes APIs for Rooms, Sessions, Recordings, RTMP and HLS.
</div>
</div>
<div class="col col--6">
<br /> <br /> <br />
<div>
 <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex lg:flex-row flex-col align-middle">
  <div className="flex-1 text-sm font-bold text-white-1">BASE URL</div>
  </div>
  <div className="method_code_block">
   <div className="pt-4 pl-4 pr-4 pb-2 bg-[#252a34] rounded-b-lg flex flex-col align-middle">
    <p className="mb-2">
              <span className="text-[#7D8EAD] text-sm font-bold max-w-min hover:text-white-100">
                https://api.videosdk.live
              </span>
    </p>
    </div>
</div>
</div>

</div>
</div>

<hr />
<br />
<div class="row">
<div class="col col--6">
<h2> Authentication </h2>
<div >
The VideoSDK API uses access token to authenticate api requests.
In REST APIs, token will be passed in a header field called `Authorization`.

In order to generate authentication token, you will need `API_KEY` and `SECRET`, which you can get them from [here](https://app.videosdk.live/api-keys).

In payload, you have to add your `apikey`, `permissions`, `version` and `role`.

If you are concerned with security and want to generate token only for v2 API access, then you need to provide `version` and `role`.

- `apikey`(**Mandatory**): You can get it from [here](https://app.videosdk.live/api-keys).

- `permissions`(**Mandatory**): Based on provided permission, participant will join the meeting accordingly.

  Available permissions are:

  - **allow_join**: The participant is **allowed to join** the meeting directly.
  - **ask_join**: The participant requires to **ask for permission to join** the meeting.
  - **allow_mod**: The participant is **allowed to toggle** webcam & mic of other participants.

- `version`(**optional**): For accessing the v2 API, you need to provide `2` as the version value.

- `roles`(**optional**):

  - **CRAWLER**: This role is only for accessing v2 API, you can not use this token for running the `Meeting`/`Room`.

Then, you will sign this payload with your `SECRET`and jwt options.

</div>
</div>
<div class="col col--6">

import GenerateToken from '../../../src/theme/GenerateTokenContainer'

<br /><br />
<GenerateToken/>

</div>
</div>
</div>

---

import RestApiEndpointContainer from "../../../src/theme/RestApiEndpointContainer.js"
import endpointList from "./endpointList.json"

<RestApiEndpointContainer endpointSections={endpointList}/>
