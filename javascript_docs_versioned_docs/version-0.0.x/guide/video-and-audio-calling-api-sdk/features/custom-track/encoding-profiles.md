---
title: Video Profiles
hide_title: false
hide_table_of_contents: false
sidebar_label: Encoding Profiles
pagination_label: Encoding Profiles
keywords:
  - Camera on
  - Camera off
  - Webcam on
  - Webcam off
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
---

import {audioProfiles} from "./profile.js"
import {videoProfiles} from "./profile.js"
import {screenShareProfiles} from "./profile.js"
import CustomProfileTable from "../../../../../../src/theme/CustomProfileTable"

# Encoding Profiles

This is a list of video and audio encoding profiles which you can set while creating the custom video track for webcam or screen share.

## Encoding profiles for Camera Video Track

<CustomProfileTable data={videoProfiles}/>

## Encoding profiles for Audio Track

<CustomProfileTable data={audioProfiles}/>

## Encoding Profiles for Screen Share Track

<CustomProfileTable data={screenShareProfiles}/>