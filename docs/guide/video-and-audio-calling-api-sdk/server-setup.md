---
title: Just Click Setup - Testing Token Server | Video SDK
hide_title: false
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Server Setup
pagination_label: Server Setup
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: server-setup
---

import Mermaid from '@theme/Mermaid';

# Server Setup

To begin working with the VideoSDK, you need to setup a server that can authenticate & validate your API key and secret which we generated in the previous step. Follow this [Signup & Create API Key](signup-and-create-api) if you haven't generated API key and secret.

For server setup, you'll need the following APIs:

1. `GET` **get-token** : By providing API key and secret, this API will return accesstoken. We'll discuss in depth how to achieve it.

2. `POST` **create-meeting** : By providing generated access token, this API will return dash(-) separated meetingId, for example **abc-pqr-xyz**.

3. `POST` **validate-meeting/:meetingId** : By providing generated meetingId as a path parameter, this API will only validate the provided meetingId and return a `200 status`response. This API is for verification purpose only **[OPTIONAL]**.

:::note
You can integrate this APIs in client side also.
:::

### Why we use token based Authentication ?

Token based authentication allow users to verify their identity by providing generated API key and secrets.

- Your server will generate access token using your API key and secret
- Your client obtains token from your backend server.
- For token validation, client will pass this token to VideoSDK.
- VideoSDK server will only allow entry in meeting if the token is valid.

Here is the simple sequence diagram represents the authentication.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; activate Your App Server; Note left of Your App Server: Generate token; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to establish connection; activate VideoSDK Server; Note left of VideoSDK Server: Validates Token; VideoSDK Server-->>Your App Client: Connection established; deactivate VideoSDK Server;`}/>

### Code Sample

For Node server environment, refer this [GUIDE](https://github.com/videosdk-live/videosdk-rtc-nodejs-sdk-example/blob/main/README.md), download the code sample [videosdk-rtc-nodejs-sdk-example](https://github.com/videosdk-live/videosdk-rtc-nodejs-sdk-example) and for other server environment
you can continue with below topic.

### Generate Accees Token and integrate other API's

For security, every participant that connects to meeting needs a access token. By substituting `apikey` and `permissions` in it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
groupId={"server-group-id"}
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'Java', value: 'java'},
{label: 'Ruby', value: 'ruby'},
{label: 'PHP', value: 'php'},
]}>
<TabItem value="node">

```js
var jwt = require("jsonwebtoken");
var uuid4 = require("uuid4");

// Need to generate from app.videosdk.live
const API_KEY = "API_KEY_GENERATED";
const SECRET_KEY = "API_SECRET_KEY_GENERATED";

jwt.sign(
  {
    apikey: API_KEY,
    permissions: ["allow_join"], // Permission to join the meeting
  },
  SECRET_KEY,
  {
    algorithm: "HS256",
    expiresIn: "24h",
    jwtid: uuid4(),
  },
  function (err, token) {
    console.log(token);
  }
);
```

</TabItem>
<TabItem value="python">

```python
#!/usr/bin/env python3
import jwt
import uuid
import datetime

api_key = 'api_key_generated'
secret_key = 'secret_key_generated'


def generateToken():
    expires = 24 * 3600
    now = datetime.datetime.utcnow()
    exp = now + datetime.timedelta(seconds=expires)
    return jwt.encode(payload={
          'apikey': api_key,
          permissions: ["allow_join"]
        }, key=secret_key).decode('utf-8')

if __name__ == '__main__':
    print(generateToken())
```

</TabItem>
<TabItem value="java">

```js
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

private void generateManagementToken() {
    Map<String, Object> payload = new HashMap<>();
    payload.put("apikey", "<api_key_generated>");
    payload.put("permissions", ["allow_join"]);
    String token = Jwts.builder().setClaims(payload).setId(UUID.randomUUID().toString())
        .setExpiration(new Date(System.currentTimeMillis() + 86400 * 1000))
        .setIssuedAt(Date.from(Instant.ofEpochMilli(System.currentTimeMillis() - 60000)))
        .setNotBefore(new Date(System.currentTimeMillis()))
        .signWith(SignatureAlgorithm.HS256, "<secret_key_generated>".getBytes()).compact();
  }
```

</TabItem>
<TabItem value="ruby">

```js
require 'jwt'
require 'securerandom'

$api_key = "api_key_generated"
$secret_key = "secret_key_generated"

def generateToken()
    payload = {
      apikey: $api_key,
      permissions: ["allow_join"]
    }
token = JWT.encode(payload, $secret_key, 'HS256')
return token
end

puts generateToken
```

</TabItem>
<TabItem value="php">

```js
<?php

use Firebase\JWT\JWT;
use Ramsey\Uuid\Uuid;

$api_key = "api_key_generated";
$secret_key = "secret_key_generated"

$payload = [
    'apikey' => api_key,
    'permissions': ["allow_join"],
];

$token = JWT::encode($payload, $secret_key, 'HS256');
?>
```

</TabItem>
</Tabs>

Available permissions are:

- **allow_join**: The participant is **allowed to join** the meeting directly.
- **ask_join**: The participant requires to **ask for permission to join** the meeting.
- **allow_mod**: The participant is **allowed to toggle** webcam & mic of other participants.

For other APIs you can follow [Create Meeting & Validate Meeting.](/api-reference/v1/realtime-communication/create-join-meeting)
