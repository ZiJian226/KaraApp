# KaraApp 🎤

Next.js karaoke queue management app for TPJCG club.

## Features

- **Multi-Platform Support**: Submit songs from YouTube, Spotify, or SoundCloud
- **Priority Queue System**: First-time singers automatically get priority
- **Real-Time Updates**: Queue updates automatically every few seconds
- **Admin Dashboard**: Manage queue with reorder, skip, hold, and play controls
- **Song History**: Track all previously played songs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## Color Theme

- Primary: #502380 (Purple)
- Secondary: #750000 (Dark Red)
- Dark: #14123b (Navy)
- Accent: #F9E076 (Yellow)
- Pink: #FC94AF (Pink)
- Gray: #363636 (Dark Gray)

## Pages

- **Home** (`/`): Landing page with quick start guide
- **Queue** (`/queue`): View current queue and now playing
- **Submit** (`/submit`): Submit a song to the queue
- **Admin** (`/admin`): Queue management dashboard (password protected)
- **History** (`/history`): View previously played songs
- **Rules** (`/rules`): Karaoke rules and guidelines
- **FAQ** (`/faq`): Frequently asked questions
- **About** (`/about`): About KaraApp and TPJCG
- **Contact** (`/contact`): Contact form
- **Privacy** (`/privacy`): Privacy policy

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/ZiJian226/KaraApp.git
cd KaraApp
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Admin Access

The admin dashboard is accessible at `/admin`. Default password is `admin123` (change this in production!).

## Technology Stack

- **Frontend**: Next.js 14 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes (in-memory storage for demo)
- **Production Backend**: PHP + PostgreSQL (atspace hosting)
- **Gallery**: Cloudflare R2 (optional)

## Future Enhancements

- Database integration with PostgreSQL
- WebSocket for real-time updates
- YouTube/Spotify/SoundCloud API integration for metadata
- Gallery feature with Cloudflare R2
- User authentication
- Multiple room support
- Analytics and statistics

## Contributing

This is a club project for TPJCG. If you're a member and want to contribute, please contact the maintainers.

## License

ISC
