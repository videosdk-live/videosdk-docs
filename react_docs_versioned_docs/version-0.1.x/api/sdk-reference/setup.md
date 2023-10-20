---
title: "Setup"
sidebar_position: 1
---

# Setup - React

`@videosdk.live/react-sdk` wraps up our `@videosdk.live/js-sdk` into usable hooks APIs. It simplifies code and concept for react-js

## @videosdk.live/react-sdk

### Install the library in React

The easiest way to get started is by installing `@videosdk.live/react-sdk` in your app.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="npm"
groupId={"package-manager-group-id"}
values={[
{label: 'NPM', value: 'npm'},
{label: 'YARN', value: 'yarn'},
]}>
<TabItem value="npm">

```js
npm install @videosdk.live/react-sdk
```

</TabItem>
<TabItem value="yarn">

```js
yarn add @videosdk.live/react-sdk
```

</TabItem>
</Tabs>

### Import the library in your app

`@videosdk.live/react-sdk` provides two most important hook `useMeeting` and `useParticipant`. it also provides `MeetingProvider` and `MeetingConsumer` to listen changes in meeting state and events.

```javascript title="Import the library"
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
  MeetingConsumer,
} from "@videosdk.live/react-sdk";
```
