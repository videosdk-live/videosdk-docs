---
sidebar_position: 1
---

# Authentication

## Using an API to authenticate

The process of authentication is designed in such a way that it can be useful in both server and client side.

First of all, you have to install either of the SDK to generate token. Next step is to generate a `jwtwebtoken` in programming environment you are working with.

## Generate access token (NodeJS)

```js {19} title="server.js"
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const request = require("request");

const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-token", (req, res) => {
  const API_KEY = process.env.ZUJONOW_API_KEY;
  const SECRET_KEY = process.env.ZUJONOW_SECRET_KEY;
  const options = { expiresIn: "10m", algorithm: "HS256" };
  const payload = {
    apikey: API_KEY,
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Now, using this `token`. You can call API's at either client or server side. Refer [jwt.io](https://jwt.io/) for other programming languages.
