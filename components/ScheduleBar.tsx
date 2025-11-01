'use client'

import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'

interface ScheduleBarProps {
  currentSlideIndex: number
}

const SLOTS = [
  { time: '0:00 - 0:10', title: 'Bienvenida + Checks técnicos', key: 'welcome' },
  { time: '0:10 - 0:25', title: 'Introducción a la IA', key: 'intro-ai' },
  { time: '0:25 - 1:25', title: 'Prompt Stacking 101', key: 'prompt-stacking' },
  { time: '1:25 - 2:25', title: 'MCPs: Qué son y cómo usarlos', key: 'mcps' },
  { time: '2:25 - 3:25', title: 'Agents: Sistemas autónomos', key: 'agents' },
  { time: '3:25 - 3:45', title: 'Vibe Coding', key: 'vibe-coding' },
  { time: '3:45 - 4:00', title: 'Cierre', key: 'closing' },
]

export default function ScheduleBar({ currentSlideIndex }: ScheduleBarProps) {
  // Mapa de índice de slide a slot del cronograma
  const slideToSlotIndex: Record<number, number> = {
    0: 0, // Bienvenida
    1: 1, // Introducción a la IA
    2: 2, // Prompt Stacking
    3: 3, // MCPs
    4: 4, // Agents
    5: 5, // Vibe Coding
    6: 6, // Cierre
  }

  const activeSlot = slideToSlotIndex[currentSlideIndex] ?? 0

  return (
    <div className="hidden md:block fixed top-0 right-0 h-screen w-72 bg-white/90 backdrop-blur-sm border-l border-gray-200 z-40">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Progreso</span>
          </div>
        </div>

        <div className="space-y-3">
          {SLOTS.map((slot, index) => {
            const isActive = index === activeSlot
            return (
              <motion.div
                key={slot.key}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className={`rounded-lg border p-3 text-sm transition-colors ${
                  isActive
                    ? 'border-primary-300 bg-primary-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="mb-1">
                  <span className={`font-semibold ${isActive ? 'text-primary-700' : 'text-gray-800'}`}>{slot.title}</span>
                </div>
                {isActive && (
                  <div className="h-1 w-full bg-primary-100 rounded">
                    <div className="h-1 bg-primary-500 rounded w-1/2" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


