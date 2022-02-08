import React, { useEffect, useState } from "react";
import react_versions from '../../react_docs_versions.json';
import android_versions from '../../android_docs_versions.json';
import react_native_versions from '../../react_native_docs_versions.json';
import flutter_versions from '../../flutter_docs_versions.json';
import ios_versions from '../../ios_docs_versions.json';
import javascript_versions from '../../javascript_docs_versions.json';
import prebuilt_versions from '../../prebuilt_docs_versions.json';
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function SidebarDropdowns() {

const [sdk, setSDK] = useState();
  const [version, setVersion] = useState("");
  const [versionList, setVersionList] = useState([])

  function routingSDK(e) {
    setSDK(e.target.value);
    window.location.assign("http://" + window.location.host + "/"+e.target.value+"/guide/video-and-audio-calling-api-sdk/getting-started");
  }

  function routeVersion(e) {
    var currentPath = window.location.pathname;
    var currentVersion = currentPath.split("/")[2];
    
    if (currentVersion.match('([0-9])+\.([0-9])+\.([0-9]|[a-z])+')){
      currentPath = currentPath.replace(
        currentPath.split("/")[2],
        e.target.value == versionList[0] ? "": e.target.value
      );
      currentPath = currentPath.replace('//', "/");
    }
    else {
      currentPath = currentPath.replace(
        currentPath.split("/")[1],
        (sdk+"/"+e.target.value)
      )
    }
    console.log()
    window.location.replace("http://" + window.location.host + currentPath);
  }

  useEffect(() => {
    var currentSdk = window.location.pathname.split('/')[1];
    var currentVersion = window.location.pathname.split("/")[2];
    if (currentVersion.match('([0-9])+\.([0-9])+\.([0-9]|[a-z])+'))
      setVersion(currentVersion)
    else {
      setVersion(versionList[0])
    }
    if (currentSdk == "react") {
      setVersionList(react_versions)
    } else if (currentSdk == "javascript") {
      setVersionList(javascript_versions)
    }
     else if (currentSdk == "react-native") {
      
      setVersionList(react_native_versions)
    }
     else if (currentSdk == "android") {
      
      setVersionList(android_versions)
    }
     else if (currentSdk == "ios") {
      
      setVersionList(ios_versions)
    }
     else if (currentSdk == "flutter") {
      
      setVersionList(flutter_versions)
    } else if (currentSdk == "prebuilt") {
      
      setVersionList(prebuilt_versions)
    }
    setSDK(currentSdk);
  },[])

    return (
        <BrowserOnly>{() =>
            <div className="row">
                {sdk != "docs" && sdk != "prebuilt" ? (
                    <select
                        onChange={routingSDK}
                        defaultValue={sdk}
                        className="col dropdown--hoverable"
                    >
                        <option value="react">React</option>
                        <option value="javascript">JS</option>
                        <option value="react-native">React Native</option>
                        <option value="android">Android</option>
                        <option value="ios">IOS</option>
                        <option value="flutter">Flutter</option>
                    </select>
                ) : null}
                {sdk != "docs" ? (<select className="col dropdownSidebar" value={version} onChange={routeVersion}>
                    {versionList.map((v) => {
                        return <option value={v}>{v}</option>
                    })}
                </select>) : null}
            </div>}
        </BrowserOnly>
    );
}