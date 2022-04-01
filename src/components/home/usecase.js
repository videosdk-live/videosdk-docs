import React from "react";
import Card from "../cards/card";
const UseCaseBlocks = [
  {
    title: "Real-time One-to-one Classrooms",
    icon: "",
    text: "Industry specific scalable low-code solution",
    link: "/docs/overview/introduction",
  },
  {
    title: "Real-time Group Classrooms",
    icon: "",
    text: "One-to-one and group voice api",
    link: "/docs/overview/introduction",
  },
  {
    title: "Real-time Class Brocasting",
    icon: "",
    text: "Scalable video api with high qulity API",
    link: "/api-reference/v1/realtime-communication/intro",
  },
  {
    title: "Breakout Classrooms",
    icon: "",
    text: "Scalable video api with high qulity API",
    link: "/api-reference/v1/realtime-communication/intro",
  },
  {
    title: "One-to-one Telehealth Consultancy",
    icon: "",
    text: "Ultra low latency with interactive participation.",
    link: "/api-reference/v1/realtime-communication/intro",
  },
  {
    title: "On-demand Telehealth Training",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Real-time Podcast Streaming",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Virtual Events Brocasting",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Hybrid Events Brocasting",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Social One-to-one Video Calls",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Social Group Video Calls",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Social Live Video Broadcast",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
  {
    title: "Social Realtime Messaging",
    icon: "",
    text: "Create unlimited private channels.",
    link: "/docs/tutorials/introduction",
  },
];

const UseCaseOverview = () => (
  <div class="container">
    <h2 class="hero__subtitle">Use Case</h2>
    <div class="row">
      {UseCaseBlocks.map((hero) => (
        <div class="col col--6">
          <Card {...hero} />
        </div>
      ))}
    </div>
  </div>
);

export default UseCaseOverview;
