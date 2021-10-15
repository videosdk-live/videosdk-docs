---
title: Camera Controls
hide_title: false
hide_table_of_contents: false
description: This guide will explain camera controls for meeting.
sidebar_label: Camera Controls
pagination_label: Camera Controls
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
slug: camera-controls
---

Different webcam control permissions allows participant to enable/disable their own webcam and other participant's webcam too & also can set default participant's webcam settings, when meeting start.


### How it works. ?

- While `participantCanToggleSelfWebcam` value set to `true`, you can enable/disable your own webcam as display in below image.

- While `participantCanToggleSelfWebcam` value set to `false`, the below webcam button will not appear.

![Go live with VideoSDK](/img/prebuilt/prebuilt-webcam.png)


### Camera Attributes

- **webcamEnabled**: Default webcam setting for meeting joinee, true enables webcam & false disable webcam.
- **participantCanToggleSelfWebcam**: Allow participant to enable/disable their own webcam.

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
  webcamEnabled: true,
  participantCanToggleSelfWebcam: true,
  // ...
};
```

</TabItem>

<TabItem value="react">

```js
useEffect(() => {
  const config = {
    // ...
    webcamEnabled: true,
    participantCanToggleSelfWebcam: true,

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
    webcamEnabled: true,
    participantCanToggleSelfWebcam: true,

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
    webcamEnabled: true,
    participantCanToggleSelfWebcam: true,

    // ...
  };
};
```

</TabItem>

</Tabs>
