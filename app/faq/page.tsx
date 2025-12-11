export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-8 text-gray-200">
            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">How does the queue priority work?</h2>
              <p>
                First-time singers (those submitting their first song of the session) automatically 
                get priority placement in the queue. This ensures everyone gets a chance to sing at 
                least once before anyone sings twice. Priority songs are marked with a ⭐ badge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">What platforms are supported?</h2>
              <p>
                We support YouTube, Spotify, and SoundCloud. Simply copy the song link from any of 
                these platforms and paste it in the submission form. Make sure to use karaoke or 
                lyric versions of songs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">How do I submit a song?</h2>
              <p>
                Go to the "Submit Song" page, enter your name, paste the song URL from YouTube, 
                Spotify, or SoundCloud, and click submit. You'll be redirected to the queue page 
                where you can track your position.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">Can I submit multiple songs?</h2>
              <p>
                Yes, but only submit one song at a time. After your first song, you can submit 
                another, but it will go into the regular queue without priority.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">How often does the queue update?</h2>
              <p>
                The queue display updates automatically every 5 seconds, so you'll always see 
                the current status without needing to refresh the page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">What if my song gets skipped?</h2>
              <p>
                Songs may be skipped for various reasons (technical issues, inappropriate content, 
                time constraints, etc.). If this happens, you can submit another song.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">Can I see what songs have been played?</h2>
              <p>
                Yes! Check the "History" page to see all previously played songs from the current session.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">What does "Held" status mean?</h2>
              <p>
                A "Held" song is temporarily paused in the queue. This might happen if the singer 
                needs more time to prepare or if there are technical issues. The admin will resume 
                it when ready.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">How do I become an admin?</h2>
              <p>
                Admin access is restricted to authorized TPJCG club members. If you're organizing 
                an event and need admin access, contact the club leadership.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">Is my information stored?</h2>
              <p>
                We only store your name and song information temporarily for the duration of the 
                session. No personal information is permanently saved. See our{' '}
                <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for 
                more details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pink mb-3">I'm having technical issues. What should I do?</h2>
              <p>
                If you're experiencing problems with the app, try refreshing the page first. If 
                issues persist, contact the admin at the event or reach out through our{' '}
                <a href="/contact" className="text-accent hover:underline">Contact page</a>.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary">
            <p className="text-center text-gray-400 mb-4">
              Still have questions?
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/rules"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                View Rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
