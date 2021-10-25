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
      title={`Live Streaming SDK/API | Real time Communication SDK`}
      description="Our live streaming API gives you promising control over your live streaming experience. You need just 10 minutes to integrate our video streaming API."
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
