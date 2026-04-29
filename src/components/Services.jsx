// =============================
// SERVICES
// =============================
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
export default function Services() {
  const services = [
    "Interventional Cardiology",
    "Electrophysiology",
    "Heart Checkups",
    "ECG Monitoring",
    "Hypertension Care",
    "Emergency Treatment"
  ]

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div whileHover={{ scale: 1.05 }} key={i} className="bg-white p-6 rounded-xl shadow">
            <HeartPulse className="text-blue-600" />
            <h3 className="mt-3 font-semibold">{s}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}