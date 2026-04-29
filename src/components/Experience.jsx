// =============================
// EXPERIENCE
// =============================
import { motion } from 'framer-motion'
export default function Experience() {
  const data = [
    "Consultant – Hrudayaspandan Heart Care",
    "Fellow – AIG Hospitals",
    "Consultant – Asian Noble Hospital"
  ]

  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {data.map((d, i) => (
        <div key={i} className="border-l-2 pl-4 mb-4">{d}</div>
      ))}
    </section>
  )
}