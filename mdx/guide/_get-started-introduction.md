<h1>Start a {props.title} </h1>
<span>Video SDK for {props.progLang} enables easiest way to integrate real-time Video Call into web apps. This guide will help you with minimum code you need to add Video Call into your Web App using Video SDK.</span>

# Understand the architecture
<span class="architecture-description">This diagram demonstrates end-to-end flow to implement video & audio calling, record calls and go-live on social media.</span>

![Video-Sdk-Architecture!](/img/video-sdk-architecture.svg)


As displayed in figure, the workflow for adding Video Call in your app is as described below: 

- **Retrive a token:**
A token is the credential that authenticates a user when your app client joins a meeting. In a test or production environment, your app client retrieves tokens from a server in your security infrastructure.

- **Init Meeting:**
Call `initMeeting` factory to create meeting. It includes default params like audio, video, max resolution etc. 

- **Join Meeting:**
Publish your video and audio to meeting

You can use `Stream` class to display participants on the screen.

For application to join a meeting, you need following information:
- **Token:**  In a test or production environment, your app client retrieves tokens from a server in your security infrastructure. For this page, you use a temporary token with a validity period of 24 hours that you retrieve from Video SDK Console.
- **Meeting Id:** A unique string identifies the meeting for the video call. It will be generated and validated using video sdk server.
- **Participant Id:** The unique identifier of a user. You need to specify the user ID yourself, and ensure that it is unique in the meeting. 

