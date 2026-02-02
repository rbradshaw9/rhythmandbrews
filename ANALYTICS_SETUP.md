# Google Analytics Setup

To enable Google Analytics tracking on your site:

1. **Get your Google Analytics ID:**
   - Go to https://analytics.google.com
   - Create a new property or use an existing one
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to Vercel Environment Variables:**
   - Go to your Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add a new variable:
     - Name: `NEXT_PUBLIC_GA_ID`
     - Value: Your GA Measurement ID (e.g., G-XXXXXXXXXX)
     - Select all environments (Production, Preview, Development)

3. **Redeploy:**
   - Trigger a new deployment for the environment variable to take effect

4. **Verify:**
   - Visit your site
   - Check Google Analytics Real-Time reports to see if traffic is being tracked

## Local Development

For local testing, create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Note: The `NEXT_PUBLIC_` prefix makes this variable available to the browser.
