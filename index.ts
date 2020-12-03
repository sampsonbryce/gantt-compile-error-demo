import GSTC from "gantt-schedule-timeline-calendar";
import { Plugin as TimelinePointer } from "gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min";
import { Plugin as Selection } from "gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min";
import { Plugin as ItemResizing } from "gantt-schedule-timeline-calendar/dist/plugins/item-resizing.esm.min";

// This import breaks typechecking
import { Plugin as TimeBookmarks } from "gantt-schedule-timeline-calendar/dist/plugins/time-bookmarks.esm.min";

const config = {
  licenseKey: "jibberish",
  version: "1",
  plugins: [
    TimelinePointer(),
    Selection(),
    ItemResizing(),

    // This plugin has bad types
    TimeBookmarks(),
  ],
};
const state = GSTC.api.stateFromConfig(config);
const app = GSTC({
  element: document.createElement("div"),
  state,
});
