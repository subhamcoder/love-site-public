import { motion } from 'framer-motion'

const milestones = [
  {
    date: 'The Beginning',
    title: 'When We First Met 💫',
    description: 'That magical day when our eyes met for the first time and everything changed forever.',
  },
  {
    date: 'First Date',
    title: 'Our First Date 🌹',
    description: 'Nervous smiles, butterflies, and the start of something incredibly beautiful.',
  },
  {
    date: 'First "I Love You"',
    title: 'Three Little Words ❤️',
    description: 'The moment I said "I love you" and truly meant it with every fiber of my being.',
  },
  {
    date: 'Our Anniversaries',
    title: 'Celebrating Us 🥂',
    description: 'Every milestone we\'ve hit together has been more beautiful than the last.',
  },
  {
    date: 'Through Thick & Thin',
    title: 'Overcoming Together 💪',
    description: 'We faced challenges head-on and came out stronger, proving our love is unbreakable.',
  },
  {
    date: 'Today & Beyond',
    title: 'Forever With You 💍',
    description: 'Every new day with you is my favorite day. Here\'s to our beautiful forever.',
  },
]

export default function Timeline() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          Our Love Story 📖
        </h2>
        <p className="text-center text-rose-400 mb-16 text-lg">The chapters of us</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-rose-400 to-pink-300 md:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-pink-200 -translate-x-1/2 z-10 shadow-lg"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 shadow-xl"
                    whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.2)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">
                      {milestone.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-rose-600 mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-rose-500/80 leading-relaxed text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
