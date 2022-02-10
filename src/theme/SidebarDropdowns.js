import React, { useEffect, useState } from "react";
import react_versions from "../../react_docs_versions.json";
import android_versions from "../../android_docs_versions.json";
import react_native_versions from "../../react_native_docs_versions.json";
import flutter_versions from "../../flutter_docs_versions.json";
import ios_versions from "../../ios_docs_versions.json";
import javascript_versions from "../../javascript_docs_versions.json";
import prebuilt_versions from "../../prebuilt_docs_versions.json";
import { useLocation, useHistory } from "@docusaurus/router";
import Link from "@docusaurus/Link";

export default function SidebarDropdowns() {
  const [sdk, setSDK] = useState();
  const [version, setVersion] = useState("");
  const [versionList, setVersionList] = useState([]);
  const [viewType, setViewType] = useState("");
  const location = useLocation();

  function getSdkRoutingPath(value) {
    var currentPath = location.pathname;
    return "/" +
      value +
      (currentPath.split("/")[version == versionList[0] ? 2 : 3] == "guide" ?
        "/guide/video-and-audio-calling-api-sdk/getting-started" : "/api/sdk-reference/setup")
  }

  function getRouteVersion(value) {
    var currentPath = location.pathname;
    if (version == value) {
      return location.pathname
    }
    if (value == versionList[0]) {
      currentPath = currentPath.replace(currentPath.split("/")[2], "");
      currentPath = currentPath.replace("//", "/");
    } else {
      currentPath = currentPath.replace(
        currentPath.split("/")[1],
        sdk + "/" + value
      );
    }
    return currentPath;
  }

  useEffect(() => {
    var currentSdk = location.pathname.split("/")[1];
    var currentVersion = location.pathname.split("/")[2];
    var versions = [];
    if (currentSdk == "react") {
      versions = react_versions;
    } else if (currentSdk == "javascript") {
      versions = javascript_versions;
    } else if (currentSdk == "react-native") {
      versions = react_native_versions;
    } else if (currentSdk == "android") {
      versions = android_versions;
    } else if (currentSdk == "ios") {
      versions = ios_versions;
    } else if (currentSdk == "flutter") {
      versions = flutter_versions;
    } else if (currentSdk == "prebuilt") {
      versions = prebuilt_versions;
    }

    if (currentVersion.match("([0-9])+.([0-9])+.([0-9]|[a-z])+")) {
      setVersion(currentVersion);
      setViewType(location.pathname.split("/")[3])
    } else {
      setVersion(versions[0]);
      setViewType(location.pathname.split("/")[2])
    }
    setVersionList(versions);
    setSDK(currentSdk);
  }, []);

  const sdkList = [
    {
      id:"react",
      value: "React",
    },
    {
      id:"react-native",
      value: "React Native",
    },
    {
      id:"javascript",
      value: "Javascript",
    },
    {
      id:"android",
      value: "Android",
    },
    {
      id:"ios",
      value: "iOS",
    },
    {
      id:"flutter",
      value: "Flutter",
    },
    {
      id:"prebuilt",
      value: "Prebuilt",
    },
  ]

  function getSDKName(value) {
    var name = sdkList.filter((i) => { return i.id == value });
    return name;
  }

  return (
    <div className="row dropdown_menu">
      {(sdk != "docs" && sdk != "prebuilt") || viewType == "api" ? (
        <div class="col dropdown dropdown--hoverable dropdown--left">
        <a class="navbar__link">
          {getSDKName(sdk)[0]?.value}</a>
        <ul class="dropdown__menu">
          {sdkList.map((e, i) => {
                    return (e.id!="prebuilt"|| viewType == "api"?   <li>
                      <Link class={ e.id==sdk ? "dropdown__link dropdown__link--active" : "dropdown__link"} href={getSdkRoutingPath(e.id)}><img height = "16px" width = "16px"src = "/img/icons/libraries/react-icon.svg"/>{ e.value}</Link>
                    </li>:null)
                  })}
        </ul>
      </div>
      ) : null}
      {sdk != "docs" ? (
        <div class={(viewType == "guide" && sdk == "prebuilt") ? "col dropdown dropdown--hoverable dropdown--left" : "dropdown dropdown--hoverable dropdown--right"}>
        <a class="navbar__link">
          {version}</a>
          <ul class="dropdown__menu">
            {versionList.map((v) => {
            return <li>
                      <Link class={ v==version ? "dropdown__link dropdown__link--active" : "dropdown__link"} href={getRouteVersion(v)}>{ v}</Link>
                    </li>;
          })}
        </ul>
      </div>
        
      ) : null}
    </div>
  );
}
