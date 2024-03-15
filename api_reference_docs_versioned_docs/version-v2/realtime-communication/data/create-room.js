const createRoom = {
  // createRoom: {
  title: "Create a Room",
  description: "This API lets you create unique meetingId.",
  headers: [
    {
      key: "Authorization",
      value: "$YOUR_TOKEN",
    },
    {
      key: "Content-Type",
      value: "application/json",
    },
  ],
  methodType: "POST",
  postParameters: [
    {
      key: "region",
      description: "",
      required: false,
      value: "sg001",
      isDeprecated: true,
      isDiscontinued: true,
      deprecatedMessage:
        "The region parameter has been discontinued; instead, the Video SDK's smart service will pick the best optimal servers for a conference, closest to your end-users' location. If you still need to hold your conferences in a specific region, i.e. Geo Fencing. \n  \n [Contact Us](https://videosdk.live/contact)",
    },
    {
      key: "customRoomId",
      value: "aaa-bbb-ccc",
      description: "#### Customize Room id for better understanding.",
      required: false,
    },
    {
      key: "webhook",
      value: "see example",
      values:
        "\n```\n{\n  'webhook': {\n    'endPoint': 'your webhook endpoint',\n    'events': ['webhook event type_1', 'webhook event type_2']\n   }\n}\n```",
      description:
        "#### You can subscribe from various events to get webhook. \n - `participant-joined` \n - `participant-left` \n - `session-started` \n - `session-ended` \n - `recording-starting` \n - `recording-started` \n - `recording-stopping` \n - `recording-stopped` \n - `recording-failed`  \n - `transcription-completed` \n - `livestream-starting` \n - `livestream-started` \n - `livestream-stopping` \n - `livestream-stopped` \n - `livestream-failed` \n - `hls-starting` \n - `hls-started` \n - `hls-playable` \n - `hls-stopping` \n - `hls-stopped` \n - `hls-failed` - \n Please refer this [User webhooks](/api-reference/realtime-communication/user-webhooks) for more information. All User webhooks endpoint must me a `POST` method in your api server / webhook server.",
      required: false,
    },
    {
      key: "autoCloseConfig",
      value: "see example",
      values:
        "\n```\n{\n  'autoCloseConfig': {\n    'type': 'session-end-and-deactivate',\n    'duration': 60\n   }\n}\n```",
      description:
        "#### This configuration will be used to automatically close the running session and also deactivate it, if configured. \n - `type` \n\t * `session-ends`: This will close the running session after provided duration. \n\t * `session-end-and-deactivate`: This will not only close the running session after provided duration but also deactivate the roomId. i.e. Only one session could be taken using this roomId, after that session ends no other session could be taken for the same roomId. \n - `duration` \n\t * This duration will be in minutes, and after that duration, your room will be closed. Default value is 480 minutes.",
      required: false,
    },
    {
      key: "autoStartConfig",
      value: "see example",
      values:
        "\n```\n{\n  'autoStartConfig': {\n    'recording': {\n      'transcription': {\n         'enabled' : true\n       }\n      'summary': {\n         'enabled' : true,\n         'prompt' : 'Write summary in sections like Title, Agenda, Speakers, Action Items, Outlines, Notes and Summary'\n       },\n      'config': {\n        'layout': { \n          'type': 'GRID',\n          'priority': 'SPEAKER',\n          'gridSize': 4\n        }\n      }\n    },\n    'hls': {\n      'config': {\n        'layout': { \n          'type': 'GRID',\n          'priority': 'SPEAKER',\n          'gridSize': 4\n        }\n      }\n    }\n}\n```",
      description: `#### This configuration enables automatic initiation of recording, HLS streaming, or both, providing a convenient way to capture and serve content in real-time. It streamlines the process of content management and delivery for enhanced user experience. \n
 * **recording** :
  - **templateUrl** : [Customize Layout of Meeting Recording](/react/guide/interactive-live-streaming/custom-template)
  - **transcription** :
      - enabled: true | false
  - **Summary** :
      - enabled: true | false
      - prompt: “Your customized summary prompt”    
  - **config** : 
    - **layout**:
      - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
      - **priority**: _"SPEAKER"_ | _"PIN"_
      - **gridSize**: Number _\`max 4\`_
    - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
    - **mode**: _"video-and-audio"_ | _"audio"_
    - **quality**: _"low"_ | _"med"_ | _"high"_
    - **orientation**: _"portrait"_ | _"landscape"_
  - **awsDirPath**: _"Your AWS S3 Bucket Path."_ 

- **hls** :
  - **templateUrl** : [Customize Layout of Meeting HLS](/react/guide/interactive-live-streaming/custom-template)
  - **config** : 
    - **layout**:
      - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
      - **priority**: _"SPEAKER"_ | _"PIN"_
      - **gridSize**: Number _\`max 4\`_
    - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
    - **mode**: _"video-and-audio"_ | _"audio"_
    - **quality**: _"low"_ | _"med"_ | _"high"_
    - **orientation**: _"portrait"_ | _"landscape"_
      `,
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/rooms",
  response: {
    roomId: "abc-xyzw-lmno",
    customRoomId: "final-testing",
    userId: "5f7edbb14c938bcd42944527",
    disabled: false,
    createdAt: "2022-03-25T04:49:11.024Z",
    updatedAt: "2022-03-25T04:49:11.024Z",
    id: "623d49c760a18e699abcc8a4",
    links: {
      get_room: "https://api.videosdk.live/v2/rooms/abc-xyzw-lmno",
      get_session: "https://api.videosdk.live/v2/sessions/",
    },
  },
  // }
};

export { createRoom };
