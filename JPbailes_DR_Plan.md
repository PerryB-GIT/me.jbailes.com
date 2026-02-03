# jpbailes.com Disaster Recovery Plan

## Site Information
- **Domain**: jpbailes.com, me.jbailes.com
- **Primary Hosting**: GCP Cloud Run (us-central1)
- **Backup Hosting**: Render.com (free tier)
- **DNS Provider**: GoDaddy

---

## Failover Matrix

| Scenario | Primary Action | Secondary Action |
|----------|---------------|------------------|
| GCP Cloud Run Down | Failover to Render.com | Check GCP status page |
| Render.com Down | Stay on Cloud Run | N/A (primary working) |
| Both Down | GitHub Pages static | Contact hosting support |
| DNS Issues | Check GoDaddy propagation | Use direct Cloud Run URL |

---

## Current Production URLs

### Primary (GCP Cloud Run)
- Domain: https://jpbailes.com
- Direct: https://jpbailes-301352865144.us-central1.run.app

### Backup (Render.com)
- Direct: https://jpbailes.onrender.com

---

## Failover Procedure: GCP → Render

### Step 1: Verify GCP is Down
```bash
# Check Cloud Run directly
curl -I https://jpbailes-301352865144.us-central1.run.app

# Check public domain
curl -I https://jpbailes.com
```

### Step 2: Verify Render is Up
```bash
curl -I https://jpbailes.onrender.com
```

### Step 3: Update DNS at GoDaddy
1. Log into GoDaddy → Domain Portfolio → jpbailes.com
2. Go to DNS Management
3. **Delete** existing A records (216.239.x.x)
4. **Add** CNAME record:
   - Name: @ (or leave blank)
   - Value: jpbailes.onrender.com
   - TTL: 600 (10 minutes)
5. Repeat for me.jbailes.com if applicable

### Step 4: Verify Failover
```bash
# Wait 5-10 minutes for DNS propagation
nslookup jpbailes.com
curl -I https://jpbailes.com
```

---

## Recovery Procedure: Render → GCP

### When GCP is Restored
1. Verify Cloud Run service is healthy:
```bash
curl -I https://jpbailes-301352865144.us-central1.run.app
```

2. Update DNS at GoDaddy:
   - **Delete** CNAME record
   - **Add** A records:
     - 216.239.32.21
     - 216.239.34.21
     - 216.239.36.21
     - 216.239.38.21

3. Verify recovery:
```bash
curl -I https://jpbailes.com
```

---

## Emergency Contacts

- **GCP Status**: https://status.cloud.google.com/
- **Render Status**: https://status.render.com/
- **GoDaddy Support**: 480-505-8877
- **Owner**: Perry ({YOUR_EMAIL})

---

## Redeploy Commands

### Redeploy to GCP Cloud Run
```bash
cd ~/me.jbailes.com
gcloud run deploy jpbailes \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --project support-forge
```

### Trigger Render Rebuild
- Push any commit to GitHub master branch, OR
- Dashboard → jpbailes service → Manual Deploy

---

## Known Issues

### Contact Form During Failover
- Contact form uses AWS SES which may be unavailable
- Workaround: Users can email {YOUR_EMAIL} directly
- TODO: Implement SendGrid fallback

### SSL Certificate
- GCP: Google-managed, automatic
- Render: Auto-provisioned via Let's Encrypt

---

## Last Updated
2025-01-30 - Initial DR plan created
