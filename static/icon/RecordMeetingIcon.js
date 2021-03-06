import * as React from "react";

const RecordMeetingIcon = (props) => (
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
        d="M40.96 14.145a3.485 3.485 0 0 1 1.99.262 3.28 3.28 0 0 1 2.07 3.034v13.817a3.28 3.28 0 0 1-2.05 3.034 3.442 3.442 0 0 1-1.414.308 3.567 3.567 0 0 1-2.378-.923l-4.428-4.1v2.973a6.15 6.15 0 0 1-6.15 6.15H10.15A6.15 6.15 0 0 1 4 32.55v-16.4A6.15 6.15 0 0 1 10.15 10H28.6a6.15 6.15 0 0 1 6.15 6.15v2.972l4.407-4.1a3.485 3.485 0 0 1 1.804-.877ZM13.027 24.66a1.94 1.94 0 0 1-.643.094h-.748v-2.376h.748c.48 0 .834.099 1.061.297.231.198.346.473.346.825 0 .176-.025.341-.076.495-.052.15-.134.282-.248.396-.114.114-.26.204-.44.27ZM14.649 29h1.682l-1.704-2.788a1.573 1.573 0 0 0-.287-.33 1.624 1.624 0 0 0-.34-.237c.26-.099.489-.226.687-.38a2.35 2.35 0 0 0 .506-.522c.136-.198.238-.412.308-.643.07-.232.104-.477.104-.738 0-.34-.058-.656-.175-.945a1.874 1.874 0 0 0-.567-.754c-.257-.213-.59-.378-1.001-.495-.407-.121-.9-.181-1.48-.181H9.776V29h1.86v-2.965h.473a.63.63 0 0 1 .33.072.617.617 0 0 1 .208.215l1.331 2.326c.136.235.36.352.671.352Zm4.226-4.713v-1.87h3.289v-1.43h-5.159V29h5.159v-1.43h-3.289v-1.909h2.519v-1.375h-2.519Zm9.808 2.667a.341.341 0 0 0-.292.011.578.578 0 0 0-.143.088c-.11.099-.218.181-.325.247-.106.063-.22.114-.34.154a2.437 2.437 0 0 1-.391.083c-.14.015-.293.022-.462.022a1.982 1.982 0 0 1-1.502-.666c-.19-.22-.342-.489-.456-.808a3.35 3.35 0 0 1-.165-1.095c0-.406.05-.768.149-1.083a2.33 2.33 0 0 1 .428-.803c.188-.22.407-.387.66-.5.257-.114.54-.171.848-.171.194 0 .363.015.506.044.146.03.273.066.379.11.11.04.203.086.28.137.081.048.155.094.22.138.066.04.129.075.188.105.058.029.12.044.186.044.1 0 .177-.02.232-.061a.879.879 0 0 0 .143-.143l.627-.841a3.343 3.343 0 0 0-1.155-.765 3.863 3.863 0 0 0-.748-.22 4.149 4.149 0 0 0-.848-.083c-.59 0-1.13.101-1.622.303a3.691 3.691 0 0 0-1.265.847 3.82 3.82 0 0 0-.82 1.298 4.493 4.493 0 0 0-.291 1.645c0 .586.09 1.13.27 1.633.18.499.436.931.77 1.298.337.363.746.649 1.226.858.484.205 1.03.308 1.639.308.664 0 1.237-.106 1.721-.319a3.077 3.077 0 0 0 1.216-.957l-.737-.776a.327.327 0 0 0-.127-.082Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={6.5}
        y1={10}
        x2={50}
        y2={42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

export default RecordMeetingIcon;
