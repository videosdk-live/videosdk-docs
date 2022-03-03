import React, { useEffect, useMemo, useState } from "react";
import ReactIcon from "../../static/icon/ReactIcon";
import SDKCard from "./SDKCard";
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
  return (
    <div className="inline-block xs:mr-10 sm:mr-20 md:mr-24 lg:mr-32 xl:mr-60 xs:ml-10 sm:ml-20 md:ml-24 lg:ml-32 xl:ml-52 mt-12">
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
      <p className="text-sm font-medium">
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
      <div className=" flex flex-row bg-green-600 h-28 w-96 mt-10 rounded-lg">
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
      {/* features */}
      {/* mobile & tab view */}
      <div className="hidden xs:block mt-10">
        <h1 className="text-lg font-extrabold">Features</h1>
        <div className="flex flex-row mt-3 ">
          <div className="feature-icon-xs">
            <img className="h-20 w-20" src="./svgs/feature-icon1.svg" />
            <span className="featue-icon-text-xs -ml-2">Video Meeting</span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-20 w-20" src="./svgs/feature-icon2.svg" />
            <span className="featue-icon-text-xs -ml-9">
              Interactive Whiteboard
            </span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-20 w-20" src="./svgs/feature-icon3.svg" />
            <span className="featue-icon-text-xs -ml-2">Screen Sharing</span>
          </div>
          <div className="feature-icon-xs">
            <img className="h-20 w-20" src="./svgs/feature-icon4.svg" />
            <span className="featue-icon-text-xs -ml-2">Pin Participant</span>
          </div>
        </div>
        <div className="feature-icons-xs flex flex-row mt-3 ">
          <div className="ml-48">
            <img className="h-20 w-20" src="./svgs/feature-icon5.svg" />
            <span className="featue-icon-text-xs">RTMP Out</span>
          </div>
          <div className="ml-44">
            <img className="h-20 w-20" src="./svgs/feature-icon6.svg" />
            <span className="featue-icon-text-xs ml-5">Chat</span>
          </div>
          <div className="ml-44">
            <img className="h-20 w-20" src="./svgs/feature-icon7.svg" />
            <span className="featue-icon-text-xs -ml-3">Record Meeting</span>
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
            {/* <div className="ml-6 mt-5 bg-white opacity-20"> */}
            <img src="./svgs/mini-react.svg" />
            {/* </div> */}
            <div className="ml-6 mt-5 bg-white opacity-20">
              <a>
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
            <div className="ml-6 mt-5 bg-white opacity-20">
              <a>
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
            <div className="ml-6 mt-5 bg-white opacity-20">
              <a>
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
            <div className="ml-6 mt-5 bg-white opacity-20">
              <a>
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
            <div className="ml-6 mt-5 bg-white opacity-20">
              <a>
                <img src="./svgs/mini-react.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
