---
sidebar_position: 4
---

# QLab Integration

TroupeIT offers integration with [Qlab](https://qlab.app/], the popular macOS audio/video playback software.

## Setup Process

1. Download the show zip file from the Download page on your show.
1. Download the AppleScript from the link below
1. Run the script by double-clicking it or by running it from Apple's Script Editor.
1. Unzip the show file.
1. Create a new show in QLAb.
1. Locate the `metadata.tsv` file in your download forder. Select it, and the script will add all of your cues to your show.
1. Cues are created with proper labels and organization

## Download

AppleScripts for QLab integration are available at:

### QLab Import Script (compiled)
https://app.troupeit.com/applescripts/import_to_qlab.scpt

### QLab Import script (raw source code as text)
https://app.troupeit.com/applescripts/import_to_qlab.applescript


## What Gets Imported

The QLab import creates:
- Audio cues for each act's music
- Proper cue naming matching your show schedule
- Organized cue lists

For details on the download ZIP file structure and metadata format, see [File Formats](../reference/file-formats).

## Workflow
```
TroupeIT Show → Download Assets → Run AppleScript → QLab Workspace Ready
```

## Live Sync with QLab Bridge

Want TroupeIT to automatically show which cue is playing during your show? The [QLab Bridge](./qlab-bridge) is a Python script that syncs QLab with TroupeIT in real-time. When you fire a cue in QLab, TroupeIT's web interface updates automatically for all connected users.

:::note macOS Only
QLab is a macOS application. This integration is only available on Mac computers.
:::
