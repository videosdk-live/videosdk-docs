module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "Quick Start",
      items: [
        "guide/video-and-audio-calling-api-sdk/getting-started",
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/flutter-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
        // "guide/video-and-audio-calling-api-sdk/start-or-join-meeting",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        // "guide/video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
        "guide/video-and-audio-calling-api-sdk/features/speaker-indication",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
      ],
      collapsed: true,
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "SDK Reference",
      collapsed: true,
      items: [
        "api/sdk-reference/setup",
        "api/sdk-reference/meeting-builder-widget",
        "api/sdk-reference/meeting-class",
        "api/sdk-reference/participant-class",
        "api/sdk-reference/stream-class",
      ],
    },
  ],
};
