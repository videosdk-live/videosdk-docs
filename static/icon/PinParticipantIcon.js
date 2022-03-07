import * as React from "react";

const PinParticipantIcon = (props) => (
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
      x={3}
      y={4}
      width={42}
      height={42}
    >
      <path fill="#C4C4C4" d="M3 4h42v42H3z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M30.928 7.5H18.007c-1.256 0-2.273 1.051-2.273 2.35 0 .617.24 1.236.658 1.668.419.433 1.017.68 1.615.68h.419v11.685l-3.051 3.77c-.12.186-.18.433-.06.68.12.186.3.372.539.372H33.02c.18 0 .3-.062.42-.186.059-.062.059-.123.119-.185.12-.248.06-.495-.06-.68l-2.99-3.71V12.26h.418c.658 0 1.196-.247 1.615-.68.419-.432.658-.989.658-1.669 0-1.298-1.017-2.41-2.273-2.41Zm-7.059 33.63c.06.248.3.433.598.495.18 0 .3-.062.42-.185.059-.062.119-.186.179-.31l2.811-11.189h-6.76l2.752 11.19Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={15}
        y1={8}
        x2={34}
        y2={48.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default PinParticipantIcon;
