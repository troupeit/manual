---
sidebar_position: 3
---

# Uploading Media

Acts can have one or more attached files (called "passets" - performance assets).

Files are owned by the user that uploads them. 

## Supported File Types

### Music
Upload your act's music track.

- Supported formats: MP3, WAV, AIFF, M4A
- Only one music track per act

### Images/Video
Upload images or video for projection.

- Add multiple files if needed
- Common formats: JPG, PNG, GIF, MP4, MOV

## How to Upload Files

1. Go to your act's edit page
2. Click **Upload** in the Assets section
3. Drag files to the upload area or click to browse
4. Wait for upload to complete
5. Select the file to attach it to your act

## File Requirements

- Files should be production-ready (correct format, levels, etc.)
- Music should be the final version you want played
- Video should be in a standard format

## Audio Analysis

TroupeIT automatically analyzes every uploaded audio file immediately after upload. We run **20+ checks** covering playback quality (levels, silence, dynamics, clipping, stereo utilization) and encoding authenticity (detecting upscaled, mislabeled, or fake hi-res files).

If something looks wrong, you'll see warning badges in the file manager, act editor, and show download page. This is a unique feature for show management software — we help you catch problems before show day.

:::warning Audio Levels
Ensure your music files are properly leveled. Extremely quiet or loud tracks can cause issues during the show.
:::

### Playback quality checks (summary)

| Check | When we flag it |
|-------|-----------------|
| **Low volume** | RMS below −24 dB |
| **Leading / trailing silence** | More than 3 seconds of silence (−50 dB) at the start or end |
| **Low dynamics** | Crest factor below 6 dB (heavily compressed) |
| **Clipping** | Flattened samples at the digital ceiling (peak above −3 dB) |
| **Mono in stereo** | Stereo file with duplicated mono or single-channel content |

These feed into an **audio quality score** (0–100) indicating how well the file should sound in a live venue.

### Authenticity checks (summary)

We also verify that files are honestly encoded — for example, catching a "320 kbps" MP3 that was upscaled from a lower-quality source, lossy audio inside a FLAC container, or fake hi-res files with no high-frequency content. Files receive an **Authentic**, **Suspect**, or **Upscaled / Fake** verdict.

See the complete reference for all 12 warning types, thresholds, and troubleshooting: **[Audio Checks Reference](../reference/audio-checks.md)**.

:::tip What is Audio Crest Factor? The nerdy stuff!
Crest factor in audio is the ratio, measured in decibels (dB), between the peak level and the Root Mean Square (RMS) level of a signal, indicating its dynamic range or how "spiky" it is. A high crest factor means large differences between peaks and averages (like classical music or drums), while a low crest factor means peaks are closer to the average (like a sine wave or speech), affecting how much power is needed and how dynamic it sounds. For TroupeIT, a crest factor of 6–20 dB is healthy. Otherwise, we flag the file as **low dynamics**. Below 3 dB is heavily compressed and probably won't sound great in a live venue.
:::