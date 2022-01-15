---
sidebar_label: Debug Mode
pagination_label: Debug Mode
---

# Debug Mode

This feature allows SDK to raise error pop up for providing invalid parameter during SDK integration.

## How it works ?

- While `debug` value set to `true`, and you have provided invalid parameter in config object, you can get a pop-up related to that error.

- **For example**, you have provided invalid API key in config object, now it will raise error pop up as below image.

![error-pop-up-1](/img/prebuilt/error-pop-up-1.png)

- While `debug` value set to `false`, and you have provided invalid parameter in config object, you can get a pop-up, but it will not specify an exact error.

- **For example**, your account discontinued for some reason, now it will not raise error related to account discontinue, but it will display as below image.

![error-pop-up-2](/img/prebuilt/error-pop-up-2.png)

By default, `debug` value is `false`.

### Debug Mode attributes

```js title="index.html"
const config = {
  // ... other configuration
  debug: true, // false
  // ...
};
```
