import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <mask
        id="mask0_10_524"
        style={{ maskType: "alpha" }}
        width="32"
        height="32"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#C4C4C4" d="M0 0H32V32H0z"></path>
      </mask>
      <g clipPath="url(#clip0_10_524)" mask="url(#mask0_10_524)">
        <path
          fill="#42A5F5"
          fillOpacity="0.8"
          d="M9.111 21.644L4.8 17.332 18.8 3.333h8.623L9.111 21.644zm18.31-5.392H18.8l-3.23 3.23 4.313 4.311 7.54-7.541z"
        ></path>
        <path
          fill="#0D47A1"
          d="M15.57 28.104l3.23 3.23h8.623l-7.54-7.54-4.313 4.31z"
        ></path>
        <path
          fill="#42A5F5"
          d="M11.268 23.795l4.305-4.306 4.305 4.305-4.305 4.306-4.305-4.305z"
        ></path>
        <path
          fill="url(#paint0_linear_10_524)"
          d="M15.573 28.1l4.305-4.305.601.601-4.305 4.305-.6-.6z"
        ></path>
        <path
          fill="url(#paint1_linear_10_524)"
          d="M15.57 28.104l6.397-2.21-2.086-2.1-4.311 4.31z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_10_524"
          x1="17.675"
          x2="18.294"
          y1="25.926"
          y2="26.545"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopOpacity="0.15"></stop>
          <stop offset="0.85" stopColor="#616161" stopOpacity="0.01"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_10_524"
          x1="15.909"
          x2="21.844"
          y1="26.138"
          y2="26.138"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.2" stopOpacity="0.55"></stop>
          <stop offset="0.85" stopColor="#616161" stopOpacity="0.01"></stop>
        </linearGradient>
        <clipPath id="clip0_10_524">
          <path
            fill="#fff"
            d="M0 0H28V28H0z"
            transform="translate(2.111 3.333)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
