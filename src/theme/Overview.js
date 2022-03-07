import React, { useEffect, useMemo, useState } from "react";
import ReactIcon from "../../static/icon/ReactIcon";
import SDKCard from "./SDKCard";
import ResourceCard from "./ResourceCard";
import { Button } from "react-scroll";
const blogs = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function Overview() {
  const SDKListGroup1 = [
    {
      title: "React",
      icon: "./svgs/react.svg",
    },
    {
      title: "Javascript",
      icon: "./svgs/js.svg",
    },
    {
      title: "React Native",
      icon: "./svgs/react-native.svg",
    },
  ];
  const SDKListGroup2 = [
    {
      title: "Flutter",
      icon: "./svgs/flutter.svg",
    },
    {
      title: "Android",
      icon: "./svgs/android.svg",
    },
    {
      title: "iOS",
      icon: "./svgs/ios.svg",
    },
  ];
  const resources = [
    {
      title: "Prebuilt SDK Guide",
      description:
        "End to End Tutorials to integrate Prebuilt SDK on your platform.",
      link: "/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
    },
    {
      title: "Custom SDK Guide",
      description:
        "End to End tutorials to integrate Custom SDK on various platforms.",
      link: "/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started",
    },
    {
      title: "API Reference",
      description:
        "Complete reference to our  APIs that you can use to interact with the SDK.",
      link: "/react/api/sdk-reference/setup",
    },
    {
      title: "Code Sample",
      description:
        "A pre-built code showing you how to integrate video calling to your platform.",
      link: "/docs/code-sample/overview",
    },
  ];
  let Button = ({ link, text }) => {
    return (
      <>
        <div className="hidden xs:block sm:block">
          <a
            href={link}
            className="rounded bg-white h-11 w-72 flex flex-row mt-10"
          >
            <h6 className="text-black text-md font-semibold ml-3 mt-2">
              {text}
            </h6>
          </a>
        </div>
        <div className="hidden md:block lg:block xl:block">
          <a
            href={link}
            className="rounded bg-white h-11 w-48 flex flex-row mt-10"
          >
            <h6 className="text-black text-sm font-semibold ml-3 mt-3">
              {text}
            </h6>
          </a>
        </div>
        <div className="hidden xl2:block">
          <a
            href={link}
            className="rounded bg-white h-11 w-48 flex flex-row mt-10"
          >
            <h6 className="text-black text-sm font-semibold ml-3 mt-3">
              {text}
            </h6>
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="text-center sm:ml-4 sm:mr-4 xs:ml-4 xs:mr-4 md:ml-7 md:mr-7 lg:ml-10 lg:mr-10 xl:ml-12 xl:mr-12 mt-3 xl2:ml-20 xl2:mr-20">
        <span className="text-left flex flex-row">
          <span className="p-1 rounded-sm text-xs bg-white">
            <span>What's new</span>
          </span>
          {blogs.items.length > 0
            ? blogs.items.map((blog) => {
                return (
                  <span className="bg-slate-900 text-xs p-0.7 justify-around rounded-sm mt-1 mb-1">
                    {blog.title}
                  </span>
                );
              })
            : null}
        </span>
        <p className="text-left text-lg font-extrabold mt-5">Overview</p>
        <div className="text-left text-sm font-medium mt-4 lg:text-px18 xl:text-px18 xl2:text-px28">
          Video SDK is the easiest way to add real-time video and audio calls to
          any web or mobile app with just a few lines of code. With our
          easy-to-use APIs, you simply embed a video call widget into your
          existing app. Users also can build custom video UI with our front-end
          libraries and REST APIs that work across devices and browsers, so you
          don't have to deal with browser compatibility issues. With Video SDK
          everyone wins!
        </div>
        <div className="image-box flex justify-center rounded-lg xs:h-48 bg-slate-900 h-96 mt-7">
          <img
            src="./img/image-box.png"
            className="mt-5 xs:p-2 sm:p-2 mb-5 object-contain"
          />
        </div>
        <div className="flex flex-row bg-green-600 sm:h-32 md:h-32 xl:h-32 h-44 mt-10 rounded-lg">
          <div className="w-2 xs:w-4 sm:w-4 bg-green-500"></div>
          <div className="flex flex-col">
            <div className="jump-to-quicstart-header xs:ml-3 sm:ml-3 flex flex-row ml-8 mt-5">
              <img src="./svgs/thought.svg" className="h-7 w-7 mt-2" />
              <h6 className="font-extrabold text-left sm:text-sm xs:text-sm text-lg text-green-700 md:leading-3 lg:text-md xl:text-md xs:mt-3 sm:mt-3 mt-2 ml-3   ">
                JUMP TO QUICKSTART
              </h6>
            </div>
            <div className="md:mb-2 xs:ml-3 sm:ml-3 xs:mt-2 sm:mt-2 xl:mb-2 sm:text-sm xl2:text-px28 lg:text-px18 md:text-sm xl:text-px18 xs:text-sm text-left text-px32 ml-8 mt-5 text-green-700">
              Keep reading to know more about VideosSDK, or{" "}
              <a
                className="underline hover:text-green-700"
                href="/react/guide/video-and-audio-calling-api-sdk/quick-start"
              >
                click here
              </a>{" "}
              to jump to our quickstart guides that get you started.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
