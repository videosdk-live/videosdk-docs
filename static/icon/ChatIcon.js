import * as React from "react";

const ChatIcon = (props) => (
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
        d="M24 6a17.95 17.95 0 0 1 12.723 5.274 17.998 17.998 0 0 1-3.438 28.15 17.925 17.925 0 0 1-17.691.468h-.056c-.539-.216-.972-.594-1.476-.846a2.571 2.571 0 0 0-1.762-.088 39.584 39.584 0 0 1-4.07 1.168c-.72.018-.936-.414-.936-1.116a33.663 33.663 0 0 1 1.262-4.194 2.22 2.22 0 0 0-.162-1.783l-.36-.7A17.693 17.693 0 0 1 6 24.109v-.11c0-4.77 1.888-9.36 5.272-12.725A17.984 17.984 0 0 1 23.999 6Zm8.295 15.713a2.307 2.307 0 0 0-2.302 2.304 2.318 2.318 0 0 0 2.302 2.304 2.308 2.308 0 0 0 2.304-2.304 2.297 2.297 0 0 0-2.304-2.304Zm-8.296 0a2.298 2.298 0 0 0-2.306 2.304A2.31 2.31 0 0 0 24 26.321a2.307 2.307 0 0 0 2.302-2.304A2.295 2.295 0 0 0 24 21.713Zm-8.3 0a2.297 2.297 0 0 0-2.303 2.304 2.308 2.308 0 0 0 2.304 2.304 2.322 2.322 0 0 0 2.305-2.304 2.31 2.31 0 0 0-2.305-2.304Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={6}
        y1={6}
        x2={42}
        y2={47}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default ChatIcon;
