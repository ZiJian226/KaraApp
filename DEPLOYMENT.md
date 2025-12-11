# KaraApp Deployment Guide

## Quick Start (Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```env
NEXT_PUBLIC_API_URL=https://your-domain.com
ADMIN_PASSWORD=your-secure-password
```

## Admin Access

- URL: `/admin`
- Default password: `admin123` (⚠️ CHANGE IN PRODUCTION!)

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically
4. Configure environment variables in Vercel dashboard

### Option 2: Traditional Hosting

1. Build the application: `npm run build`
2. Upload `.next/`, `public/`, `package.json`, `next.config.js` to server
3. Run `npm install --production`
4. Start with `npm start`

## Backend Integration (Future)

The current implementation uses in-memory storage. To integrate with PostgreSQL:

1. Install database client: `npm install pg`
2. Replace the `dataStore` in `lib/store.ts` with database queries
3. Update API routes to use database connections
4. Set `DATABASE_URL` in environment variables

## Cloudflare R2 (Gallery - Future)

To add gallery feature with Cloudflare R2:

1. Install AWS SDK: `npm install @aws-sdk/client-s3`
2. Configure R2 credentials in environment variables
3. Create gallery upload API route
4. Add gallery page

## Features Checklist

- ✅ Song submission (YouTube/Spotify/SoundCloud)
- ✅ Queue display with real-time updates
- ✅ Admin dashboard with queue management
- ✅ Priority system for first-time singers
- ✅ Song history tracking
- ✅ All required pages (rules, FAQ, contact, about, privacy)
- ✅ Custom color theme (#502380, #750000, #14123b, #F9E076, #FC94AF, #363636)
- ✅ Mobile responsive design
- ⏳ Database integration (PostgreSQL on atspace)
- ⏳ Gallery with Cloudflare R2

## Security Notes

- Change admin password from default
- Enable HTTPS in production
- Configure CORS properly for API routes
- Keep dependencies updated
- Review and update privacy policy as needed

## Support

For issues or questions, refer to the Contact page or create a GitHub issue.
