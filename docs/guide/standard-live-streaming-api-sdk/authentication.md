---
title: Authentication
hide_title: false
hide_table_of_contents: false
description: Live streaming sdk will help you to integrate live streaming in your application.
sidebar_label: Authentication
pagination_label: Authentication
keywords:
  - live streaming
  - interactive live streaming
  - live broadcasting
  - hls streaming
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: authentication
---

:::caution

**This page has been deprecated. Please follow this [link](https://docs.videosdk.live/) or ping us on [Discord](https://discord.gg/videosdk-live-876774498798551130)**

:::

import Mermaid from '@theme/Mermaid';

VideoSDK uses access tokens for authentication. Using our dashboard ([app.videosdk.live](https://app.videosdk.live/)), anyone can generate access tokens tokens with an API key and secret pair.

- Your backend server will generate access tokens using API Key and secret.
- Your client obtains token from your backend server.
- Your client will pass the token to VideoSDK server.
- VideoSDK client sdk will conncts to the VideoSDK server with available token.
- VideoSDK server will validate the token and accpets your incoming connection.

Here is the simple sequence diagram represents the authentication.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; activate Your App Server; Note left of Your App Server: Generate token; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to establish connection; activate VideoSDK Server; Note left of VideoSDK Server: Validates Token; VideoSDK Server-->>Your App Client: Connection established; deactivate VideoSDK Server;`}/>

## Generate Accees Token

For security, every user that connects to live streaming needs a access token. By substituting `apikey` and `secretKey` in it.

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
        'apikey': api_key
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
      apikey: $api_key
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
    'apikey' => api_key
];

$token = JWT::encode($payload, $secret_key, 'HS256');
?>
```

</TabItem>
</Tabs>
