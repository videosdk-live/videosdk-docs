/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Video SDK",
  tagline: "Interactive Video API Experiences For Developers",
  url: "https://docs.videosdk.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icons/favicon.ico",
  organizationName: "videosdk-live", // Usually your GitHub org/user name.
  projectName: "videosdk-live", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themeConfig: {
    image: "img/videosdklive-thumbnail.jpg",
    algolia: {
      apiKey: "6b125a23a26dc2bf6a8a0cb51a66a3f7",
      indexName: "videosdk",
      searchParameters: {
        facetFilters: ["content"],
      },
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },

    navbar: {
      title: "",
      hideOnScroll: true,
      logo: {
        alt: "VideosdK live logo",
        src: "img/videosdk_docs_blacklogo.png",
        srcDark: "img/videosdk_docs_whitelogo.png",
        href: "https://videosdk.live/",
        target: "_self",
      },
      items: [
        {
          position: "left",
          label: "Overview",
          to: "/",
          activeBaseRegex: "/$",
        },
        {
          position: "left",
          label: "Guide",
          items: [
            {
              label: "Dashboard",
              to: "docs/guide/dashboard/getting-started",
              activeBaseRegex: "docs/guide/dashboard/*",
            },
            {
              label: "Prebuilt Video & Audio Calling SDK",
              to: "prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
              activeBaseRegex: "docs/guide/prebuilt-video-and-audio-calling/*",
            },
            {
              label: "Custom Video & Audio Calling SDK",
              to: "react/guide/video-and-audio-calling-api-sdk/getting-started",
              activeBaseRegex: "/*/video-and-audio-calling-api-sdk/*",
            },
            {
              label: "Standard Live Streaming API",
              to: "docs/guide/standard-live-streaming-api-sdk/getting-started",
              activeBaseRegex: "docs/guide/standard-live-streaming-api-sdk/*",
            },
            {
              label: "Video on Demand API",
              to: "docs/guide/video-on-demand/getting-started",
              activeBaseRegex: "docs/guide/video-on-demand/*",
            },
          ],
        },
        {
          position: "left",
          label: "API Reference",
          items: [
            {
              label: "Custom SDK References",
              to: "react/api/sdk-reference/setup",
              activeBaseRegex: "docs/realtime-communication/*",
            },
            {
              label: "Realtime communication",
              to: "docs/realtime-communication/intro",
              activeBaseRegex: "docs/realtime-communication/*",
            },
            {
              label: "Live streaming",
              to: "docs/live-streaming/intro",
              activeBaseRegex: "docs/live-streaming/*",
            },
            {
              label: "Video On Demand",
              to: "docs/video-on-demand/intro",
              activeBaseRegex: "docs/video-on-demand/*",
            },
          ],
        },
        {
          position: "left",
          label: "Tutorials",
          to: "/docs/tutorials/introduction",
        },
        {
          position: "left",
          label: "Code Samples",
          to: "/docs/code-sample/overview",
        },
        {
          label: "Start Project",
          href: "https://app.videosdk.live/login",
          position: "right",
        },
        {
          label: "Join Community",
          href: "https://app.videosdk.live/login",
          position: "right",
        },
        {
          href: "https://github.com/videosdk-live/videosdk.live",
          className: "navbar-item-github",
          position: "right",
        },
        // {
        //   type: "docsVersionDropdown",
        //   dropdownActiveClassDisabled: true,
        //   dropdownItemsAfter: [
        //     {
        //       to: "/versions",
        //       label: "All versions",
        //     },
        //   ],
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guide",
          items: [
            {
              label: "Dashboard",
              href: "/docs/guide/dashboard/getting-started",
            },
            {
              label: "Prebuilt Video & Audio Calling",
              href: "/docs/guide/prebuilt-video-and-audio-calling/getting-started",
            },
            {
              label: "Custom Video & Audio Calling",
              href: "/docs/overview/live-streaming/introduction",
            },
            {
              label: "Standard Live Streaming",
              href: "/docs/guide/standard-live-streaming-api-sdk/getting-started",
            },
            {
              label: "Video On Demand",
              href: "/docs/guide/video-on-demand/getting-started",
            },
          ],
        },
        {
          title: "API Reference",
          items: [
            {
              label: "Realtime Communication",
              to: "/docs/realtime-communication/intro",
            },
            {
              label: "Live Streaming",
              to: "docs/live-streaming/intro",
            },
            {
              label: "Video On Demand",
              to: "/docs/video-on-demand/intro",
            },
          ],
        },
        {
          title: "Tutorials",
          items: [
            {
              label: "Video Conferencing Java Script",
              to: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
            },
            {
              label: "Video Conferencing with Wordpress",
              to: "/docs/tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-wordpress",
            },
            {
              label: "Live Streaming Quickstart",
              to: "/docs/tutorials/live-streaming/api/quickstart-rest-api",
            },
            {
              label: "Video on Demand Quickstart",
              to: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord Community",
              href: "https://discord.gg/Gpmj6eCq5u",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/videosdk.live",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/video_sdk",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/videosdk",
            },
            {
              label: "Medium",
              href: "https://medium.com/video-sdk",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/videosdk-live",
            },
            {
              label: "NPM",
              href: "https://www.npmjs.com/org/videosdk.live",
            },
            {
              label: "Start Project",
              href: "https://app.videosdk.live",
            },
            {
              label: "Join the Community",
              href: "https://discord.gg/Gpmj6eCq5u",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} videosdk.live.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/",
          // includeCurrentVersion: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
          prism: {
            defaultLanguage: "js",
            plugins: ["line-numbers", "show-language"],
            theme: require("@kiwicopple/prism-react-renderer/themes/vsDark"),
            darkTheme: require("@kiwicopple/prism-react-renderer/themes/vsDark"),
            additionalLanguages: ["Java"],
          },
        },
        googleAnalytics: {
          trackingID: "G-NR8EYPZFJ7",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react_docs",
        path: "react_docs",
        routeBasePath: "react",
        sidebarPath: require.resolve("./sidebarReact.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "android_docs",
        path: "android_docs",
        routeBasePath: "android",
        sidebarPath: require.resolve("./sidebarAndroid.js"),
        // ... other options
      },
    ],

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ios_docs",
        path: "ios_docs",
        routeBasePath: "ios",
        sidebarPath: require.resolve("./sidebarIos.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "flutter_docs",
        path: "flutter_docs",
        routeBasePath: "flutter",
        sidebarPath: require.resolve("./sidebarFlutter.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react_native_docs",
        path: "react_native_docs",
        routeBasePath: "react-native",
        sidebarPath: require.resolve("./sidebarReactNative.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "javascript_docs",
        path: "javascript_docs",
        routeBasePath: "javascript",
        sidebarPath: require.resolve("./sidebarJavaScript.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "prebuilt_docs",
        path: "prebuilt_docs",
        routeBasePath: "prebuilt",
        sidebarPath: require.resolve("./sidebarPrebuilt.js"),
        // ... other options
      },
    ],
  ],
  scripts: [
    {
      // Page sense
      src: "https://cdn-in.pagesense.io/js/zujotechpvtltd/8c69e67587b74006a3927185dd663808.js",
      async: true,
    },
    {
      // Zoho Sales IQ
      src: "https://salesiq.zoho.in/widget",
      async: true,
    },
  ],
};
