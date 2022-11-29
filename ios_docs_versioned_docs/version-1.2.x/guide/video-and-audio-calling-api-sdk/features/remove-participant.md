---
title: Remove participant from the meeting - IOS SDK
hide_title: false
hide_table_of_contents: false
description: Remove a participant or a peer from the meeting while it is still in progress. It helps in meeting moderation.
sidebar_label: Remove Participant
pagination_label: Remove Participant
keywords:
  - remove participant
  - remove peer
  - block participant
  - on participant removed
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: remove-participant
---

# Remove Participant

Remove participant allows removing participant while session is on-going. This can be helpful when moderation in particular meeting is required. 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```js
let participant = meeting?.participants.first(where: { $0.id == <participantId> })

// Remove participant from active session
// This will emit an event called "onParticipantLeft" to that particular participant
participant?.remove()
```


### Events

**onParticipantLeft** - Removing participant will trigger `onParticipantLeft` event.


```js
// MARK: - MeetingEventListener

extension MeetingViewController: MeetingEventListener {

    /// A participant left from the meeting
    /// - Parameter participant: participant object
    func onParticipantLeft(_ participant: Participant) {
        // remove listener
        participant.removeEventListener(self)

        // remove from list and update ui
        guard let index = self.participants.firstIndex(where: { $0.id == participant.id }) else {
            return
        }

        // remove participant from list
        participants.remove(at: index)

        // hide from ui
        // ex. remove from collectionview
        // removeParticipantFromGridView(at: index)
    }
}
```
