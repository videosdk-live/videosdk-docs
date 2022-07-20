---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Prebuilt SDK.

## v0.2.4

**Release** : Jan 2022

**Change log** :

Regular layout attributes & Recording/RTMP layout attributes have been changed and separated. This change is offering better flexibility if you want to use different layout settings on both sides.

- **Layout types** : `SPOTLIGHT` | `SIDEBAR` | `GRID` This offers different types of looks.

- **Priority** : `SPEAKER` | `PIN`, This offers you an option to whom you want to give priority on-screen, the active speaker or PINNED speaker.

### Recording Code Snippet

```
const config = {
  // ...
  recording: {
    enabled: true,
    webhookUrl: "https://www.videosdk.live/callback",
    awsDirPath: `/meeting-recordings/${meetingId}/`,
    autoStart: false,

    layout: {
      type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
      priority: "PIN", // "SPEAKER" | "PIN",
      gridSize: 3,
    },
  },

  permissions: {
    toggleRecording: true,
    //...
  },

  //...
};
```

### RTMP Code Snippet

```
const config = {
  // ...
  livestream: {
    autoStart: true,
    outputs: [
      {
        url: "rtmp://x.rtmp.youtube.com/live2",
        streamKey: "<STREAM KEY FROM YOUTUBE>",
      },
    ],
    layout: {
      type: "SIDEBAR", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
      priority: "PIN", // "SPEAKER" | "PIN",
      gridSize: 3,
    },
  },
  // ...
};
```

