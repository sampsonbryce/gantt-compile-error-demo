# Gantt schedule timeline Time Bookmarks Bug

The TimeBookmarks plugin has a types issue with the `csstype` npm package.

## Setup

Run `yarn` to install dependencies

## The Issue

Compiling this project with `yarn build` results in the following error

```
node_modules/gantt-schedule-timeline-calendar/dist/plugins/time-bookmarks.esm.min.d.ts:2:10 - error TS2305: Module '"../../../csstype"' has no exported member 'Color'.

2 import { Color } from 'csstype';
           ~~~~~


Found 1 error.

error Command failed with exit code 2.
```

## Attempted Solutions

**Comment out the import statement and useage of the TimeBookmarks plugin in index.ts**

- Solves the issue
- Not ideal as the plugin is useful

**Setting `skipLibCheck` to `true` in the tsconfig.json file**

- Solves the issue
- Not ideal as it decreases the benefit of typescript by skipping evaluation of types

**Locking `csstype` to a single version for all dependencies using yarn resolutions**

- Suggested by the typescript docs: https://www.typescriptlang.org/tsconfig#skipLibCheck
- Tested by:
  - Adding resolutions to the package.json
    ```
    "resolutions": {
        "csstype": "3.0.5"
    }
    ```
  - Run `yarn` to update dependencies and lock csstype to `3.0.5`
  - Run `yarn build`
- Does not solve the issue
