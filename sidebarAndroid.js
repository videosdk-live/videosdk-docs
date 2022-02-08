module.exports = {
  guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "QUICK START",
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
      label: "BASIC FEATURES",
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
      collapsed: false,
    },
    {
      type: "category",
      label: "ADVANCED FEATURES",
      items: [
        "guide/video-and-audio-calling-api-sdk/features/go-live-social-media",
      ],
    },
  ],

  apiSidebar: [
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
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
  ],
};
