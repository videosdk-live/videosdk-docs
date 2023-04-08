import React from "react";
import Footer from "@theme-original/DocItem/Footer";

export default function FooterWrapper(props) {
  return (
    <>
      <div id="tailwind">
        <p className="mt-7 flex text-lg gap-5 justify-center items-center">
          Got a Question?{" "}
          <a
            target="_blank"
            href="https://discord.gg/Gpmj6eCq5u"
            className="px-2 py-1 gap-3 rounded-lg bg-gray-750 border-class flex justify-center max-w-max text-white-100"
          >
            <img
              src="/img/icons/libraries/icons8-discord.svg"
              className="invert"
            />
            Ask us on discord
          </a>
        </p>
      </div>

      <Footer {...props} />
    </>
  );
}
