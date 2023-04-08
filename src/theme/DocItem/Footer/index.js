import React from "react";
import Footer from "@theme-original/DocItem/Footer";

export default function FooterWrapper(props) {
  return (
    <>
      <div id="tailwind">
        <p className="mt-7 flex text-xl gap-5 justify-center items-center">
          Got a Question?{" "}
          <a
            target="_blank"
            href="https://discord.gg/Gpmj6eCq5u"
            className="p-2 gap-3 rounded-lg bg-gray-750 border-class flex justify-center max-w-max "
          >
            <img
              src="/img/icons/libraries/icons8-discord.svg"
              className="invert"
            />
            <strong>Ask us on discord</strong>
          </a>
        </p>
      </div>

      <Footer {...props} />
    </>
  );
}
