---
title: Error Events | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Error Events
pagination_label: Error Events
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: error-events
---

# Error Events

VideoSDK provides `onError` event which will notify you of any error happening during the meeting.

### onError

- This event will be triggered whenever any invalid configuration provided or server/network errors arise, this event will trigger with a specific error code and message.
- This event is helpful for development level troubleshooting while integrating SDK.
- You can implement this method of the abstract Class `MeetingEventListener` and add the listener to `Meeting` class using the `addEventListener()` method of `Meeting` Class.

### Example

Here is the usage of the event mentioned in this page.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
private val meetingEventListener: MeetingEventListener = object : MeetingEventListener() {
  //..
  override fun onError(error: JSONObject) {
  try {
      val errorCodes: JSONObject = VideoSDK.getErrorCodes()
      val code = error.getInt("code")
      Log.d("#error", "Error is: " + error["message"])  
  } catch (e: Exception) {
          e.printStackTrace()
      }
  }
}
```

</TabItem>

<TabItem value="Java">

```js
private final MeetingEventListener meetingEventListener = new MeetingEventListener() {
  //..
  @Override
  public void onError(JSONObject error) {
      try {
          JSONObject errorCodes = VideoSDK.getErrorCodes();
          int code = error.getInt("code");
          Log.d("#error", "Error is: " + error.get("message")); 
      } catch (Exception e) {
          e.printStackTrace();
      }
  }
};
```

</TabItem>

</Tabs>

### Error Codes

We have depicted a specific constant with code and message in the below table.

import ErrorCodesTable from "../../../../../src/theme/ErrorCodesTable"
import meetingErrorCodes from "../../../data/meetingErrorCodes.json"

<ErrorCodesTable errorCodes={meetingErrorCodes} />

### API Reference

The API references for all the methods and events utilised in this guide are provided below.

- [onError()](/android/api/sdk-reference/error-codes)
