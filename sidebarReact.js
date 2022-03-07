module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "Quick Start",
      items: [
        "guide/video-and-audio-calling-api-sdk/getting-started",
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/quick-start",
        "guide/video-and-audio-calling-api-sdk/react-js-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/screenshare",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/send-messages",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
        "guide/video-and-audio-calling-api-sdk/features/pin-participants",
        "guide/video-and-audio-calling-api-sdk/features/pubsub",
        "guide/video-and-audio-calling-api-sdk/features/error-event",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/play-external-video",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
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
      ],
      collapsed: true,
    },
  ],
  apiSidebar: [
    {
      type: "doc",
      id: "api/sdk-reference/setup",
    },
    {
      type: "doc",
      id: "api/sdk-reference/use-meeting",
    },
    {
      type: "doc",
      id: "api/sdk-reference/use-participant",
    },
    {
      type: "doc",
      id: "api/sdk-reference/meeting-provider",
    },
    {
      type: "doc",
      id: "api/sdk-reference/meeting-consumer",
    },
    {
      type: "doc",
      id: "api/sdk-reference/use-connection",
    },
    {
      type: "doc",
      id: "api/sdk-reference/use-pubsub",
    },
  ],
};
