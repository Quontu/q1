'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const textVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function ComingSoon() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#CCBBF2] via-[#B6CAF2] to-[#ACEBF2] grid place-items-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl font-bold text-gray-800 mb-4"
          variants={pulseVariants}
          animate="pulse"
        >
          ./Quontu
        </motion.h1>
        <motion.p 
          className="text-3xl text-gray-700"
          variants={pulseVariants}
          animate="pulse"
        >
          Próximamente
        </motion.p>
      </motion.div>
    </main>
  )
}

