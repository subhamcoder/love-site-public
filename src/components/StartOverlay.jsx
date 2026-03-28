import { motion, AnimatePresence } from 'framer-motion'

export default function StartOverlay({ onStart }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        {/* Decorative hearts in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -100, -200], 
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5 
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-7xl md:text-9xl mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎁
          </motion.div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-rose-600 mb-6 drop-shadow-sm">
            A Special Message for You...
          </h1>
          
          <p className="text-rose-400 text-lg mb-10 max-w-md mx-auto italic">
            "Every heartbeat of mine tells a story of us. Tap below to begin our journey."
          </p>

          <motion.button
            onClick={onStart}
            className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full text-xl font-bold shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Open My Heart ❤️</span>
            <motion.div 
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          <p className="mt-6 text-rose-300 text-sm animate-pulse">
            (Make sure your sound is ON!)
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
