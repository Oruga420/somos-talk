'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

interface ScheduleBarProps {
  currentSlideIndex: number
}

const SLOTS = [
  { time: '00:00 - 00:03', title: 'Somos Welcome', key: 'welcome' },
  { time: '00:03 - 00:13', title: 'Context Stacking', key: 'context-stacking' },
  { time: '00:13 - 00:18', title: 'Slack Bot', key: 'slack-bot' },
  { time: '00:18 - 00:25', title: 'Agentic Workflows', key: 'agentic-workflows' },
  { time: '00:25 - 00:32', title: 'Custom Tools & Fine-tuning', key: 'custom-tools' },
  { time: '00:32 - 00:35', title: 'Showcase', key: 'showcase' },
  { time: '00:35 - 00:45', title: 'Closing & Q&A', key: 'closing' },
]

const SLIDE_TO_SLOT: Record<number, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
}

export default function ScheduleBar({ currentSlideIndex }: ScheduleBarProps) {
  const activeSlot = SLIDE_TO_SLOT[currentSlideIndex] ?? 0

  return (
    <div className="hidden md:block fixed top-0 right-0 h-screen w-72 bg-primary-900/80 backdrop-blur-lg border-l border-primary-800/70 z-40 text-secondary-100">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between text-secondary-200">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-semibold tracking-wide uppercase">Agenda</span>
          </div>
          <span className="text-xs text-secondary-400">Slide {currentSlideIndex + 1}</span>
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
                    ? 'border-accent-400/60 bg-primary-800/70 shadow-lg shadow-primary-900/30'
                    : 'border-primary-800 bg-primary-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-semibold ${
                      isActive ? 'text-accent-300' : 'text-secondary-100'
                    }`}
                  >
                    {slot.title}
                  </span>
                  <span className="text-xs text-secondary-400">{slot.time}</span>
                </div>

                {isActive && (
                  <div className="h-1 w-full rounded bg-primary-800">
                    <div className="h-1 w-1/2 rounded bg-accent-400" />
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
