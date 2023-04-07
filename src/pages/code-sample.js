import React, { useEffect, useLayoutEffect } from "react";
import Layout from "@theme/Layout";
import CodeSample from "../theme/CodeSample";

export default function Home() {
  return (
    <Layout
      title={` Video SDK Documentation`}
      description="Video SDK Docs, API reference, Tutorials, Embed Video calling SDK in your favorite languages to sample apps for Web, IOS, Android, React Native and Flutter."
    >
      <main>
        <CodeSample />
      </main>
    </Layout>
  );
}
