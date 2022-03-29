---
title: How to Whitelist Domain ?
hide_title: false
hide_table_of_contents: false
description: This guide will explain joining process of meeting.
sidebar_label: How to Whitelist Domain ?
pagination_label: How to Whitelist Domain ?
keywords:
  - Join audio calling
  - Join video calling
  - Join real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: domain-whitelisting
---

You can secure your prebuilt by using **Domain Whitelisting** feature in dashboard.

**Domain Whitelisting** is a method of ensuring that no one but your organization is using your prebuilt. It’s one way of securing prebuilt, so others don’t attempt to piggy back on your account.

## How to Whitelist domain ?

### Step : 1 API Listing

First of all, you need to generate API key from [Dashboard](https://app.videosdk.live/dashboard), for generating API key you need to follow [Signup and Create API Key](/docs/guide/prebuilt-video-and-audio-calling/signup-and-create-api).

After genearting API, you will see your [API List](https://app.videosdk.live/settings/api-keys) as describe below.

In **Action** column, click on globe icon.

![Go live with VideoSDK](/img/api-keys.png)

### Step : 2 Add Domain

After clicking earth icon, sidebar popup will appear which prompt you to add domain name.

After adding domain name in textinput, just click on **ADD** button, which placed on right side of the textinput.

For example, if you add _**testing**_ as your domain name, now it will restrict other domain (except _**testing.com**_) to access prebuilt.

You can also add more than one domain under the same API key.

![Go live with VideoSDK](/img/add-domain.png)

:::note

1. If you don't provide any domains under whitelisting, then you can acess prebuilt with any domain name.
2. If you have already added some domains, and you want to use **localhost** as development purpose, then for developing you should have to add **localhost** as domain name under whitelisting.
3. For subdomain cases, suppose you have **abc.xyz.com**, for this case you can't list your domain name as **xyz**. You should have to add it as **abc.xyz** in whitelisting.
   :::

### Step : 3 Delete Domain

You can also delete the listed domain by pressing cross icon as described below.

![Go live with VideoSDK](/img/delete-domain.png)
