const startMultiRecording = {
  title: "Start Multiple Recording",
  description:
    "This API lets you record multiple record of same room by passing roomId, resourceId and config object as body parameters.",
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
      key: "resourceId",
      value: "abcdef9879288c1f48339f64",
      description: "The ResourcId of the Resource.",
      required: true,
    },
    {
      key: "templateUrl",
      value:
        "https://www.example.com/?token=token&meetingId=74v5-v21l-n1ey&participantId=RECORDER_ID",
      description:
        "[Customize Layout of Meeting Recording](/react/guide/interactive-live-streaming/custom-template).",
      required: false,
    },
    {
      key: "config",
      value: "configObj",
      description: `
 - **config**:
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
    {
      key: "webhookUrl",
      description: "Webhook URL",
      value: "https://www.example.com/",
      required: false,
    },
    {
      key: "awsDirPath",
      description: "Your AWS S3 Bucket Path.",
      value: "s3path",
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/resource/recordings/start",
  response: {
    success: true,
    data: { id: "abcdef9879288c1f48339f54" },
  },
};

export { startMultiRecording };
