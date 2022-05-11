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
    defaultMode: "dark",
    announcementBar: {
      id: "legacy_docs",
      content:
        'We are excited to announce that we have updated our documentation portal 🎉 <a target="_blank" rel="noopener noreferrer" href="https://legacy-docs.videosdk.live">Switch to old documentation ↗</a>',
      backgroundColor: "#6246FB",
      textColor: "#fff",
      isCloseable: true,
    },

    image: "img/videosdklive-thumbnail.jpg",
    algolia: {
      apiKey: "6b125a23a26dc2bf6a8a0cb51a66a3f7",
      indexName: "videosdk",
      searchParameters: {
        facetFilters: ["content"],
      },
    },
    autoCollapseSidebarCategories: true,
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      additionalLanguages: ["java", "powershell"],
      theme: require("prism-react-renderer/themes/vsDark"),
      // darkTheme: require("prism-react-renderer/themes/vsDark"),
    },
    hideableSidebar: true,
    navbar: {
      title: "",
      hideOnScroll: true,
      logo: {
        alt: "Video SDK logo",
        src: "img/videosdk_docs_blacklogo.png",
        srcDark: "img/videosdk_docs_whitelogo.png",
        href: "/",
        target: "_self",
      },
      items: [
        {
          position: "left",
          label: "Guide",
          items: [
            {
              label: "Prebuilt Video & Audio Calling SDK",
              to: "prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
              activeBaseRegex: "/*/prebuilt-video-and-audio-calling/*",
            },
            {
              label: "Custom Video & Audio Calling SDK",
              to: "javascript/guide/video-and-audio-calling-api-sdk/getting-started",
              activeBaseRegex: "/*/video-and-audio-calling-api-sdk/*",
            },
          ],
        },
        {
          position: "left",
          label: "API Reference",
          items: [
            {
              label: "Custom SDK References",
              to: "javascript/api/sdk-reference/setup",
              activeBaseRegex:
                "/react|flutter|react-native|javascript|ios|android/api/sdk-reference/*",
            },
            {
              label: "Prebuilt SDK Reference",
              to: "prebuilt/api/sdk-reference/setup",
              activeBaseRegex: "/prebuilt/api/sdk-reference/*",
            },
            {
              label: "Rest API Reference",
              to: "api-reference/realtime-communication/intro",
              activeBaseRegex: "api-reference/*/realtime-communication/*",
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
          to: "https://github.com/videosdk-live",
        },
        {
          position: "left",
          label: "Experiment Lab",
          items: [
            {
              label: "Guide / Standard Live Streaming API",
              to: "docs/guide/standard-live-streaming-api-sdk/getting-started",
              activeBaseRegex: "docs/guide/standard-live-streaming-api-sdk/*",
            },
            {
              label: "Guide / Video On Demand API",
              to: "docs/guide/video-on-demand/getting-started",
              activeBaseRegex: "docs/guide/video-on-demand/*",
            },
            {
              label: "Api-Reference / Live Streaming",
              to: "docs/api-reference/live-streaming/intro",
              activeBaseRegex: "docs/api-reference/live-streaming/*",
            },
            {
              label: "Api-reference / Video On Demand",
              to: "docs/api-reference/video-on-demand/intro",
              activeBaseRegex: "docs/api-reference/video-on-demand/*",
            },
          ],
        },

        {
          label: "Start Project",
          href: "https://app.videosdk.live/login",
          position: "right",
        },
        {
          className: "navbar-item-logo discord",
          href: "https://discord.gg/f2WsNDN9S5",
          position: "right",
        },
        {
          href: "https://github.com/videosdk-live",
          className: "navbar-item-logo github",
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
      logo: {
        alt: "Video SDK logo",
        src: "img/videosdk_docs_blacklogo.png",
        srcDark: "img/videosdk_docs_whitelogo.png",
        href: "/",
        width: 500,
      },
      links: [
        {
          title: "Get started",
          items: [
            {
              label: "Sign Up",
              href: "https://app.videosdk.live/signup",
            },
            {
              label: "Get Started with Prebuilt SDK",
              href: "/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
            },
            {
              label: "Get Started with Custom SDK",
              href: "/react/guide/video-and-audio-calling-api-sdk/getting-started",
            },
            {
              label: "Get Started with Live Streaming",
              href: "/docs/guide/standard-live-streaming-api-sdk/getting-started",
            },
            {
              label: "Get Started with VOD",
              href: "/docs/guide/video-on-demand/getting-started",
            },
          ],
        },
        {
          title: "4 Steps Quickstart",
          items: [
            {
              label: "Quick Start: Prebuilt JS SDK",
              to: "/prebuilt/guide/prebuilt-video-and-audio-calling/quick-start",
            },
            {
              label: "Quick Start: React JS SDK",
              to: "/react/guide/video-and-audio-calling-api-sdk/quick-start",
            },
            {
              label: "Quick Start: JavaScript SDK",
              to: "/javascript/guide/video-and-audio-calling-api-sdk/quick-start",
            },
            {
              label: "Quick Start: React Native SDK",
              to: "/react-native/guide/video-and-audio-calling-api-sdk/quick-start",
            },
            {
              label: "Quick Start: Android SDK",
              to: "/android/guide/video-and-audio-calling-api-sdk/quick-start",
            },
            {
              label: "Quick Start: iOS SDK",
              to: "/ios/guide/video-and-audio-calling-api-sdk/quick-start",
            },
            {
              label: "Quick Start: Flutter SDK",
              to: "/flutter/guide/video-and-audio-calling-api-sdk/quick-start",
            },
          ],
        },
        {
          title: "For developers",
          items: [
            {
              label: "Developer Blog",
              to: "https://www.videosdk.live/blog/tag/product",
            },
            {
              label: "API Reference",
              to: "/react/api/sdk-reference/setup",
            },
            {
              label: "Resouces",
              to: "/docs/tutorials/introduction",
            },
            {
              label: "Code Samples",
              to: "/docs/code-sample/overview",
            },
            {
              label: "Product Updates",
              to: "https://www.videosdk.live/blog/tag/product-updates",
            },
          ],
        },
        {
          title: "Join Community",
          items: [
            {
              label: "Discord Community",
              href: "https://discord.gg/Gpmj6eCq5u",
            },
            {
              label: "Github",
              href: "https://github.com/videosdk-live",
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
              label: "Reddit",
              href: "https://www.reddit.com/r/videosdk/",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/c/VideoSDK",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Contact Us",
              href: "https://www.videosdk.live/contact",
            },
            {
              label: "Pricing",
              href: "https://www.videosdk.live/pricing",
            },
            {
              label: "Support",
              href: "https://www.videosdk.live/support",
            },
            {
              label: "Terms of Use",
              href: "https://www.videosdk.live/terms-of-use",
            },
            {
              label: "Privacy Policy",
              href: "https://www.videosdk.live/privacy-policy",
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
        },
        blog: {
          path: "blog",
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: [require.resolve("./src/css/styles.css")],
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
    "docusaurus-tailwindcss-loader",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api_reference_docs",
        path: "api_reference_docs",
        routeBasePath: "api-reference",
        sidebarPath: require.resolve("./sidebarApiReference.js"),
        versions: {
          v2: {
            label: "/v2",
          },
          v1: {
            label: "/v1",
          },
        },
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
