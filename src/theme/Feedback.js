import React, { useRef, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useLocation } from "@docusaurus/router";

export default function Feedback() {
  const [selectedRating, setSelectedRating] = useState();
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const location = useLocation();

  const options = {
    1: [
      "Missing information or code",
      "Content is confusing or hard to follow",
      "Inaccurate or outdated information",
      "Broken link or typo",
      "Did not solve my problem",
    ],
    2: [
      "Missing information or code",
      "Content is confusing or hard to follow",
      "Inaccurate or outdated information",
      "Broken link or typo",
      "Did not solve my problem",
    ],
    3: [
      "Missing information or code",
      "Content is confusing or hard to follow",
      "Inaccurate or outdated information",
      "Broken link or typo",
      "Did not solve my problem",
    ],
    4: [
      "Missing information or code",
      "Content is confusing or hard to follow",
      "Inaccurate or outdated information",
      "Broken link or typo",
      "Did not solve my problem",
      "Content is easy to follow",
      "Solved my problem",
    ],
    5: [
      "Missing information or code",
      "Content is confusing or hard to follow",
      "Inaccurate or outdated information",
      "Broken link or typo",
      "Did not solve my problem",
      "Content is easy to follow",
      "Solved my problem",
    ],
  };

  const formRef = useRef();
  const _handleClick = (e) => {
    e?.preventDefault();

    formRef.current.submit();
  };
  let user;
  // if (document) {
  //   let name = "user=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(";");
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == " ") {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       user = JSON.parse(c.substring(name.length, c.length));
  //       break;
  //     }
  //   }
  // }

  return (
    // <BrowserOnly>
    //   {() => {
    //     return (
    <div id="tailwind">
      <hr className="bg-gray-750" />
      <p className="font-semibold">Was this helpful?</p>
      <div className="flex flex-row gap-2">
        {[1, 2, 3, 4, 5].map((rating) => {
          return (
            <img
              src={`/img/emoji-${rating}.png`}
              className={`hover:grayscale-0 grayscale w-8 h-8 hover:cursor-pointer`}
              onClick={() => {
                setSelectedRating(rating);
                setShowModal(true);
              }}
            />
          );
        })}
      </div>

      <>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => {
                  _handleClick();
                  setShowModal(false);
                }}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8 z-50">
                <div className="relative w-full max-w-lg  mx-auto bg-white rounded-md shadow-lg bg-gray-700 p-8">
                  <div
                    onClick={() => {
                      _handleClick();
                      setShowModal(false);
                    }}
                    className="w-10 h-10 rounded-full flex  items-center justify-center bg-white-100 absolute -top-5 -right-5 hover:cursor-pointer"
                  >
                    <img
                      src="/img/icons/libraries/close.svg"
                      className="w-6 h-6"
                    />
                  </div>
                  <form
                    autoComplete="off"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    ref={formRef}
                    action="https://forms.zohopublic.in/zujotechpvtltd/form/DevDocsFeedback08042023/formperma/4FBIWRuaTNJ5QvqXWEScXw9yYJ-8m5jp3rxvHXzAnWs/htmlRecords/submit"
                    name="form"
                    id="form"
                    method="POST"
                    accept-charset="UTF-8"
                    enctype="multipart/form-data"
                    className="flex flex-col "
                  >
                    <input type="hidden" name="zf_referrer_name" value="" />
                    <input
                      type="hidden"
                      name="zf_redirect_url"
                      value={window.location.href}
                    />
                    <input type="hidden" name="zc_gad" value="" />
                    <input
                      type="hidden"
                      name="Radio"
                      value={selectedRating + " star"}
                    />

                    <p className="text-xl font-bold text-center text-white-100 mb-3">
                      Thank you for your feedback!
                    </p>

                    <p className="text-lg font-bold text-white-100 mb-3">
                      {selectedRating == 1 ||
                      selectedRating == 2 ||
                      selectedRating == 3
                        ? "What did you find challening?"
                        : "What did you like the most?"}
                    </p>

                    {options[selectedRating].map((option, index) => {
                      return (
                        <div className="flex flex-row gap-2 items-center my-2">
                          <input
                            type="checkbox"
                            id={`MultipleChoice_${index + 1}`}
                            value={option}
                            name="MultipleChoice"
                          />
                          <p className="flex-1 mb-0">{option}</p>
                        </div>
                      );
                    })}

                    <textarea
                      rows="3"
                      value={feedback}
                      placeholder="Any suggestions you would like us to implement"
                      name="MultiLine"
                      maxLength="2083"
                      required
                      onChange={(e) => {
                        setFeedback(e.target.value);
                      }}
                      className="w-full p-2 text-white bg-gray-700 border rounded border-gray-650 resize-none"
                    />
                    <input
                      type="hidden"
                      maxlength="2083"
                      name="Website"
                      value={`https://docs.videosdk.live/${location.pathname}`}
                      placeholder=""
                    />

                    <input
                      type="hidden"
                      name="SingleLine"
                      value={user?.id}
                      fieldType={1}
                      maxlength="255"
                      placeholder=""
                    />
                    <div
                      type={"button"}
                      value={"submit"}
                      onClick={_handleClick}
                      className={`hover:cursor-pointer px-4 py-2 max-w-max text-base font-bold mt-3 text-white-100 self-center rounded-lg md:px-5 md:py-2 hover:bg-opacity-80 bg-purple-550 hover:bg-gradient-to-r from-blue-150 to-blue-250`}
                    >
                      Submit
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
    // );
    //   }}
    // </BrowserOnly>
  );
}
