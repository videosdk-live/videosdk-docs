import React, { useState } from "react";
import Link from "@docusaurus/Link";
import ExternalLinkIcon from "../../static/icon/ExternalLinkIcon";

export default function CodeSample() {
  const [selecteSDK, setSelectedSDK] = useState("react");
  const sdks = [
    {
      name: "React",
      id: "react",
      icon: "./svgs/react.svg",
    },
    {
      name: "Javascript",
      id: "javascript",
      icon: "./svgs/js.svg",
    },
    {
      name: "React Native",
      id: "react-native",
      icon: "./svgs/react-native.svg",
    },
    {
      name: "Android",
      id: "android",
      icon: "./svgs/android.svg",
    },
    {
      name: "Flutter",
      id: "flutter",
      icon: "./svgs/flutter.svg",
    },
    {
      name: "iOS",
      id: "ios",
      icon: "./svgs/ios.svg",
    },
  ];
  const codeSamples = {
    react: [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "React",
        icon: "./svgs/react.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-rtc",
      },

      {
        title: "Quickstart for Interactive Livestreaming",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "React",
        icon: "./svgs/react.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-hls",
      },
      {
        title: "Conference Sample Code",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "React",
        icon: "./svgs/react.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-sdk-example",
      },
      {
        title: "Interactive Livestreaming Sample Code",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "React",
        icon: "./svgs/react.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-sdk-example",
      },
    ],
    "react-native": [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "./svgs/react-native.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native",
      },

      {
        title: "Quickstart for Interactive Livestreaming",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "./svgs/react-native.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native-hls",
      },
      {
        title: "Conference Sample Code",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "./svgs/react-native.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example",
      },
      {
        title: "Interactive Livestreaming Sample Code",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "./svgs/react-native.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example",
      },
    ],
    android: [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-rtc",
      },

      {
        title: "Quickstart for Interactive Livestreaming",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-hls",
      },
      {
        title: "Conference Sample Code (Java)",
        description: "Lorem Ipsum",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example",
      },
      {
        title: "Conference Sample Code (Kotlin)",
        description: "Lorem Ipsum",
        tags: ["Mobile", "Koltin"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example",
      },
      {
        title: "Interactive Livestreaming Sample Code (Java)",
        description: "Lorem Ipsum",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-java-example",
      },
      {
        title: "Interactive Livestreaming Sample Code (Kolin)",
        description: "Lorem Ipsum",
        tags: ["Mobile", "Kotlin"],
        sdk: "Android",
        icon: "./svgs/android.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-kotlin-example",
      },
    ],
    flutter: [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "./svgs/flutter.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-rtc",
      },

      {
        title: "Quickstart for Interactive Livestreaming",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "./svgs/flutter.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-hls",
      },
      {
        title: "Conference Sample Code",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "./svgs/flutter.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example",
      },
      {
        title: "Interactive Livestreaming Sample Code",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "./svgs/flutter.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-flutter-sdk-example",
      },
    ],
    javascript: [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "./svgs/js.svg",
        link: "https://github.com/",
      },

      {
        title: "Quickstart for Interactive Livestreaming",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "./svgs/js.svg",
        link: "https://github.com/",
      },
      {
        title: "Conference Sample Code",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "./svgs/js.svg",
        link: "https://github.com/",
      },
      {
        title: "Interactive Livestreaming Sample Code",
        description: "Lorem Ipsum",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "./svgs/js.svg",
        link: "https://github.com/",
      },
    ],

    ios: [
      {
        title: "Quickstart for Conference",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "./svgs/ios.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/ios-rtc",
      },
      {
        title: "Conference Sample Code",
        description: "Lorem Ipsum",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "./svgs/ios.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example",
      },
    ],
  };
  return (
    <div id="tailwind">
      <div className="container flex flex-col w-full  py-20">
        <p className="text-5xl font-bold text-center py-5 text-white-100">
          Examples
        </p>
        <div className="flex w-full  gap-5">
          <div className="flex flex-col basis-1/5">
            {sdks.map((sdk, index) => {
              return (
                <div
                  key={sdk.id}
                  className={`flex flex-row items-center gap-2 text-lg w-full p-3 border-2 rounded-lg hover:cursor-pointer ${
                    selecteSDK == sdk.id
                      ? "bg-gray-750 text-white-100 font-bold"
                      : " "
                  } hover:border-gray-100 border-gray-750`}
                  onClick={() => {
                    setSelectedSDK(sdk.id);
                  }}
                >
                  <img src={sdk.icon} className=" w-8 h-8 rounded-md " />
                  {sdk.name}
                </div>
              );
            })}
          </div>
          <div className="w-full">
            <div className="flex-1 grid grid-cols-2 gap-5 w-full ">
              {codeSamples[selecteSDK].map((codeSample, idx) => {
                return (
                  <Link to={codeSample.link} className="">
                    <div className="relative bg-gray-750 p-3 rounded-xl border-class hover:cursor-pointer">
                      <ExternalLinkIcon className="absolute right-5 top-5" />
                      <p className="text-xl text-white-100 font-extrabold mb-0">
                        {codeSample.title}
                      </p>
                      <p className="text-gray-500">{codeSample.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
