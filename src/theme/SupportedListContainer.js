import React from "react";
import ChromeIcon from "../../static/icon/supportedList/ChromeIcon";
import EdgeIcon from "../../static/icon/supportedList/EdgeIcon";
import FirefoxIcon from "../../static/icon/supportedList/FirefoxIcon";
import OperaIcon from "../../static/icon/supportedList/OperaIcon";
import SafariIcon from "../../static/icon/supportedList/SafariIcon";
import SamsungInternetIcon from "../../static/icon/supportedList/SamsungInternetIcon";
import DesktopIcon from "../../static/icon/supportedList/DesktopIcon";
import MobileIcon from "../../static/icon/supportedList/MobileIcon";
import AndroidSDKIcon from "../../static/icon/supportedList/AndroidSDKIcon";
import IOSSDKIcon from "../../static/icon/supportedList/IOSSDKIcon";
import RightIcon from "../../static/icon/supportedList/RightIcon";
import WrongIcon from "../../static/icon/supportedList/WrongIcon";

const SupportList = ({
  isSDKListInclude,
  renderOnlySDKList,
  isAndroidSDKInclude = true,
  isiOSSDKInclude = true,
  isScreenShareFeatureInclude = true,
}) => {
  const featureList = [
    {
      feature: "Audio",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "78",
        opera: "18",
        safari: "13.1",
        chrome_android: "78",
        firefox_android: "78",
        opera_android: "73",
        safari_ios: "13.1",
        samsung_internet: "4",
        android_sdk: "5",
        ios_sdk: "11",
      },
    },
    {
      feature: "Video",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "78",
        opera: "18",
        safari: "13.1",
        chrome_android: "78",
        firefox_android: "78",
        opera_android: "73",
        safari_ios: "13.1",
        samsung_internet: "4",
        android_sdk: "5",
        ios_sdk: "11",
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
        android_sdk: "8",
        ios_sdk: "NA",
      },
    },
  ];

  if (isScreenShareFeatureInclude) {
    featureList.splice(2, 0, {
      feature: "Screen Sharing",
      versions: {
        chrome: "78",
        edge: "83",
        firefox: "NA",
        opera: "59",
        safari: "13.1",
        chrome_android: "NA",
        firefox_android: "NA",
        opera_android: "NA",
        safari_ios: "NA",
        samsung_internet: "NA",
        android_sdk: "5",
        ios_sdk: "11",
      },
    });
  }

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
    ],
  };

  if (isSDKListInclude) {
    browserLists.mobile.push(
      { name: "Android SDK", value: "android_sdk", Icon: AndroidSDKIcon },
      { name: "iOS SDK", value: "ios_sdk", Icon: IOSSDKIcon }
    );
  }

  let sdkBrowserList = [];

  if (isAndroidSDKInclude) {
    sdkBrowserList.push({
      name: "Android SDK",
      value: "android_sdk",
      Icon: AndroidSDKIcon,
    });
  }

  if (isiOSSDKInclude) {
    sdkBrowserList.push({
      name: "iOS SDK",
      value: "ios_sdk",
      Icon: IOSSDKIcon,
    });
  }

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

  const BrowserTableCell = ({ versions, value }) => (
    <td className="p-2">
      <div className="flex flex-col items-center justify-center">
        {versions[value] === "NA" ? <WrongIcon /> : <RightIcon />}
        <span
          className={`inline-flex mt-2 m-0 p-0 text-base text-center font-semibold text-white ${
            versions[value] === "NA" ? "text-red-500" : "text-green-550"
          }`}
        >
          {versions[value]}
        </span>
      </div>
    </td>
  );

  const BrowserTableRow = ({ feature, versions, browserList }) => (
    <tr key={feature} className="bg-transparent">
      <td className="px-4 py-2 whitespace-nowrap">{feature}</td>
      {browserList.map(({ name, value, Icon }) => (
        <BrowserTableCell key={name} versions={versions} value={value} />
      ))}
    </tr>
  );

  return (
    <div className="max-w-screen-lg mt-10">
      <table className="min-w-full">
        <thead className="bg-transparent">
          <tr>
            <th className="py-1"></th>

            {renderOnlySDKList ? (
              featureList.map(({ feature }) => (
                <th key={feature} className="px-4 py-2 whitespace-nowrap">
                  {feature}
                </th>
              ))
            ) : (
              <>
                <th colSpan={browserLists.desktop.length} className="py-1">
                  <DesktopIcon />
                </th>
                <th colSpan={browserLists.mobile.length} className="py-1">
                  <MobileIcon />
                </th>
              </>
            )}
          </tr>

          {!renderOnlySDKList && (
            <tr className="bg-transparent">
              <th></th>
              {[...browserLists.desktop, ...browserLists.mobile].map(
                ({ name, Icon }) => (
                  <BrowserCell key={name} name={name} Icon={Icon} />
                )
              )}
            </tr>
          )}
        </thead>

        <tbody>
          {renderOnlySDKList
            ? sdkBrowserList.map(({ name, value, Icon }) => (
                <tr key={name} className="bg-transparent">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex flex-col items-center justify-center">
                      {<Icon />}
                      <span
                        className={`inline-flex mt-2 m-0 p-0 text-base text-center font-semibold text-white `}
                      >
                        {name}
                      </span>
                    </div>
                  </td>
                  {featureList.map(({ versions }) => (
                    <BrowserTableCell
                      key={name}
                      versions={versions}
                      value={value}
                    />
                  ))}
                </tr>
              ))
            : featureList.map(({ feature, versions }) => (
                <BrowserTableRow
                  key={feature}
                  feature={feature}
                  versions={versions}
                  browserList={
                    renderOnlySDKList
                      ? sdkBrowserList
                      : [...browserLists.desktop, ...browserLists.mobile]
                  }
                />
              ))}
        </tbody>
      </table>
    </div>
  );
};

function SupportedListContainer({
  isSDKListInclude,
  renderOnlySDKList,
  isAndroidSDKInclude,
  isiOSSDKInclude,
  isScreenShareFeatureInclude,
}) {
  return (
    <div id="tailwind">
      <SupportList
        isSDKListInclude={isSDKListInclude}
        renderOnlySDKList={renderOnlySDKList}
        isAndroidSDKInclude={isAndroidSDKInclude}
        isiOSSDKInclude={isiOSSDKInclude}
        isScreenShareFeatureInclude={isScreenShareFeatureInclude}
      />
    </div>
  );
}

export default SupportedListContainer;
