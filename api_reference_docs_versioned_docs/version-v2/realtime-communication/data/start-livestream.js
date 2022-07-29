const startLivestream = {
  title: "Start Livestream",
  description:
    "This API lets you start a livestream by passing roomId, outputs and config object as body parameters.",
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
        "[Customize Layout of Meeting Livestream](/docs/tutorials/customized-layout).",
      required: false,
    },
    {
      key: "outputs",
      value: [{ streamKey: "Platform_StreamKey", url: "RTMP-URL" }],
      description:
        "**Array of object** which contains multiple platfroms `streamKey` and `url`.",
      required: true,
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
  apiEndpoint: "https://api.videosdk.live/v2/livestreams/start",
  response: "Livestream started successfully",
};

export { startLivestream };
