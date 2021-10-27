import React, { useEffect, useLayoutEffect } from "react";
import Layout from "@theme/Layout";
import HomeOverview from "../components/home/overview";
import HomeHero from "../components/home/hero";
import ProductsOverview from "../components/home/products";
import UseCaseOverview from "../components/home/usecase";
import Hero from "@theme/Hero";
import Demos from "@theme/Demos";
import Overview from "../theme/Overview";

export default function Home() {
  return (
    <Layout
      title={` Video SDK Documentation`}
      description="Video SDK Docs, API reference, Tutorials, Embed Video calling SDK in your favorite languages to sample apps for Web, IOS, Android, React Native and Flutter."
    >
      {/* <Hero />
      <Demos /> */}
      <Overview />
      {/* <HomeHero /> */}
      <main>
        {/* <HomepageFeatures /> */}
        {/* <HomeOverview />
        <ProductsOverview /> */}
        {/* <UseCaseOverview /> */}
      </main>
    </Layout>
  );
}
