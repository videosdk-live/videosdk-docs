import React from "react";
const SDKCard = ({ title, icon }) => {
  return (
    <>
      <div className="hidden sm:block xs:block">
        <div className="rounded h-16 bg-slate-900 flex shrink ml-3">
          <img src={icon} alt="SDK" className="h-4 w-4 ml-1 mt-5" />
          <div className="font-medium text-sm ml-1 mt-4 shrink">{title}</div>
        </div>
      </div>
      <div className="hidden lg:block xl:block md:block">
        <div className="rounded h-16 bg-slate-900 flex m-auto ml-3">
          <img src={icon} alt="SDK" className="h-10 w-10 ml-5 mt-3" />
          <div className="font-semibold ml-3 mt-5">{title}</div>
        </div>
      </div>
      <div className="hidden xl2:block">
        <div className="ml-3 bg-slate-900 rounded-lg -sdkplatforms flex">
          <img src={icon} alt="SDK" className="h-10 w-10 ml-5 mt-5" />
          <div className="font-semibold ml-5 mt-7">{title}</div>
        </div>
      </div>
    </>
  );
};

export default SDKCard;
