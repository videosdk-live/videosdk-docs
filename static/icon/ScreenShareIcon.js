import * as React from "react";

const ScreenShareIcon = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={48}
      height={48}
    >
      <path fill="#C4C4C4" d="M0 0h48v48H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.473 39.75h35.054a2.73 2.73 0 0 0 2.723-2.72V16.75H3.75v-2h40.5v-3.03A2.73 2.73 0 0 0 41.527 9H6.473a2.73 2.73 0 0 0-2.723 2.72v25.31a2.73 2.73 0 0 0 2.723 2.72ZM9 12.375a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm3.75 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm2.625 1.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm14.834 13.018-4.067 4.067a.492.492 0 0 1-.555.092c-.185-.092-.323-.277-.323-.462v-1.432c-2.727.184-5.038 2.033-5.87 4.621a.5.5 0 0 1-.647.324.558.558 0 0 1-.323-.324 8.414 8.414 0 0 1-.37-2.403c0-4.067 3.189-7.44 7.256-7.764v-1.202c0-.23.139-.416.323-.462a.491.491 0 0 1 .555.093l4.067 4.066a.525.525 0 0 1 .139.37c0 .185-.047.324-.185.416Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={4}
        y1={9}
        x2={52.5}
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default ScreenShareIcon;
