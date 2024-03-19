const releaseResource = {
  title: "Acquire Resource",
  description:
    "This API lets you release resource by passing ids of resources as body parameters.",
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
      key: "ids",
      value: ["abcdef9879288c1f48339f64"],
      description: "An array of resource ids",
      required: true,
    },
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/resource/release",
  response: {
    success: true,
    data: [
      {
        id: "abcdef9879288c1f48339f64",
        success: true,
        msg: "resource released",
      },
    ],
  },
};

export { releaseResource };
