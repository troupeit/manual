---
sidebar_position: 5
---

# QLab Bridge

The QLab Bridge is a lightweight Python script that keeps TroupeIT's web interface in sync with QLab during your show. When you fire a cue in QLab, the bridge automatically updates TroupeIT to display the current show's cue on the LiveView Page

## How It Works

![QLab Bridge Architecture - QLab sends OSC messages to the Bridge, which makes HTTPS API calls to TroupeIT](/img/qlab-bridge-diagram.png)

When you run a show in QLab with TroupeIT-imported cues, each "Go" sends an OSC message to the bridge. The bridge then calls the TroupeIT API to update which cue is currently playing, keeping the TroupeIT web interface in sync for all connected users.

## Requirements

- Python 3.x
- macOS (QLab is macOS only)
- A TroupeIT API key

## Installation

### 1. Download the Bridge

Download the QLab Bridge files from:

https://app.troupeit.com/applescripts/qlab_bridge/

### 2. Install Dependencies

```bash
cd qlab_bridge
pip install -r requirements.txt
```

### 3. Get Your API Key

Generate an API key from the [API Settings Page](https://app.troupeit.com/settings/edit). See [API Access](../reference/api-access) for details.

### 4. Configure

Create a `troupeit_config.json` file in the `qlab_bridge` directory:

```json
{
  "api_key": "your-64-character-api-key",
  "api_endpoint": "https://app.troupeit.com",
  "osc_port": 9000
}
```

## Running the Bridge

```bash
python qlab_bridge.py
```

The bridge auto-loads `troupeit_config.json` from its directory. You can also configure via command line or environment variables:

```bash
# Command-line argument
python qlab_bridge.py --api-key YOUR_KEY

# Environment variable
export TROUPEIT_API_KEY=your_key
python qlab_bridge.py
```

When running, the bridge will:
- Listen for OSC messages on port 9000
- Automatically authenticate with TroupeIT
- Update the current cue when it receives a message from QLab

## QLab Setup

### 1. Configure Network Patch

In QLab Workspace Settings → Network:
1. Add a new patch named "TroupeIT"
2. Set destination to `127.0.0.1` (or the machine running the bridge)
3. Set port to `9000`
4. Set type to OSC

### 2. Import Show from TroupeIT

1. Download your show from TroupeIT (includes metadata.tsv)
2. Run the import AppleScript in QLab (see [QLab Integration](./qlab-integration))
3. When prompted, choose "Yes" to generate Network Cues

Each imported cue will be a Group containing:
- A Network Cue that sends the cue ID to the bridge
- The media cue (Audio/Video) or Memo

### 3. Test

1. Start the bridge: `python qlab_bridge.py`
2. Fire a cue in QLab
3. The bridge should log the update
4. The TroupeIT web interface should show the current cue

## Command Line Options

| Option | Description |
|--------|-------------|
| `-k, --api-key KEY` | TroupeIT API key |
| `-H, --host URL` | API host (default: https://app.troupeit.com) |
| `-p, --port PORT` | OSC listening port (default: 9000) |
| `-v, --verbose` | Enable debug logging |
| `-h, --help` | Show help message |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `TROUPEIT_API_KEY` | API key (alternative to --api-key) |
| `TROUPEIT_API_HOST` | API host URL |
| `TROUPEIT_OSC_PORT` | OSC listening port |

## Troubleshooting

### "API key validated successfully" but no cue updates

- Check that QLab's Network Patch is sending to the correct IP/port
- Verify the Network Cue's message is correct
- Check the bridge console for error messages

### "403 Forbidden" errors

- Verify your API key has access to the show's event
- The API key must belong to a user who is a member of the event's company

### "404 Not Found" errors

- The cue ID may be incorrect or the show item was deleted
- Re-download and re-import from TroupeIT to get fresh IDs

### Testing OSC Messages

Use `oscsend` (install via `brew install liblo`) to test:

```bash
oscsend localhost 9000 /troupeit/cue s "507f1f77bcf86cd799439020"
```
