'use client'

import { ArrowUp } from '@/components/Icons'

import { useBackToTop } from './hooks/useBackToTop'


export const BackToTop = () => {
  const { show, scrollToTop } = useBackToTop()

  return (
    show && <button 
      className="bg-neutral-900 text-white fixed w-10 h-10 bottom-10 right-28 z-50 flex items-center justify-center rounded-md"
      onClick={scrollToTop}
    >
      <ArrowUp size={24} weight="bold" />
    </button>
  )
}