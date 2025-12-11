import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-accent mb-4">
            Welcome to KaraApp
          </h1>
          <p className="text-2xl text-pink mb-8">
            TPJCG Club Karaoke Queue Management
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Submit your favorite songs, view the queue in real-time, and enjoy an organized karaoke experience.
            Our system prioritizes first-time singers to ensure everyone gets a chance to shine!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link href="/submit" className="bg-secondary hover:bg-primary transition-colors p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎤</div>
              <h2 className="text-2xl font-bold text-accent mb-2">Submit a Song</h2>
              <p className="text-gray-200">
                Add your song to the queue from YouTube, Spotify, or SoundCloud
              </p>
            </Link>

            <Link href="/queue" className="bg-secondary hover:bg-primary transition-colors p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📋</div>
              <h2 className="text-2xl font-bold text-accent mb-2">View Queue</h2>
              <p className="text-gray-200">
                See the current queue and track your position in real-time
              </p>
            </Link>

            <Link href="/history" className="bg-secondary hover:bg-primary transition-colors p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📜</div>
              <h2 className="text-2xl font-bold text-accent mb-2">Song History</h2>
              <p className="text-gray-200">
                Browse previously played songs and relive the memories
              </p>
            </Link>
          </div>

          <div className="mt-16 p-8 bg-gray rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-accent mb-4">Quick Start</h3>
            <ol className="text-left space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="text-pink font-bold mr-3">1.</span>
                <span>Read the <Link href="/rules" className="text-accent hover:underline">rules</Link> and <Link href="/faq" className="text-accent hover:underline">FAQ</Link></span>
              </li>
              <li className="flex items-start">
                <span className="text-pink font-bold mr-3">2.</span>
                <span>Submit your song with your name and song link</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink font-bold mr-3">3.</span>
                <span>Watch the queue - first songs get priority!</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink font-bold mr-3">4.</span>
                <span>Enjoy singing and have fun! 🎉</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
