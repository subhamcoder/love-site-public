import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 12,
  size: 12 + Math.random() * 24,
  opacity: 0.15 + Math.random() * 0.25,
}))

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
          animate={{
            y: [window.innerHeight + 50, -80],
            x: [0, Math.sin(heart.id) * 40],
            rotate: [0, heart.id % 2 === 0 ? 20 : -20, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}
