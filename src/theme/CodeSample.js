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

    {
      name: "Server Side",
      id: "server",
      icon: "./svgs/ios.svg",
    },
  ];
  const codeSamples = {
    react: [
      {
        title: "quickstart/react-rtc",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add video capabilities to your React JS applications quickly and easily",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-rtc",
      },

      {
        title: "quickstart/react-hls",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add livestreaming capabilities to your React JS applications quickly and easily",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-hls",
      },
      {
        title: "videosdk-rtc-react-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a React JS project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-sdk-example",
      },
      {
        title: "videosdk-hls-react-sdk-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using React JS and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-sdk-example",
      },
      {
        title: "videosdk-rtc-nextjs-sdk-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using React JS and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-nextjs-sdk-example",
      },
    ],
    "react-native": [
      {
        title: "quickstart/react-native",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add video capabilities to your React Native mobile app quickly and easily",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native",
      },

      {
        title: "quickstart/react-native-hls",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add livestreaming capabilities to your React Native mobile app quickly and easily",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native-hls",
      },
      {
        title: "videosdk-rtc-react-native-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a React Native project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example",
      },
      {
        title: "videosdk-hls-react-native-sdk-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using React Native and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example",
      },
      {
        title: "videosdk-rtc-react-native-call-trigger-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using React Native and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-native-call-trigger-example",
      },
    ],
    android: [
      {
        title: "quickstart/android-rtc",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add video capabilities to your Android app quickly and easily",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-rtc",
      },

      {
        title: "quickstart/android-hls",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add livestreaming capabilities to your Android app quickly and easily",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-hls",
      },
      {
        title: "videosdk-rtc-android-java-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a Android (Java) project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example",
      },
      {
        title: "videosdk-rtc-android-kotlin-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a Android (Kotlin) project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Mobile", "Koltin"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example",
      },
      {
        title: "videosdk-hls-android-java-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using Android (Java) and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-java-example",
      },
      {
        title: "videosdk-hls-android-kotlin-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using Android (Kotlin) and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Mobile", "Kotlin"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-kotlin-example",
      },
    ],
    flutter: [
      {
        title: "quickstart/flutter-rtc",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add video capabilities to your Flutter app quickly and easily",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-rtc",
      },

      {
        title: "quickstart/flutter-hls",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add livestreaming capabilities to your Flutter app quickly and easily",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-hls",
      },
      {
        title: "videosdk-rtc-flutter-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a Flutter project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example",
      },
      {
        title: "videosdk-hls-flutter-sdk-example",
        description:
          "A UI Template that demonstrates how to create an interactive live streaming application using Flutter and enable real-time communication between broadcasters and their audience, allowing for features like chat, polls, or other forms of engagement",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-flutter-sdk-example",
      },
    ],
    javascript: [
      {
        title: "videosdk-rtc-javascript-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a Javascript project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-javascript-sdk-example",
      },
      {
        title: "videosdk-rtc-angular-javascript-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a Javascript project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Web"],
        sdk: "Javascript",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-angular-javascript-example",
      },
    ],

    ios: [
      {
        title: "quickstart/ios-rtc",
        description:
          "A example which guides developers on installation, configuration, and usage of VideoSDK to add video capabilities to your iOS app quickly and easily",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/ios-rtc",
      },
      {
        title: "videosdk-rtc-ios-sdk-example",
        description:
          "A UI Template that demonstrates how to incorporate VideoSDK into a iOS project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example",
      },
    ],
    server: [
      {
        title: "videosdk-rtc-api-server-examples",
        description:
          "A example which guides developers on how to use the VideoSDK APIs",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-api-server-examples",
      },
    ],
  };
  return (
    <div id="tailwind">
      <div className="container flex flex-col w-full  py-20">
        <p className="text-5xl font-bold text-center py-5 text-white-100">
          Code Samples
        </p>
        <div className="flex w-full flex-col gap-5">
          <div className="flex ">
            {sdks.map((sdk, index) => {
              return (
                <div
                  key={sdk.id}
                  className={`flex flex-row items-center justify-center gap-2 text-lg w-full p-3 border-2 rounded-lg hover:cursor-pointer ${
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
                    <div className="relative bg-gray-750 w-full h-full p-3 rounded-xl border-class hover:cursor-pointer">
                      <ExternalLinkIcon className="absolute right-5 top-5" />
                      <p className="text-xl text-white-100 font-extrabold mb-0 flex itmes-center gap-3">
                        <img src={codeSample.icon} className="invert h-8 w-8" />{" "}
                        {codeSample.title}
                      </p>
                      <p className="text-gray-500 mt-2 mb-0">
                        {codeSample.description}
                      </p>
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
