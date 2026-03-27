import FloatingHearts from './components/FloatingHearts'
import Intro from './components/Intro'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import LoveReasons from './components/LoveReasons'
import Timeline from './components/Timeline'
import Surprise from './components/Surprise'
import Secret from './components/Secret'
import VoiceMessage from './components/VoiceMessage'
import VideoSection from './components/VideoSection'
import MusicControl from './components/MusicControl'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background floating hearts */}
      <FloatingHearts />

      {/* Fixed music control */}
      <MusicControl />

      {/* Main content */}
      <main className="relative z-10">
        <Intro />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Countdown />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Gallery />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <VideoSection />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <LoveReasons />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Timeline />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Surprise />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Secret />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <VoiceMessage />

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="text-rose-400 text-sm">
            Made with ❤️ just for you
          </p>
          <p className="text-rose-300 text-xs mt-2">
            Happy Birthday, My Love 💕
          </p>
        </footer>
      </main>
    </div>
  )
}
