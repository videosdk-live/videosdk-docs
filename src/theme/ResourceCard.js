import React from "react";
const ResourceCard = ({ title, description, link }) => {
  return (
    <>
      <div className="hidden sm:block xs:block">
        <div className="rounded-lg w-60 h-80 bg-slate-900 flex flex-col m-auto mr-2">
          <h2 className="font-bold text-px28 ml-5 mt-7 ">{title}</h2>
          <p className="text-md font-medium ml-5 mt-4 mr-2">{description}</p>
          <a href={link} className="ml-48 mt-auto mb-3">
            <img src="./svgs/link-icon.svg" />
          </a>
        </div>
      </div>
      <div className="hidden lg:block xl:block md:block">
        <div className="rounded-lg w-60 h-48 bg-slate-900 flex flex-col m-auto mr-2">
          <h2 className="font-bold text-px18 ml-5 mt-7 leading-4">{title}</h2>
          <p className="text-sm font-medium ml-5 mt-4 leading-5 mr-5">
            {description}
          </p>
          <a href={link} className="ml-48 mt-9">
            <img src="./svgs/link-icon.svg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
