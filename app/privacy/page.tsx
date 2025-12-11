export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 2024</p>
          
          <div className="space-y-6 text-gray-200">
            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Introduction</h2>
              <p>
                KaraApp ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                Policy explains how we collect, use, and safeguard your information when you use our 
                karaoke queue management application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Information We Collect</h2>
              <p className="mb-2">When you use KaraApp, we collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Name:</strong> Your display name for queue identification</li>
                <li><strong>Song Information:</strong> Song titles, artists, and platform links you submit</li>
                <li><strong>Timestamps:</strong> When songs are submitted and played</li>
                <li><strong>Usage Data:</strong> Basic interaction data for improving the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">How We Use Your Information</h2>
              <p className="mb-2">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manage the karaoke queue and display song information</li>
                <li>Track priority status for first-time singers</li>
                <li>Maintain song history during sessions</li>
                <li>Improve the overall user experience</li>
                <li>Provide technical support when needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Data Storage and Retention</h2>
              <p>
                Your data is stored temporarily for the duration of the karaoke session. Queue data 
                is typically cleared after each event. Song history may be retained for a limited time 
                for reference purposes but contains only public information (names and song choices).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Third-Party Services</h2>
              <p className="mb-2">
                KaraApp integrates with the following third-party platforms for song playback:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>YouTube:</strong> For video playback and thumbnails</li>
                <li><strong>Spotify:</strong> For music streaming links</li>
                <li><strong>SoundCloud:</strong> For audio streaming links</li>
              </ul>
              <p className="mt-2">
                We do not control these platforms' privacy practices. Please review their respective 
                privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Your name 
                and song choices are visible to other participants as part of the public queue display. 
                This is essential for the functioning of the karaoke queue system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Security</h2>
              <p>
                We implement reasonable security measures to protect your information. However, no 
                method of transmission over the internet is 100% secure. We use industry-standard 
                practices including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Secure HTTPS connections</li>
                <li>Limited data collection (only what's necessary)</li>
                <li>Regular security updates</li>
                <li>Access controls for admin functions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Cookies and Tracking</h2>
              <p>
                KaraApp uses minimal cookies and local storage for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Maintaining session state</li>
                <li>Storing user preferences</li>
                <li>Improving user experience</li>
              </ul>
              <p className="mt-2">
                No tracking or advertising cookies are used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Know what information we have about you</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of the service at any time</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Children's Privacy</h2>
              <p>
                KaraApp is intended for use by TPJCG club members and their guests. We do not knowingly 
                collect personal information from children under 13. If you believe we have collected 
                such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this 
                page with an updated "Last updated" date. Continued use of KaraApp after changes 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us through 
                our <a href="/contact" className="text-accent hover:underline">Contact page</a> or 
                email us at karaapp@tpjcg.club.
              </p>
            </section>

            <div className="bg-primary p-6 rounded-lg mt-8">
              <p className="text-accent font-bold mb-2">📌 Summary</p>
              <p>
                We collect minimal information (name and song choices), use it only for queue management, 
                don't share it with third parties (except as publicly displayed), and clear it after 
                sessions. Your privacy matters to us!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
