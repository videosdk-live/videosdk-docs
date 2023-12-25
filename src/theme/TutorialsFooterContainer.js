import React from "react";

const Footer = () => {
  return (
    <div className="mt-12">
      <p className="mt-7 flex flex-col md:flex-row text-lg gap-5 justify-center items-center">
        Got a Question?{" "}
        <a
          target="_blank"
          href="https://www.videosdk.live/contact"
          className="px-2 py-1 gap-3 rounded-lg bg-gray-750 border-class flex justify-center max-w-max text-white-100"
        >
          Talk to our Migration Expert
        </a>
      </p>
    </div>
  );
};

function TutorialsFooterContainer() {
  return (
    <div id="tailwind">
      <Footer />
    </div>
  );
}
export default TutorialsFooterContainer;
