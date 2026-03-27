import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Browser may block autoplay, that's fine
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio ref={audioRef} src="/music/music.mp3" loop preload="none" />
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass shadow-2xl flex items-center justify-center text-2xl border border-pink-200/50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        <motion.span
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
        >
          {isPlaying ? '🎵' : '🎶'}
        </motion.span>
      </motion.button>
    </>
  )
}
