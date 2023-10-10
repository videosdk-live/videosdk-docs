import React, { useRef, useState } from "react";
import CustomAndroidIcon from "../../../static/icon/Home_customsdk/CustomAndroidIcon";
import CustomFlutterIcon from "../../../static/icon/Home_customsdk/CustomFlutterIcon";
import CustomIOSIcon from "../../../static/icon/Home_customsdk/CustomIOSIcon";
import CustomJSIcon from "../../../static/icon/Home_customsdk/CustomJSIcon";
import CustomReactIcon from "../../../static/icon/Home_customsdk/CustomReactIcon";
import PrebuiltIcon from "../../../static/icon/Home_customsdk/PrebuiltIcon";
import CustomReactNativeIcon from "../../../static/icon/Home_customsdk/CustomReactNativeIcon";
import { MainCard } from "../../theme/Overview";
import { createPopper } from "@popperjs/core";
import CustomServerSideIcon from "../../../static/icon/Home_customsdk/CustomServerSideIcon";

export default function QuickstartPart() {
  const QuickStartArray = [
    {
      title: "Audio and Video Calling SDK",
      description:
        "Complete SDK that facilitates the integration and customization of your own audio video calling solution from scratch.",
      backgroundColor: "linear-gradient(90deg, #EE6E91 0%, #7964E7 100%)",
    },
    {
      title: "Interactive Live Streaming SDK",
      description:
        "Complete SDK that facilitates the integration and customization of engaging live streaming from scratch.",
      backgroundColor:
        "linear-gradient(99.37deg, #6A64F0 0.88%, #5A1C8E 102.26%)",
    },
  ];

  const ILSSDKArray = [
    {
      Icon: CustomReactIcon,
      link: "/react/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "React",
    },
    {
      Icon: CustomJSIcon,
      link: "/javascript/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "JavaScript",
    },
    {
      Icon: CustomReactNativeIcon,
      link: "/react-native/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "React Native",
    },
    {
      Icon: CustomFlutterIcon,
      link: "/flutter/guide/video-and-audio-calling-api-sdk/quick-start-ils",
      tooltip: "Flutter",
    },
    {
      Icon: CustomAndroidIcon,
      link: "/android/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "Andorid",
    },
    {
      Icon: CustomServerSideIcon,
      link: "/api-reference/realtime-communication/intro",
      tooltip: "Server-side",
    },
  ];

  const CustomSDKArray = [
    {
      Icon: PrebuiltIcon,
      link: "/prebuilt/guide/prebuilt-video-and-audio-calling/quick-start",
      tooltip: "Prebuilt",
    },
    {
      Icon: CustomReactIcon,
      link: "/react/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "React",
    },
    {
      Icon: CustomJSIcon,
      link: "/javascript/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "JavaScript",
    },
    {
      Icon: CustomFlutterIcon,
      link: "/flutter/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "Flutter",
    },
    {
      Icon: CustomReactNativeIcon,
      link: "/react-native/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "React Native",
    },
    {
      Icon: CustomAndroidIcon,
      link: "/android/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "Andorid",
    },
    {
      Icon: CustomIOSIcon,
      link: "/ios/guide/video-and-audio-calling-api-sdk/quick-start",
      tooltip: "iOS",
    },
    {
      Icon: CustomServerSideIcon,
      link: "/api-reference/realtime-communication/intro",
      tooltip: "Server-side",
    },
  ];

  const SingleIconDiv = ({ Icon, tooltipTitle, link, index }) => {
    const [tooltipShow, setTooltipShow] = useState(false);
    const btnRef = useRef();
    const tooltipRef = useRef();

    const openTooltip = () => {
      createPopper(btnRef.current, tooltipRef.current, {
        placement: "bottom",
      });
      setTooltipShow(true);
    };
    const closeTooltip = () => {
      setTooltipShow(false);
    };
    return (
      <>
        <div
          className={`${index === 0 ? "" : "md:ml-2 lg:ml-3 ml-1"} `}
          ref={btnRef}
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
        >
          <a data-tip data-for={tooltipTitle} href={link}>
            <button className="cursor-pointer bg-white-250 p-1.5 md:p-2 rounded-md flex items-center justify-center w-full h-full bg-white bg-opacity-25 border-0">
              <Icon />
            </button>
          </a>
        </div>
        <div
          style={{ zIndex: 999 }}
          className={`${
            tooltipShow ? "" : "hidden"
          } overflow-hidden flex flex-col items-center justify-center `}
          ref={tooltipRef}
        >
          <div className="w-4 overflow-hidden inline-block">
            <div className="h-2 w-2 bg-pink-100 rotate-45 transform origin-bottom-left"></div>
          </div>
          <div className={"rounded p-1 bg-pink-100"}>
            <p className="text-sm text-gray-800 p-1 mb-0">{tooltipTitle}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {QuickStartArray.map((item, index) => {
        return (
          <MainCard
            className={`col-span-1`}
            key={index}
            Title={item.title}
            titleStyle={
              "md:text-2xl text-xl text-white-100 font-extrabold mb-0"
            }
            Description={item.description}
            backgroundColor={item.backgroundColor}
            descriptionStyle={
              "text-white-100 md:text-base text-base font-medium mt-2"
            }
            borderRadius={"rounded-lg"}
            fullWidth={true}
            quickstart={true}
            showBadge={item.showBadge}
            EndPart={() => {
              return index === 1 ? (
                <div className="mt-1 2xl:mt-7">
                  <div className="h-9 flex ">
                    {ILSSDKArray.map((item, index) => (
                      <SingleIconDiv
                        Icon={item.Icon}
                        tooltipTitle={item.tooltip}
                        link={item.link}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-1 2xl:mt-7">
                  <div className="h-9 flex ">
                    {CustomSDKArray.map((item, index) => (
                      <SingleIconDiv
                        Icon={item.Icon}
                        tooltipTitle={item.tooltip}
                        link={item.link}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              );
            }}
          />
        );
      })}
    </div>
  );
}
