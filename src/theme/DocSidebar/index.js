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
    console.log("pathname : ", window.location.pathname);
    var currentPath = window.location.pathname;
    console.log(e.target.value);
    currentPath = currentPath.replace(
      currentPath.split("/")[1],
      e.target.value
    );
    console.log("new Path : ", currentPath);
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
        {/* <div className="row">
          <div className="col navbar__item dropdown dropdown--hoverable">
            <a aria-current="page" class="navbar__link">
              Lateset Version Of SDK
            </a>
            <ul class="dropdown__menu">
              <li>
                <a
                  aria-current="page"
                  class="dropdown__link dropdown__link--active"
                >
                  0.0.x
                </a>
              </li>
              <li>
                <a class="dropdown__link">0.1.x</a>
              </li>
            </ul>
          </div>
          <div className="col navbar__item dropdown dropdown--hoverable">
            <a
              aria-current="page"
              class="navbar__link"
              href="/react/installation"
            >
              Lateset Version Of SDK
            </a>
            <ul class="dropdown__menu">
              <li>
                <a
                  aria-current="page"
                  class="dropdown__link dropdown__link--active"
                  href="/react/installation"
                >
                  0.0.x
                </a>
              </li>
              <li>
                <a class="dropdown__link" href="/react/0.19.x/installation">
                  0.1.x
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="row">
          <select onChange={routingSDK} className="col dropdownSidebar">
            <option>React</option>
            <option>JS</option>
            <option>React Native</option>
            <option>Android</option>
            <option>IOS</option>
            <option>Flutter</option>
          </select>
          <select className="col dropdownSidebar">
            <option>0.0.x</option>
            <option>0.0.1</option>
          </select>
        </div>
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
