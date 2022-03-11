import React from "react";
import Card from "../cards/card";
const HeroBlocks = [
  {
    title: "Overview",
    icon: "",
    text: "Get to know about video sdk",
    link: "/docs/overview/introduction",
  },
  {
    title: "API Reference",
    icon: "",
    text: "Get to know about video sdk",
    link: "/docs/api-reference/realtime-communication/intro",
  },
  {
    title: "Tutorials",
    icon: "",
    text: "Get to know about video sdk",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Code Samples",
    icon: "",
    text: "Get to know about video sdk",
    link: "/docs/resources/overview",
  },
];

const HomeOverview = () => (
  <div class="container">
    <h2 class="hero__subtitle">Overview</h2>
    <div class="row">
      {HeroBlocks.map((hero) => (
        <div class="col col--3">
          <Card {...hero} />
        </div>
      ))}
    </div>
  </div>
);

export default HomeOverview;
