---
sidebar_position: 6
---

# Audio Checks Reference

TroupeIT automatically analyzes every uploaded audio file for playback issues and encoding authenticity. Analysis runs in the background immediately after upload (via the **ulprocessor** upload service) and results appear in the file manager, act editor, show download page, and live view.

There are **12 user-facing warning types** (6 playback quality + 6 authenticity), backed by **20+ distinct analysis steps** on each audio upload.

## Where results appear

- **File manager** — open a file’s detail panel to see loudness metrics, warnings, stereo info, and authenticity verdict
- **Act editor** — compact badges on attached music files
- **Show download page** — per-cue audio status when preparing a show
- **Live view** — warning indicators on assets in the cue list

While a file is still processing, analysis fields may be empty. Refresh or wait for processing to complete.

---

## Playback quality checks

These checks answer: *“Will this file sound good in a live venue?”*

Analysis uses FFmpeg (`astats` for levels/dynamics, `silencedetect` for silence, and a stereo sample for channel utilization). Results are stored on each file and surfaced as warning badges when thresholds are exceeded.

| Warning code | What TroupeIT shows | What we check | Default threshold |
|--------------|---------------------|---------------|-------------------|
| `low_volume` | **Low Volume** | Overall RMS level is too quiet | RMS below **−24 dB** |
| `leading_silence` | **Leading Silence** | Long silence at the start of the track | More than **3 seconds** below **−50 dB** |
| `trailing_silence` | **Trailing Silence** | Long silence at the end of the track | More than **3 seconds** below **−50 dB** |
| `low_dynamics` | **Low Dynamics** | Audio is heavily compressed (limited dynamic range) | Crest factor below **6 dB** |
| `clipping` | **Clipping Detected** | Samples flattened at the digital ceiling (distortion risk) | Flat factor above **0 dB** *and* peak above **−3 dB** |
| `mono_in_stereo` | **Mono in Stereo** | Stereo file contains mono or single-channel content | See [Stereo utilization](#stereo-utilization) below |

### Stereo utilization

Stereo files are sampled (~10 seconds, starting ~60 s in or 5% into the file) and checked for:

1. **Identical channels** — left and right are nearly the same signal (correlation ≥ 0.98 or identical-sample ratio ≥ 0.95)
2. **Single-channel content** — signal on only the left or right channel (one channel’s RMS is less than 1% of the other)

Either condition triggers the `mono_in_stereo` warning. This wastes bits and can produce a poor playback image in a PA system.

### Quality score

In addition to individual warnings, ulprocessor computes a **sound quality score** from 0–100. The score starts at 100 and is reduced for warnings, extreme loudness/quietness, excessive silence, and mono-in-stereo (which halves the remaining score). This score is visible in file metadata for staff users.

### Metrics recorded (playback)

Even when no warning is raised, these values are stored:

| Field | Meaning |
|-------|---------|
| `audio_rms_db` | Average loudness (RMS) in dB |
| `audio_peak_db` | Peak level in dB |
| `audio_crest_factor` | Peak-to-RMS ratio in dB (dynamic range indicator) |
| `audio_leading_silence` | Seconds of silence at the start |
| `audio_trailing_silence` | Seconds of silence at the end |
| `audio_stereo_channels` | Channel count from the file |
| `audio_stereo_correlation` | Left/right correlation (0–1) |
| `audio_stereo_identical_ratio` | Fraction of samples where L == R |
| `audio_stereo_single_channel` | Whether only one channel carries signal |
| `audio_stereo_active_channel` | `left` or `right` when single-channel |
| `sound_quality_score` | Composite 0–100 quality score |

---

## Authenticity checks

These checks answer: *“Is this file honestly encoded, or upscaled / mislabeled?”*

Authenticity analysis runs by default on every audio upload. It uses ffprobe for stream metadata, splits the file into analysis segments, measures spectral frequency cutoffs, and applies format-specific validators.

### Verdicts

| Verdict | Label in UI | Meaning |
|---------|-------------|---------|
| `genuine` | **Authentic** | No upscaling or fake encoding detected |
| `suspect` | **Suspect** | Some segments could not be verified; review recommended |
| `fake` | **Upscaled / Fake** | Likely upscaled, re-encoded, or misrepresented |

The verdict is accompanied by a **confidence** score (0–100%) based on how many analysis segments voted “fake.”

### Warning types

| Warning code | What TroupeIT shows | What we check |
|--------------|---------------------|---------------|
| `spectral_cutoff_mismatch` | **Spectral Cutoff** | Measured high-frequency cutoff is lower than expected for the declared bitrate/format |
| `bitrate_bandwidth_mismatch` | **Bitrate Mismatch** | Declared bitrate exceeds what the measured audio bandwidth supports |
| `overencoded_low_source` | **Low Source Upscaled** | File appears re-encoded from a lower-quality source (stream bitrate exceeds inferred source by >32 kbps) |
| `fake_hires_upsample` | **Fake Hi-Res** | Sample rate ≥ 88.2 kHz but effective bandwidth ≤ 24 kHz |
| `lossy_in_lossless_container` | **Lossy in Lossless** | Lossy spectral signature inside a lossless container (FLAC, WAV, etc.) |
| `fake_dsd` | **Fake DSD** | DSD file (`.dsf`, `.dff`) lacks expected ultrasonic noise-shaping signature |

### How authenticity analysis works

1. **Stream inspection** — ffprobe reads codec, sample rate, bitrate, channels, and duration
2. **Format classification** — file is categorized as lossy, lossless, hi-res (≥ 88.2 kHz), or DSD
3. **Segmentation** — for files longer than 60 seconds, up to 5 segments (~30 s each) are extracted from the middle and end of the file
4. **Spectral analysis** — each segment’s frequency cutoff is measured by scanning band energy (5 bands for standard audio; additional bands for hi-res)
5. **Segment voting** — per-segment results are aggregated; strict majority “fake” votes produce a `fake` verdict
6. **Format-specific validators** (when applicable):
   - **Lossless containers** — HF/mid energy ratio heuristic to detect lossy content
   - **DSD files** — ultrasonic band signature check for genuine DSD-to-PCM conversion

### Expected spectral cutoffs (lossy)

When comparing measured cutoff to declared bitrate:

| Declared bitrate | Minimum expected cutoff |
|------------------|-------------------------|
| ≥ 256 kbps (e.g. “320k”) | 19,500 Hz |
| ≥ 192 kbps | 18,500 Hz |
| ≥ 128 kbps | 17,500 Hz |
| ≥ 96 kbps | 15,500 Hz |

### Metrics recorded (authenticity)

| Field | Meaning |
|-------|---------|
| `audio_authenticity_verdict` | `genuine`, `suspect`, or `fake` |
| `audio_authenticity_confidence` | Confidence ratio (0.0–1.0) |
| `audio_authenticity_warnings` | Array of warning codes (see table above) |
| `audio_stream_codec` | Codec name from ffprobe (e.g. `mp3`, `flac`) |
| `audio_stream_sample_rate` | Sample rate in Hz |
| `audio_stream_bitrate` | Bitrate in bits/sec |
| `audio_spectral_cutoff_hz` | Median measured cutoff across segments |
| `audio_inferred_source_bitrate_kbps` | Estimated true source bitrate from spectral cutoff |
| `audio_segment_count` | Number of segments analyzed |

---

## Full analysis pipeline (20+ steps)

For reference, each audio upload runs roughly these analysis steps:

**Playback quality (11 steps)**

1. RMS level measurement
2. Peak level measurement
3. Crest factor (dynamics) calculation
4. Flat factor (clipping indicator) measurement
5. Leading silence detection
6. Trailing silence detection
7. Stereo channel count probe
8. Stereo correlation analysis
9. Identical-channel ratio check
10. Single-channel-in-stereo detection
11. Composite quality score calculation

**Authenticity (10+ steps)**

12. ffprobe stream metadata extraction
13. Format classification (lossy / lossless / hi-res / DSD)
14. Multi-segment spectral cutoff analysis
15. Per-segment verdict classification
16. Segment vote aggregation
17. Spectral cutoff vs. bitrate expectation
18. Bitrate vs. bandwidth mismatch detection
19. Overencoding / upscaled-source detection
20. Fake hi-res detection
21. Lossy-in-lossless container validation (lossless formats only)
22. DSD signature validation (DSD formats only)

Not every step applies to every file (for example, DSD checks only run on DSD files, and lossless validation only on lossless containers).

---

## What to do when warnings appear

### Playback quality

| Warning | Typical fix |
|---------|-------------|
| Low volume | Normalize or gain-stage the track to a healthy RMS (around −14 to −18 dB for music) |
| Leading / trailing silence | Trim silence in your DAW or editor before export |
| Low dynamics | Use less aggressive limiting/compression; export from the original mix rather than a heavily limited master |
| Clipping | Re-export from a source that is not hitting 0 dBFS; leave headroom |
| Mono in stereo | Export as true mono (single channel) or ensure stereo content has distinct left/right information |

### Authenticity

Authenticity warnings usually mean the file’s **declared quality does not match its actual content** — for example, a “320 kbps” MP3 that was upscaled from a 128 kbps source, or a “96 kHz hi-res” file with no content above 24 kHz.

Re-export from the original high-quality source, or use honestly encoded files from your mastering engineer or music library.

---

## Limitations

- Analysis runs on **audio files only** (MIME types starting with `audio/`).
- Files must finish upload processing before results are available (`processed = 1`).
- Authenticity analysis skips files longer than **30 minutes** (playback quality still runs).
- Very short files (&lt; 60 s) are analyzed as a single segment rather than multiple segments.
- Results are cached by file content hash — identical re-uploads may return cached authenticity results.
- Warnings are advisory; TroupeIT does not block uploads based on analysis results.

---

## Related pages

- [Uploading Media](../acts/uploading-media.md) — how to upload act music and what to expect
- [File Management](../file-management.md) — browsing and managing uploaded files
