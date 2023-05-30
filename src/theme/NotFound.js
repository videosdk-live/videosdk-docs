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
    <Layout
      title={translate({
        id: "theme.NotFound.title",
        message: "Page Not Found",
      })}
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page"
              >
                Page Not Found
              </Translate>
            </h1>
            <p>
              <Translate
                id="theme.NotFound.p1"
                description="The first paragraph of the 404 page"
              >
                We could not find what you were looking for.
              </Translate>
            </p>
            <p>
              <Translate
                id="theme.NotFound.p2"
                description="The 2nd paragraph of the 404 page"
              >
                Please contact the owner of the site that linked you to the
                original URL and let them know their link is broken.
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
