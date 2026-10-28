# 🚀 Quick Start - Run TensorTopology Locally

## 1. Install Dependencies (First Time Only)
```powershell
# Install web dependencies
cd d:\website\web
npm install

# Install API dependencies  
cd d:\website\api
npm install
```

## 2. Generate Logo & Icons (First Time Only)
```powershell
cd d:\website\web
npm run brand
```

## 3. Create Environment Files

### Web Environment (`web\.env.local`)
```powershell
cd d:\website\web
Copy-Item .env.example .env.local
```

Then edit `web\.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### API Environment (`api\.env`)
```powershell
cd d:\website\api
Copy-Item .env.example .env
```

Then edit `api\.env`:
```env
PORT=4000
ALLOWED_ORIGINS=http://localhost:3000
AI_INBOX=itsahmad0175@gmail.com
AI_RESEND_KEY=
NETWORK_INBOX=najamdanialdanialmasih@gmail.com
NETWORK_RESEND_KEY=
MAIL_FROM=TensorTopology <onboarding@resend.dev>
```

**Note:** Leave RESEND_KEY empty for now. Get keys from https://resend.com when ready to test email.

## 4. Run the Website

**Open 2 terminals:**

### Terminal 1 - API
```powershell
cd d:\website\api
npm run dev
```
Wait for: `API listening on port 4000`

### Terminal 2 - Web
```powershell
cd d:\website\web
npm run dev
```
Wait for: `Local: http://localhost:3000`

## 5. Open Browser
Go to: **http://localhost:3000**

---

## ⚠️ Known Issues (Normal)

1. **Project images showing broken**: We haven't added real images yet. Everything else works!
2. **Contact form**: Works without API keys (shows direct links). Add Resend keys to test email sending.

---

## 🎯 Ready for Deployment?

After you see it working locally, we'll set up:
1. **Resend** - Get API keys for contact form
2. **Render** - Deploy API backend (free)
3. **Vercel** - Deploy website (free)

See `LOCAL_SETUP.md` for detailed guide!
