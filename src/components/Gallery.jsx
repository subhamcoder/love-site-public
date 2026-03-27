import { motion } from 'framer-motion'

const photos = [
  { id: 1, src: '/images/img1.jpg', caption: 'Our first adventure together 💖' },
  { id: 2, src: '/images/img2.jpg', caption: 'That beautiful sunset we shared 🌅' },
  { id: 3, src: '/images/img3.jpg', caption: 'Your smile lights up my world ✨' },
  { id: 4, src: '/images/img4.jpg', caption: 'Making memories with you 💕' },
  { id: 5, src: '/images/img5.jpg', caption: 'Our favorite spot 🌸' },
  { id: 6, src: '/images/img6.jpg', caption: 'Forever and always 💗' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Gallery() {
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
          Our Memories 📸
        </h2>
        <p className="text-center text-rose-400 mb-12 text-lg">Every picture tells our story</p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-200 to-rose-300">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 text-6xl">
                        📷
                      </div>
                    `
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
