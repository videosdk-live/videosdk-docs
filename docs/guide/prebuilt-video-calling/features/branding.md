---
title: Branding
hide_title: false
hide_table_of_contents: false
description: This guide will explain branding attributes in video sdk prebuilt.
sidebar_label: Branding
pagination_label: Branding
keywords:
  - brand
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: branding
---

This feature allows you to embed your branding to top of the meeting .

### Branding Attributes

- **brandingEnabled**: If it is true, then branding will be visible on top bar of the meeting. If it is false, then branding won't be available on top bar of the meeting.
- **brandLogoURL**: Provide public URL of your logo.
- **brandName**: Provide your brand title.
- **poweredBy**: If it is true, then `Powered by videosdk.live` text will appear in bottm of branding. If it is false, then text will not appear in bottm of branding

:::note

If you set `brandingEnabled` true, then you should have to provide `brandLogoURL` and `brandName`.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="js"
values={[
{label: 'JavaScript', value: 'js'},
{label: 'React', value: 'react'},
{label: 'Angular', value: 'angular'},
{label: 'Vue', value: 'vue'},
]}>
<TabItem value="js">

```js
const config = {
  // ...
  brandingEnabled: true,
  brandLogoURL: "<Logo url>",
  brandName: "Room#1",
  poweredBy: false,
  // ...
};
```

</TabItem>

<TabItem value="react">

```js
useEffect(() => {
  const config = {
    // ...
    brandingEnabled: true,
    brandLogoURL: "<Logo url>",
    brandName: "Room#1",
    poweredBy: false,
    // ...
  };
}, []);
```

</TabItem>
<TabItem value="angular">

```js
function ngOnInit() {
  const config = {
    // ...
    brandingEnabled: true,
    brandLogoURL: "<Logo url>",
    brandName: "Room#1",
    poweredBy: false,
    // ...
  };
}
```

</TabItem>
<TabItem value="vue">

```js
mounted: () => {
  const config = {
    // ...
    brandingEnabled: true,
    brandLogoURL: "<Logo url>",
    brandName: "Room#1",
    poweredBy: false,
    // ...
  };
};
```

</TabItem>

</Tabs>
