import React from "react";
import RightIcon from "../../static/icon/supportedList/RightIcon";
import WrongWithoutBgIcon from "../../static/icon/supportedList/WrongWithoutBgIcon";
import AndroidSDKIcon from "../../static/icon/supportedList/AndroidSDKIcon";

const SupportABIList = ({}) => {
  const featureList = [
    {
      feature: "armeabi-v7a",
      versions: {
        android_sdk: "yes",
      },
    },
    {
      feature: "arm64-v8a",
      versions: {
        android_sdk: "yes",
      },
    },
    {
      feature: "x86_64",
      versions: {
        android_sdk: "yes",
      },
    },
    {
      feature: "x86",
      versions: {
        android_sdk: "NA",
      },
    },
  ];

  let sdkBrowserList = [
    {
      name: "Android SDK",
      value: "android_sdk",
      Icon: AndroidSDKIcon,
    },
  ];

  const BrowserTableCell = ({ versions, value }) => (
    <td className="p-2">
      <div className="flex flex-col items-center justify-center">
        {versions[value] === "NA" ? (
          <div className="rounded-full bg-red-500 flex items-center p-0.5">
            <WrongWithoutBgIcon />
          </div>
        ) : (
          <div className="rounded-full bg-green-500 flex items-center p-0.5">
            <RightIcon />
          </div>
        )}
      </div>
    </td>
  );

  return (
    <div className="max-w-screen-lg mt-10">
      <table className="min-w-full">
        <thead className="bg-transparent">
          <tr className="bg-transparent">
            <th className="py-1"></th>
            {featureList.map(({ feature }) => (
              <th key={feature} className="px-4 py-2 whitespace-nowrap">
                {feature}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sdkBrowserList.map(({ name, Icon, value }) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

function SupportedABIContainer() {
  return (
    <div id="tailwind">
      <SupportABIList />
    </div>
  );
}

export default SupportedABIContainer;
