import { MainCard } from "../../theme/Overview";
import Link from "@docusaurus/Link";
import React from "react";

export default function ResourcePart() {
  const ResourceArray = [
    {
      title: "No Code SDK Guide",
      description:
        "End to End Tutorials to integrate No Code SDK on your platform.",
      link: "no-code-sdk/guide/no-code-video-and-audio-calling/getting-started",
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {ResourceArray.map((item, index) => {
        return (
          <div className={`w-full`}>
            <Link to={item.link} className="">
              <MainCard
                key={index}
                Title={item.title}
                titleStyle={"md:text-xl text-lg text-white-100 font-bold mb-3 "}
                Description={item.description}
                descriptionStyle={
                  "text-gray-250 md:text-base text-base mt-0 mb-0 "
                }
                borderRadius={"rounded-lg"}
                fullWidth={true}
                showBorder
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
