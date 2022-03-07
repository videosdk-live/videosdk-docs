import * as React from "react";

const FlutterIcon = (props) => (
  <svg
    width={32}
    height={32}
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
      width={32}
      height={32}
    >
      <path fill="#C4C4C4" d="M0 0h32v32H0z" />
    </mask>
    <g clipPath="url(#b)" mask="url(#a)">
      <path
        d="M9.111 21.644 4.8 17.332 18.8 3.333h8.623L9.111 21.644Zm18.31-5.392H18.8l-3.23 3.23 4.313 4.311 7.54-7.541Z"
        fill="#42A5F5"
        fillOpacity={0.8}
      />
      <path
        d="m15.57 28.104 3.23 3.23h8.623l-7.54-7.54-4.313 4.31Z"
        fill="#0D47A1"
      />
      <path
        d="m11.268 23.795 4.305-4.306 4.305 4.305-4.305 4.306-4.305-4.305Z"
        fill="#42A5F5"
      />
      <path
        d="m15.573 28.1 4.305-4.305.601.601-4.305 4.305-.6-.6Z"
        fill="url(#c)"
      />
      <path d="m15.57 28.104 6.397-2.21-2.086-2.1-4.311 4.31Z" fill="url(#d)" />
    </g>
    <defs>
      <linearGradient
        id="c"
        x1={17.675}
        y1={25.926}
        x2={18.294}
        y2={26.545}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopOpacity={0.15} />
        <stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={15.909}
        y1={26.138}
        x2={21.844}
        y2={26.138}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopOpacity={0.55} />
        <stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
      </linearGradient>
      <clipPath id="b">
        <path
          fill="#fff"
          transform="translate(2.111 3.333)"
          d="M0 0h28v28H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default FlutterIcon;
