export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-accent mb-8">About KaraApp</h1>
          
          <div className="space-y-6 text-gray-200">
            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">What is KaraApp?</h2>
              <p>
                KaraApp is a modern, web-based karaoke queue management system designed specifically 
                for the TPJCG club. It streamlines the karaoke experience by providing real-time queue 
                updates, fair priority management, and easy song submission from popular platforms like 
                YouTube, Spotify, and SoundCloud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Our Mission</h2>
              <p>
                Our mission is to make karaoke events more organized, fair, and enjoyable for everyone. 
                By automating queue management and ensuring first-time singers get priority, we create 
                an inclusive environment where everyone gets their moment in the spotlight.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Multi-Platform Support:</strong> Submit songs from YouTube, Spotify, or SoundCloud</li>
                <li><strong>Priority Queue System:</strong> First-time singers automatically get priority</li>
                <li><strong>Real-Time Updates:</strong> Queue updates automatically every few seconds</li>
                <li><strong>Admin Controls:</strong> Easy management with reorder, skip, and hold functions</li>
                <li><strong>Song History:</strong> Track all previously played songs</li>
                <li><strong>Mobile Friendly:</strong> Works seamlessly on all devices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">About TPJCG Club</h2>
              <p>
                TPJCG (Tampines Junior College General) is a vibrant community that brings people 
                together through various activities and events. Our karaoke sessions are a beloved 
                tradition where members showcase their vocal talents and bond over music.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Technology Stack</h2>
              <p>
                KaraApp is built with modern web technologies to ensure a fast, reliable, and 
                user-friendly experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Frontend:</strong> Next.js with TypeScript and Tailwind CSS</li>
                <li><strong>Backend:</strong> PHP with PostgreSQL database</li>
                <li><strong>Hosting:</strong> Atspace for backend services</li>
                <li><strong>Gallery Storage:</strong> Cloudflare R2</li>
                <li><strong>Real-Time Updates:</strong> Polling-based queue synchronization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-pink mb-3">Development</h2>
              <p>
                KaraApp is actively maintained and continuously improved based on user feedback. 
                We're committed to providing the best possible experience for our karaoke community.
              </p>
            </section>

            <div className="bg-primary p-6 rounded-lg mt-8">
              <h3 className="text-accent font-bold text-xl mb-3">Get Involved</h3>
              <p className="mb-4">
                Interested in contributing to KaraApp or have suggestions for improvements? 
                We'd love to hear from you!
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary hover:bg-accent hover:text-dark text-white font-bold py-2 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary text-center">
            <p className="text-gray-400 mb-4">Ready to start singing?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="/submit"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Submit a Song
              </a>
              <a
                href="/queue"
                className="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                View Queue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
