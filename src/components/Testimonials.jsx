// =============================
// TESTIMONIALS
// =============================
import { motion } from 'framer-motion'
export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[1,2,3].map((_,i)=>(
          <div key={i} className="p-6 shadow rounded-xl">
            "Excellent care and life-saving treatment."
          </div>
        ))}
      </div>
    </section>
  )
}