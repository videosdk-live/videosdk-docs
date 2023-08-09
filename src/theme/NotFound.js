/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import react_versions from "../../react_docs_versions.json";
import android_versions from "../../android_docs_versions.json";
import react_native_versions from "../../react_native_docs_versions.json";
import flutter_versions from "../../flutter_docs_versions.json";
import ios_versions from "../../ios_docs_versions.json";
import javascript_versions from "../../javascript_docs_versions.json";
import prebuilt_versions from "../../prebuilt_docs_versions.json";
import api_reference_versions from "../../api_reference_docs_versions.json";

import { useLocation, useHistory } from "@docusaurus/router";

function NotFound() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    var currentPath = location.pathname;
    const docs = [
      "api-reference",
      "prebuilt",
      "flutter",
      "react",
      "android",
      "javascript",
      "ios",
      "react-native",
    ];
    let isDocs = false;
    var sdk = currentPath.split("/")[1];
    var version = currentPath.split("/")[2];

    //check if it is versioned doc
    docs.forEach((doc) => {
      if (sdk == doc) {
        isDocs = true;
      }
    });

    //update versions list
    var versions = [];
    if (sdk == "react") {
      versions = react_versions;
    } else if (sdk == "javascript") {
      versions = javascript_versions;
    } else if (sdk == "react-native") {
      versions = react_native_versions;
    } else if (sdk == "android") {
      versions = android_versions;
    } else if (sdk == "ios") {
      versions = ios_versions;
    } else if (sdk == "flutter") {
      versions = flutter_versions;
    } else if (sdk == "prebuilt") {
      versions = prebuilt_versions;
    } else if (sdk == "api-reference") {
      versions = api_reference_versions;
    }

    //check version is valid
    let isValidVersion = false;
    versions.forEach((v) => {
      if (version == v) {
        isValidVersion = true;
      }
    });

    //if versioned doc
    if (isDocs) {
      //start new path with sdk followed by valid version
      var newPath =
        "/" +
        currentPath.split("/")[1] +
        ((version.match("([0-9])+.([0-9])+.([0-9]|[a-z])+") ||
          version.match("(v[0-9])+")) &&
        version != versions[0] &&
        isValidVersion
          ? "/" + currentPath.split("/")[2] + "/"
          : "/");

      //update start page path for the sdk
      newPath =
        newPath +
        (sdk == "api-reference"
          ? "realtime-communication/intro"
          : currentPath.split("/")[
              version.match("([0-9])+.([0-9])+.([0-9]|[a-z])+") ||
              version.match("(v[0-9])+")
                ? 3
                : 2
            ] == "guide"
          ? sdk == "prebuilt"
            ? "guide/prebuilt-video-and-audio-calling/getting-started"
            : sdk == "ios"
            ? "guide/video-and-audio-calling-api-sdk/getting-started"
            : "guide/video-and-audio-calling-api-sdk/concept-and-architecture"
          : "api/sdk-reference/setup");

      history.replace(newPath);
    }
  }, []);

  return (
    <main style={{ paddingTop: 8, paddingBottom: 8 }} className="container">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={
              "https://cdn.videosdk.live/website-resources/error-pages/404-error.png"
            }
          />
          <div
            style={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 24,
                color: "white",
                fontWeight: 600,
                paddingBottom: 0,
                textAlign: "center",
              }}
            >
              <Translate
                id="theme.NotFound.p1"
                description="The first paragraph of the 404 page"
              >
                Look like you’re lost in space
              </Translate>
            </p>

            <a href={"https://docs.videosdk.live/"}>
              <button
                style={{
                  backgroundColor: "#5977FB",
                  border: 0,
                  borderRadius: 4,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 16,
                  paddingBottom: 16,
                  fontSize: 16,
                  color: "white",
                  marginTop: 18,
                  cursor: "pointer",
                }}
                className="bg-purple-350 mt-6 lg:mt-8 rounded px-4 py-2.5 text-base lg:px-6 lg:py-4 lg:text-xl text-white"
              >
                Go to Homepage
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
