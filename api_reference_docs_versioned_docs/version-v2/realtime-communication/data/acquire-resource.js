const acquireResource = {
  title: "Acquire Resource",
  description: `This API lets you acquire resource by passing type, mode, quality, webhookUrl and units as body parameters. ![resourceStateDiagram.png](https://cdn.videosdk.live/website-resources/docs-resources/resourceStateDiagram.png)
  `,
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
      key: "type",
      value: "recording",
      description:
        "Possible values for this field are `recording`, `hls` or `rtmp`",
      required: true,
    },
    {
      key: "webhookUrl",
      description: "Webhook URL",
      value: "https://www.example.com/",
      required: true,
    },
    {
      key: "mode",
      defaultValue: "`video-and-audio`",
      value: "video-and-audio",
      description:
        "Possible values for this field are `video-and-audio` or `audio`",
      required: false,
    },
    {
      key: "quality",
      defaultValue: "`med`",
      value: "med",
      description: "Possible values for this field are `low`, `med` or `high`",
      required: false,
    },
    {
      key: "units",
      defaultValue: "`1`",
      description: "Number of resources.",
      value: "1",
      required: false,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/resource/acquire",
  response: {
    success: true,
    data: [
      {
        id: "abcdef9879288c1f48339f64",
        status: "pending",
        type: "recording",
        mode: "video-and-audio",
        quality: "med",
        composerIds: [],
        webhookUrl: "https://example.com/",
      },
    ],
  },
};

export { acquireResource };
