import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
function HomeHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}></div>
        </div>
      </header>
    </>
  );
}

export default HomeHero;
