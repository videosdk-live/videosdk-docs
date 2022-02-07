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
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/video-and-audio-calling-api-sdk/react-native-android-sdk",
            "guide/video-and-audio-calling-api-sdk/react-native-ios-sdk"
          ],
          collapsed: true,
        },
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
    {
      type: "category",
      label: "Extras",
      items: [
        "guide/video-and-audio-calling-api-sdk/extras/react-native-ios-screen-share",
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
            "api/sdk-reference/setup-android",
            "api/sdk-reference/setup-ios",
            "api/sdk-reference/rtc-stream",
            "api/sdk-reference/use-meeting",
            "api/sdk-reference/use-participant",
            "api/sdk-reference/meeting-provider",
            "api/sdk-reference/meeting-consumer",
      ],
    },
  ]
}