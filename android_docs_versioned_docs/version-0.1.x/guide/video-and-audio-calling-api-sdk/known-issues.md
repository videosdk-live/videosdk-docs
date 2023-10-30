---
sidebar_label: Known Issues
pagination_label: Known Issues
---

# Known Issues - Android

This page will let you updated with iOS SDK known issues with better solution.

## Issue : 1

```
Missing Class kotlin.jvm.internal.SourceDebugExtension (referenced from: io.github.crow_misia.mediasoup.Consumer and 8 other contexts)
```

### Solution

To resolve the issue related to the missing class `kotlin.jvm.internal.SourceDebugExtension` when building an APK with ProGuard, you can follow these steps:

#### Step 1: Update Kotlin Version (Optional)

If you are using Kotlin version 1.7.20, consider upgrading it to version 1.8.0. This update may resolve the error you're facing. Check if your project is compatible with Kotlin 1.8.0 and update the Kotlin version in your project configuration accordingly.

#### Step 2: Modify proguard-rules.pro

Open the proguard-rules.pro file in your project and add the following rule:

```java
-dontwarn kotlin.jvm.internal.SourceDebugExtension
```

This rule tells ProGuard to suppress warnings related to the missing class "kotlin.jvm.internal.SourceDebugExtension". By adding this rule, the build process will no longer show the error associated with this class.
