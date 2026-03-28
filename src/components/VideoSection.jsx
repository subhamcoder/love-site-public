import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
          Our Beautiful Moments 🎬
        </h2>
        <p className="text-rose-400 mb-10 text-lg">A little reel of us together</p>

        <motion.div
          className="glass rounded-3xl p-3 md:p-4 shadow-2xl overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-pink-200 to-rose-300">
            <video
              src="/videos/our-video.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/video-poster.jpg"
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center text-rose-500 py-20">
                    <span class="text-7xl mb-4">🎥</span>
                    <span class="text-lg font-semibold">Our Video Goes Here</span>
                    <span class="text-sm mt-2 text-rose-400">Place your video as public/videos/our-video.mp4</span>
                  </div>
                `
              }}
            />
          </div>
        </motion.div>

        <motion.p
          className="text-rose-400/80 mt-6 text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Every second with you is a memory I treasure forever 💕
        </motion.p>
      </motion.div>
    </section>
  )
}
