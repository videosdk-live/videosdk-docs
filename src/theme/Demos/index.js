import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import SvgDots from "@site/src/svg/Dots";

function Demos() {
  return (
    <section className="rds-demos">
      <div className="container">
        <h2 className="section-title">
          <br />{" "}
        </h2>

        <div className="row terminals">
          <div className="col col--6">
            <div className="terminal left">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">Build with Video SDK</h5>
                <ul className="links">
                  <li>
                    <a href="/docs/api-reference/realtime-communication/intro">
                      Real Time Communication Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="/docs/api-reference/realtime-communication/intro">
                      Interactive Live Streaming Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="/docs/api-reference/realtime-communication/intro">
                      Real Time Messaging Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="/docs/guide/standard-live-streaming-api-sdk/intro">
                      Standard Live Streaming Quick Start
                    </a>
                  </li>
                  <li>
                    <a href="/docs/api-reference/video-on-demand/intro">
                      Video On Demand Quick Start
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="terminal right">
              <div className="terminal-header">
                <SvgDots />
              </div>
              <div className="terminal-body">
                <h5 className="title">Featured how-tos & tutorials</h5>
                <ul className="links">
                  <li>
                    <a href="/docs/tutorials/realtime-communication/js-sdk/quickstart-js">
                      How to integrate real time communication with plain
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a href="/docs/tutorials/realtime-communication/prebuilt-sdk/quickstart-prebuilt-js">
                      How to build scalable video conferencing in 10 minutes
                    </a>
                  </li>
                  <li>
                    <a href="/docs/tutorials/live-streaming/api/quickstart-rest-api">
                      Integrate Live streaming with REST APIs in your
                      application.
                    </a>
                  </li>
                  <li>
                    <a href="/docs/tutorials/video-on-demand/api/quickstart-rest-api">
                      Integrate Video On Demand with REST APIs in your
                      application.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demos;
