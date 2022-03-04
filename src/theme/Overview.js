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
      </>
    );
  };
  return (
    <div className="inline-block xs:mr-10 sm:mr-20 md:mr-24 xl2:block lg:mr-32 xl:mr-60 xs:ml-10 sm:ml-20 md:ml-24 lg:ml-32 xl:ml-52 mt-12">
      <span className="flex flex-row">
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
      <p className="text-lg font-extrabold mt-5">Overview</p>
      <p className="hidden md:block sm:block xs:block text-px32 font-medium">
        Video SDK is the easiest way to add real-time video and audio calls to
        any web or mobile app with just a few lines of code. With our
        easy-to-use APIs, you simply embed a video call widget into your
        existing app. Users also can build custom video UI with our front-end
        libraries and REST APIs that work across devices and browsers, so you
        don't have to deal with browser compatibility issues. With Video SDK
        everyone wins!
      </p>
      <p className="hidden lg:block xl:block text-sm font-medium">
        Video SDK is the easiest way to add real-time video and audio calls to
        any web or mobile app with just a few lines of code. With our
        easy-to-use APIs, you simply embed a video call widget into your
        existing app. Users also can build custom video UI with our front-end
        libraries and REST APIs that work across devices and browsers, so you
        don't have to deal with browser compatibility issues. With Video SDK
        everyone wins!
      </p>
      <div className="feature-box"></div>
      {/* info quick-start */}
      <div className="hidden md:block sm:block xs:block">
        <div className="flex flex-row bg-green-600 h-44 w-96 mt-10 rounded-lg">
          <div className="w-2 bg-green-500"></div>
          <div className="flex flex-col">
            <div className="jump-to-quicstart-header flex flex-row ml-8 mt-5">
              <img src="./svgs/thought.svg" className="h-6 w-6" />
              <h6 className="font-extrabold text-lg text-green-700 leading-3 mt-2 ml-3 ">
                JUMP TO QUICKSTART
              </h6>
            </div>
            <div className="text-px32 ml-8 mt-5 text-green-700">
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
      <div className="hidden lg:block xl:block">
        <div className="flex flex-row bg-green-600 h-28 w-96 mt-10 rounded-lg">
          <div className="w-2 bg-green-500"></div>
          <div className="flex flex-col">
            <div className="jump-to-quicstart-header flex flex-row ml-8 mt-5">
              <img src="./svgs/thought.svg" className="h-6 w-6" />
              <h6 className="font-extrabold text-sm text-green-700 leading-3 mt-2 ml-3 ">
                JUMP TO QUICKSTART
              </h6>
            </div>
            <div className="ml-8 mt-3 text-green-700">
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
      {/* features */}
      {/* mobile & tab view */}
      <div className="hidden xs:block mt-10">
        <h1 className="text-lg font-extrabold">Features</h1>
        <div className="flex flex-row mt-3 ">
          <div className="feature-icon-xs">
            <img className="h-24 w-24 ml-4" src="./svgs/feature-icon1.svg" />
            <span className="featue-icon-text-xs -ml-2">Video Meeting</span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-24 w-24 ml-7" src="./svgs/feature-icon2.svg" />
            <span className="featue-icon-text-xs -ml-9">
              Interactive Whiteboard
            </span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-24 w-24 ml-3" src="./svgs/feature-icon3.svg" />
            <span className="featue-icon-text-xs -ml-2">Screen Sharing</span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-24 w-24 ml-4" src="./svgs/feature-icon4.svg" />
            <span className="featue-icon-text-xs -ml-2">Pin Participant</span>
          </div>
        </div>
        <div className="feature-icons-xs flex flex-row mt-5 ">
          <div className="ml-48">
            <img className="h-24 w-24 -ml-4" src="./svgs/feature-icon5.svg" />
            <span className="featue-icon-text-xs -ml-5 mt-4">RTMP Out</span>
          </div>
          <div className="ml-44">
            <img className="h-24 w-24" src="./svgs/feature-icon6.svg" />
            <span className="featue-icon-text-xs ml-5">Chat</span>
          </div>
          <div className="ml-44">
            <img className="h-24 w-24" src="./svgs/feature-icon7.svg" />
            <span className="featue-icon-text-xs -ml-4">Record Meeting</span>
          </div>
        </div>
      </div>
      {/* desktop/laptop view       */}
      <div className="hidden sm:block md:block lg:block xl:block mt-10">
        <h1 className="text-lg font-extrabold">Features</h1>
        <div className="flex flex-row mt-3 -ml-11 p-auto">
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon1.svg" />
            <span className="featue-icon-text">Video Meeting</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon2.svg" />
            <span className="featue-icon-text">Interactive Whiteboard</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon3.svg" />
            <span className="featue-icon-text">Screen Sharing</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon4.svg" />
            <span className="ml-7 font-semibold mt-2">Pin</span>{" "}
            <span className="ml-1 font-semibold">Participants</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon5.svg" />
            <span className="featue-icon-text">RTMP Out</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon6.svg" />
            <span className="ml-5 font-semibold mt-2">Chat</span>
          </div>
          <div className="feature-icon">
            <img className="h-20 w-20" src="./svgs/feature-icon7.svg" />
            <span className="featue-icon-text">Record Meeting</span>
          </div>
        </div>
      </div>
      {/* Supported platforms */}

      <div className="flex flex-col mt-10 ">
        <h1 className="text-lg font-extrabold mb-10 mt-7">
          Supported platform or framework
        </h1>
        <div className="flex flex-row -ml-3">
          {SDKListGroup1.map((sdk) => {
            return <SDKCard {...sdk} />;
          })}
        </div>
        <div className="flex flex-row mt-3 -ml-3">
          {SDKListGroup2.map((sdk) => {
            return <SDKCard {...sdk} />;
          })}
        </div>
      </div>

      {/* quickstart */}
      <h1 className="text-lg font-extrabold mt-10 mb-10">QuickStart</h1>
      <div className="hidden sm:block xs:block">
        <div className="flex flex-col">
          <div className="flex flex-col basis-1/2 h-96 w-full mr-3 prebuilt">
            <h3 className="text-px32 font-extrabold mt-5 ml-6">Prebuilt SDK</h3>
            <div className="font-extrabold text-px28 ml-6 mt-3 mr-3">
              A pre-built solution with code showing you how to integrate video
              calling to your platform in 10 minutes.
            </div>
            <a
              href="/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started"
              className="text-black bg-white h-9 w-48 rounded ml-6 mt-12 mb-10 "
            >
              <div className="ml-6 text-md">Try it - it's free</div>
            </a>
          </div>
          <div className="flex flex-col basis-1/2 w-full mt-10 h-96 custom">
            <h3 className="text-px32 font-extrabold mt-5 ml-6">Custom SDK</h3>
            <div className="font-extrabold ml-6 text-px28 mt-3 mr-3">
              Fully featured SDK that allows you to integrate and customize your
              own video calling solution from scratch.
            </div>
            <div className="flex flex-row mb-10">
              <a
                href="/react/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-6"
              >
                <img src="./svgs/mini-react.svg" className="h-12 w-12" />
              </a>
              <a
                href="/javascript/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-1"
              >
                <img src="./svgs/mini-js.svg" className="h-12 w-12" />
              </a>
              <a
                href="/flutter/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-1"
              >
                <img src="./svgs/mini-flutter.svg" className="h-12 w-12" />
              </a>
              <a
                href="/ios/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-1"
              >
                <img src="./svgs/mini-ios.svg" className="h-12 w-12" />
              </a>
              <a
                href="/android/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-1"
              >
                <img src="./svgs/mini-android.svg" className="h-12 w-12" />
              </a>
              <a
                href="/react-native/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-12 ml-1"
              >
                <img src="./svgs/mini-react.svg" className="h-12 w-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block lg:block md:block">
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/2 h-48 mr-3 prebuilt">
            <h3 className="text-md font-extrabold mt-5 ml-6">Prebuilt SDK</h3>
            <div className="font-extrabold ml-6 mt-3">
              A pre-built solution with code showing you how to integrate video
              calling to your platform in 10 minutes.
            </div>
            <a
              href="/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started"
              className="text-black bg-white h-9 w-36 rounded ml-6 mt-5 "
            >
              <div className="ml-6 mt-1">Try it - it's free</div>
            </a>
          </div>
          <div className="flex flex-col basis-1/2 h-48 custom">
            <h3 className="text-md font-extrabold mt-5 ml-6">Custom SDK</h3>
            <div className="font-extrabold ml-6 mt-3">
              Fully featured SDK that allows you to integrate and customize your
              own video calling solution from scratch.
            </div>
            <div className="flex flex-row">
              <a
                href="/react/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-6"
              >
                <img src="./svgs/mini-react.svg" />
              </a>
              <a
                href="/javascript/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-1"
              >
                <img src="./svgs/mini-js.svg" />
              </a>
              <a
                href="/flutter/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-1"
              >
                <img src="./svgs/mini-flutter.svg" />
              </a>
              <a
                href="/ios/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-1"
              >
                <img src="./svgs/mini-ios.svg" />
              </a>
              <a
                href="/android/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-1"
              >
                <img src="./svgs/mini-android.svg" />
              </a>
              <a
                href="/react-native/guide/video-and-audio-calling-api-sdk/getting-started"
                className="mt-5 ml-1"
              >
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Resources */}
      <h1 className="text-lg font-extrabold mt-10 mb-10">Resources</h1>
      <div className="flex flex-row">
        {resources.map((resource) => {
          return <ResourceCard {...resource} />;
        })}
      </div>
      <div className="bg-gradient-to-r flex flex-row mt-14 mb-10 w-full h-64 rounded-lg">
        <div className="flex flex-col ml-12">
          <h1 className="mt-10 font-extrabold leading-9 text-lg">
            Get 10,000 minutes free every month
          </h1>
          <div className="hidden sm:block xs:block">
            <h6 className="font-semibold text-md mt-7">
              No credit card required
            </h6>
          </div>
          <div className="hidden md:block lg:block xl:block">
            <h6 className="font-semibold text-sm mt-7">
              No credit card required
            </h6>
          </div>
          <Button
            link="https://app.videosdk.live/login"
            text="Start Building For Free"
          />
        </div>
        <div className="ml-7 mt-3">
          <img src="./svgs/mask-group.svg" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
