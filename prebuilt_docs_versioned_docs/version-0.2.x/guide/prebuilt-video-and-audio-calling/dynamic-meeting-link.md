---
title: Dynamic Meeting Link with Prebuilt SDK
hide_title: false
hide_table_of_contents: false
description: Generate dynamic meeting Link specifically for your use-case. it helps to create meetings on-fly
sidebar_label: Generate Dynamic Meeting Link
pagination_label: Generate Dynamic Meeting Link
keywords:
  - audio calling
  - video calling
  - dynamic meeting id
  - create meetings
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: dynamic-meeting-link
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dynamic Meeting Link

If you don't want to have the same meeting id every time, you can generate a random id each time and use it. Let's see how it's done.

### Step 2. Create `createMeeting.html` and add `createMeeting()` function

Add a `<script>` which will contain `createMeeting()` which will create and redirect to a new meeting. And add this method to `onClick` of `<button>`

Your `<body>` should look something like this.

```js title="createMeeting.html"
<body>
  <script>
    // Function to create meeting ID
    function createMeeting() {
          let meetingId =  'xxxxyxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
          });
          console.log("http://"+ window.location.host + "?meetingId="+ meetingId)
          document.getElementById("copyInput").value = "https://"+ window.location.host + "/meeting.html?meetingId="+ meetingId;
    }

    // Function to copy the link
    function copyFunction() {
      /* Get the text field */
      var copyText = document.getElementById("copyInput");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
    }
  </script>
  <div>
    <button onclick="createMeeting()">Create Meeting</button>
    <br/>
    <input type="text" id="copyInput">
    <button onclick="myFunction()">Copy Link</button>
  </div>
</body>
```

### Step 2. Update your `meeting.html` to take the `meetingId` from the URL.

In this way, you will be able to access meetingId from the URL and each unique URL will work as different room

```js title="meeting.html"
//...
<script>

   script.addEventListener("load", function (event) {
      //Get URL query parameters
      const url = new URLSearchParams(window.location.search);

      //...

      const config = {
        // ...
        meetingId: url.get("meetingId"), // Get meeting id from params.
        // ...
      };

      const meeting = new VideoSDKMeeting();
      meeting.init(config);
    });

</script>

//...
```

## Step 3. Run and test

<Tabs
defaultValue="node"
groupId={"server-group-id"}
values={[
{label: 'Node.js', value: 'node'},
{label: 'Python', value: 'python'},
{label: 'PHP', value: 'php'},
{label: 'WAMP', value: 'wamp'},
{label: 'XAMPP', value: 'xampp'},
]}>
<TabItem value="node">

```bash
$ npm install -g live-server
$ live-server --port=8000
```

and open [http://localhost:8000/createMeeting.html](http://localhost:8000/createMeeting.html) to create meeting URL

</TabItem>
<TabItem value="python">

```bash
$ python3 -m http.server
```

and open [http://localhost:8000/createMeeting.html](http://localhost:8000/createMeeting.html) to create meeting URL

</TabItem>
<TabItem value="php">

```bash
$ php -S localhost:8000
```

and open [http://localhost:8000/createMeeting.html](http://localhost:8000/createMeeting.html) to create meeting URL

</TabItem>
<TabItem value="wamp">

```
Move the HTML file to C:\wamp\www and start the WAMP server
```

and open [http://localhost/createMeeting.html](http://localhost:8000/createMeeting.html) to create meeting URL

</TabItem>
<TabItem value="xampp">

```
Move the HTML file to C:\xampp\htdocs and start the XAMPP server
```

and open [http://localhost:8000/createMeeting.html](http://localhost:8000/createMeeting.html) to create meeting URL

</TabItem>
</Tabs>
