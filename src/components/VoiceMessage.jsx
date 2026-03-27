import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function VoiceMessage() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const prog = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(isNaN(prog) ? 0 : prog)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          A Voice For You 🎙️
        </h2>
        <p className="text-rose-400 mb-10 text-lg">Press play to hear my message</p>

        <motion.div
          className="glass rounded-2xl p-8 shadow-xl"
          whileHover={{ y: -3 }}
        >
          <audio
            ref={audioRef}
            src="/voice/voice.mp3"
            preload="none"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />

          <div className="flex items-center justify-center gap-6">
            <motion.button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white flex items-center justify-center shadow-xl text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className="mt-6 w-full h-2 bg-pink-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="text-rose-400/70 text-sm mt-4">
            {isPlaying ? '💕 Listening...' : 'Tap to play my voice message'}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
