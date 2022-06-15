import { MainCard } from "../../theme/Overview";
import Link from "@docusaurus/Link";
import React from "react";

export default function ResourcePart() {
  const ResourceArray = [
    {
      title: "No Code SDK Guide",
      description:
        "End to End Tutorials to integrate No Code SDK on your platform.",
      link: "/docs/no-code",
    },
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

  const ResourceArray1 = [
    {
      title: "No Code SDK Guide",
      description:
        "End to End Tutorials to integrate No Code SDK on your platform.",
      link: "/docs/no-code",
    },
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
  ];

  const ResourceArray2 = [
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
    <>
      <div className="lg:block hidden">
        <div
          className="lg:flex lg:flex-col"
          // className=" grid grid-cols-3  gap-3"
        >
          <div className="lg:flex ">
            {ResourceArray1.map((item, index) => {
              return (
                <div
                  className={`${
                    index == 0 ? "ml-0" : "lg:ml-2 xl:ml-4 ml-0 "
                  } w-full `}
                >
                  <Link to={item.link} className="">
                    <MainCard
                      key={index}
                      Title={item.title}
                      titleStyle={
                        "md:text-xl text-lg text-white-100 font-bold mb-3"
                      }
                      Description={item.description}
                      descriptionStyle={
                        "text-gray-250 md:text-base text-base mt-0 lg:pr-7 xl:pr-2 2xl:pr-10 mb-0 "
                      }
                      borderRadius={"rounded-lg"}
                      showBorder
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="lg:flex  mt-3">
            {ResourceArray2.map((item, index) => {
              return (
                <div
                  className={`${
                    index == 0 ? "ml-0" : "lg:ml-2 xl:ml-4 ml-0 "
                  } xl:max-w-[365px] lg:max-w-[295px]`}
                >
                  <Link to={item.link} className="">
                    <MainCard
                      key={index}
                      Title={item.title}
                      titleStyle={
                        "md:text-xl text-lg text-white-100 font-bold mb-3 "
                      }
                      Description={item.description}
                      descriptionStyle={
                        "text-gray-250 md:text-base text-base mt-0  lg:pr-7 xl:pr-2 2xl:pr-10  mb-0 "
                      }
                      borderRadius={"rounded-lg"}
                      showBorder
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="grid grid-cols-2 gap-2">
          {ResourceArray.map((item, index) => {
            return (
              <div className={` w-full `}>
                <Link to={item.link} className="">
                  <MainCard
                    key={index}
                    Title={item.title}
                    titleStyle={
                      "md:text-xl text-lg text-white-100 font-bold mb-3 "
                    }
                    Description={item.description}
                    descriptionStyle={
                      "text-gray-250 md:text-base text-base mt-0 mb-0 "
                    }
                    borderRadius={"rounded-lg"}
                    showBorder
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
