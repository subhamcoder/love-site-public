import { motion } from 'framer-motion'

const reasons = [
  {
    emoji: '💖',
    title: 'Your Beautiful Smile',
    description: 'The way you smile can light up the darkest room. It\'s the first thing I fell in love with.',
  },
  {
    emoji: '🌟',
    title: 'Your Kind Heart',
    description: 'You care for everyone around you so deeply. Your kindness inspires me every single day.',
  },
  {
    emoji: '🦋',
    title: 'Your Strength',
    description: 'You handle everything with such grace and courage. You\'re the strongest person I know.',
  },
  {
    emoji: '🌸',
    title: 'Your Laugh',
    description: 'Your laugh is my favorite sound in the whole world. It makes everything feel right.',
  },
  {
    emoji: '✨',
    title: 'Your Dreams',
    description: 'I love how passionate you are about your goals. Watching you chase your dreams is beautiful.',
  },
  {
    emoji: '💕',
    title: 'Being You',
    description: 'You don\'t try to be anyone else. Your authentic self is the most beautiful thing about you.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function LoveReasons() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          Why I Love You 💝
        </h2>
        <p className="text-center text-rose-400 mb-12 text-lg">Just a few of the million reasons</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 shadow-xl cursor-default"
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl mb-4">{reason.emoji}</div>
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{reason.title}</h3>
              <p className="text-rose-500/80 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
