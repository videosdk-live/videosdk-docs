import React, { useState } from "react";
import Link from "@docusaurus/Link";
import ExternalLinkIcon from "../../static/icon/ExternalLinkIcon";
import TestflightIcon from "../../static/icon/Testglighticon";

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
      icon: "./svgs/server.svg",
    },
  ];
  const codeSamples = {
    react: [
      {
        title: "quickstart/react-rtc",
        description:
          "A short and sweet tutorial for getting up to speed with React VideoSDK in less than 10 minutes.",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-rtc",
      },

      {
        title: "quickstart/react-hls",
        description:
          "A short and sweet tutorial for getting up to speed with React VideoSDK in less than 10 minutes.",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-hls",
      },
      {
        title: "videosdk-rtc-react-sdk-example",
        description:
          "A ready-to-use React UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-sdk-example",
      },
      {
        title: "videosdk-hls-react-sdk-example",
        description:
          "A ready-to-use React UI kit Example for interactive live streaming that enable real-time communication between broadcasters and their audience, allowing for features like chat, Add co-hosts, or other forms of engagement.",
        tags: ["Web"],
        sdk: "React",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-sdk-example",
      },
      {
        title: "videosdk-rtc-nextjs-sdk-example",
        description:
          "A ready-to-use React Next JS UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
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
          "A short and sweet tutorial for getting up to speed with React Native VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native",
      },

      {
        title: "quickstart/react-native-hls",
        description:
          "A short and sweet tutorial for getting up to speed with React Native VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/react-native-hls",
      },
      {
        title: "videosdk-rtc-react-native-sdk-example",
        description:
          "A ready-to-use React Native UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
        tags: ["Mobile"],
        testFlightLink: "https://testflight.apple.com/join/LYj3QJPx",
        firebaseLink: "https://appdistribution.firebase.dev/i/a4c63049415c4356",
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-native-sdk-example",
      },
      {
        title: "videosdk-hls-react-native-sdk-example",
        description:
          "A ready-to-use React Native UI kit Example for interactive live streaming that enable real-time communication between broadcasters and their audience, allowing for features like chat, Add co-hosts, or other forms of engagement.",
        tags: ["Mobile"],
        testFlightLink: "https://testflight.apple.com/join/8hUKvpwT",
        firebaseLink: "https://appdistribution.firebase.dev/i/9e63ac73eb4f49c3",
        sdk: "React Native",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-react-native-sdk-example",
      },
      {
        title: "videosdk-rtc-react-native-call-trigger-example",
        description:
          "A ready-to-use React Native UI kit Example for video and audio communication that includes call trigger across android and iOS devices.",
        tags: ["Mobile"],
        sdk: "React Native",
        firebaseLink: "https://appdistribution.firebase.dev/i/e977b56536d45796",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-react-native-call-trigger-example",
      },
    ],
    android: [
      {
        title: "quickstart/android-rtc",
        description:
          "A short and sweet tutorial for getting up to speed with Android VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-rtc",
      },

      {
        title: "quickstart/android-hls",
        description:
          "A short and sweet tutorial for getting up to speed with Android VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/android-hls",
      },
      {
        title: "videosdk-rtc-android-java-sdk-example",
        description:
          "A ready-to-use Android(Java) UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        firebaseLink: "https://appdistribution.firebase.dev/i/99ae2c5db3a7e446",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-java-sdk-example",
      },
      {
        title: "videosdk-rtc-android-kotlin-sdk-example",
        description:
          "A ready-to-use Android(Kotlin) UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
        tags: ["Mobile", "Koltin"],
        sdk: "Android",
        firebaseLink: "https://appdistribution.firebase.dev/i/99ae2c5db3a7e446",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-android-kotlin-sdk-example",
      },
      {
        title: "videosdk-hls-android-java-example",
        description:
          "A ready-to-use Android(Java) UI kit Example for interactive live streaming that enable real-time communication between broadcasters and their audience, allowing for features like chat, screen share, or other forms of engagement.",
        tags: ["Mobile", "Java"],
        sdk: "Android",
        firebaseLink: "https://appdistribution.firebase.dev/i/a8156572b0936799",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-java-example",
      },
      {
        title: "videosdk-hls-android-kotlin-example",
        description:
          "A ready-to-use Android(Kotlin) UI kit Example for interactive live streaming that enable real-time communication between broadcasters and their audience, allowing for features like chat, screen share, or other forms of engagement.",
        tags: ["Mobile", "Kotlin"],
        firebaseLink: "https://appdistribution.firebase.dev/i/a8156572b0936799",
        sdk: "Android",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-hls-android-kotlin-example",
      },
    ],
    flutter: [
      {
        title: "quickstart/flutter-rtc",
        description:
          "A short and sweet tutorial for getting up to speed with Flutter VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-rtc",
      },

      {
        title: "quickstart/flutter-hls",
        description:
          "A short and sweet tutorial for getting up to speed with Flutter VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "Flutter",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/flutter-hls",
      },
      {
        title: "videosdk-rtc-flutter-sdk-example",
        description:
          "A ready-to-use Flutter UI kit Example for video and audio communication that includes important features like screen sharing, chat, etc, and covers all possible edge cases.",
        tags: ["Mobile"],
        sdk: "Flutter",
        testFlightLink: "https://testflight.apple.com/join/C1UOYbxh",
        firebaseLink: "https://appdistribution.firebase.dev/i/80c2c6cc9fcb89b0",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-flutter-sdk-example",
      },
      {
        title: "videosdk-hls-flutter-sdk-example",
        description:
          "A ready-to-use Flutter UI kit Example for interactive live streaming that enable real-time communication between broadcasters and their audience, allowing for features like chat, screen share, or other forms of engagement.",
        tags: ["Mobile"],
        sdk: "Flutter",
        testFlightLink: "https://testflight.apple.com/join/RiYh4KQQ",
        firebaseLink: "https://appdistribution.firebase.dev/i/bfe2146c97301aaf",
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
          "A UI Template that demonstrates how to incorporate VideoSDK into a Angular Javascript project and includes essential features such as video/audio communication, screen sharing, and chat functionality.",
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
          "A short and sweet tutorial for getting up to speed with iOS VideoSDK in less than 10 minutes.",
        tags: ["Mobile"],
        sdk: "iOS",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/quickstart/tree/main/ios-rtc",
      },
      {
        title: "videosdk-rtc-ios-sdk-example",
        description:
          "A ready-to-use iOS UI kit Example for video and audio communication that includes important features like chat, change audio output, and covers all possible edge cases.",
        tags: ["Mobile"],
        sdk: "iOS",
        testFlightLink: "https://testflight.apple.com/join/26EBZkcX",
        icon: "/img/icons/libraries/github-mark.svg",
        link: "https://github.com/videosdk-live/videosdk-rtc-ios-sdk-example",
      },
    ],
    server: [
      {
        title: "videosdk-rtc-api-server-examples",
        description:
          "A example which guides developers on how to use the VideoSDK APIs.",
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
        <div className="flex w-full flex-col gap-5 ">
          <div className="flex overflow-scroll md:overflow-hidden">
            {sdks.map((sdk, index) => {
              return (
                <div
                  key={sdk.id}
                  className={`flex flex-row items-center justify-center gap-2 text-lg  w-full py-1 px-8 md:px-3 md:py-3 border-2 rounded-lg hover:cursor-pointer ${
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
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
              {codeSamples[selecteSDK].map((codeSample, idx) => {
                return (
                  <Link to={codeSample.link} className="">
                    <div className="relative bg-gray-750 flex flex-col w-full h-full p-4 rounded-xl border-class hover:cursor-pointer">
                      <div className="flex flex-1 flex-col">
                        <ExternalLinkIcon className="absolute right-5 top-5" />
                        <p className="text-xl text-white-100 font-extrabold mb-0 flex itmes-center gap-3">
                          <img
                            src={codeSample.icon}
                            className="invert h-8 w-8"
                          />{" "}
                          {codeSample.title}
                        </p>
                        <p className="text-gray-250 mt-2 mb-0">
                          {codeSample.description}
                        </p>
                      </div>
                      {(codeSample.testFlightLink ||
                        codeSample.firebaseLink) && (
                        <div className="h-[1px] w-full bg-gray-600 my-3"></div>
                      )}

                      <div className=" flex flex-row gap-4">
                        {codeSample.testFlightLink && (
                          <a
                            href={codeSample.testFlightLink}
                            className="flex flex-row items-center gap-3"
                          >
                            <img
                              src="/img/icons/testflight.png"
                              className="w-8 h-8"
                            />
                            <p className="mb-0">Try iOS app</p>
                          </a>
                        )}
                        {codeSample.firebaseLink && (
                          <a
                            href={codeSample.firebaseLink}
                            className="flex flex-row items-center gap-3"
                          >
                            <img
                              src="/img/icons/icons8-firebase.svg"
                              className="w-8 h-8"
                            />
                            <p className="mb-0">Try android app</p>
                          </a>
                        )}
                      </div>
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
