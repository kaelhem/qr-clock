import { useEffect, useRef } from 'react'

export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Se souvenir de la dernière fonction de rappel.
  useEffect(() => {
    savedCallback.current = callback
  })

  // Configurer l’intervalle.
  useEffect(() => {
    const tick = () => savedCallback.current()
    if (delay !== null) {
      const id = setInterval(tick, delay)
      console.log('setInterval ' + id)
      return () => {
        console.log('clearInterval ' + id)
        clearInterval(id)
      }
    }
  }, [delay])
}