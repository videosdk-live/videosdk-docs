---
sidebar_label: Release Notes
pagination_label: Release Notes
---

# Release Notes

This page will keep you update all the releases of Prebuilt SDK.

## v0.3.12

**Release Date** : 31th July 2022

**Change log** :

1. Create a poll(BETA) release.
2. any participant can create a poll by passing `canCreatePoll` true.

**Bug Fix** : -

## v0.3.11

**Release Date** : 28th July 2022

**Change log** :

1. In Hls for visible controls you can pass `playerControlsVisible` true. so that participant can view control of player.

**Bug Fix** : -

## v0.3.10

**Release Date** : 15th July 2022

**Change log** :

1. HLS can be enabled by any participant with permission `hls.enabled`.
2. Participate can toggle other participant's mode by passing `toggleParticipantMode` true.
3. Hls can be toggle by any participant with passing `toggleHls`.
4. Hls mode added with this parameter `mode`. it can be `VIWER` or `CONFERENCE`.

**Bug Fix** : -

## v0.3.9

**Release Date** : 8th July 2022

**Change log** :

1. Participant can now toggle other participant screenShare if they are having permission `partcipantCanToogleOtherScreenShare`.

**Bug Fix** : -

---

## v0.3.8

**Release Date** : 8th July 2022

**Change log** :

1. Participant can now toggle other participant screenShare if they are having permission `partcipantCanToogleOtherScreenShare`.

**Bug Fix** :

1. Join screen is now responsive if `title` or `meetingUrl` is not provided.

---

## v0.3.7

**Release Date** : 5th July 2022

**Change log** :

1. Add google echoCancellation params during creation of audio stream.

2. Loader Animation added between join screen.

**Bug Fix** :

1. Remove googDsp dependency warn.

---

## v0.3.6

**Release Date** : 7th Jun 2022

**Change log** : None

**Bug Fix** :

1. Fullscreen model issue resolved.

2. Resolve UDP port blocking and video blackout issue.

---

## v0.3.4

**Release Date** : 14th May 2022

**Change log** : None

**Bug Fix** :

1. Throw error when device or browser does not support audio or video communication.

2. Resolved error `No peers found for the Data consumer` while start recording/ livestream/hls.

---

## v0.3.2 & v0.3.3

**Release Date** : 4th May 2022

**Change log** :

1. Region support added for new meetings

**Bug Fix** :

2. Mozila browser (Mac OS) Video Control button not working.

---

## v0.3.0

**Release Date** : 19th March 2022

**Change log** :

1. Change layout dynamically to all participants
2. Changing layout will reflect to recorders
3. Livestream configurations options added
4. `Go Live` button added, so that participant can start live stream while running meeting

---

## v0.3.1

**Release Date** : 22nd March 2022

**Change log** : None

**Fix** :

1. Topbar icons container component code refactoring.
