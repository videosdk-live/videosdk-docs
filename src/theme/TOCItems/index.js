import React from "react";
import TOCItems from "@theme-original/TOCItems";
import Feedback from "../Feedback";

export default function TOCItemsWrapper(props) {
  return (
    <>
      <TOCItems {...props} />
      <Feedback />
    </>
  );
}
