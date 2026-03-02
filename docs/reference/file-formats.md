---
sidebar_position: 5
---

# File Formats

This page documents the file formats used when downloading show assets from TroupeIT.

## Download ZIP File

When you download a show from the Download page, you receive a ZIP file containing all assets and metadata for your show.

### ZIP File Contents

The downloaded ZIP file includes:
- **metadata.tsv** - Tab-separated file containing cue information
- **Audio files** - All music files for acts in your show

## File Naming Convention

Audio files are named using the following format:

```
[order]-[act_id]-[sanitized_act_name].[extension]
```

For example: `01-1234-my_awesome_act.mp3`

- **order** - Two-digit sequence number matching the show schedule (01, 02, 03, etc.)
- **act_id** - Unique identifier for the act
- **sanitized_act_name** - Act name with special characters removed and spaces replaced with underscores
- **extension** - Original file extension (mp3, wav, etc.)

## metadata.tsv Format

The `metadata.tsv` file is a tab-separated values file containing information about each cue in your show. Each row represents a cue with the following columns:

| Column | Description |
|--------|-------------|
| order | Cue sequence number |
| act_id | Unique act identifier |
| act_name | Display name for the act |
| filename | Corresponding audio filename |
| duration | Audio duration (if available) |
| notes | Any cue notes from TroupeIT |

This file is used by the [QLab integration](../running-a-show/qlab-integration) AppleScript to automatically create cues in QLab.
