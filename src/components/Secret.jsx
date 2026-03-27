import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECRET_PASSWORD = 'iloveyou'

export default function Secret() {
  const [password, setPassword] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.toLowerCase().trim() === SECRET_PASSWORD) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

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
          Secret Message 🔐
        </h2>
        <p className="text-rose-400 mb-10 text-lg">Enter the magic words to unlock</p>

        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              className="glass rounded-2xl p-8 md:p-12 shadow-xl"
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="text-6xl mb-6">🔒</div>
              <p className="text-rose-500/80 mb-6">
                Hint: What do I always tell you? (no spaces, all lowercase) 😉
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password..."
                  className="flex-1 px-5 py-3 rounded-xl bg-white/50 border border-pink-200 text-rose-600 placeholder-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Unlock 💕
                </motion.button>
              </form>
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-rose-500 mt-4 text-sm font-medium"
                  >
                    Not quite! Try again, my love 💋
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="glass rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                🔓
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-4 font-cursive">
                  My Dearest Love,
                </h3>
                <p className="text-rose-500/90 leading-relaxed max-w-lg mx-auto text-lg">
                  From the moment you came into my life, everything changed for the better.
                  You taught me what it means to truly love someone and to be loved in return.
                  Every day with you is a gift I will never take for granted.
                </p>
                <p className="text-rose-500/90 leading-relaxed max-w-lg mx-auto text-lg mt-4">
                  You are my best friend, my soulmate, and my entire world.
                  I promise to love you more with each passing day, to stand by your side
                  through everything, and to make sure you always know how incredibly special you are.
                </p>
                <p className="text-rose-600 font-bold text-xl mt-6 font-cursive">
                  Forever and always yours 💕
                </p>
              </motion.div>

              <motion.button
                className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setUnlocked(false); setPassword('') }}
              >
                Lock it again 🔒
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
