import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6">

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">Dr. Basavaraj S</h1>
          <p className="text-xl text-blue-700 mt-2">Interventional Cardiologist & Electrophysiologist</p>
          <p className="mt-4 text-gray-600">Advanced heart care with precision and compassion.</p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">Book Appointment</button>
            <button className="border px-6 py-3 rounded-lg">Contact Now</button>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        />
      </div>
    </section>
  )
}