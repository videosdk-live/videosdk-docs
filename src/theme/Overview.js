import React, { useEffect, useMemo, useState } from "react";
import ReactIcon from "../../static/icon/ReactIcon";
import SDKCard from "./SDKCard";
import ResourceCard from "./ResourceCard";
import ReactTooltip from "react-tooltip";
import Link from "@docusaurus/Link";
import VideoMeetingIcon from "../../static/icon/VideoMeetingIcon";
import WhiteboardIcon from "../../static/icon/WhiteboardIcon";
import ScreenShareIcon from "../../static/icon/ScreenShareIcon";
import PinParticipantIcon from "../../static/icon/PinParticipantIcon";
import RTMPOutIcon from "../../static/icon/RTMPOutIcon";
import ChatIcon from "../../static/icon/ChatIcon";
import RecordMeetingIcon from "../../static/icon/RecordMeetingIcon";
import SectionContainer from "../components/Layout/SectionContainer";
import QuickStartIcon from "../../static/icon/QuickStartIcon";
import ExternalLinkIcon from "../../static/icon/ExternalLinkIcon";
import JSIcon from "../../static/icon/JSIcon";
import FlutterIcon from "../../static/icon/FlutterIcon";
import AndroidIcon from "../../static/icon/AndroidIcon";
import IOSIcon from "../../static/icon/IOSIcon";
import CustomReactIcon from "../../static/icon/Home_customsdk/CustomReactIcon";
import CustomReactNativeIcon from "../../static/icon/Home_customsdk/CustomReactNativeIcon";
import CustomJSIcon from "../../static/icon/Home_customsdk/CustomJSIcon";
import CustomFlutterIcon from "../../static/icon/Home_customsdk/CustomFlutterIcon";
import CustomAndroidIcon from "../../static/icon/Home_customsdk/CustomAndroidIcon";
import CustomIOSIcon from "../../static/icon/Home_customsdk/CustomIOSIcon";
const blogs = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

function MainCard({
  Title,
  Icon,
  Description,
  onlyTitle,
  EndPart,
  backgroundColor,
  titleStyle,
  descriptionStyle,
  borderRadius,
  fullWidth,
  quickstart,
  imgLink,
}) {
  return (
    <div
      style={{ backgroundImage: `${backgroundColor}` }}
      className={`${
        fullWidth ? "p-3 md:p-5" : onlyTitle ? "p-3 md:p-2" : "p-3 md:p-5"
      } ${borderRadius ? borderRadius : "rounded"} bg-gray-750   ${
        onlyTitle
          ? "md:w-full"
          : `h-full ${
              fullWidth ? "md:max-w-sm lg:max-w-full max-w-full" : "xl:max-w-sm"
            }  md:h-auto`
      } `}
      // cursor-pointer
    >
      <div>
        <div className="flex flex-row">
          {(Icon || imgLink) && (
            <div
              className={`flex  items-center justify-center md:rounded-md rounded-sm md:w-12 md:h-12 w-8 h-8`}
            >
              <img src={imgLink} />
              {/* <Icon className="w-8 h-8" /> */}
            </div>
          )}
          <div
            className={`flex items-center justify-center ${
              Icon ? "ml-2 md:ml-3 " : "ml-0"
            }overflow-hidden `}
          >
            <p
              className={`${
                titleStyle
                  ? `${titleStyle}`
                  : `text-xs font-medium text-white-100 md:text-lg mb-0`
              }`}
            >
              {Title}
            </p>
          </div>
        </div>
        {Description && (
          <div className={`mt-0 ${quickstart ? "sm:pr-28 pr-5" : ""}`}>
            <p
              className={`${
                descriptionStyle
                  ? descriptionStyle
                  : `text-xs text-gray-500 break-words md:text-sm w-12 pr-4`
              }`}
            >
              {Description}
            </p>
          </div>
        )}
        {EndPart && <EndPart />}
      </div>
    </div>
  );
}

