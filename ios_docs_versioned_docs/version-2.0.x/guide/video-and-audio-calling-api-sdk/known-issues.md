---
sidebar_label: Known Issues
pagination_label: Known Issues
---

# Known Issues - iOS

This page will let you updated with iOS SDK known issues with better solution.

## Issue : 1

    dyld[14598]: Symbol not found: \_$s10Starscream14WebSocketEventO12disconnectedyACSS_s6UInt16VtcACmFWC Referenced from: /private/var/containers/Bundle/Application/52875D06-E266-4BF1-929D-AA46D0EA1DF4/VideoTest.app/Frameworks/VideoSDKRTC.framework/VideoSDKRTC Expected in: /private/var/containers/Bundle/Application/52875D06-E266-4BF1-929D-AA46D0EA1DF4/VideoTest.app/Frameworks/Starscream.framework/Starscream

### Solution

#### Step 1: Adding below script to end of pod file.

```
post_install do |installer|
installer.pods_project.targets.each do |target|
if ['Starscream'].include? target.name
target.build_configurations.each do |config|
config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
end
end
end
end
```

#### Step 2: Run the pod commands

```
1. Clean build folder
2. Clean derived data of project
3. Run `pod repo update`
4. Run `pod update`
5. Run project
```
