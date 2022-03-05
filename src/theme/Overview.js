import React, { useEffect, useMemo, useState } from "react";
import ReactIcon from "../../static/icon/ReactIcon";
import SDKCard from "./SDKCard";
// import ResourceCard from "./ResourceCard";
import { Button } from "react-scroll";
import SectionContainer from "../components/Layout/SectionContainer";
import QuickStartIcon from "../../static/icon/QuickStartIcon";
const blogs = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function Overview() {
  return (
    <div>
      <SectionContainer>
        {/* starting section */}
        <div>
          <div className="flex ">
            <div className="bg-white text-black p-1 rounded-l-sm">
              <p className="text-xs">What's new</p>
            </div>
            <div className="bg-slate-900 text-white p-1 rounded-r-sm">
              <p className="text-xs">What's new</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-4xl font-medium text-white">Overview</p>
            <p className="text-base text-[#B2B2B2] mt-4">
              Video SDK is the easiest way to add real-time video and audio
              calls to any web or mobile app with just a few lines of code. With
              our easy-to-use APIs, you simply embed a video call widget into
              your existing app. Users also can build custom video UI with our
              front-end libraries and REST APIs that work across devices and
              browsers, so you don't have to deal with browser compatibility
              issues. With Video SDK everyone wins!
            </p>
            <div className="mt-11 ">
              <div className="bg-slate-900 h-96"></div>
            </div>
          </div>
        </div>

        {/* jump to quickstart */}
        <div className="mt-16">
          <div className="flex">
            <div>hi</div>
            <div>hello</div>
          </div>
          {/* <div className="bg-[#053016] rounded-lg flex p-3">
            <div className="bg-[#0F9143] w-2 rounded-l-lg h-9"></div>
            <div>
              <QuickStartIcon />
            </div>
          </div> */}
        </div>
      </SectionContainer>
    </div>
  );
}

export default Overview;
