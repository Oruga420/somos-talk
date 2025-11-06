'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

interface ScheduleBarProps {
  currentSlideIndex: number
}

const SLOTS = [
  { time: '00:00 - 00:05', title: 'Bienvenida Somos', key: 'welcome' },
  { time: '00:05 - 00:15', title: 'Quick Check', key: 'quick-check' },
  { time: '00:15 - 00:35', title: 'Context Stacking', key: 'context-stacking' },
  { time: '00:35 - 00:55', title: 'Slack Bot', key: 'slack-bot' },
  { time: '00:55 - 01:20', title: 'Agentic Workflows', key: 'agentic-workflows' },
  { time: '01:20 - 01:40', title: 'Custom Tools & Fine-tuning', key: 'custom-tools' },
  { time: '01:40 - 01:55', title: 'Showcase', key: 'showcase' },
  { time: '01:55 - 02:00', title: 'Cierre & CTA', key: 'closing' },
]

const SLIDE_TO_SLOT: Record<number, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
}

export default function ScheduleBar({ currentSlideIndex }: ScheduleBarProps) {
  const activeSlot = SLIDE_TO_SLOT[currentSlideIndex] ?? 0

  return (
    <div className="hidden md:block fixed top-0 right-0 h-screen w-72 bg-white/90 backdrop-blur-sm border-l border-gray-200 z-40">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between text-gray-700">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Agenda</span>
          </div>
          <span className="text-xs text-gray-500">Slide {currentSlideIndex + 1}</span>
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
                  isActive ? 'border-primary-300 bg-primary-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-semibold ${isActive ? 'text-primary-700' : 'text-gray-800'}`}>
                    {slot.title}
                  </span>
                  <span className="text-xs text-gray-500">{slot.time}</span>
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
