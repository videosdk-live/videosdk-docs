---
title: Getting Started with Audio and Video Calling
hide_title: false
hide_table_of_contents: false
description: Audio and video calling sdk will help you to integrate video and audio calling in your application.
sidebar_label: Getting Started
pagination_label: Getting Started Audio and Video Calling
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collabration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: getting-started
---

import Mermaid from '@theme/Mermaid';

# Explore audio and video calling

This guide will get you running with the VideoSDK audio and video calling in minutes.

## Overview

At it's core, VideoSDK RTC is a distributed SFU. It eanbles highly scalable audio and video meetings unlike vanilla webRTC.

VideoSDK uses access tokens for authentication. Using our dashboard ([app.videosdk.live](https://app.videosdk.live/)), anyone can generate access tokens tokens with an API key and secret pair.

- Your backend server will generate access tokens using API Key and secret.
- Your client obtains token from your backend server.
- Your client will pass the token to VideoSDK server.
- VideoSDK client sdk will conncts to the VideoSDK server with available token.
- VideoSDK server will validate the token and accpets your incoming connection.

Here is the simple sequence diagram represents the authentication.
<Mermaid chart={`sequenceDiagram Your App Client->>Your App Server: Request for token; activate Your App Server; Note left of Your App Server: Generate token; Your App Server-->>Your App Client: Received token; deactivate Your App Server; Your App Client->>VideoSDK Server: Request to establish connection; activate VideoSDK Server; Note left of VideoSDK Server: Validates Token; VideoSDK Server-->>Your App Client: Connection established; deactivate VideoSDK Server;`}/>

## Generate API Key and Secret

Visit, [app.videosdk.live](https://app.videosdk.live/) to gererate API Key and secret.

![Generate API Key from Dashboard](/img/tutorial/generate-api-key.jpg)

## Generate Accees Token

For security, every participant that connects to meeting needs a access token. By substituting `apiKey` and `permissions` in it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="node"
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
    'apiKey' => api_key,
    'permissions': ["allow_join"],
];

$token = JWT::encode($payload, $secret_key, 'HS256');
?>
```

</TabItem>
</Tabs>

## Connecting to your meeting

You are now ready to connect to the meeting with a client. Head over to our [react example client](https://github.com/videosdk-live/videosdk-rtc-react-sdk-example), paste the token you generated, and You are live with VideoSDK.

## Integrating Client SDKs

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React.js', value: 'react'},
{label: 'React Native', value: 'reactnative'},
{label: 'Android', value: 'android'},
{label: 'iOS', value: 'ios'},
{label: 'Flutter', value: 'flutter'},
]}>
<TabItem value="js">

<br/>

<p>
The JS client SDK is published to <a target="_blank" href="https://www.npmjs.com/package/@videosdk.live/js-sdk">npm</a>.
</p>

<b>Npm</b>

```js
npm install @videosdk.live/js-sdk
```

<b>Yarn</b>

```js
yarn add @videosdk.live/js-sdk
```

</TabItem>
<TabItem value="react">

<br/>

<p>
The React SDK is published to <a target="_blank" href="https://www.npmjs.com/package/@videosdk.live/react-sdk">npm</a>. Here's an <a target="_blank" href="https://github.com/videosdk-live/videosdk-rtc-react-sdk-example">example app</a> using the React SDK.
</p>

<b>Npm</b>

```js
npm install @videosdk.live/react-sdk
```

<b>Yarn</b>

```js
yarn add @videosdk.live/react-sdk
```

</TabItem>
<TabItem value="reactnative">

<br/>

<p>
The React Native SDK is published to <a target="_blank" href="https://www.npmjs.com/package/@videosdk.live/react-native-sdk">npm</a>. Here's an <a target="_blank" href="https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example">example app</a> using the React Native SDK.
</p>

<b>Npm</b>

```js
npm install @videosdk.live/react-native-sdk
```

<b>Yarn</b>

```js
yarn add @videosdk.live/react-native-sdk
```

<br/>

<p>Follow below link if you are setting up for specific plateform</p>
<ul>
  <li><a href="https://docs.videosdk.live/docs/realtime-communication/sdk-reference/react-native-sdk/setup-android">Android Setup</a></li>
  <li><a href="https://docs.videosdk.live/docs/realtime-communication/sdk-reference/react-native-sdk/setup-ios">IOS Setup</a></li>
</ul>

</TabItem>
<TabItem value="android">

<br/>

<p>
Here's an <a target="_blank" href="https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example">example app</a> using the Android SDK.
</p>

```js title="build.gradle"
dependencies {
  implementation fileTree(include: ['*.jar', '*.aar'], dir: 'libs')
  implementation 'com.squareup.okhttp3:okhttp:4.3.0'
  implementation 'com.squareup.okhttp3:logging-interceptor:4.3.0'

  implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
  implementation 'io.reactivex.rxjava2:rxjava:2.2.6'
}
```

<br/>

<p>Follow <a target="_blank" href="https://docs.videosdk.live/docs/realtime-communication/sdk-reference/android-sdk/setup/">setup docs</a> for more information</p>

</TabItem>
<TabItem value="ios">

<br/>

<p>
The iOS SDK is available as a CocoaPod and Swift package.
Here's an <a target="_blank" href="https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example">example app</a> using the Android SDK.
</p>

<b>Install via CocoaPod</b>

```js title="Podfile"
pod 'VideoSDKRTC', :git => 'https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git'
```

<b>Install via Swift Package Manger</b>

```js title="Package.swift"
let package = Package(
  ...
  dependencies: [
    .package(name: "VideoSDKRTC", url: "https://github.com/videosdk-live/videosdk-rtc-ios-sdk.git", .upToNextMajor("version")),
  ],
  targets: [
    .target(
      name: "MyApp",
      dependencies: ["VideoSDKRTC"]
    )
  ]
}
```

<br/>

<p>Follow <a target="_blank" href="https://docs.videosdk.live/docs/realtime-communication/sdk-reference/ios-sdk/setup">setup docs</a> for more information</p>

</TabItem>
<TabItem value="flutter">
<br/>
<b>Coming Soon</b>
</TabItem>
</Tabs>

## What Next

Explore guide, tutorials and code samples to implement custom features using RTC VideoSDK.
