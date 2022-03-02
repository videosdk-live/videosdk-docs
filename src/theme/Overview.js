import React, { useEffect, useMemo, useState } from "react";

function Overview() {
  const [docusaurusTheme, setDocusaurusTheme] = useState(
    localStorage.getItem("theme")
  );

  const isDarkTheme = useMemo(
    () => docusaurusTheme === "dark",
    [docusaurusTheme]
  );

  useEffect(() => {
    const originalSetItem = localStorage.setItem;

    localStorage.setItem = function (key, value) {
      const event = new Event("localStorageItemInserted");

      event.value = value;
      event.key = key;

      document.dispatchEvent(event);

      originalSetItem.apply(this, arguments);
    };

    const localStorageSetHandler = function (e) {
      setDocusaurusTheme(e.value);
    };

    document.addEventListener(
      "localStorageItemInserted",
      localStorageSetHandler,
      false
    );
  }, []);

  return (
    <div id="home-page" className={isDarkTheme ? "dark" : ""}>
      <div className="dark:bg-white bg-black h-10 w-10" />
    </div>

    // <div
    //   id="home-page"
    //   className="dark xs:ml-10 sm:ml-20 md:ml-24 lg:ml-32 xl:ml-52 mt-12"
    // >
    //   <span className="flex flex-row">
    //     <span className="p-1 rounded-sm text-xs dark:bg-white  bg-black basis-20px">
    //       <span className="dark:text-black text-white">What's new</span>
    //     </span>
    //     <span className=" text-xs p-0.7 justify-around rounded-sm mt-1">
    //       New features are here
    //     </span>
    //   </span>
    //   <p className="text-lg">Overview</p>
    // </div>
    // <div
    //   className="font-serif"
    //   class="container padding-top--md padding-bottom--lg"
    // >
    //   <div class="row">
    //     <div class="col">
    //       <div class="docItemContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-DocItem-styles-module"></div>
    //       <h1 class="h1Heading_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module">
    //         {user.name ? "Hello, " + user.name : null}
    //       </h1>
    //       <h1
    //         style={{ marginLeft: "16px" }}
    //         class="h1Heading_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module"
    //       >
    //         Overview
    //       </h1>
    //       <p className="sub-heading" style={{ marginLeft: "16px" }}>
    //         Video SDK provides all the services to build interactive video
    //         product. It includes realtime communication, standard live
    //         streaming, interactive live streaming and video on demand.
    //       </p>
    //       <div class="container">
    //         <div class="row">
    //           <div class="col">
    //             <CardLinks
    //               title="Prebuilt Video & Audio Calling SDK"
    //               text="Invest 90 seconds to develop video & audio calling on web & app"
    //               img="/img/Group 11380.svg"
    //               links={[
    //                 {
    //                   linkName: "Guide",
    //                   link: "/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
    //                 },
    //                 {
    //                   linkName: "API reference",
    //                   link: "/prebuilt/api/sdk-reference/setup",
    //                 },
    //                 {
    //                   linkName: "Tutorial",
    //                   link: "/docs/tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js",
    //                 },
    //                 {
    //                   linkName: "Code samples",
    //                   link: "/docs/code-sample/overview#1-prebuilt-video--audio-calling-sdk",
    //                 },
    //               ]}
    //             />
    //           </div>
    //           <div class="col">
    //             <CardLinks
    //               title="Custom Video & Audio Calling SDK"
    //               text="Add 100% customizable video & audio conferencing in native app"
    //               img="/img/Group 11381.svg"
    //               links={[
    //                 {
    //                   linkName: "Guide",
    //                   link: "/react/guide/video-and-audio-calling-api-sdk/getting-started",
    //                 },
    //                 {
    //                   linkName: "API reference",
    //                   link: "/react/api/sdk-reference/setup",
    //                 },
    //                 {
    //                   linkName: "Tutorial",
    //                   link: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
    //                 },
    //                 {
    //                   linkName: "Code samples",
    //                   link: "/docs/code-sample/overview#2-custom-video--audio-calling-sdk",
    //                 },
    //               ]}
    //             />
    //           </div>
    //         </div>
    //         <div class="row" style={{ marginTop: "17px" }}>
    //           <div class="col">
    //             <CardLinks
    //               class="overview-card"
    //               title="Standard Live Stream API"
    //               text="RTMP-in based Live Stream API, including encoding & playback"
    //               img="/img/Group 11383.svg"
    //               links={[
    //                 {
    //                   linkName: "Guide",
    //                   link: "/docs/guide/standard-live-streaming-api-sdk/getting-started",
    //                 },
    //                 {
    //                   linkName: "API reference",
    //                   link: "/docs/api-reference/live-streaming/intro",
    //                 },
    //                 {
    //                   linkName: "Tutorial",
    //                   link: "/docs/tutorials/live-streaming/api/quickstart-rest-api",
    //                 },
    //                 {
    //                   linkName: "Code samples",
    //                   link: "/docs/code-sample/overview#3-standard-live-stream-api",
    //                 },
    //               ]}
    //             />
    //           </div>
    //           <div class="col">
    //             <CardLinks
    //               title="Video on Demand API"
    //               text="Video hosting API with multiple resolution support and global delivery"
    //               img="/img/Group 11382.svg"
    //               links={[
    //                 {
    //                   linkName: "Guide",
    //                   link: "/docs/guide/video-on-demand/getting-started",
    //                 },
    //                 {
    //                   linkName: "API reference",
    //                   link: "/docs/api-reference/video-on-demand/intro",
    //                 },
    //                 {
    //                   linkName: "Tutorial",
    //                   link: "/docs/tutorials/video-on-demand/api/quickstart-rest-api",
    //                 },
    //                 {
    //                   linkName: "Code samples",
    //                   link: "/docs/code-sample/overview#4-video-on-demand-api",
    //                 },
    //               ]}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Overview;
