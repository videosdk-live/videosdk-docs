import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Typed from "react-typed";
import { RandomHLine, RandomBlob } from "react-random-shapes";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import SvgHero from "@site/src/svg/Hero";
import SvgCreate from "@site/src/svg/Create";
import SvgCreateBg from "@site/src/svg/CreateBg";
import SvgDevelop from "@site/src/svg/Develop";
import SvgDevelopBg from "@site/src/svg/DevelopBg";
import SvgExplore from "@site/src/svg/Explore";
import SvgExploreBg from "@site/src/svg/ExploreBg";
import SvgArrowRight from "@site/src/svg/ArrowRight";

function Hero() {
  const numLines = 12;
  const rng = Array.from(new Array(numLines), (x, i) => i);
  const start = Math.random() * 360;
  const styles = rng.map((x) => {
    return {
      fill: "transparent",
      stroke: `hsl(${start + (x / numLines) * 360}, 100%, 50%)`,
    };
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <h1 className="hero-title">
              Video API
              <br /> for developers.
            </h1>

            <h2 className="hero-subtitle">
              <Typed
                strings={[">_ Made by developers for developers"]}
                typeSpeed={75}
              ></Typed>
            </h2>

            <div className="boxes">
              <div className="box box-create">
                <SvgCreateBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgCreate color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Overview</h3>
                  <p className="description">
                    Explore about the service and it features.
                  </p>
                  <span className="more">
                    Get Started
                    <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/docs/overview/introduction")}
                  className="link"
                >
                  Read More
                </a>
              </div>

              <div className="box box-develop">
                <SvgDevelopBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">
                    Develop your application using video sdk
                  </p>
                  <span className="more">
                    Code your application <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/docs/tutorials/introduction")}
                  className="link"
                >
                  Read More
                </a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Explore</h3>
                  <p className="description">
                    Explore resources to find best fit for your application.
                  </p>
                  <span className="more">
                    Explore resources <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/docs/resources/overview")}
                  className="link"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col col--5">
            <RandomBlob
              size={600}
              className="svg-blob"
              options={{
                numBlobs: 1,
                style: {
                  stroke: "rgb(236,72,153)",
                  fill: "linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(239,68,68,1) 35%, rgba(245,158,11,1) 100%)",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