function PlatformPart() {
  const platformArray = [
    { Icon: ReactIcon, title: "React", imgLink: "./svgs/react.svg", link: "/react/guide/video-and-audio-calling-api-sdk/getting-started", },
    { Icon: JSIcon, title: "JavaScript", imgLink: "./svgs/js.svg", link: "/javascript/guide/video-and-audio-calling-api-sdk/getting-started", },
    {
      Icon: ReactIcon,
      title: "React Native",
      imgLink: "./svgs/react-native.svg",
      link: "/react-native/guide/video-and-audio-calling-api-sdk/getting-started",
    },
  ];

  const platformArray2 = [
    {
      Icon: FlutterIcon,
      title: "Flutter",
      imgLink: "./svgs/flutter.svg",
      link: "/flutter/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: AndroidIcon,
      title: "Android",
      imgLink: "./svgs/android.svg",
      link: "/android/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: IOSIcon,
      title: "iOS",
      imgLink: "./svgs/ios.svg",
      link: "/ios/guide/video-and-audio-calling-api-sdk/getting-started",
    },
  ];
  const mobileplatformArray = [
    { Icon: ReactIcon, title: "React", imgLink: "./svgs/react.svg", link: "/react/guide/video-and-audio-calling-api-sdk/getting-started", },
    { Icon: JSIcon, title: "JavaScript", imgLink: "./svgs/js.svg", link: "/javascript/guide/video-and-audio-calling-api-sdk/getting-started", },
    {
      Icon: ReactIcon,
      title: "React Native",
      imgLink: "./svgs/react-native.svg",
      link: "/react-native/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: FlutterIcon,
      title: "Flutter",
      imgLink: "./svgs/flutter.svg",
      link: "/flutter/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: AndroidIcon,
      title: "Android",
      imgLink: "./svgs/android.svg",
      link: "/android/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: IOSIcon,
      title: "iOS",
      imgLink: "./svgs/ios.svg",
      link: "/ios/guide/video-and-audio-calling-api-sdk/getting-started",
    },
  ];

  return (
    <>
      <div className="md:block hidden">
        <div className="grid grid-cols-2 gap-3 mt-4 md:gap-3  md:flex md:flex-row md:justify-between">
          {platformArray.map((item, index) => {
            return (
              <Link to={item.link} className="w-full">
                <MainCard
                  key={index}
                  Title={item.title}
                  Icon={item.Icon}
                  onlyTitle={true}
                  imgLink={item.imgLink}
                />
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3 md:gap-3  md:flex md:flex-row md:justify-between">
          {platformArray2.map((item, index) => {
            return (
              <Link to={item.link} className="w-full">
                <MainCard
                  key={index}
                  Title={item.title}
                  Icon={item.Icon}
                  onlyTitle={true}
                  imgLink={item.imgLink}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="md:hidden block">
        <div className="grid grid-cols-2 gap-3 mt-4 md:gap-5  md:flex md:flex-row md:justify-between">
          {mobileplatformArray.map((item, index) => {
            return (
              <MainCard
                key={index}
                Title={item.title}
                Icon={item.Icon}
                onlyTitle={true}
                imgLink={item.imgLink}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function QuickstartPart() {
  const QuickStartArray = [
    {
      title: "Prebulit SDK",
      description:
        "A pre-built solution with code showing you how to \n integrate video calling to your platform in 10 minutes.",
    },
    {
      title: "Custom SDK",
      description:
        "Fully featured SDK that allows you to integrate and customize your own video calling solution from scratch.",
    },
  ];

  const CustomSDKArray = [
    {
      Icon: CustomReactIcon,
      link: "/react/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "React",
    },
    {
      Icon: CustomJSIcon,
      link: "/javascript/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "JavaScript",
    },
    {
      Icon: CustomFlutterIcon,
      link: "/flutter/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "Flutter",
    },
    {
      Icon: CustomReactNativeIcon,
      link: "/react-native/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "React Native",
    },
    {
      Icon: CustomAndroidIcon,
      link: "/android/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "Andorid",
    },
    {
      Icon: CustomIOSIcon,
      link: "/ios/guide/video-and-audio-calling-api-sdk/getting-started",
      tooltip: "iOS",
    },
  ];

  return (
    <div
      // className="grid grid-cols-2 gap-3 "
      className="flex md:flex-row flex-col "
    >
      {QuickStartArray.map((item, index) => {
        return (
          <div
            className={`${index == 1 ? "md:ml-4 ml-0 md:mt-0 mt-3" : "ml-0"} `}
          >
            <MainCard
              key={index}
              Title={item.title}
              titleStyle={
                "md:text-2xl text-xl text-white-100 font-extrabold mb-0"
              }
              Description={item.description}
              backgroundColor={
                index == 0
                  ? "linear-gradient(99.37deg, #6246FB 0.88%, #4AA5FD 102.26%)"
                  : "linear-gradient(90deg, #EE6E91 0%, #7964E7 100%)"
              }
              descriptionStyle={
                "text-white-100 md:text-base text-base font-medium mt-2"
              }
              borderRadius={"rounded-lg"}
              fullWidth={true}
              quickstart={true}
              EndPart={() => {
                return index == 0 ? (
                  <div className="mt-6">
                    <div className="h-9 flex">
                      <a
                        href={
                          "/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started"
                        }
                        className="rounded bg-white-100 text-black font-semibold  hover:cursor-pointer hover:bg-white-150 flex flex-row items-center justify-center p-3"
                      >
                        Try it - it’s free
                      </a>
                      {/* <Button
                        link="/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started"
                        text="Try it - it’s free"
                      /> */}
                    </div>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="h-9 w-9 flex ">
                      {CustomSDKArray.map((item, index) => {
                        return (
                          <a
                            data-tip
                            data-for={item.tooltip}
                            href={item.link}
                            className={`bg-white-250 text-black p-2 rounded-md flex items-center justify-center ${
                              index == 0 ? "" : "md:ml-3 ml-1"
                            }`}
                          >
                            <item.Icon />
                            <ReactTooltip
                              type="light"
                              id={item.tooltip}
                              place="bottom"
                              effect="solid"
                            >
                              {item.tooltip}
                            </ReactTooltip>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

let Button = ({ link, text }) => {
  return (
    <>
      <div className="mt-0">
        <a
          href={link}
          className="rounded bg-white-100 hover:bg-white-150 flex flex-row p-3"
        >
          <h6 className="text-black text-base font-semibold mb-0">{text}</h6>
        </a>
      </div>
    </>
  );
};

function ResourcePart() {
  const ResourceArray = [
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
      link: "react/guide/video-and-audio-calling-api-sdk/getting-started",
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
  return (
    <div className="lg:flex lg:flex-row lg:gap-0  flex-col grid grid-cols-2 gap-3">
      {ResourceArray.map((item, index) => {
        return (
          <div
            className={`${
              index == 0 ? "ml-0" : "lg:ml-2 xl:ml-4 ml-0 "
            } w-full`}
          >
            <MainCard
              key={index}
              Title={item.title}
              titleStyle={
                "md:text-xl text-lg text-white-100 font-extrabold mb-3 "
              }
              Description={item.description}
              descriptionStyle={
                "text-gray-250 md:text-lg text-base mt-0 lg:w-44 lg:pr-7 xl:pr-2 xl:w-56 2xl:pr-10 2xl:w-72 "
              }
              borderRadius={"rounded-lg"}
              EndPart={() => {
                return (
                  <div className="mt-4">
                    <div className="h-9  flex items-end justify-end">
                      <a
                        href={item.link}
                        className={`text-black hover:bg-white-150 p-2 rounded-md flex items-center justify-center ${
                          index == 0 ? "" : "ml-3"
                        }`}
                      >
                        {/* <button
                          className={`text-black p-2 rounded-md flex items-center justify-center ${
                            index == 0 ? "" : "ml-3"
                          }`}
                        > */}
                        <ExternalLinkIcon />
                        {/* </button> */}
                      </a>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function Overview() {
  // const featuresArray = [
  //   { Icon: VideoMeetingIcon, title: "Video Meeting" },
  //   { Icon: WhiteboardIcon, title: "Interactive Whiteboard" },
  //   { Icon: ScreenShareIcon, title: "Screen Sharing" },
  //   { Icon: PinParticipantIcon, title: "Pin Participant" },
  //   { Icon: RTMPOutIcon, title: "RTMP Out" },
  //   { Icon: ChatIcon, title: "Chat" },
  //   { Icon: RecordMeetingIcon, title: "Record Meeting" },
  // ];

  // const tabletFeaturesArray1 = [
  //   { title: "Video Meeting", imgLink: "./svgs/feature-icon1.svg" },
  //   { title: "Interactive Whiteboard", imgLink: "./svgs/feature-icon2.svg" },
  //   { title: "Screen Sharing", imgLink: "./svgs/feature-icon3.svg" },
  //   { title: "Pin Participant", imgLink: "./svgs/feature-icon4.svg" },
  // ];

  // const tabletFeaturesArray2 = [
  //   { title: "RTMP Out", imgLink: "./svgs/feature-icon5.svg" },
  //   { title: "Chat", imgLink: "./svgs/feature-icon6.svg" },
  //   { title: "Record Meeting", imgLink: "./svgs/feature-icon7.svg" },
  // ];

  // const mobileFeaturesArray1 = [
  //   { title: "Video Meeting", imgLink: "./svgs/feature-icon1.svg" },
  //   { title: "Interactive Whiteboard", imgLink: "./svgs/feature-icon2.svg" },
  //   { title: "Screen Sharing", imgLink: "./svgs/feature-icon3.svg" },
  //   // { title: "Pin Participant", imgLink: "./svgs/feature-icon4.svg" },
  // ];

  // const mobileFeaturesArray2 = [
  //   { title: "Pin Participant", imgLink: "./svgs/feature-icon4.svg" },
  //   { title: "RTMP Out", imgLink: "./svgs/feature-icon5.svg" },
  //   { title: "Chat", imgLink: "./svgs/feature-icon6.svg" },
  //   // { title: "Record Meeting", imgLink: "./svgs/feature-icon7.svg" },
  // ];

  // const mobileFeaturesArray3 = [
  //   { title: "Record Meeting", imgLink: "./svgs/feature-icon7.svg" },
  // ];

  return (
    <div id="tailwind">
      <SectionContainer>
        {/* starting section */}
        <div>
          {blogs.items.length > 0 && (
            <div className="flex mt-3">
              <div className="bg-white-100 text-black h-6 w-20 p-1.5 rounded-sm">
                <p className="text-xs leading-3 justify-center font-medium items-center">
                  What's new
                </p>
              </div>
              {blogs.items.map((blog) => {
                return (
                  <div className="bg-gray-750 text-white-100 p-2 h-6 rounded-sm">
                    <p className="text-xs -mt-1"> {blog.title}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* QuickStart */}
          <div className="md:mt-4 mt-10">
            <p className="lg:text-4xl md:text-4xl text-2xl  font-extrabold text-black-100 dark:text-white-100">
              Quickstart
            </p>
            <div className="mt-9">
              <QuickstartPart />
            </div>
          </div>

          {/* Resource */}
          <div className="md:mt-20 mt-10">
            <p className="lg:text-4xl md:text-4xl text-2xl font-extrabold text-black-100 dark:text-white-100">
              Resources
            </p>
            <div className="mt-9">
              <ResourcePart />
            </div>
          </div>

          {/* <div className="mt-4">
            <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-white-100">
              Overview
            </p>
            <p className="text-base text-gray-250 mt-4">
              Video SDK is the easiest way to add real-time video and audio
              calls to any web or mobile app with just a few lines of code. With
              our easy-to-use APIs, you simply embed a video call widget into
              your existing app. Users also can build custom video UI with our
              front-end libraries and REST APIs that work across devices and
              browsers, so you don't have to deal with browser compatibility
              issues. With Video SDK everyone wins!
            </p>
            <div className="mt-11 ">
              <div className="image-box flex justify-center rounded-lg bg-gray-750 h-48 sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96 mt-7">
                <img
                  src="./img/image-box.png"
                  className="mt-5 mb-5 object-contain p-1 sm:p-0 md:p-0 lg:p-0 xl:p-0 2xl:p-0 "
                />
              </div>
            </div>
          </div> */}
        </div>

        {/* jump to quickstart */}
        {/* <div className="md:mt-16 mt-8">
          <div className="flex">
            <div className="bg-green-500  w-2 rounded-l-lg "></div>
            <div className="bg-green-600 rounded-r-lg flex  flex-col flex-1 p-5 ">
              <div className="flex">
                <QuickStartIcon />
                <p className="text-green-700 md:text-lg text-base font-semibold ml-4">
                  JUMP TO QUICKSTART
                </p>
              </div>

              <div className="xl:text-lg text-base text-green-700 mt-0">
                Keep reading to know more about VideosSDK, or{" "}
                <a
                  className="underline hover:text-green-500 text-green-700 font-bold"
                  href="/react/guide/video-and-audio-calling-api-sdk/quick-start"
                >
                  click here to jump to our quickstart guides
                </a>{" "}
                that get you started.
              </div>
            </div>
          </div>
        </div> */}

        {/* Feature Section */}
        {/* <div className="md:mt-20 mt-10 w-full">
          <p className="lg:text-4xl md:text-3xl text-2xl font-extrabold text-white-100 ">
            Features
          </p>
          <div className="lg:block hidden mt-6">
            <div className="flex justify-between py-5 px-0">
              {featuresArray.map((item, index) => (
                <div className="feature-icon">
                  {index == 4 || index == 5 ? (
                    <div className="bg-gray-700 -mt-7  rounded-full h-20 w-20 flex items-center justify-center  ">
                      <item.Icon />
                    </div>
                  ) : (
                    <div className="bg-gray-700  rounded-full h-20 w-20 flex items-center justify-center  ">
                      <item.Icon />
                    </div>
                  )}
                  <p className="text-lg text-white-100 leading-6 mt-4 break-words w-28 text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block lg:hidden mt-6">
            <div className="flex justify-between md:p-3 p-0 ">
              {tabletFeaturesArray1.map((item, index) => (
                <div className="feature-icon">
                  <div className={`${index == 0 ? "ml-0" : "ml-2"}`}>
                    <img src={`${item.imgLink}`} />
                  </div>
                  <p className="text-base md:text-lg text-white-100  mt-4 break-words md:w-28 w-[98px] text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center md:p-3 p-0 md:mt-0 mt-4">
              {tabletFeaturesArray2.map((item, index) => (
                <div className={`${index == 0 ? "-ml-13" : "ml-24"}`}>
                  <div className="feature-icon">
                    <div className={`${index == 2 ? "mt-6" : "mt-0"}`}>
                      <img src={`${item.imgLink}`} />
                    </div>
                    <p className="text-base md:text-lg text-white-100  mt-4 break-words md:w-28 w-[98px] text-center">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:hidden block mt-6">
            <div className="flex justify-between -ml-3">
              {mobileFeaturesArray1.map((item, index) => (
                <div className="feature-icon">
                  <div className={`${index == 0 ? "ml-0" : "ml-2"}`}>
                    <img className="h-16 w-16" src={`${item.imgLink}`} />
                  </div>
                  <p className="text-base md:text-lg text-white-150  mt-0 break-words md:w-28 w-[98px] text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between -ml-3">
              {mobileFeaturesArray2.map((item, index) => (
                <div className="feature-icon">
                  <div className={`${index != 0 ? "-mt-6" : "mt-0"}`}>
                    <img className="h-16 w-16" src={`${item.imgLink}`} />
                  </div>
                  <p className="text-base md:text-lg text-white-150  mt-0 break-words md:w-28 w-[98px] text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              {mobileFeaturesArray3.map((item, index) => (
                <div className="feature-icon">
                  <div>
                    <img className="h-16 w-16" src={`${item.imgLink}`} />
                  </div>
                  <p className="text-base md:text-lg text-white-150  mt-0 break-words md:w-28 w-[98px] text-center">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* supported Platforms */}
        <div className="md:mt-16 mt-10 w-full">
          <p className="lg:text-4xl md:text-4xl text-2xl font-extrabold text-black-100 dark:text-white-100">
            Supported platform or framework
          </p>
          <div className="mt-9">
            <PlatformPart />
          </div>
        </div>

        {/* CTA */}
        <div className="md:mt-20 mt-16  mb-10">
          <div
            style={{
              backgroundImage:
                "linear-gradient(92.19deg, #EE6E91 3.85%, #DE4CE3 50.19%, #9665E9 96.54%)",
            }}
            className="flex flex-row rounded-lg px-12 py-8"
          >
            <div className="flex flex-col flex-1">
              <div className="flex flex-col flex-1">
                <p className="lg:text-4xl md:text-lg text-base text-white-100 font-extrabold  text-center md:text-left">
                  Get 10,000 minutes free every month
                </p>
                <p className="text-white-150 text-base mt-0 text-center font-semibold md:text-left">
                  No credit card required
                </p>
              </div>
              <div className="flex items-center justify-center md:items-start md:justify-start ">
                <Button
                  link="https://app.videosdk.live/login"
                  text="Start Building For Free"
                />
              </div>
            </div>
            <div>
              <div className="hidden  md:block ">
                <div className=" ">
                  <img src="./img/mask-group.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default Overview;
