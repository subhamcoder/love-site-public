import { motion } from 'framer-motion'

const BALLOON_COLORS = [
  'bg-pink-400',
  'bg-rose-400',
  'bg-red-400',
  'bg-pink-300',
  'bg-rose-300',
  'bg-red-300',
]

const Balloon = ({ delay, x }) => {
  const color = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)]
  const size = 60 + Math.random() * 40

  return (
    <motion.div
      className={`absolute ${color} rounded-full opacity-70 shadow-xl`}
      style={{ 
        width: size, 
        height: size * 1.2, 
        left: `${x}%`,
        bottom: '-100px'
      }}
      initial={{ y: 0, scale: 0.8 }}
      animate={{ 
        y: -window.innerHeight - 200, 
        x: [0, (Math.random() - 0.5) * 40, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 10 + Math.random() * 5, 
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {/* Balloon String */}
      <div className="absolute left-1/2 bottom-[-40px] w-0.5 h-10 bg-rose-200/50 -translate-x-1/2" />
      {/* Balloon Highlight */}
      <div className="absolute top-[20%] left-[20%] w-[20%] h-[15%] bg-white/30 rounded-full" />
    </motion.div>
  )
}

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <Balloon 
          key={i} 
          delay={i * 0.8} 
          x={Math.random() * 100} 
        />
      ))}
    </div>
  )
}
