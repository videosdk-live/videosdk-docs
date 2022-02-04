module.exports = {
    guideAudioAndVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["video-and-audio-calling-api-sdk/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "video-and-audio-calling-api-sdk/signup-and-create-api",
        "video-and-audio-calling-api-sdk/ios-sdk",
        "video-and-audio-calling-api-sdk/server-setup",
        // "video-and-audio-calling-api-sdk/start-or-join-meeting",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        // "video-and-audio-calling-api-sdk/features/initilize-meeting-factory",
        "video-and-audio-calling-api-sdk/features/start-join-meeting",
        "video-and-audio-calling-api-sdk/features/manage-participants",
        "video-and-audio-calling-api-sdk/features/leave-end-meeting",
        "video-and-audio-calling-api-sdk/features/camera-controls",
        "video-and-audio-calling-api-sdk/features/mic-controls",
        "video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "video-and-audio-calling-api-sdk/features/record-meeting",
        "video-and-audio-calling-api-sdk/features/go-live-social-media",
        "video-and-audio-calling-api-sdk/features/speaker-indication",
      ],
      collapsed: false,
    },
  ],
}