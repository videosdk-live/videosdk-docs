import React from "react";
import CardLinks from "../components/cards/cardlinks";

function Overview() {
  return (
    <div class="container padding-top--md padding-bottom--lg">
      <div class="row">
        <div class="col">
          <div class="docItemContainer_node_modules-@docusaurus-theme-classic-lib-next-theme-DocItem-styles-module"></div>
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
                  title="Prebuilt"
                  text="Embed video meetings into an application in few minutes."
                  img="/img/icons/libraries/prebuilt-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/prebuilt-video-calling/getting-started",
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
                      link: "/docs/resources/overview#1-rtc-prebuilt-sdk-code-samples",
                    },
                  ]}
                />
              </div>
              <div class="col col--6">
                <CardLinks
                  title="Audio & Video Calling"
                  text="Low latency video,audio and data communication."
                  img="/img/icons/libraries/video-call-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/audio-and-video-calling/getting-started",
                    },
                    {
                      linkName: "API reference",
                      link: "/docs/realtime-communication/intro",
                    },
                    {
                      linkName: "Tutorial",
                      link: "/docs/tutorials/realtime-communication/js-sdk/quickstart-js",
                    },
                    {
                      linkName: "Code samples",
                      link: "/docs/resources/overview#2-rtc-raw-sdk-code-samples",
                    },
                  ]}
                />
              </div>
            </div>
            <div class="row ">
              <div class="col col--6">
                <CardLinks
                  title="Standard Live Streaming"
                  text="Standard RTMP Live Streaming with encoding and playback."
                  img="/img/icons/libraries/live-streaming-icon.svg"
                  links={[
                    {
                      linkName: "Guide",
                      link: "/docs/guide/standard-live-streaming/getting-started",
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
                      link: "/docs/resources/overview#3-live-stream-code-samples",
                    },
                  ]}
                />
              </div>
              <div class="col col--6">
                <CardLinks
                  title="Video On Demand"
                  text="Low latency video,audio and data communication"
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
                      link: "/docs/resources/overview#4-video-on-demand-code-samples",
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
