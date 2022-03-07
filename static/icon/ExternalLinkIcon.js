import * as React from "react";

const ExternalLinkIcon = (props) => (
  <svg
    width={21}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M16.5 11v6a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m4-3h6m0 0v6m0-6-11 11"
        stroke="#4C4F54"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ExternalLinkIcon;
