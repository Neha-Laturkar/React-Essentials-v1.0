// =============================
// NAVBAR
// =============================
import { motion } from 'framer-motion'
export default function Navbar() {
  return (
    <div className="fixed w-full backdrop-blur-md bg-white/70 border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-blue-700">Dr. Basavaraj S</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}