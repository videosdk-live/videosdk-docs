---
sidebar_label: API Error codes
pagination_label: API Error codes
---

# Error Event

This event is helpful for development level troubleshooting while using API.

This event can ease your development process.

We have depicted a specific constant with code and message in the below table.

| Constant               | Code | Message                                                                                                                                                                                                                                                                     |
| ---------------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **invalid_params**     | 400  | Please provide a valid `roomId` in body params. `PartcipantId` is required in request body. `RoomId` is invalid. 'region' field is invalid.                                                                                                                                 |
| **invalid_token**      | 401  | `token` is invalid.                                                                                                                                                                                                                                                         |
| **unauthorized_token** | 403  | Unauthorised access to V2 API, please provide valid payload version. Your role must be a CRAWLER in token payload to use V2 API.                                                                                                                                            |
| **resource_not_found** | 404  | Room not found. Room Recording not found. Session not found. HLS not found. No active participants found.                                                                                                                                                                   |
| **fetch_error**        | 406  | Failed to get session details. Unable to fetch rooms. Unable to list Room Recordings. Failed to get Active participant List. Failed to end session. Failed to remove participant from session.                                                                              |
| **invalid_object**     | 422  | Please provide streamKey. Please provide streamUrl. Please provide layout under config object. Please provide outputs. layout.type must be SPOTLIGHT, SIDEBAR or GRID. layout.priority must be SPEAKER or PIN. grid Size must be a positive number. grid Size must be ≤ 25. |
