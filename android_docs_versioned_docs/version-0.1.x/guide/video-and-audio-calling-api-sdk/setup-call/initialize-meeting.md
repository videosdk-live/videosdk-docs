---
title: Initialize Meeting | Video SDK
hide_title: true
hide_table_of_contents: false
description: Video SDK and Audio SDK, developers need to implement a token server. This requires efforts on both the front-end and backend.
sidebar_label: Initialize Meeting
pagination_label: Initialize Meeting
keywords:
  - audio calling
  - video calling
  - real-time communication
  - collaboration
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: initialize-meeting
---

# Initialize Meeting

To configure a VideoSDK meeting you require two things, first the `token` which will be used for **Authentication** purpose and a `meetingId` which will be used to specify where a participant will join. Let's see each of the steps closely.

### Generating Token

You can generate a `token` in two ways:

1. **`Temporary Token`** : You can visit [Dashboard's API Key section](https://app.videosdk.live/api-keys) and generate the temporary token from there.

2. **`Server`** : You can setup **JWT** in backend and make an API call to get the token from your server.

To learn more about **Authentication** and token in detail you can follow [this guide](../authentication-and-token).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
// With Temporary Token
fun getToken(): String? {
  // Update the token here from the VideoSDK dashboard
  // highlight-next-line
  return "YOUR_TOKEN"
}

// Server
fun getToken(): String? {
  val token = arrayOfNulls<String>(1)
  // highlight-start
  AndroidNetworking.get("http://localhost:3000/get-token")
      .build()
      .getAsJSONObject(object : JSONObjectRequestListener() {
          fun onResponse(response: JSONObject) {
              try {
                  token[0] = response.getString("token")
              } catch (e: JSONException) {
                  e.printStackTrace()
              }
          }

          fun onError(anError: ANError) {
              anError.printStackTrace()
          }
      })
  // highlight-end
  return token[0]
}
```
</TabItem>

<TabItem value="Java">

```java
// With Temporary Token
public String getToken()
{
  // Update the token here from the VideoSDK dashboard
  // highlight-next-line
  String token = "YOUR_TOKEN";
  return token;
}

// Server
public String getToken()
{
  final String[] token = new String[1];
  // highlight-start
  AndroidNetworking.get("http://localhost:3000/get-token")
      .build()
      .getAsJSONObject(new JSONObjectRequestListener() {
          @Override
          public void onResponse(JSONObject response) {
              try {
                  token[0] = response.getString("token");
              } catch (JSONException e) {
                  e.printStackTrace();
              }
          }
          @Override
          public void onError(ANError anError) {
              anError.printStackTrace();
          }
      });
  // highlight-end
  return token[0];
}
```
</TabItem>

</Tabs>

### Generating Meeting Id

With the token ready, we can get the `meetingId` from the [VideoSDK's rooms API](/api-reference/realtime-communication/create-room).

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
fun getMeetingId(token: String?): String? {
  var meetingId: String? =null;
  // We will use VideoSDK rooms API endpoint to create a meetingId
  // highlight-start
  AndroidNetworking.post("https://api.videosdk.live/v2/rooms")
      .addHeaders("Authorization", token) // We will pass the token in the headers
      .build()
      .getAsJSONObject(object : JSONObjectRequestListener() {
          fun onResponse(response: JSONObject) {
              try {
                  meetingId = response.getString("roomId")
              } catch (e: Exception) {
                  e.printStackTrace()
              }
          }

          fun onError(anError: ANError) {
              anError.printStackTrace()
          }
      })
  // highlight-end
  //we will return the meetingId which we got from the response of the api
  return meetingId
}
```
</TabItem>

<TabItem value="Java">

```java
public String getMeetingId(String token) {
  final String[] meetingId = new String[1];
  // We will use VideoSDK rooms API endpoint to create a meetingId
  // highlight-start
  AndroidNetworking.post("https://api.videosdk.live/v2/rooms")
      .addHeaders("Authorization", token) // We will pass the token in the headers
      .build()
      .getAsJSONObject(new JSONObjectRequestListener() {
          @Override
          public void onResponse(JSONObject response) {
              try {
                  meetingId[0] = response.getString("roomId");
              } catch (Exception e) {
                  e.printStackTrace();
              }
          }
          @Override
          public void onError(ANError anError) {
              anError.printStackTrace();
          }
      });
  // highlight-end
  //we will return the meetingId which we got from the response of the api
  return meetingId[0];
}
```
</TabItem>

</Tabs>

:::tip
To perform Network call you need to add [Fast Android Networking Library](https://github.com/amitshekhariitbhu/Fast-Android-Networking) in your application.
:::

### Initialization of Meeting

1. To initialize the meeting, first we have to initialize the VideoSDK.
We can initialize the VideoSDK using `initialize()` method provided by the SDK.

```js title="initialize"
  VideoSDK.initialize(Context context)
```

2. Next, we have to set token property of VideoSDK class.
By using `config()` method, you can set the token property of VideoSDK class.

```js title="config"
 VideoSDK.config(String token)
```

3. Now, we can initialize the meeting using a factory method provided by the SDK called `initMeeting()`.

  `initMeeting()` is responsible for initializing the meeting with the provided configuration, which includes the `meetingId`, `name`, `participantId` and many more.

  Let's take a deeper look at the available configuration options first.

```js title="initMeeting"
  VideoSDK.initMeeting(
      Context context,  // context of activity
      String meetingId,  // id of meeting
      String name, // name of participant
      boolean micEnabled, // flag to enable-mic
      boolean webcamEnabled, // flag to enable-webcam
      String participantId,  // id of participant
      String mode, // mode of participant
      boolean multiStream, // multiStream
      Map<String, CustomStreamTrack> customTracks, // map of customTracks
      JSONObject metaData // metaData
  )
```

- **`context`** : 

  - Context of activity.
  - It will accept `Context` type value.

- **`meetingId`** :

  - meetingId is unique identifiers that allow participants to join a specific meeting or room.
  - It will accept `String` type value.
  - It will be in the format of `xxx-yyy-zzz` and will be generated using the [VideoSDK's Room API](/api-reference/realtime-communication/create-room).

- **`name`**:

  - This will represent the name of the participant in the meeting.
  - It will accept `String` type value.

- **`micEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's microphone will be automatically enabled when they join a meeting.

- **`webcamEnabled`**:

  - This is a `boolean` flag, indicating whether a participant's webcam will be automatically enabled when they join a meeting.

- **`participantId`**:

  - This will be the unique identifier for the participant inside the meeting.
  - It can be used to specify the **unique identifier** which can be linked with **your own database** service.
  - It has to be of `String` type.
  - If you passed `null` then by default VideoSDK will generate unique id for each participant.

:::caution
You must ensure that the `participantId` is not repeated in the same meeting or room, It will enable VideoSDK to eliminate any participant respect to that `participantId`.
:::

- **`mode`**:

  - There are 2 types of modes:

    1. `CONFERENCE` : Both audio and video streams will be produced and consumed in this mode.

    2. `VIEWER` : Audio and video streams will not be produced or consumed in this mode.

  - It has to be of `String` type.
  - If you passed `null` then by default VideoSDK will set `CONFERENCE` mode.

- **`multiStream`**:

  -  It will specifiy if the stream should send multiple resolution layers or single resolution layer.

    - It has to be of `boolean` type.

- **`customTracks`**:

  -  If you want to set the initial custom tracks, then you can pass map of custom tracks in this paramater.

    - It has to be of `Map<String, CustomStreamTrack>` type.

- **`metaData`**:

  -  If you want to provide additional details about a user joining a meeting, such as their profile image, you can pass that information in this parameter.

    - It has to be of `JsonObject` type.

With all the configuration options explained, here is how you can initialize the meeting.

<Tabs
defaultValue="Kotlin"
groupId={"AndroidLanguage"}
values={[{label: 'Kotlin', value: 'Kotlin'},{label: 'Java', value: 'Java'},]}>

<TabItem value="Kotlin">

```js
class MainActivity : AppCompatActivity() {

  fun getToken(): String? {
    //highlight-next-line
    ...
  }

  fun getMeetingId(token: String?): String? {
    //highlight-next-line
    ...
  }

 override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    // initialize AndroidNetworking to perform Network call
    AndroidNetworking.initialize(applicationContext)

    //We will fetch token and meetingId and store it in local variables
    val token: String = getToken()
    val meetingId = getMeetingId(token)

    // highlight-start
    // initialize the VideoSDK
    VideoSDK.initialize(this@MainActivity)

    // set token property of VideoSDK
    VideoSDK.config(token)

    // create a new meeting instance
    val meeting: Meeting = VideoSDK.initMeeting(
        this@MainActivity, meetingId, "NAME HERE",
        true, true, null, null, false, null, null
    )
    // highlight-end

    Log.d("VideoSDK", "onCreate: $meetingId")
  }
}
```
</TabItem>

<TabItem value="Java">

```java
public class MainActivity extends AppCompatActivity {

  public String getToken()
  {
    //highlight-next-line
    ...
  }

  public String getMeetingId(String token) {
    //highlight-next-line
    ...
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    // initialize AndroidNetworking to perform Network call
    AndroidNetworking.initialize(getApplicationContext());

    //We will fetch token and meetingId and store it in local variables
    String token = getToken();
    String meetingId = getMeetingId(token);

    // highlight-start
    // initialize the VideoSDK
    VideoSDK.initialize(MainActivity.this);

    // set token property of VideoSDK
    VideoSDK.config(token);

    // create a new meeting instance
    Meeting meeting = VideoSDK.initMeeting(
            MainActivity.this, meetingId, "NAME HERE",
            true, true, null, null, false, null, null
    );
    // highlight-end

    Log.d("VideoSDK", "onCreate: " + meetingId);
  }
}
```
</TabItem>

</Tabs>

### API Reference

The API references for all the methods utilised in this guide are provided below.

- [initMeeting](/android/api/sdk-reference/initMeeting)
