---
sidebar_position: 2
sidebar_label: Webhook Verification
pagination_label: Webhook Verification
title: Webhook Verification
---

VideoSdk signs the webhook events it sends to your endpoints by including a signature in each event’s `videosdk-signature` header. This allows you to verify that the events were sent by VideoSdk and not by a third party. You can verify signatures by following these steps.

![webhook-verification.png](https://cdn.videosdk.live/website-resources/docs-resources/webhook-verification.png)

## Public key

Our RSA public key is available at [https://api.videosdk.live/v2/public/rsa-public-key](https://api.videosdk.live/v2/public/rsa-public-key). You can obtain it by making a GET request to this endpoint.

## Verification

Every request will have a custom `videosdk-signature` header. This header is a signature that is based on the "RSA-SHA256" hash of the request body. You can calculate the signature on your own and compare it with the value given in the header. If the two values are equal, you can safely consider that this request originated from VideoSdk.

### Sample code

<div>

import WebhookVerification from '../../../src/theme/WebhookVerificationContainer'

<WebhookVerification/>

</div>
