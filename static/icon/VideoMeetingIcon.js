import * as React from "react";

const VideoMeetingIcon = (props) => (
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
        d="M40.486 7.875a1 1 0 0 0-1-1h-31.5a1 1 0 0 0-1 1v21.293a1 1 0 0 1-.106.447l-4.656 9.313a1 1 0 0 0 .894 1.447h41.235a1 1 0 0 0 .895-1.447l-4.657-9.313a1 1 0 0 1-.105-.447V7.875ZM27.923 35.188a1 1 0 0 1-1 1h-6.375a1 1 0 0 1-1-1v-.094a1 1 0 0 1 1-1h6.375a1 1 0 0 1 1 1v.094Zm8.375-8.375a1 1 0 0 1-1 1h-2.682c-.457 0-.85-.313-1.004-.744a8.25 8.25 0 0 0-2.095-3.212 1.27 1.27 0 0 1-.232-1.504 6.282 6.282 0 1 0-11.099 0 1.27 1.27 0 0 1-.231 1.503 8.251 8.251 0 0 0-2.095 3.213c-.154.43-.547.744-1.005.744h-2.682a1 1 0 0 1-1-1v-14.75a1 1 0 0 1 1-1h23.125a1 1 0 0 1 1 1v14.75Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={9.5}
        y1={7}
        x2={46}
        y2={45.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default VideoMeetingIcon;
