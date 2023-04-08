import React from "react";
import ReactIcon from "../../static/icon/ReactIcon";
import Link from "@docusaurus/Link";
import SectionContainer from "../components/Layout/SectionContainer";
import JSIcon from "../../static/icon/JSIcon";
import FlutterIcon from "../../static/icon/FlutterIcon";
import AndroidIcon from "../../static/icon/AndroidIcon";
import IOSIcon from "../../static/icon/IOSIcon";
import QuickstartPart from "../components/landingPage/QuickStartPart";
import ResourcePart from "../components/landingPage/ResourcePart";
const blogs = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

export function MainCard({
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
  showBorder,
  showBadge,
}) {
  return (
    <div
      style={{ backgroundImage: `${backgroundColor}` }}
      className={`${
        fullWidth ? "p-3 md:p-5" : onlyTitle ? "p-3 md:p-2" : "p-3 md:p-5"
      } ${borderRadius ? borderRadius : "rounded"} bg-gray-750 ${
        onlyTitle
          ? "md:w-full"
          : `h-full ${
              fullWidth ? "md:max-w-sm lg:max-w-full max-w-full" : "xl:max-w-sm"
            }  `
      }  ${showBorder ? "border-class" : ""}`}
    >
      <div>
        <div className="flex flex-row">
          {(Icon || imgLink) && (
            <div
              className={`flex  items-center justify-center md:rounded-md rounded-sm md:w-12 md:h-12 w-8 h-8`}
            >
              <img src={imgLink} />
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
            {showBadge && (
              <div className="bg-white-250 px-2 py-0.5 ml-4 rounded-sm">
                <p className="text-white text-sm font-semibold mb-0">BETA</p>
              </div>
            )}
          </div>
        </div>
        {Description && (
          <div className={`mt-0 ${quickstart ? "pr-4" : ""}`}>
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
    {
      Icon: ReactIcon,
      title: "React",
      imgLink: "./svgs/react.svg",
      link: "/react/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: JSIcon,
      title: "JavaScript",
      imgLink: "./svgs/js.svg",
      link: "/javascript/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: ReactIcon,
      title: "React Native",
      imgLink: "./svgs/react-native.svg",
      link: "/react-native/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
  ];

  const platformArray2 = [
    {
      Icon: FlutterIcon,
      title: "Flutter",
      imgLink: "./svgs/flutter.svg",
      link: "/flutter/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: AndroidIcon,
      title: "Android",
      imgLink: "./svgs/android.svg",
      link: "/android/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: IOSIcon,
      title: "iOS",
      imgLink: "./svgs/ios.svg",
      link: "/ios/guide/video-and-audio-calling-api-sdk/getting-started",
    },
  ];
  const mobileplatformArray = [
    {
      Icon: ReactIcon,
      title: "React",
      imgLink: "./svgs/react.svg",
      link: "/react/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: JSIcon,
      title: "JavaScript",
      imgLink: "./svgs/js.svg",
      link: "/javascript/guide/video-and-audio-calling-api-sdk/getting-started",
    },
    {
      Icon: ReactIcon,
      title: "React Native",
      imgLink: "./svgs/react-native.svg",
      link: "/react-native/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: FlutterIcon,
      title: "Flutter",
      imgLink: "./svgs/flutter.svg",
      link: "/flutter/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
    },
    {
      Icon: AndroidIcon,
      title: "Android",
      imgLink: "./svgs/android.svg",
      link: "/android/guide/video-and-audio-calling-api-sdk/concept-and-architecture",
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
                  showBorder
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
                  showBorder
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
                showBorder
              />
            );
          })}
        </div>
      </div>
    </>
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

function Overview() {
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
            <p className="lg:text-3xl md:text-3xl text-2xl  font-extrabold text-black-100 dark:text-white-100">
              Quickstart
            </p>
            <div className="mt-9">
              <QuickstartPart />
            </div>
          </div>

          {/* Resource */}
          <div className="md:mt-20 mt-10">
            <p className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-black-100 dark:text-white-100">
              Resources
            </p>
            <div className="mt-9">
              <ResourcePart />
            </div>
          </div>
        </div>

        {/* supported Platforms */}
        <div className="md:mt-16 mt-10 w-full">
          <p className="lg:text-3xl md:text-3xl text-2xl font-extrabold text-black-100 dark:text-white-100">
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
                <p className="lg:text-4xl md:text-lg text-base mb-4 text-white-100 font-extrabold  text-center md:text-left">
                  Get 10,000 minutes free every month
                </p>
                <p className="text-white-150 text-base mt-0 text-center font-medium md:text-left">
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
