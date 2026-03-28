import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import StartOverlay from './components/StartOverlay'
import Balloons from './components/Balloons'

const TARGET_DATE = new Date('2026-03-29T00:00:00').getTime()

export default function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [isVoicePlaying, setIsVoicePlaying] = useState(false)
  const [isBirthday, setIsBirthday] = useState(Date.now() >= TARGET_DATE)
  const [showBalloons, setShowBalloons] = useState(false)

  const handleStart = () => {
    setHasStarted(true)
  }

  useEffect(() => {
    if (!isBirthday) {
      const interval = setInterval(() => {
        if (Date.now() >= TARGET_DATE) {
          setIsBirthday(true)
          setShowBalloons(true)
          // Hide balloons after they float away (25 seconds)
          setTimeout(() => setShowBalloons(false), 25000)
          clearInterval(interval)
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isBirthday])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Start Overlay */}
      {!hasStarted && <StartOverlay onStart={handleStart} />}

      {/* Background floating hearts */}
      <FloatingHearts />

      {/* Fixed music control */}
      <MusicControl hasStarted={hasStarted} isVoicePlaying={isVoicePlaying} />

      {/* Main content */}
      <main className={`relative z-10 transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
        <Intro />

        <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        <Countdown />

        <AnimatePresence>
          {isBirthday && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Floating Balloons (only once on reveal) */}
              {showBalloons && <Balloons />}

              {/* Big Birthday Header */}
              <motion.div
                className="py-16 text-center px-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
              >
                <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 via-rose-600 to-red-500 bg-clip-text text-transparent drop-shadow-2xl font-cursive mb-6">
                  Happy Birthday Nalini! 🎉
                </h1>
                <p className="text-rose-400 text-2xl md:text-4xl italic max-w-3xl mx-auto leading-relaxed">
                  "The world is a more beautiful place since you're in it. You are my today and all of my tomorrows." ❤️
                </p>
              </motion.div>

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

              <VoiceMessage setIsVoicePlaying={setIsVoicePlaying} />
            </motion.div>
          )}
        </AnimatePresence>

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
