---
sidebar_label: Known Issues
pagination_label: Known Issues
---

# Known Issues

This page will let you updated with Flutter SDK known issues with better solution.

## Issue : 1

### Error

`iOS: webrtc/webrtc.h file not found.`

### Solution

**Add below script to end of pod file.**

```
post_install do |installer|
  installer.pods_project.targets.each do |target|
    flutter_additional_ios_build_settings(target)
    target.build_configurations.each do |build_configuration|
      build_configuration.build_settings['EXCLUDED_ARCHS[sdk=iphonesimulator*]'] = 'arm64 i386'
      config.build_settings['ONLY_ACTIVE_ARCH'] = 'YES'
    end
  end
end
```
