import * as React from "react";

const CustomFlutterIcon = (props) => (
  <svg
    width={20}
    height={20}
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
      width={20}
      height={20}
    >
      <path fill="#C4C4C4" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M4.75 12.771 1.824 10 11.324 1h5.852L4.75 12.771Zm12.425-3.466h-5.851L9.133 11.38l2.926 2.772 5.116-4.848ZM9.133 16.924 11.325 19h5.851l-5.116-4.847-2.927 2.771ZM6.214 14.154l2.921-2.768 2.921 2.768-2.921 2.768-2.921-2.768Z"
        fill="#fff"
      />
      <path
        d="m9.135 16.922 2.921-2.768.408.386-2.921 2.768-.408-.386Z"
        fill="url(#b)"
      />
      <path
        d="m9.133 16.924 4.34-1.42-1.415-1.351-2.925 2.771Z"
        fill="url(#c)"
        fillOpacity={0.2}
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={10.561}
        y1={15.524}
        x2={10.959}
        y2={15.944}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopOpacity={0.15} />
        <stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={9.362}
        y1={15.66}
        x2={13.39}
        y2={15.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.2} stopOpacity={0.55} />
        <stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
      </linearGradient>
    </defs>
  </svg>
);

export default CustomFlutterIcon;
