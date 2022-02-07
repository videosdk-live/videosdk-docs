module.exports = {guidePrebuiltVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["prebuilt-video-and-audio-calling/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "prebuilt-video-and-audio-calling/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "prebuilt-video-and-audio-calling/using-script",
            "prebuilt-video-and-audio-calling/using-npm",
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "FEATURES",
      items: [
        "prebuilt-video-and-audio-calling/features/join-screen",
        "prebuilt-video-and-audio-calling/features/camera-controls",
        "prebuilt-video-and-audio-calling/features/mic-controls",
        "prebuilt-video-and-audio-calling/features/redirect-on-leave",
        "prebuilt-video-and-audio-calling/features/screenshare",
        "prebuilt-video-and-audio-calling/features/send-messages",
        "prebuilt-video-and-audio-calling/features/record-meeting",
        "prebuilt-video-and-audio-calling/features/go-live-social-media",
        "prebuilt-video-and-audio-calling/features/customize-branding",
        "prebuilt-video-and-audio-calling/features/customize-permissions",
        "prebuilt-video-and-audio-calling/features/whitelist-domain",
        "prebuilt-video-and-audio-calling/features/pin-participants",
        "prebuilt-video-and-audio-calling/features/remove-participant",
        "prebuilt-video-and-audio-calling/features/end-meeting",
        "prebuilt-video-and-audio-calling/features/whiteboard",
        "prebuilt-video-and-audio-calling/features/left-screen",
        "prebuilt-video-and-audio-calling/features/debug-mode",
      ],
      collapsed: false,
  },
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
      items: [
            "prebuilt-video-and-audio-calling/sdk-reference/setup",
            "prebuilt-video-and-audio-calling/sdk-reference/video-sdk-meeting",
      ],
    },
  ]}