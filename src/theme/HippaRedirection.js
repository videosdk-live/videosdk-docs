import React, { useEffect } from "react";
import { useLocation, useHistory } from "@docusaurus/router";

function HippaRedirection() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    var currentPath = location.pathname;
    if (
      currentPath ===
        "/api-reference/realtime-communication/see-also/hippa-healthcare" ||
      "/docs/realtime-communication/see-also/hippa-healthcare"
    ) {
      history.replace("/");
    }
  }, []);

  return <></>;
}

export default HippaRedirection;
