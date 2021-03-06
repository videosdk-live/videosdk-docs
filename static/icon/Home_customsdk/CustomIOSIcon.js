import * as React from "react";

const CustomIOSIcon = (props) => (
  <svg
    width={23}
    height={23}
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
      width={23}
      height={23}
    >
      <path fill="#C4C4C4" d="M0 0h23v23H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M13.504 20c-.58 0-1.098-.209-1.596-.408-.427-.172-.83-.334-1.212-.334-.339 0-.725.154-1.135.316-.495.194-1.056.418-1.665.418-1.001 0-1.899-.61-2.748-1.86-.035-.054-3.492-5.45-1.813-9.458.92-2.194 2.245-3.308 3.939-3.308.893 0 1.718.298 2.38.538.37.134.72.26.905.26.218 0 .568-.136.937-.281.614-.24 1.381-.541 2.26-.541 1.275 0 2.428.626 3.528 1.912a.433.433 0 0 1 .1.326.449.449 0 0 1-.16.297c-1.16.898-1.747 1.936-1.747 3.087 0 1.426.662 2.474 2.21 3.498a.416.416 0 0 1 .17.234.443.443 0 0 1-.017.295C16.384 18.454 15.047 20 13.504 20ZM10.597 5.125c-.095 0-.191-.007-.286-.019a.387.387 0 0 1-.243-.132.433.433 0 0 1-.104-.27C9.86 1.888 12.106.163 13.767.003a.383.383 0 0 1 .276.084.43.43 0 0 1 .15.26c.184 1.085-.159 2.277-.94 3.27-.743.945-1.737 1.509-2.656 1.509Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default CustomIOSIcon;
