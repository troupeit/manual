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

TroupeIT has automatic, AI Analysis of your audio file which takes place immediately after upload and 
we will let you know if something is wrong. We believe this is a unique feature to TroupeIT, and the
first of it's kind for show management software.

:::warning Audio Levels
Ensure your music files are properly leveled. Extremely quiet or loud tracks can cause issues during the show.
:::

### How does it work?

We look for common issues in audio files: 

 - **Low volume**: If the audio is constantly below -24dB
 - **Leading / Trailing Silence**: If the audio has more than 3 seconds of silence (-50dB) at the beginning or end.
 - **Low Dynamics**: We calculate the Audio Crest Factor of your file. 
 - **Clipping**: If the audio file frequently hits -0.1dB it may clip or distort

All of this information is connected together to create our "audio quality score", a measure from 0-100 indicating
how well our robots think your audio will sound. 

:::tip What is Audio Crest Factor? The nerdy stuff!
Crest factor in audio is the ratio, measured in decibels (dB), between the peak level and the Root Mean Square (RMS) level of a signal, indicating its dynamic range or how "spiky" it is. A high crest factor means large differences between peaks and averages (like classical music or drums), while a low crest factor means peaks are closer to the average (like a sine wave or speech), affecting how much power is needed and how dynamic it sounds. For TroupeIT, a crest factor of 6-20dB is healthy. Otherwise, we flag the file as 'low dynamics'. Below 3dB is heavily compressed and probably won't sound great in a live venue. 
:::