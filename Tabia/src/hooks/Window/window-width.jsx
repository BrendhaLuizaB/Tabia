import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(undefined)

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    updateWindowWidth()

    window.addEventListener('resize', updateWindowWidth)
    window.addEventListener('load', updateWindowWidth)

    return () => {
      window.removeEventListener('resize', updateWindowWidth)
      window.removeEventListener('load', updateWindowWidth)
    }
  }, [])

  return windowWidth
}
