import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-03-29T00:00:00').getTime()

function getTimeLeft() {
  const now = Date.now()
  const diff = TARGET_DATE - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  }
}

function TimeUnit({ value, label }) {
  return (
    <motion.div
      className="glass rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-lg"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-pink-500 to-rose-600 bg-clip-text text-transparent"
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="text-xs md:text-sm text-rose-400 mt-2 uppercase tracking-wider font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          {timeLeft.expired ? '🎉 Happy Birthday! 🎉' : 'Counting Down To Your Day'}
        </h2>
        <p className="text-rose-400 mb-10 text-lg">March 29, 2026</p>

        {timeLeft.expired ? (
          <motion.div
            className="text-4xl md:text-6xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🎂🥳🎁💝
          </motion.div>
        ) : (
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        )}
      </motion.div>
    </section>
  )
}
