# TroupeIT Documentation Site Deployment

This documentation site is built with Docusaurus and deployed using Kamal to `docs.troupeit.com`.

## Prerequisites

- Ruby with Kamal gem installed (`gem install kamal`)
- Node.js for building Docusaurus
- Docker
- 1Password CLI (`op`) for secrets management
- SSH access to `app.troupeit.com`

## Build the Documentation

```bash
# Install dependencies (first time only)
npm install

# Build the static site
npm run build
```

This generates the static site in the `build/` directory.

## Deploy

### First-time setup

1. Ensure DNS is configured (already done in Terraform)
2. Ensure you're logged into 1Password CLI: `op signin`
3. Run initial deployment:

```bash
kamal setup
```

### Regular deployments

After making changes to documentation:

```bash

# clear build folder
rm -rf build

# Build the static site
npm run build

# commit everything to git
git add build 
git commit -a -m '... message ...'
git push

# Deploy to production
kamal deploy
```

### Useful commands

```bash
# Check deployment status
kamal app details

# View logs
kamal app logs

# Restart the service
kamal app boot

# Remove deployment
kamal remove
```

## Local Development

```bash
# Start development server
npm start
```

This starts a local server at http://localhost:3000 with hot reload.

## Local Docker Testing

To test the Docker image locally before deployment:

```bash
# Build the Docker image
docker build -t troupeit-docs .

# Run locally
docker run -p 4000:80 troupeit-docs

# Visit http://localhost:4000
```

## Architecture

- **Host**: `app.troupeit.com` (shared with main TroupeIT app)
- **Proxy**: kamal-proxy handles TLS termination and routing
- **Container**: nginx serving static files from Docusaurus build
- **Domain**: `docs.troupeit.com`

## Files

- `Dockerfile` - nginx image configuration
- `config/deploy.yml` - Kamal deployment configuration
- `config/server.conf` - nginx server configuration
- `.kamal/secrets` - Secrets fetching (uses 1Password)
