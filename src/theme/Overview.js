import React, { useEffect, useState } from "react";
import CardLinks from "../components/cards/cardlinks";
import Cookies from "js-cookie";

function Overview() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser();
  // }, []);

  const getUser = async () => {
    const user = await Cookies.get("user");
    setUser(JSON.parse(user));
  };

  return (
    <div class="container padding-top--md padding-bottom--lg">
      <div class="row">
        <div class="col">
          <div class="docItemContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-DocItem-styles-module"></div>
          <h1 class="h1Heading_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module">
            {user.name ? "Hello, " + user.name : null}
          </h1>
          <h1 class="h1Heading_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module">
            Overview
          </h1>
          <p>
            Video SDK provides all the services to build interactive video
            product. It includes realtime communication, standard live
            streaming, interactive live streaming and video on demand.
          </p>
          <div class="container">
            <div class="row ">
              <div class="col col--6">
                <CardLinks
                  title="Prebuilt Video & Audio Calling SDK"
                  text="Invest 90 seconds to develop video & audio calling on web & app"
                  img="/img/icons/libraries/prebuilt-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/prebuilt-video-and-audio-calling/getting-started",
                    },
                    {
                      linkName: "API reference",
                      link: "/docs/realtime-communication/sdk-reference/prebuilt-sdk-js/setup",
                    },
                    {
                      linkName: "Tutorial",
                      link: "/docs/tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js",
                    },
                    {
                      linkName: "Code samples",
                      link: "/docs/code-sample/overview#1-prebuilt-video--audio-calling-sdk",
                    },
                  ]}
                />
              </div>
              <div class="col col--6">
                <CardLinks
                  title="Custom Video & Audio Calling SDK"
                  text="Add 100% customizable video & audio conferencing in native app"
                  img="/img/icons/libraries/video-call-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/react/guide/video-and-audio-calling-api-sdk/getting-started",
                    },
                    {
                      linkName: "API reference",
                      link: "/react/api/sdk-reference/setup",
                    },
                    {
                      linkName: "Tutorial",
                      link: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
                    },
                    {
                      linkName: "Code samples",
                      link: "/docs/code-sample/overview#2-custom-video--audio-calling-sdk",
                    },
                  ]}
                />
              </div>
            </div>
            <div class="row ">
              <div class="col col--6">
                <CardLinks
                  title="Standard Live Stream API"
                  text="RTMP-in based Live Stream API, including encoding & playback"
                  img="/img/icons/libraries/live-streaming-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/standard-live-streaming-api-sdk/getting-started",
                    },
                    {
                      linkName: "API reference",
                      link: "/docs/live-streaming/intro",
                    },
                    {
                      linkName: "Tutorial",
                      link: "/docs/tutorials/live-streaming/api/quickstart-rest-api",
                    },
                    {
                      linkName: "Code samples",
                      link: "/docs/code-sample/overview#3-standard-live-stream-api",
                    },
                  ]}
                />
              </div>
              <div class="col col--6">
                <CardLinks
                  title="Video on Demand API"
                  text="Video hosting API with multiple resolution support and global delivery"
                  img="/img/icons/libraries/vod-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/video-on-demand/getting-started",
                    },
                    {
                      linkName: "API reference",
                      link: "/docs/video-on-demand/intro",
                    },
                    {
                      linkName: "Tutorial",
                      link: "/docs/tutorials/video-on-demand/api/quickstart-rest-api",
                    },
                    {
                      linkName: "Code samples",
                      link: "/docs/code-sample/overview#4-video-on-demand-api",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
