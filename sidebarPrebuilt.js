module.exports = {
  guidePrebuiltVideoCalling: [
    {
      type: "category",
      label: "GUIDE",
      items: ["guide/prebuilt-video-and-audio-calling/getting-started"],
      collapsed: false,
    },
    {
      type: "category",
      label: "SETUP",
      items: [
        "guide/prebuilt-video-and-audio-calling/signup-and-create-api",
        {
          type: "category",
          label: "Client Setup",
          items: [
            "guide/prebuilt-video-and-audio-calling/using-script",
            "guide/prebuilt-video-and-audio-calling/using-npm",
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
        "guide/prebuilt-video-and-audio-calling/features/join-screen",
        "guide/prebuilt-video-and-audio-calling/features/camera-controls",
        "guide/prebuilt-video-and-audio-calling/features/mic-controls",
        "guide/prebuilt-video-and-audio-calling/features/redirect-on-leave",
        "guide/prebuilt-video-and-audio-calling/features/screenshare",
        "guide/prebuilt-video-and-audio-calling/features/send-messages",
        "guide/prebuilt-video-and-audio-calling/features/record-meeting",
        "guide/prebuilt-video-and-audio-calling/features/go-live-social-media",
        "guide/prebuilt-video-and-audio-calling/features/customize-branding",
        "guide/prebuilt-video-and-audio-calling/features/customize-permissions",
        "guide/prebuilt-video-and-audio-calling/features/whitelist-domain",
        "guide/prebuilt-video-and-audio-calling/features/pin-participants",
        "guide/prebuilt-video-and-audio-calling/features/remove-participant",
        "guide/prebuilt-video-and-audio-calling/features/end-meeting",
        "guide/prebuilt-video-and-audio-calling/features/whiteboard",
        "guide/prebuilt-video-and-audio-calling/features/left-screen",
        "guide/prebuilt-video-and-audio-calling/features/debug-mode",
      ],
      collapsed: false,
<<<<<<< Updated upstream
  },
],
  apiSidebar: [
=======
    },
>>>>>>> Stashed changes
    {
      type: "category",
      label: "SDK REFERENCE",
      collapsed: false,
<<<<<<< Updated upstream
      items: [
            "api/sdk-reference/setup",
            "api/sdk-reference/video-sdk-meeting",
      ],
    },
  ]
}  
=======
      items: ["api/sdk-reference/setup", "api/sdk-reference/video-sdk-meeting"],
    },
  ],
};
>>>>>>> Stashed changes
