module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/video-and-audio-calling-api-sdk/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/javascript-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
        // "guide/video-and-audio-calling-api-sdk/start-or-join-meeting",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        // "guide/video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/screenshare",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/send-messages",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/play-external-video",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
        "guide/video-and-audio-calling-api-sdk/features/pin-participants",
        "guide/video-and-audio-calling-api-sdk/features/switch-participant",
        {
          type: "category",
          label: "Connect Meetings (BETA)",
          items: [
            "guide/video-and-audio-calling-api-sdk/features/connection/overview",
            "guide/video-and-audio-calling-api-sdk/features/connection/establish-connection",
            "guide/video-and-audio-calling-api-sdk/features/connection/get-connection",
            "guide/video-and-audio-calling-api-sdk/features/connection/list-connection-participant",
            "guide/video-and-audio-calling-api-sdk/features/connection/send-message-to-connection",
            "guide/video-and-audio-calling-api-sdk/features/connection/switch-connection-participant",
            "guide/video-and-audio-calling-api-sdk/features/connection/end-connection-meeting",
            "guide/video-and-audio-calling-api-sdk/features/connection/close-connection",
          ],
          collapsed: true,
        },
        "guide/video-and-audio-calling-api-sdk/features/error-event",
      ],
      collapsed: false,
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
      items: [
            "api/sdk-reference/setup",
            "api/sdk-reference/meeting-class",
            "api/sdk-reference/participant-class",
            "api/sdk-reference/stream-class",
      ],
    },
  ]
};
