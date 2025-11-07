# Deployment Guide

## Quick Start

This is a static website with no build process or dependencies. Simply upload `index.html` to your web server.

## Deployment Options

### Option 1: Traditional Web Server (Apache/Nginx)

```bash
# Copy to web root
cp index.html /var/www/html/
```

Configure your web server to serve the file at `petname.moles.dev`.

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

### Option 3: GitHub Pages

1. Create a new GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. Point your custom domain `petname.moles.dev` to GitHub Pages

### Option 4: Cloudflare Pages

1. Create a new Cloudflare Pages project
2. Connect your Git repository
3. Build settings:
   - Build command: (none)
   - Build output directory: `/`
4. Configure custom domain

### Option 5: AWS S3 + CloudFront

```bash
# Create S3 bucket
aws s3 mb s3://petname.moles.dev

# Enable static website hosting
aws s3 website s3://petname.moles.dev --index-document index.html

# Upload file
aws s3 cp index.html s3://petname.moles.dev/ --acl public-read

# Configure CloudFront distribution (optional, for HTTPS)
```

### Option 6: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## DNS Configuration

Point your domain to your hosting provider:

```
A record: petname.moles.dev -> [your-server-ip]
```

Or for CDN providers like Netlify/Vercel:

```
CNAME: petname.moles.dev -> [provider-domain]
```

## Testing Locally

```bash
# Python
python3 -m http.server 8000

# PHP
php -S localhost:8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Requirements

- Any web server capable of serving static HTML files
- No server-side processing required
- No database required
- Works on any modern web browser
