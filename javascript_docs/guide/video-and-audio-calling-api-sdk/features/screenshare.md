---
title: Share your Screen Video & Audio Call - Video SDK Docs
hide_title: false
hide_table_of_contents: false
description: Share your Screen features quick integrate in Javascript, React JS, Android, IOS, React Native, Flutter with Video SDK to add live video & audio conferencing to your applications.
sidebar_label: Share Your Screen
pagination_label: Share Your Screen
keywords:
  - Start Screen share
  - Stop Screen share
  - audio calling
  - video calling
  - real-time communication
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: screenshare
---

# Share Your Screen

Whenever any participant wants to share either the complete screen, a specific window or, a browser tab, they can simply do it with VideoSDK Meeting.

This guide will provide an overview of how to use enable and disable Screen Share in a meeting.

1. **Enable Screen Share** - By using `enableScreenShare()` function, a participant can publish screen stream to other participants.
2. **Disable Screen Share** - By using `disableScreenShare()` function, a participant can stop publishing screen stream to other participants.

### Enable, Disable Screen Share

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
const onPress = () => {
  // Enabling ScreenShare
  meeting?.enableScreenShare();

  // Disabling ScreenShare
  meeting?.disableScreenShare();
};
```

<!-- ## How to Create App Group in Apple Store
### Step 1 : Go to App store

Navigate to [App Group](https://developer.apple.com/account/resources/identifiers/list/applicationGroup) and click on identifier.

![IOS Screen Share](/img/ios-screenshare/step14-xcode.png)

### Step 2 : Choose App Groups

Select **App Groups** from identifier and click on continue.
![IOS Screen Share](/img/ios-screenshare/step15-xcode.png)

### Step 3 : Add identifier

Add description and identifier, then click continue.

**Note** : Make sure the identifier prefix should be **group**, for example **group.com.ScreenBroadcast**.

![IOS Screen Share](/img/ios-screenshare/step16-xcode.png)

### Step 4 : Register identifier

Now, click on Register button to register this group.
![IOS Screen Share](/img/ios-screenshare/step17-xcode.png) -->
