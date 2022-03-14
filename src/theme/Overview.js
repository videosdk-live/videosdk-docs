import React from "react";
import SectionContainer from "../components/Layout/SectionContainer";
import CustomReactIcon from "../../static/icon/Home_customsdk/CustomReactIcon";
import CustomReactNativeIcon from "../../static/icon/Home_customsdk/CustomReactNativeIcon";
import CustomJSIcon from "../../static/icon/Home_customsdk/CustomJSIcon";
import CustomFlutterIcon from "../../static/icon/Home_customsdk/CustomFlutterIcon";
import CustomAndroidIcon from "../../static/icon/Home_customsdk/CustomAndroidIcon";
import CustomIOSIcon from "../../static/icon/Home_customsdk/CustomIOSIcon";
import ExternalLinkIcon from "../../static/icon/ExternalLinkIcon";
import JSIcon from "../../static/icon/JSIcon";
import ReactIcon from "../../static/icon/ReactIcon";
import FlutterIcon from "../../static/icon/FlutterIcon";
import AndroidIcon from "../../static/icon/AndroidIcon";
import IOSIcon from "../../static/icon/IOSIcon";
import ReactTooltip from "react-tooltip";

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
      } ${borderRadius ? borderRadius : "rounded"} bg-gray-750 ${
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
              {/* <img src={imgLink} /> */}
              <Icon className="w-8 h-8" />
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

let Button = ({ link, text, className }) => {
  return (
    <>
      <div className={`mt-0 ${className}`}>
        <a
          href={link}
          className={`rounded bg-white-100 hover:bg-white-150 flex flex-row items-center justify-center p-3 ${className}`}
        >
          <h6 className="text-black text-base font-semibold mb-0 text-center">
            {text}
          </h6>
        </a>
      </div>
    </>
  );
};

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
    <div className="flex md:flex-row flex-col ">
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
                  : " linear-gradient(90deg, #EE6E91 0%, #7964E7 100%)"
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
                      <Button
                        link="/prebuilt/guide/prebuilt-video-and-audio-calling/getting-started"
                        text="Try it - it’s free"
                        className="h-9"
                      />
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

function ResourceCard({ Title, Description, EndPart }) {
  return (
    <div
      className={`p-3 md:px-5 md:pt-6 md:pb-5 rounded-lg bg-gray-750 h-fullxl:max-w-sm md:h-auto`}
      // cursor-pointer
    >
      <div>
        <p
          className={"md:text-xl text-base text-white-100 font-extrabold mb-3 "}
        >
          {Title}
        </p>
        {Description && (
          <p
            className={`text-gray-250  md:text-lg text-base mt-0 lg:w-44 lg:pr-7 xl:pr-2 xl:w-56 2xl:pr-10 2xl:w-72`}
          >
            {Description}
          </p>
        )}
        {EndPart && <EndPart />}
      </div>
    </div>
  );
}
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
      link: "/react/guide/video-and-audio-calling-api-sdk/getting-started/",
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
          <div className={`${index == 0 ? "ml-0" : "lg:ml-2 xl:ml-4 ml-0 "} `}>
            <ResourceCard
              key={index}
              Title={item.title}
              Description={item.description}
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

function PlatformPart() {
  const platformArray = [
    { Icon: ReactIcon, title: "React" },
    { Icon: JSIcon, title: "JavaScript" },
    { Icon: ReactIcon, title: "React Native" },
  ];

  const platformArray2 = [
    { Icon: FlutterIcon, title: "Flutter" },
    { Icon: AndroidIcon, title: "Android" },
    { Icon: IOSIcon, title: "iOS" },
  ];
  const mobileplatformArray = [
    { Icon: ReactIcon, title: "React" },
    { Icon: JSIcon, title: "JavaScript" },
    { Icon: ReactIcon, title: "React Native" },
    { Icon: FlutterIcon, title: "Flutter" },
    { Icon: AndroidIcon, title: "Android" },
    { Icon: IOSIcon, title: "iOS" },
  ];

  return (
    <>
      <div className="md:block hidden">
        <div className="grid grid-cols-2 gap-3 mt-4 md:gap-3  md:flex md:flex-row md:justify-between">
          {platformArray.map((item, index) => {
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
        <div className="grid grid-cols-2 gap-3 mt-3 md:gap-3  md:flex md:flex-row md:justify-between">
          {platformArray2.map((item, index) => {
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

function Overview() {
  return (
    <div id="tailwind">
      <SectionContainer>
        {/* QuickStart */}
        <div className="md:mt-4 mt-10">
          <p className="lg:text-4xl md:text-4xl text-2xl  font-extrabold text-white-100">
            Quickstart
          </p>
          <div className="mt-9">
            <QuickstartPart />
          </div>
        </div>

        {/* Resource */}
        <div className="md:mt-20 mt-10">
          <p className="lg:text-4xl md:text-4xl text-2xl font-extrabold text-white-100">
            Resources
          </p>
          <div className="mt-9">
            <ResourcePart />
          </div>
        </div>

        {/* supported Platforms */}
        <div className="md:mt-16 mt-10 w-full">
          <p className="lg:text-4xl md:text-4xl text-2xl font-extrabold text-white-100">
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
