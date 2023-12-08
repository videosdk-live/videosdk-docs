import React from "react";
import RightIcon from "../../static/icon/supportedList/RightIcon";
import WrongWithoutBgIcon from "../../static/icon/supportedList/WrongWithoutBgIcon";

const SupportFeatureList = () => {
  const featureList = [
    {
      feature: "Auth",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link:
          "https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/authentication-and-token",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/authentication-and-token",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/server-setup",
      },
    },
    {
      feature: "Install",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#1-get-the-programmable-video-javascript-sdk",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#1-get-the-programmable-video-android-sdk",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#1-get-the-programmable-video-ios-sdk",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/javascript-sdk",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/integrate-sdk",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/ios-sdk",
      },
    },
    {
      feature: "Join",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#connect-to-a-room",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#connect-to-a-room",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#connect-to-a-room",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/setup-call/join-meeting",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/setup-call/join-meeting",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/start-join-meeting",
      },
    },
    {
      feature: "Start audio / speaker",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#set-up-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#micenabled",
        videosdk_android_link:
          "https://docs.videosdk.live/android/api/sdk-reference/initMeeting#micenabled",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/api/sdk-reference/initMeeting#micenabled",
      },
    },
    {
      feature: "Start Video",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#set-up-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/api/sdk-reference/initMeeting#webcamenabled",
        videosdk_android_link:
          "https://docs.videosdk.live/android/api/sdk-reference/initMeeting#webcamenabled",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/api/sdk-reference/initMeeting#webcamenabled",
      },
    },
    {
      feature: "Mute mic",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#mute-your-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/mic-controls",
      },
    },
    {
      feature: "Unmute mic",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#unmute-your-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/mute-unmute-mic",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/mic-controls",
      },
    },
    {
      feature: "Enable Webcam",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#mute-your-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/camera-controls",
      },
    },
    {
      feature: "Disable webcam",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#unmute-your-local-media",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#set-up-local-media",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#set-up-local-media",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/on-off-camera",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/camera-controls",
      },
    },
    {
      feature: "Render Video",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#display-a-remote-participants-video",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#working-with-remote-participants",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#working-with-remote-participants",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/render-media/display-audio-video",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/render-media/display-video/render-participant",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/manage-participants",
      },
    },
    {
      feature: "Screen Share",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/screen-capture-chrome",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-screen-capture",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-v4-screen-capture",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/screen-share",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/screen-share",
        videosdk_ios: "NA",
      },
    },
    {
      feature: "Microphone Devices",
      links: {
        twilio_js_link:
          "https://github.com/twilio/video-quickstart-js/blob/master/examples/mediadevices/src/helpers.js",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-configuring-audio-video-inputs-and-outputs",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-v5-configuring-audio-video-inputs-and-outputs",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/change-input-device#changing-audio-input-device",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/change-input-output-device#changing-inputoutput-audio-device",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/mic-controls",
      },
    },
    {
      feature: "Speaker Devices",
      links: {
        twilio_js_link:
          "https://github.com/twilio/video-quickstart-js/blob/master/examples/mediadevices/src/helpers.js",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-configuring-audio-video-inputs-and-outputs",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-v5-configuring-audio-video-inputs-and-outputs",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/change-audio-ouptut-device",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/change-input-output-device#changing-inputoutput-audio-device",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/mic-controls",
      },
    },
    {
      feature: "Video Devices",
      links: {
        twilio_js_link:
          "https://github.com/twilio/video-quickstart-js/blob/master/examples/mediadevices/src/helpers.js",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-configuring-audio-video-inputs-and-outputs",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-v5-configuring-audio-video-inputs-and-outputs",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/handling-media/change-input-device#changing-camera-input-device",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/handling-media/change-input-output-device#changing-camera-input-device",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/camera-controls",
      },
    },
    {
      feature: "Leave / End",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/javascript-getting-started#disconnect-from-a-room",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#disconnect-from-a-room",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#disconnect-from-a-room",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/setup-call/leave-end-meeting",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/setup-call/leave-end-meeting",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/leave-end-meeting",
      },
    },
    {
      feature: "Recording",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link:
          "https://www.twilio.com/docs/video/tutorials/understanding-video-recordings-and-compositions",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/record-meeting",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/record-meeting",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/recording-meeting",
      },
    },
    {
      feature: "RTMP",
      links: {
        twilio_js: "NA",
        twilio_android: "NA",
        twilio_ios: "NA",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/rtmp-livestream",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/recording-and-live-streaming/rtmp-livestream",
        videosdk_ios_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/start-livestream",
      },
    },
    {
      feature: "HLS",
      links: {
        twilio_js: "NA",
        twilio_android: "NA",
        twilio_ios: "NA",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/interactive-live-streaming/integrate-hls/overview",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/interactive-live-streaming/integrate-hls/overview",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/guide/video-and-audio-calling-api-sdk/features/interactive-livestream",
      },
    },
    {
      feature: "Noise Cancellation",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link:
          "https://www.twilio.com/docs/video/noise-cancellation",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/api/sdk-reference/custom-track/custom-audio-track",
        videosdk_android_link:
          "https://docs.videosdk.live/android/api/sdk-reference/custom-tracks#custom-audio-track---android",
        videosdk_ios: "NA",
      },
    },
    {
      feature: "Reconnections",
      links: {
        twilio_js_link:
          "https://www.twilio.com/docs/video/reconnection-states-and-events",
        twilio_android_link:
          "https://www.twilio.com/docs/video/android-getting-started#room-reconnection",
        twilio_ios_link:
          "https://www.twilio.com/docs/video/ios-getting-started#room-reconnection",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/api/sdk-reference/meeting-class/events#meeting-state-changed",
        videosdk_android_link:
          "https://docs.videosdk.live/android/api/sdk-reference/meeting-class/meeting-event-listener-class#onmeetingstatechanged",
        videosdk_ios_link:
          "https://docs.videosdk.live/ios/api/sdk-reference/meeting-class/events#onmeetingstatechanged",
      },
    },
    {
      feature: "Picture-in-picture",
      links: {
        twilio_js: "NA",
        twilio_android: "NA",
        twilio_ios_link: "https://github.com/twilio/twilio-video-app-ios",
        twilio_agnostic: "NA",
        videosdk_js_link:
          "https://docs.videosdk.live/javascript/guide/video-and-audio-calling-api-sdk/render-media/picture-in-picture",
        videosd_android: "NA",
        videosdk_ios: "NA",
      },
    },
    {
      feature: "Quality of Service",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link:
          "https://www.twilio.com/docs/video/using-network-quality-api",
        videosdk_js_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality",
        videosdk_android_link:
          "https://docs.videosdk.live/android/guide/video-and-audio-calling-api-sdk/render-media/understanding-call-quality",
        videosdk_ios: "NA",
      },
    },
    {
      feature: "REST APIs",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link: "https://www.twilio.com/docs/video/api",
        videosdk_js_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/intro",
        videosdk_android_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/intro",
        videosdk_ios_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/intro",
      },
    },
    {
      feature: "Webhooks",
      links: {
        twilio_js: "(a)",
        twilio_android: "(a)",
        twilio_ios: "(a)",
        twilio_agnostic_link:
          "https://www.twilio.com/docs/video/api/status-callbacks",
        videosdk_js_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/user-webhooks",
        videosdk_android_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/user-webhooks",
        videosdk_ios_link:
          "https://docs.videosdk.live/api-reference/realtime-communication/user-webhooks",
      },
    },
  ];
  const sdkLists = {
    desktop: [
      { name: "Twilio JS", value: "twilio_js" },
      { name: "Twilio iOS", value: "twilio_ios" },
      { name: "Twilio Android", value: "twilio_android" },
      { name: "Twilio agnostic", value: "twilio_agnostic" },
      { name: "VideoSDK JS", value: "videosdk_js" },
      { name: "VideoSDK Android", value: "videosdk_android" },
      { name: "VideoSDK iOS", value: "videosdk_ios" },
    ],
  };
  const BrowserCell = ({ name }) => (
    <th className="vertical-cell p-2 py-3">
      <span className=" inline-flex m-0 p-0 text-base text-white">{name}</span>
    </th>
  );

  const BrowserTableCell = ({ links, value }) => (
    <td key={value} className="p-2">
      <div className="flex flex-col items-center justify-center">
        {!links[value] && (
          <a
            href={links[value?.concat("_link")]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full bg-green-500 flex items-center p-0.5">
              <RightIcon />
            </div>
          </a>
        )}

        {links[value] === "NA" ? (
          <div className="rounded-full bg-red-500 flex items-center p-0.5">
            <WrongWithoutBgIcon />
          </div>
        ) : (
          <span className="inline-flex">{links[value]}</span>
        )}
      </div>
    </td>
  );

  const BrowserTableRow = ({ feature, links }) => {
    return (
      <tr key={feature} className="bg-transparent">
        <td className="px-2 py-2 whitespace-nowrap">{feature}</td>
        {sdkLists.desktop.map(({ name, value }) => (
          <BrowserTableCell name={name} value={value} links={links} />
        ))}
      </tr>
    );
  };

  return (
    <div className="max-w-screen-lg mt-10">
      <table className="min-w-full">
        <thead className="bg-transparent">
          <tr className="bg-transparent">
            <th></th>
            {sdkLists.desktop.map(({ name }) => (
              <BrowserCell key={name} name={name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {featureList.map(({ feature, links }) => (
            <BrowserTableRow key={feature} feature={feature} links={links} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
function SupportedFeatureListContainer() {
  return (
    <div id="tailwind">
      <SupportFeatureList />
    </div>
  );
}
export default SupportedFeatureListContainer;
