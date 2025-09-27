import SocialIcons from '@/components/SocialIcons'

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              CycleCore
            </span>
            <span className="text-gray-200 ml-2">—</span>
            <br className="sm:hidden" />
            <span className="text-gray-200 ml-2 sm:ml-4">Coming Soon</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-delay">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A local-first AI-powered workspace for developers and thinkers.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="animate-fade-in-delay-2">
          <SocialIcons />
        </div>

        {/* Additional visual element */}
        <div className="animate-fade-in-delay-2 mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center animate-fade-in-delay-2">
        <p className="text-gray-400 text-sm">
          © 2025 CycleCore. All rights reserved.
        </p>
      </footer>
    </main>
  )
}