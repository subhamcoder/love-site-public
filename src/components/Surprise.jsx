import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Surprise() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          A Special Surprise 🎁
        </h2>
        <p className="text-rose-400 mb-10 text-lg">Tap the gift to unwrap it!</p>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="gift"
              className="cursor-pointer inline-block"
              onClick={() => setRevealed(true)}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
              whileTap={{ scale: 0.95 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="glass rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-rose-500/10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="text-8xl md:text-9xl relative z-10">🎁</div>
                <motion.p
                  className="text-rose-500 mt-4 font-medium relative z-10"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Tap me! ✨
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
                {/* Dress image placeholder */}
                <motion.div
                  className="w-48 h-64 md:w-64 md:h-80 mx-auto rounded-2xl overflow-hidden mb-6 shadow-xl bg-gradient-to-br from-pink-200 to-rose-300"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src="/images/dress.jpg"
                    alt="Your special gift"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center text-rose-500">
                          <span class="text-6xl mb-4">👗</span>
                          <span class="text-sm font-medium">Your Special Gift</span>
                        </div>
                      `
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-3 font-cursive">
                    For the Queen of My Heart 👑
                  </h3>
                  <p className="text-rose-500/80 leading-relaxed max-w-md mx-auto">
                    I picked this out just for you because you deserve to feel as beautiful
                    on the outside as you are on the inside. You're going to look absolutely
                    stunning in it — but then again, you look stunning in everything. 💕
                  </p>
                </motion.div>

                <motion.button
                  className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white font-medium shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setRevealed(false)}
                >
                  Wrap it again 🎀
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
