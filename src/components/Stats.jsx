// =============================
// STATS (NEW - ELITE)
// =============================
import { motion } from 'framer-motion'
export default function Stats() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Patients Treated" },
    { value: "1000+", label: "Procedures" }
  ]

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-blue-600">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
