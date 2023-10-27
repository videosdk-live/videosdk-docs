const captureHLSstream = {
  title: "Capture HLS Stream",
  description:
    "This API lets you capture an HLS stream in different formats.",
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
      value: "abcd-abcd-abcd",
      description: "The ID of the Room.",
      required: true,
    },
    {
      key: "time",
      value:
        "1",
      description:
        "the time in seconds (if not specified: it will take real time capture) ",
      required: false,
    },
    {
      key: "width",
      value:
        "see example",
      description:
        "capture image width",
      required: false,
    },
    {
      key: "height",
      value: "see example",
      description:"capture image height \n #### default values for width and height \n| quality | orientation | width(default) | height(default)\n| :---: | :---: | :---: | :---: |\n| high | landscape | 1920 | 1080 |\n| med | landscape | 1280 | 720 |\n| low | landscape | 854 | 480 |\n| high | portrait | 1080 | 1920 |\n| med | portrait | 720 | 1280 |\n| low | portrait | 480 | 854 |\n",
      required: false,
    },
    {
      key: "format",
      value:
        "jpg",
      description:
        "file supported formats: jpg(default), png and webp (webp only supports in realtime)",
      required: false,
    },
  ],
  responseParameters: [
    {
      key: "message",
      description: "response message.",
    },
    {
      key: "roomId",
      description: "The ID of the Room.",
    },
    {
      key: "meta",
      description: "metadata of the file. that includes file createdAt, width, height and format.",
    },
    {
      key: "filePath",
      description: "filepath url of captured file in HLS stream.",
    },
    {
      key: "fileSize",
      description: "size of captured file in HLS stream.",
    },
    {
      key: "fileName",
      description: "name of captured file in HLS stream.",
    }
  ],
  queryParameters: [],
  parameters: [],
  apiEndpoint: "https://api.videosdk.live/v2/hls/capture",
  response: {
    message: "captured thumbnail successfully",
    roomId: "abcd-abcd-abcd",
    meta: {
        createdAt: "2023-10-19T07:24:55.195Z",
        width: 1280, // if not set then default width
        height: 720, // if not set then default height
        format: "jpg" // default format
    },
    filePath: "<cdn url>", // https://cdn.videosdk.live/thumbnail/<filename>.<format>
    fileSize: 415153,
    fileName: "<filename>"
  },
};

export { captureHLSstream };
