import algoliasearch from "algoliasearch/lite";
import Layout from "@theme/Layout";
import React from "react";
import {
  Hits,
  Pagination,
  SearchBox,
  InstantSearch,
} from "react-instantsearch";
import config from "../../config.json";

function Hit({ hit }) {
  const parsedUrl = new URL(hit.url);
  const pathnameSegments = parsedUrl.pathname.split("/");
  const language = pathnameSegments[1];

  return hit ? (
    <div style={{ color: "white" }}>
      <a href={hit.url}>{`${hit.hierarchy.lvl1} - ${
        language[0].toUpperCase() + language.slice(1)
      }`}</a>
    </div>
  ) : (
    <div style={{ color: "white" }}>No results found !!!</div>
  );
}
const { APPLICATION_ID, API_KEY } = config;
const searchClient = algoliasearch(APPLICATION_ID, API_KEY);

export default function search() {
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("q");

  return (
    <Layout
      title={` Video SDK Documentation`}
      description="Video SDK Docs, API reference, Tutorials, Embed Video calling SDK in your favorite languages to sample apps for Web, IOS, Android, React Native and Flutter."
    >
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css"
      />
      <main>
        <div id="tailwind">
          <InstantSearch
            searchClient={searchClient}
            indexName="VIDEO_SDK"
            routing={true}
            insights={true}
            initialUiState={{
              VIDEO_SDK: {
                query: paramValue || "",
              },
            }}
          >
            <div className=" px-20 py-14">
              <div className="w-full">
                <SearchBox placeholder="Type your search here" autoFocus />

                <div className="mt-4">
                  <Hits hitComponent={Hit} />
                  <Pagination className="Pagination" />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </main>
    </Layout>
  );
}
