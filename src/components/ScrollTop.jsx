// =============================
// SCROLL TOP
// =============================
import { useState } from "react";
import { useEffect } from "react";
import { ArrowUp } from "lucide-react";

import { motion } from 'framer-motion'
export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 300)
    })
  }, [])

  if (!show) return null

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-6 bg-blue-600 text-white p-3 rounded-full">
      <ArrowUp />
    </button>
  )
}