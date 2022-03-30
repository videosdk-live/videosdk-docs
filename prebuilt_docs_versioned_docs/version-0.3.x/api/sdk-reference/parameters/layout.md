---
sidebar_position: 1
sidebar_label: Layout Feature Parameter
pagination_label: Layout Feature Parameter
title: Layout Feature Parameter
---

<div class="sdk-api-ref-only-h4">

## layout

- type : `json object`

### type

- type : `String`

- `layout.type` represents the type of layout which can be `SPOTLIGHT` | `SIDEBAR` | `GRID`

### priority

- type : `String`

- `layout.priority` represents the priority of layout type which can be `SPEAKER` | `PIN`

### gridSize

- type : `Number`

- `layout.gridSize` represents an on screen participants to be shown if `layout.type` set to `true`

```js
meeting.init({
  //other params
  layout: {
    type: "SPOTLIGHT", // "SPOTLIGHT" | "SIDEBAR" | "GRID"
    priority: "SPEAKER", // "SPEAKER" | "PIN",
    gridSize: 3,
  },
  //other params
});
```

</div>
