module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "Quick Start",
      items: [
        "guide/video-and-audio-calling-api-sdk/getting-started",
        "guide/video-and-audio-calling-api-sdk/signup-and-create-api",
        "guide/video-and-audio-calling-api-sdk/android-sdk",
        "guide/video-and-audio-calling-api-sdk/server-setup",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Basic Features",
      items: [
        // "video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
        "guide/video-and-audio-calling-api-sdk/features/manage-participants",
        "guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "guide/video-and-audio-calling-api-sdk/features/camera-controls",
        "guide/video-and-audio-calling-api-sdk/features/mic-controls",
        "guide/video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "guide/video-and-audio-calling-api-sdk/features/record-meeting",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Advanced Features",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
      ],
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
