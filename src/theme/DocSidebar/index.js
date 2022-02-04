/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from "react";
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
import { translate } from "@docusaurus/Translate";
import DocSidebarItems from "@theme/DocSidebarItems";
import styles from "./styles.module.css";

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
  const [sdk, setSDK] = useState([
    "JS-Prebuilt",
    "React",
    "JS-Custom",
    "React-Native",
    "Android",
    "IOS",
    "Flutter",
  ]);
  const [Version, setVersion] = useState([]);

  function routingSDK(e) {
    // setSDK(e.target.value);
    var currentPath = window.location.pathname;
    currentPath = currentPath.replace(
      currentPath.split("/")[1],
      e.target.value
    );
    window.location.replace("http://" + window.location.host + currentPath);
  }

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
        {window.location.pathname.split("/")[1] == "docs" ? (
          <div className="row">
            <select className="dropdownSidebar dropdownSidebarVersion ">
              <option>0.0.x</option>
              <option>0.0.1</option>
            </select>
          </div>
        ) : (
          <div className="row">
            <select
              onChange={routingSDK}
              defaultValue={window.location.pathname.split("/")[1]}
              className="col dropdownSidebar"
            >
              <option value="react">React</option>
              <option value="javascript">JS</option>
              <option value="react-native">React Native</option>
              <option value="android">Android</option>
              <option value="ios">IOS</option>
              <option value="flutter">Flutter</option>
            </select>
            <select className="col dropdownSidebar">
              <option>0.0.x</option>
              <option>0.0.1</option>
            </select>
          </div>
        )}
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
