import React from "react";
import ChromeIcon from "../../static/icon/supportedList/ChromeIcon";
import EdgeIcon from "../../static/icon/supportedList/EdgeIcon";
import FirefoxIcon from "../../static/icon/supportedList/FirefoxIcon";
import OperaIcon from "../../static/icon/supportedList/OperaIcon";
import SafariIcon from "../../static/icon/supportedList/SafariIcon";
import SamsungInternetIcon from "../../static/icon/supportedList/SamsungInternetIcon";
import WebviewIcon from "../../static/icon/supportedList/WebviewIcon";
import DesktopIcon from "../../static/icon/supportedList/DesktopIcon";
import MobileIcon from "../../static/icon/supportedList/MobileIcon";
import AndroidSDKIcon from "../../static/icon/supportedList/AndroidSDKIcon";
import IOSSDKIcon from "../../static/icon/supportedList/IOSSDKIcon";
import RightIcon from "../../static/icon/supportedList/RightIcon";
import WrongIcon from "../../static/icon/supportedList/WrongIcon";

const MethodRequestResponse = () => {
  const featureList = [
    {
      feature: "Audio",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "78",
        opera: "NA",
        safari: "13.1",
        chrome_android: "78",
        firefox_android: "78",
        opera_android: "NA",
        safari_ios: "13.1",
        samsung_internet: "NA",
        webview_android: "NA",
        android_sdk: "5",
        ios_sdk: "NA",
      },
    },
    {
      feature: "Video",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "78",
        opera: "NA",
        safari: "13.1",
        chrome_android: "78",
        firefox_android: "78",
        opera_android: "NA",
        safari_ios: "13.1",
        samsung_internet: "NA",
        webview_android: "NA",
        android_sdk: "5",
        ios_sdk: "NA",
      },
    },
    {
      feature: "Screen Sharing",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "NA",
        opera: "NA",
        safari: "13.1",
        chrome_android: "NA",
        firefox_android: "NA",
        opera_android: "NA",
        safari_ios: "NA",
        samsung_internet: "NA",
        webview_android: "NA",
        android_sdk: "5",
        ios_sdk: "NA",
      },
    },
    {
      feature: "Picture-in-picture",
      versions: {
        chrome: "70",
        edge: "79",
        firefox: "NA",
        opera: "73",
        safari: "13.1",
        chrome_android: "NA",
        firefox_android: "NA",
        opera_android: "NA",
        safari_ios: "14",
        samsung_internet: "NA",
        webview_android: "NA",
        android_sdk: "NA",
        ios_sdk: "NA",
      },
    },
  ];

  const browserLists = {
    desktop: [
      { name: "Chrome", value: "chrome", Icon: ChromeIcon },
      { name: "Edge", value: "edge", Icon: EdgeIcon },
      { name: "Firefox", value: "firefox", Icon: FirefoxIcon },
      { name: "Opera", value: "opera", Icon: OperaIcon },
      { name: "Safari", value: "safari", Icon: SafariIcon },
    ],
    mobile: [
      { name: "Chrome Android", value: "chrome_android", Icon: ChromeIcon },
      { name: "Firefox Android", value: "firefox_android", Icon: FirefoxIcon },
      { name: "Opera Android", value: "opera_android", Icon: OperaIcon },
      { name: "Safari on iOS", value: "safari_ios", Icon: SafariIcon },
      {
        name: "Samsung Internet",
        value: "samsung_internet",
        Icon: SamsungInternetIcon,
      },
      { name: "WebView Android", value: "webview_android", Icon: WebviewIcon },
      { name: "Android SDK", value: "android_sdk", Icon: AndroidSDKIcon },
      { name: "iOS SDK", value: "ios_sdk", Icon: IOSSDKIcon },
    ],
  };

  const BrowserCell = ({ name, Icon }) => (
    <th className="vertical-cell p-2 py-3">
      <div className="vertical-rl">
        <span className="transform rotate-180 inline-flex m-0 p-0 text-base text-white">
          {name}
        </span>
      </div>
      <div className="mt-3">
        <Icon />
      </div>
    </th>
  );

  const renderVersionCell = (version, status) => (
    <div className="flex flex-col items-center justify-center">
      {status === "right" ? <RightIcon /> : <WrongIcon />}
      <span
        className={`inline-flex mt-2 m-0 p-0 text-base text-center font-semibold text-white ${
          status === "right" ? "text-green-550" : "text-red-500"
        }`}
      >
        {version}
      </span>
    </div>
  );

  return (
    <div className="max-w-screen-lg mt-10">
      <table className="min-w-full">
        <thead className="bg-transparent">
          <tr>
            <th className="py-1"></th>

            <th colSpan={browserLists.desktop.length} className="py-1">
              <DesktopIcon />
            </th>

            <th colSpan={browserLists.mobile.length} className="py-1">
              <MobileIcon />
            </th>
          </tr>

          <tr className="bg-transparent">
            <th></th>
            {[...browserLists.desktop, ...browserLists.mobile].map(
              ({ name, Icon }) => (
                <BrowserCell key={name} name={name} Icon={Icon} />
              )
            )}
          </tr>
        </thead>

        <tbody>
          {featureList.map(({ feature, versions }) => (
            <tr key={feature} className="bg-transparent">
              <td className="px-4 py-2 whitespace-nowrap">{feature}</td>
              {[...browserLists.desktop, ...browserLists.mobile].map(
                ({ name, value }) => (
                  <td key={name} className="p-2">
                    {renderVersionCell(
                      versions[value],
                      versions[value] === "NA" ? "wrong" : "right"
                    )}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function SupportedListContainer() {
  return (
    <div id="tailwind">
      <MethodRequestResponse />
    </div>
  );
}

export default SupportedListContainer;
