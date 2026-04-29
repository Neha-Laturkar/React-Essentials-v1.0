import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
    >
      <FaWhatsapp />
    </a>
  );
}