import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Realtime Communication SDK",
    link: "/docs/api-reference/realtime-communication/intro",
    description: (
      <>
        Realtime communication SDK provides seamless support to integrate
        realtime audio, video chat in your app.
      </>
    ),
  },
  {
    title: "Live Streming SDK",
    link: "/docs/live-streaming/intro",
    description: (
      <>
        Our live streaming SDK can be helpful to scale your custom live
        streaming solution with just couple of lines of code.
      </>
    ),
  },
  {
    title: "Video On Demand",
    link: "/docs/video-on-demand/intro",
    description: (
      <>
        Video On Demand SDK/API provides end-to-end media workflow with media
        storage, encoding and streaming.
      </>
    ),
  },
];

function Feature({ link, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
