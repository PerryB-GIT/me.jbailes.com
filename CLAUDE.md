# jpbailes.com - Personal Portfolio Site

## Project Overview
Perry's personal portfolio and resume website.

**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, React 19

## Hosting Architecture

### Primary: GCP Cloud Run
- **Project**: support-forge
- **Region**: us-central1
- **Service**: jpbailes
- **URL**: https://jpbailes-301352865144.us-central1.run.app (direct)
- **Domain**: jpbailes.com, me.jbailes.com

### DR Backup: Render.com
- **Service**: jpbailes
- **URL**: https://jpbailes.onrender.com
- **Auto-deploy**: From GitHub master branch

## Deployment Commands

### Deploy to Cloud Run (Primary)
```bash
cd ~/me.jbailes.com
gcloud run deploy jpbailes \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --project support-forge
```

### Local Development
```bash
npm run dev    # http://localhost:3000
npm run build  # Production build
npm run lint   # ESLint check
```

## DNS Configuration (GoDaddy)

### jpbailes.com A Records (Cloud Run)
```
216.239.32.21
216.239.34.21
216.239.36.21
216.239.38.21
```

### CNAME Records
- www → ghs.googlehosted.com

## Failover Procedure
See `JPbailes_DR_Plan.md` for full DR procedures.

Quick failover to Render:
1. GoDaddy → jpbailes.com → DNS Management
2. Delete A records
3. Add CNAME: @ → jpbailes.onrender.com

## Contact Form
Uses AWS SES for email sending via `/api/contact` route.
- Fallback needed if SES unavailable (AWS suspended)

## Project Structure
```
src/
├── app/           # Next.js App Router pages
│   ├── about/     # About page
│   ├── api/       # API routes (contact form)
│   ├── blog/      # Blog pages
│   ├── contact/   # Contact page
│   ├── portfolio/ # Portfolio page
│   └── resume/    # Resume page
├── components/    # React components
│   └── layout/    # Header, Footer, ThemeProvider
├── content/       # MDX content (blog, projects)
└── lib/           # Utility functions
```

## Environment Variables
```
# For SES (contact form)
AWS_ACCESS_KEY_ID=xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_REGION=us-east-1
```

## Monitoring
- Uptime monitor: ~/mcp-servers/uptime-monitor/
- Cost tracking: GCP costs included in support-forge project monitoring

## Related Sites
- me.jbailes.com (alias, same site)
- support-forge.com (same GCP project: support-forge)
