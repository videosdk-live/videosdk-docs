---
sidebar_position: 1
---

# Meetings with REST API

## REST API

You can use use REST API to create and manage meetings. You will require API key and Secret to access API routes.

## Generate your API Key and Secret

You can generate API Key and Secret using "API Keys" section. Refer authentication section for more information about generating token.
![Generate API keys from console](/img/api-key.jpg)

## Sample request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{label: 'cURL request creates meeting', value: 'curl'},
{label: 'Result', value: 'result'},
]}>
<TabItem value="curl">

```js
cURL -H "Content-Type: application/json" \
     -H "Authorization: $YOUR_JWT_TOKEN" \
     -XPOST \
     https://api.zujonow.com/v1/meetings
```

</TabItem>
<TabItem value="result">

```js
{
  "meetingId":"jpkf-iool-64ox"
}
```

</TabItem>
</Tabs>

Click the Results tab to see the room object created in response to the request.

There are many other API's available to manage rooms.
