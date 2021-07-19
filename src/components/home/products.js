import React from "react";
import Card from "../cards/card";
const ProductBlocks = [
  {
    title: "Realtime Communication Prebuilt SDK",
    icon: "",
    text: "Industry specific scalable low-code solution",
    link: "/docs/overview/real-time-communication/introduction",
  },
  {
    title: "Realtime Communication SDK",
    icon: "",
    text: "One-to-one and group voice api",
    link: "/docs/overview/real-time-communication/introduction",
  },
  {
    title: "Live Streaming API",
    icon: "",
    text: "Scalable video api with high qulity API",
    link: "/docs/overview/live-streaming/introduction",
  },
  {
    title: "Video On Demand API",
    icon: "",
    text: "Scalable video api with high qulity API",
    link: "/docs/overview/video-on-demand/introduction",
  },
];

const ProductsOverview = () => (
  <div class="container">
    <h2 class="hero__subtitle">Products</h2>
    <div class="row">
      {ProductBlocks.map((hero) => (
        <div class="col col--4">
          <Card {...hero} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductsOverview;
