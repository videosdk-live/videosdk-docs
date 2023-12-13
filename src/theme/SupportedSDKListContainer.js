import React from "react";
import AndroidIcon from "../../static/icon/supportedList/AndroidIcon";
import IOSIcon from "../../static/icon/supportedList/IOSIcon";
import JavascriptIcon from "../../static/icon/supportedList/JavascriptIcon";
import ReactIcon from "../../static/icon/supportedList/ReactIcon";

const SupportSDKList = () => {
  const SdkList = [
    {
      Icon: AndroidIcon,
      title: "Android",
      href: "/tutorials/migration-guide-from-twilio-to-videosdk-android-sdk",
    },
    {
      Icon: IOSIcon,
      title: "iOS",
      href: "/tutorials/migration-guide-from-twilio-to-videosdk-android-sdk",
    },
    {
      Icon: ReactIcon,
      title: "React",
      href: "/tutorials/migration-guide-from-twilio-to-videosdk-web-edition",
    },
    {
      Icon: JavascriptIcon,
      title: "Javascript",
      href: "/tutorials/migration-guide-from-twilio-to-videosdk-js-sdk",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 my-6">
      {SdkList.map(({ Icon, title, href }) => (
        <a href={href}>
          <div className="col-span-1 sdkcard flex flex-col items-center justify-center py-6 rounded-md">
            <Icon />
            <div className="mt-3">
              <p className="text-base mb-0 text-white-100">{title}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

function SupportedSDKListContainer() {
  return (
    <div id="tailwind">
      <SupportSDKList />
    </div>
  );
}
export default SupportedSDKListContainer;
