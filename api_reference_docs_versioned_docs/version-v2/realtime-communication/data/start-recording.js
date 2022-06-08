const startRecording = {
  title: "Start Recording",
  description:
    "This API lets you record your room by passing roomId and config object as body parameters.",
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
      value: "abcd-efgh-ijkl",
      description: "The ID of the Room.",
      required: true,
    },
    {
      key: "templateUrl",
      value:
        "https://www.example.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.l0sImlhdCI6MTY0OTkyNjI1MCwiZXhwIjoxNjwNTMxMDUwf&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
      description:
        "[Customize Layout of Meeting Recording](/docs/tutorials/customized-layout).",
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
    {
      key: "webhookUrl",
      description: "Webhook URL",
      required: false,
    },
    {
      key: "awsDirPath",
      description: "Your AWS S3 Bucket Path.",
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/recordings/start",
  response: "Recording started successfully",
};

export { startRecording };
