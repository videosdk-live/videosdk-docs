const startHLSstream = {
  title: "Start HLS Stream",
  description:
    "This API lets you start an HLS stream by passing roomId and config object as body parameters.",
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
      key: "templateUrl",
      value:
        "https://www.example.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.l0sImlhdCI6MTY0OTkyNjI1MCwiZXhwIjoxNjwNTMxMDUwf&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
      description:
        "[Customize Layout of Meeting HLS](/docs/tutorials/customized-layout).",
      required: false,
    },
    {
      key: "config",
      value: "{layout: {type: `SPOTLIGHT`, priority:`PIN`, gridSize: 5}}",
      description: `
- **config**:
  - **layout**:
    - **type**: _"GRID"_ | _"SPOTLIGHT"_ | _"SIDEBAR"_
    - **priority**: _"SPEAKER"_ | _"PIN"_
    - **gridSize**: Number _\`max 25\`_
`,
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/hls/start",
  response: {
    downstreamUrl:
      "https://cdn.videosdk.live/meetings-hls/2e200932-e00f-4e5f-b35d-73d3079e6bf5/index.m3u8",
  },
};

export { startHLSstream };
