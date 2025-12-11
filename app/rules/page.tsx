export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-8">Karaoke Rules</h1>
          
          <div className="space-y-6 text-gray-200">
            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">1. General Guidelines</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be respectful to all participants and wait for your turn</li>
                <li>Each participant should submit only one song at a time</li>
                <li>First-time singers get priority in the queue</li>
                <li>Keep your performance within reasonable time limits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">2. Song Selection</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Submit karaoke or lyric versions of songs</li>
                <li>Avoid songs with explicit or offensive content</li>
                <li>Make sure your link is working before submitting</li>
                <li>Supported platforms: YouTube, Spotify, SoundCloud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">3. Queue Management</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The admin team manages the queue order</li>
                <li>Songs may be held or skipped at admin discretion</li>
                <li>Check the queue display for your turn</li>
                <li>Be ready when your song comes up</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">4. Priority System</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>First songs from each participant get priority</li>
                <li>After your first song, subsequent submissions go to the regular queue</li>
                <li>Priority songs are marked with a ⭐ badge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">5. Etiquette</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encourage and support all singers</li>
                <li>No heckling or negative comments</li>
                <li>Keep the atmosphere fun and positive</li>
                <li>Clean up after yourself</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">6. Technical Requirements</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide a valid song URL from supported platforms</li>
                <li>Include your name when submitting</li>
                <li>Check audio quality before the event</li>
              </ul>
            </section>

            <div className="bg-primary p-6 rounded-lg mt-8">
              <p className="text-accent font-bold mb-2">⚠️ Important</p>
              <p>
                Violation of these rules may result in removal from the queue or 
                being asked to leave the event. Let's keep it fun for everyone!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <a
              href="/submit"
              className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Submit a Song
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
