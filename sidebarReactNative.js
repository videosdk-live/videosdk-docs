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
        {
          type: "category",
          label: "Client Setup",
          items: [
            "video-and-audio-calling-api-sdk/react-native-android-sdk",
            "video-and-audio-calling-api-sdk/react-native-ios-sdk"
          ],
          collapsed: true,
        },
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
        "video-and-audio-calling-api-sdk/features/screenshare",
        "video-and-audio-calling-api-sdk/features/toggle-participant-media",
        "video-and-audio-calling-api-sdk/features/send-messages",
        "video-and-audio-calling-api-sdk/features/record-meeting",
        "video-and-audio-calling-api-sdk/features/play-external-video",
        "video-and-audio-calling-api-sdk/features/go-live-social-media",
        "video-and-audio-calling-api-sdk/features/speaker-indication",
        "video-and-audio-calling-api-sdk/features/pin-participants",
        "video-and-audio-calling-api-sdk/features/switch-participant",
        {
          type: "category",
          label: "Connect Meetings (BETA)",
          items: [
            "video-and-audio-calling-api-sdk/features/connection/overview",
            "video-and-audio-calling-api-sdk/features/connection/establish-connection",
            "video-and-audio-calling-api-sdk/features/connection/get-connection",
            "video-and-audio-calling-api-sdk/features/connection/list-connection-participant",
            "video-and-audio-calling-api-sdk/features/connection/send-message-to-connection",
            "video-and-audio-calling-api-sdk/features/connection/switch-connection-participant",
            "video-and-audio-calling-api-sdk/features/connection/end-connection-meeting",
            "video-and-audio-calling-api-sdk/features/connection/close-connection",
          ],
          collapsed: true,
        },
        "video-and-audio-calling-api-sdk/features/error-event",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Extras",
      items: [
        "video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share",
      ],
      collapsed: false,
    },
  ],
}