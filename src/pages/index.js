import React from "react";
import Layout from "@theme/Layout";
import Overview from "../theme/Overview";

export default function Home() {
  return (
    <Layout
      title={`Video SDK Documentation`}
      description="Video SDK Docs, API reference, Tutorials, Embed Video calling SDK in your favorite languages to sample apps for Web, IOS, Android, React Native and Flutter."
    >
      <Overview />
      <main></main>
    </Layout>
  );
}
