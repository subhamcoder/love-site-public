import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Intro() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background decorative circles */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.div
          className="text-6xl md:text-8xl mb-6"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💕
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
            For My Dearest Nalini 💕
          </span>
        </motion.h1>

        <motion.div
          className="glass rounded-2xl px-6 py-4 md:px-10 md:py-6 max-w-2xl mx-auto mt-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-lg md:text-2xl text-rose-700 font-medium min-h-[80px] flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'You are the most beautiful soul I know...',
                2000,
                'Every moment with you feels like magic...',
                2000,
                'You make my world brighter every single day...',
                2000,
                'Happy Birthday, my love! 🎂',
                3000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={true}
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-rose-400 text-sm tracking-widest uppercase"
          >
            Scroll down to explore ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
