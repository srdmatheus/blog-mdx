'use client'

import { useCallback, useEffect, useState } from "react"

export const useBackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 200) setShow(true)
    if (show && window.scrollY <= 200) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { scrollToTop, show }
}
