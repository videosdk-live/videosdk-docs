import React from "react";

function DesktopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_2_87)">
        <mask
          id="mask0_2_87"
          style={{ maskType: "luminance" }}
          width="18"
          height="14"
          x="1"
          y="2"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M17.118 2H2.451c-.579 0-1.048.47-1.048 1.048v11.524c0 .578.47 1.047 1.048 1.047h14.667c.579 0 1.048-.469 1.048-1.047V3.048c0-.579-.47-1.048-1.048-1.048z"
          ></path>
        </mask>
        <g mask="url(#mask0_2_87)">
          <path
            stroke="#fff"
            strokeWidth="3"
            d="M17.118 2H2.451c-.579 0-1.048.47-1.048 1.048v11.524c0 .578.47 1.047 1.048 1.047h14.667c.579 0 1.048-.469 1.048-1.047V3.048c0-.579-.47-1.048-1.048-1.048z"
          ></path>
        </g>
        <path fill="#fff" d="M10.308 15.62H8.737v2.095h1.571v-2.096z"></path>
        <path
          fill="#fff"
          d="M12.665 17.19c.58 0 1.048.47 1.048 1.048v.524H5.332v-.524c0-.578.47-1.047 1.048-1.047h6.285z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2_87">
          <path
            fill="#fff"
            d="M0 0H17.81V16.762H0z"
            transform="translate(1 2)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default DesktopIcon;
