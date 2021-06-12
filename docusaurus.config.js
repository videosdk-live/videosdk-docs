/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Realtime distrubuted CDN",
  tagline: "St",
  url: "https://docs.videosdk.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "videosdk-live", // Usually your GitHub org/user name.
  projectName: "videosdk-live", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
    },
    navbar: {
      title: "videosdk.live",
      logo: {
        alt: "VideosdK live logo",
        src: "img/zujonow_32.png",
      },
      items: [
        {
          // type: "doc",
          // docId: "intro",
          position: "left",
          label: "Product",
          items: [
            {
              label: "Realtime communication",
              to: "docs/realtime-communication/intro",
              activeBaseRegex: "docs/realtime-communication/*",
            },
            /*{
              label: "Low Latency Live streaming",
              to: "docs/live-streaming/introduction",
              activeBaseRegex: "docs/live-streaming/*",
            },*/
          ],
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
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/videosdk.live",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/videosdk.live",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/videosdk.live",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/videosdk.live/videosdk.live",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zujo Tech Pvt Ltd.`,
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
