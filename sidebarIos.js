module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "guide/video-and-audio-calling-api-sdk/getting-started",
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/ios-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Quick Start Guide",
      items: ["guide/video-and-audio-calling-api-sdk/quick-start"],
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
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
        "guide/video-and-audio-calling-api-sdk/features/pubsub",
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
      id: "api/sdk-reference/video-sdk-class",
    },
    {
      type: "doc",
      id: "api/sdk-reference/meeting-class",
    },
    {
      type: "doc",
      id: "api/sdk-reference/participant-class",
    },
    {
      type: "doc",
      id: "api/sdk-reference/stream-class",
    },
    {
      type: "doc",
      id: "api/sdk-reference/meeting-event-listener-class",
    },
    {
      type: "doc",
      id: "api/sdk-reference/participant-event-listener-class",
    },
  ],
};
