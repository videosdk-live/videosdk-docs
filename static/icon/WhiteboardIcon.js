import * as React from "react";

const WhiteboardIcon = (props) => (
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
        d="M44.25 37.75a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2v-27.5a2 2 0 0 1 2-2h36.5a2 2 0 0 1 2 2v27.5ZM13.194 16.466c.126.304.31.58.543.813l2.606 2.606 3.542-3.541-2.606-2.607a2.507 2.507 0 0 0-3.542 0 2.505 2.505 0 0 0-.543 2.73Zm5.234 5.504 10.12 10.12 5.296 1.754-1.754-5.296-10.12-10.12-3.542 3.542Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={4}
        y1={8}
        x2={44}
        y2={49}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default WhiteboardIcon;
