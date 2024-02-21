const startMultiHLSstream = {
  title: "Start Multiple HLS Stream",
  description:
    "This API lets you start multiple HLS stream by passing roomId, resourceId and config object as body parameters.",
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
      key: "roomId",
      value: "xyz",
      description: "The ID of the Room.",
      required: true,
    },
    {
      key: "resourceId",
      value: "abcdef9879288c1f48339f64",
      description: "The ResourcId of the Resource.",
      required: true,
    },
    {
      key: "templateUrl",
      value:
        "https://www.example.com/?token=tooken&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
      description:
        "[Customize Layout of Meeting HLS](/react/guide/interactive-live-streaming/custom-template).",
      required: false,
    },
    {
      key: "config",
      value: "configObj",
      description: `
  - orientation - hls stream orientation will be set to "landscape" by default, if you pass portrait orientation then it will stream hls in portrait mode.
  - **config**:
    - **layout**:
      - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
      - **priority**: _"SPEAKER"_ | _"PIN"_
      - **gridSize**: Number _\`max 25\`_
    - **orientation**: _"landscape"_ | _"portrait"_
    - **theme**: _"DARK"_ | _"LIGHT"_ | _"DEFAULT"_
    - **mode**: _"video-and-audio"_ | _"audio"_
    - **quality**: _"low"_ | _"med"_ | _"high"_
  `,
      required: false,
    },
  ],
  responseParameters: [
    {
      key: "playbackHlsUrl",
      description: "Live HLS with playback support",
    },
    {
      key: "livestreamUrl",
      description: "Live HLS without playback sipport",
    },
    {
      key: "downstreamUrl",
      description: "Live HLS with playback support",
      isDeprecated: true,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/resource/hls/start",
  response: {
    success: true,
    data: {
      sessionId: "abcde94c96e17e03fb0abcde4",
      start: "2022-04-19T09:18:13.432Z",
      roomId: "abcd-efgh-ijkl",
      links: {
        get_room: "https://api.videosdk.live/v2/rooms/abcd-efgh-ijkl",
        get_session:
          "https://api.videosdk.live/v2/sessions/abcde94c96e17e03fb0abcde4",
      },
      downstreamUrl:
        "https://cdn.videosdk.live/meetings-hls/abcdefgh-ijkl-mnop/index.m3u8",
      playbackHlsUrl:
        "https://cdn.videosdk.live/meetings-hls/abcdefgh-ijkl-mnop/index.m3u8",
      livestreamUrl:
        "https://cdn.videosdk.live/meetings-hls/abcdefgh-ijkl-mnop/live.m3u8",
      id: "abcdef9879288c1f48339f64",
    },
  },
};

export { startMultiHLSstream };
