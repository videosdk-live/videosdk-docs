import * as React from "react";

const IOSIcon = (props) => (
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
    <g mask="url(#a)">
      <path
        d="M21.006 32c-.929 0-1.757-.334-2.554-.652-.683-.276-1.327-.535-1.938-.535-.542 0-1.16.247-1.816.505-.792.311-1.69.668-2.664.668-1.602 0-3.038-.975-4.397-2.976-.057-.085-5.588-8.72-2.901-15.132 1.471-3.51 3.592-5.293 6.302-5.293 1.43 0 2.749.477 3.808.86.593.215 1.154.417 1.449.417.348 0 .909-.217 1.498-.45.984-.384 2.21-.865 3.617-.865 2.04 0 3.885 1.001 5.644 3.06a.723.723 0 0 1 .161.521.716.716 0 0 1-.082.267.673.673 0 0 1-.175.209c-1.854 1.436-2.795 3.097-2.795 4.94 0 2.28 1.06 3.956 3.538 5.596.13.085.227.218.271.374a.709.709 0 0 1-.028.472C25.614 29.526 23.475 32 21.006 32ZM16.355 8.2c-.153 0-.306-.011-.457-.03a.618.618 0 0 1-.39-.212.693.693 0 0 1-.165-.43C15.176 3.018 18.77.257 21.427.001a.613.613 0 0 1 .441.136c.126.102.212.25.242.416.293 1.735-.255 3.643-1.506 5.233-1.189 1.511-2.778 2.413-4.25 2.413Z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default IOSIcon;