/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import {
  useThemeConfig,
  useAnnouncementBar,
  MobileSecondaryMenuFiller,
  ThemeClassNames,
  useScrollPosition,
  useWindowSize,
} from "@docusaurus/theme-common";
import Logo from "@theme/Logo";
import IconArrow from "@theme/IconArrow";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { translate } from "@docusaurus/Translate";
import DocSidebarItems from "@theme/DocSidebarItems";
import styles from "./styles.module.css";
import react_versions from '../../../react_docs_versions.json';
import android_versions from '../../../android_docs_versions.json';
import react_native_versions from '../../../react_native_docs_versions.json';
import flutter_versions from '../../../flutter_docs_versions.json';
import ios_versions from '../../../ios_docs_versions.json';
import javascript_versions from '../../../javascript_docs_versions.json';
import prebuilt_versions from '../../../prebuilt_docs_versions.json';

function useShowAnnouncementBar() {
  const { isActive } = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(isActive);
  useScrollPosition(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}

function HideableSidebarButton({ onClick }) {
  return (
    <button
      type="button"
      title={translate({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar",
      })}
      className={clsx(
        "button button--secondary button--outline",
        styles.collapseSidebarButton
      )}
      onClick={onClick}
    >
      <IconArrow className={styles.collapseSidebarButtonIcon} />
    </button>
  );
}

function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  const {
    navbar: { hideOnScroll },
    hideableSidebar,
  } = useThemeConfig();
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
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebarWithHideableNavbar]: hideOnScroll,
        [styles.sidebarHidden]: isHidden,
      })}
    >
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}

      <nav
        className={clsx("menu thin-scrollbar", styles.menu, {
          [styles.menuWithAnnouncementBar]: showAnnouncementBar,
        })}
      >
        <BrowserOnly>{()=>
        <div className="row">
        {sdk != "docs" && sdk !="prebuilt" ? (
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
          {sdk != "docs"? (<select className="col dropdownSidebar" value={version}onChange={routeVersion}>
                {versionList.map((v) => {
                return <option value={v}>{v}</option>
              })}
            </select>):null}
          </div>}
          </BrowserOnly>
        <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
          <DocSidebarItems items={sidebar} activePath={path} level={1} />
        </ul>
      </nav>
      {hideableSidebar && <HideableSidebarButton onClick={onCollapse} />}
    </div>
  );
} // eslint-disable-next-line react/function-component-definition

const DocSidebarMobileSecondaryMenu = ({ toggleSidebar, sidebar, path }) => (
  <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
    <DocSidebarItems
      items={sidebar}
      activePath={path}
      onItemClick={(item) => {
        // Mobile sidebar should only be closed if the category has a link
        if (item.type === "category" && item.href) {
          toggleSidebar();
        }

        if (item.type === "link") {
          toggleSidebar();
        }
      }}
      level={1}
    />
  </ul>
);

function DocSidebarMobile(props) {
  return (
    <MobileSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

const DocSidebarDesktopMemo = React.memo(DocSidebarDesktop);
const DocSidebarMobileMemo = React.memo(DocSidebarMobile);
export default function DocSidebar(props) {
  const windowSize = useWindowSize(); // Desktop sidebar visible on hydration: need SSR rendering

  const shouldRenderSidebarDesktop =
    windowSize === "desktop" || windowSize === "ssr"; // Mobile sidebar not visible on hydration: can avoid SSR rendering

  const shouldRenderSidebarMobile = windowSize === "mobile";
  return (
    <>
      {shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />}
      {shouldRenderSidebarMobile && <DocSidebarMobileMemo {...props} />}
    </>
  );
}
