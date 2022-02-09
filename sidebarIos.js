module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "SETUP",
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
      label: "BASIC FEATURES",
      items: [
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
      label: "ADVANCED FEATURES",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
      ],
      collapsed: true,
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: true,
      items: [
            "api/sdk-reference/setup",
            "api/sdk-reference/video-sdk-class",
            "api/sdk-reference/meeting-class",
            "api/sdk-reference/participant-class",
            "api/sdk-reference/stream-class",
            "api/sdk-reference/meeting-event-listener-class",
            "api/sdk-reference/participant-event-listener-class",
      ],
    },
  ]
}