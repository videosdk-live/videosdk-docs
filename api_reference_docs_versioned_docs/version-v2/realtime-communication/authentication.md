---
title: Authentication
description: RTC SDK provides wide range of features to build your own custom video chat application without worrying about performance issues and scaling.
sidebar_label: Authentication
pagination_label: Authentication
keywords:
  - RTC API
  - RTC SDK
  - video API
  - audio rooms API
sidebar_position: 1
---

- The VideoSDK API uses authentication token to authenticate api requests.

- In REST APIs, token will be passed in header field called "Authorization".

- For Example:

import GenerateToken from '../../../src/theme/GenerateTokenContainer'
import data from './data/generate-token.json'

<GenerateToken
{...data}
/>

---

# How to generate authentication token ?

- In order to generate authentication token, you will need `API_KEY` and `SECRET`, which you can get them from [here](https://app.videosdk.live/api-keys).

- In payload, you will add your `apikey` and `permissions`.

  - `apikey`: You can get it from [here](https://app.videosdk.live/api-keys).
  - `permissions`: List of permissions that you want to allow.
    - `allow_join`
    - `allow_mod`
    - `ask_join`

- Then, you will sign this payload with your `SECRET` and jwt options.

- You can learn more, [here](https://jwt.io/introduction)
