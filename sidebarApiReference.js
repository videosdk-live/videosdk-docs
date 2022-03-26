module.exports = {
  realtimeCommunicationSidebar: [
    {
      type: "category",
      label: "Real Time Communication",
      items: [
        "realtime-communication/intro",
        "realtime-communication/architecture",
      ],
      collapsed: true,
    },

    {
      type: "category",
      label: "Rest API Reference",
      collapsed: true,
      items: [
        "realtime-communication/create-room",
        "realtime-communication/update-room",
        "realtime-communication/fetch-room-details",
        {
          type: "category",
          label: "Sessions",
          collapsed: true,
          items: [
            "realtime-communication/fetch-session",
            "realtime-communication/fetch-session-using-sessionid",
            "realtime-communication/fetch-participants",
          ],
        },
        {
          type: "category",
          label: "Recordings",
          collapsed: true,
          items: [
            "realtime-communication/start-recording",
            "realtime-communication/stop-recording",
            "realtime-communication/fetch-recordings",
            "realtime-communication/fetch-recording-using-recordingId",
          ],
        },
        {
          type: "category",
          label: "Livestreams",
          collapsed: true,
          items: [
            "realtime-communication/start-livestream",
            "realtime-communication/stop-livestream",
            "realtime-communication/fetch-livestreams",
            "realtime-communication/fetch-livestream-using-livestreamId",
          ],
        },
        {
          type: "category",
          label: "HLS Stream",
          collapsed: true,
          items: [
            "realtime-communication/start-hlsStream",
            "realtime-communication/stop-hlsStream",
            "realtime-communication/fetch-hlsStreams",
            "realtime-communication/fetch-hlsStream-using-hlsStreamId",
          ],
        },
        {
          type: "category",
          label: "Combined Streams",
          collapsed: true,
          items: [
            "realtime-communication/combine-stream-start",
            "realtime-communication/combine-stream-stop",
          ],
        },
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "See Also",
      items: ["realtime-communication/see-also/device-browser-support"],
      collapsed: true,
    },
  ],
};
