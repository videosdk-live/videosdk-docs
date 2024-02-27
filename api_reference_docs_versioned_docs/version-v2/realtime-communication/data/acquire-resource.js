const acquireResource = {
  title: "Acquire Resource",
  description: `This API lets you acquire resource by passing type, mode, quality, webhookUrl and units as body parameters. \n\n![resourceStateDiagram.png](https://cdn.videosdk.live/website-resources/docs-resources/resourceStateDiagram.png)
  ### Resource States:
  - **pending**: The resource enters the pending state when you request to acquire it.
  - **idle**: When a resource is ready for use, it enters an ideal state. You will receive a [webhook](https://docs.videosdk.live/api-reference/realtime-communication/user-webhooks#resource-acquired) when it enters this state for the first time.
  - **composing**: When you initiate recording, HLS, or RTMP in the resource, it enters the composing state. Upon completion of recording, HLS, or RTMP, it returns to the idle state.
  - **released**: The resource enters to the released state when a you requests to release it.
  You can not use this resorce for futher use.`,
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
