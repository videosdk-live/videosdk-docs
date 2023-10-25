---
sidebar_position: 2
sidebar_label: Firebase Cloud Function
pagination_label: Firebase Cloud Function
title: Firebase Cloud Function
---

# Firebase Cloud Function - API

<div class="sdk-api-ref-only-h4">

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. There's no need to manage and scale your own servers.

Perform the following steps to create token and create room HTTP Triggers.

### Install Firebase CLI

Before initiating a cloud functions project we need to make use of the Firebase Command Line Client and to install the latest version use the following command.

```javascript
npm install -g firebase-tools
```

### Firebase Login

Login to your firebase account using following command.

```javascript
firebase login
```

### Firebase Initiate

Now go to project folder and initiate Firebase.

```javascript
firebase init functions
```

You’re being asked to select the Firebase project you would like to use for the Firebase Cloud Functions project. You can also select the entry [create a new project] if you would like to add a new Firebase project to your account.

The next question you’re being asked is “Do you want to install dependencies with npm now?”. As we would like to add all necessary dependencies you need to say “Y” here or simply hit return as “Y” is the default setting.

### Install Dependancies

You have to install express, jsonwebtoken, node-fetch and body-parser dependencies for the project.

```javascript
npm install express jsonwebtoken node-fetch body-parser
```

### Node Project File

Create index.js file

```javascript
const functions = require("firebase-functions");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

app.use(bodyParser.json());

function generateToken() {
  const API_KEY = "$YOUR_API_KEY";
  const SECRET = "$YOUR_SECRET";

  const options = {
    expiresIn: "120m",
    algorithm: "HS256",
  };

  const payload = {
    apikey: API_KEY,
    permissions: [`allow_join`], // `ask_join` || `allow_mod`
  };

  const token = jwt.sign(payload, SECRET, options);

  return token;
}

app.get("/token", (req, res, next) => {
  // .... your verification
  const token = generateToken();
  res.json({ token: token });
});

app.post("/room", async (req, res, next) => {
  const { meetingId } = req.body;
  // .... your verification

  const token = generateToken();
  const options = {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      region: "in001",
      customRoomId: meetingId,
      webhook: "see example",
    }),
  };

  const url = `https://api.videosdk.live/v2/rooms`;
  const response = await fetch(url, options);
  const data = await response.json();

  res.json(data);
});

app.listen(PORT, () => {
  console.info("Server is running on PORT:", PORT);
});

exports.app = functions.https.onRequest(app);
```

### Firebase Deploy

To try out the function we now need to deploy our project to Firebase. Therefore we’re making use of the Firebase CLI again:

```javascript
firebase deploy --only functions
```

If the deployment has been completed successfully and you get back the function URL which now can be used to trigger the execution of the Cloud Function. now you can use this url to create room or token.

</div>
