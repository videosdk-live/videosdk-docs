import React from "react";
function RestApiDescription({
  title, description
}) {
  return (
    <div className="flex flex-col">
      <p className="text-white font-bold text-2xl">{title}</p>
      <p className="text-gray-250">{description}</p>
    </div>
  );
}

function RestApiEndPointList({
  endpoints
}) {
  return (
    <div>
      <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex lg:flex-row flex-col align-middle">
        <p className="flex-1 text-sm mb-0 font-bold text-white-1">ENDPOINT</p>
      </div>
      <div className="p-4 bg-[#252a34] rounded-b-lg flex flex-col align-middle">
        {
          endpoints.map((endpoint, index) => {
            return (
              <p>
                <span className="text-[#72C894] text-sm font-bold max-w-min">{endpoint.methodType}</span>
                <span className="text-[#7D8EAD] text-sm font-medium max-w-min pl-[3px] pr-[3px]">
                  |
                </span>
                <a href={endpoint.link}>
                  <span className="flex-1 text-[#7D8EAD] text-sm font-medium max-w-min hover:text-white-100">
                    {endpoint.api}
                  </span>
                </a>
              </p>
            )
          })
        }
      </div>
    </div>
  )
}

export default function RestApiEndpointContainer({
  endpointSections
}) {
  return (
    <div id="tailwind">
      {
        endpointSections.map((endpointSection, index) => {
          return (
            <div key={`${index}`} className="pt-7">
              <div className="flex lg:flex-row flex-col w-full">
                <div className="lg:w-1/2 w-full lg:sticky self-start lg:pr-[18px] flex-grow top-10">
                  <RestApiDescription
                    description={endpointSection.description}
                    title={endpointSection.title}
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:pt-0 pt-4 lg:pl-[18px] lg:sticky self-start flex-grow top-10">
                  <RestApiEndPointList
                    endpoints={endpointSection.endpoints}
                  />
                </div>
              </div>
              <div className="bg-[#252A34] mt-3 mb-1 h-[1px]"></div>
            </div>
          )
        })
      }
    </div>
  );
}