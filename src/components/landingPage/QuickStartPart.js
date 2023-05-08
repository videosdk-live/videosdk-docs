import React from "react";
import CustomAndroidIcon from "../../../static/icon/Home_customsdk/CustomAndroidIcon";
import CustomFlutterIcon from "../../../static/icon/Home_customsdk/CustomFlutterIcon";
import CustomIOSIcon from "../../../static/icon/Home_customsdk/CustomIOSIcon";
import CustomJSIcon from "../../../static/icon/Home_customsdk/CustomJSIcon";
import CustomReactIcon from "../../../static/icon/Home_customsdk/CustomReactIcon";
import PrebuiltIcon from "../../../static/icon/Home_customsdk/PrebuiltIcon";

import CustomReactNativeIcon from "../../../static/icon/Home_customsdk/CustomReactNativeIcon";
import { MainCard } from "../../theme/Overview";
import ReactTooltip from "react-tooltip";

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

  const TabletQuickStartArray1 = [
    // {
    //   title: "No Code SDK",
    //   description:
    //     "ZERO CODING!! Create audio-video rooms in 5 minutes and invite other users to join it.",
    //   backgroundColor:
    //     "linear-gradient(99.37deg, #6246FB 0.88%, #4AA5FD 102.26%)",
    // },
    {
      title: "Prebuilt SDK",
      description:
        "Integrate the pre-build video calling solution into your app in 10 minutes.",
      backgroundColor:
        "linear-gradient(99.37deg, #6A64F0 0.88%, #5A1C8E 102.26%)",
    },
    {
      title: "Custom SDK",
      description:
        "Fully featured SDK that allows you to integrate and customize your own video calling solution from scratch.",
      backgroundColor: "linear-gradient(90deg, #EE6E91 0%, #7964E7 100%)",
    },
  ];

  const TabletQuickStartArray2 = [
    {
      title: "Custom SDK",
      description:
        "Fully featured SDK that allows you to integrate and customize your own video calling solution from scratch.",
      backgroundColor: "linear-gradient(90deg, #EE6E91 0%, #7964E7 100%)",
    },
  ];

  const ILSSDKArray = [
    {
      Icon: CustomReactIcon,
      link: "/react/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "React",
    },
    {
      Icon: CustomFlutterIcon,
      link: "/flutter/guide/video-and-audio-calling-api-sdk/quick-start-ils",
      tooltip: "Flutter",
    },
    {
      Icon: CustomReactNativeIcon,
      link: "/react-native/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "React Native",
    },
    {
      Icon: CustomAndroidIcon,
      link: "/android/guide/video-and-audio-calling-api-sdk/quick-start-ILS",
      tooltip: "Andorid",
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
  ];

  return (
    <>
      <div
        // className="grid grid-cols-2 gap-3 "
        className="flex md:flex-row flex-col "
      >
        {QuickStartArray.map((item, index) => {
          return (
            <div
              className={`${
                index == 0 ? "ml-0" : "md:ml-4 ml-0 md:mt-0 mt-3"
              } flex-1`}
            >
              <MainCard
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
                    <div className="mt-6">
                      <div className="custom-icons h-9 w-9 flex 2xl:mt-12 ">
                        {ILSSDKArray.map((item, index) => {
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
                  ) : (
                    <div className="mt-6">
                      <div className="custom-icons h-9 w-9 flex 2xl:mt-12 ">
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
    </>
  );
}
