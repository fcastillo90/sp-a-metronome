import { Dispatch, SetStateAction, useEffect, useState } from "react"

/**
 * Custom hook to handle bpm clicks calculation. 5 secs max between clicks
 * @param bpm - External BPM value, if not provided, will use the internal state, if changed it will reset the internal state
 * @returns [tempo, setBpm] - The tempo and the setter function
 */
const useClickBpm = (): [number, Dispatch<SetStateAction<number>>, () => void] => {
  const [count, setCount] = useState<Date[]>([])
  const [tempo, setTempo] = useState(0)
  let timer: NodeJS.Timeout

  const handleClick = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setCount([])
    }, 5000)
    const newDate = new Date()
    if (count.length === 0) {
      setCount([newDate])
      return 
    }
    // in ms
    const diff = newDate.getTime() - count[count.length - 1].getTime()
    setCount(oldState => ([oldState[oldState.length - 1], newDate]))
    let bpm = Math.floor((1000 / diff) * 60)
    // Due to API limitations
    if (bpm < 40) bpm = 40
    if (bpm > 220) bpm = 220
    setTempo(bpm)
  }

  useEffect(() => {
    return () => clearTimeout(timer)
  }, [])

  return [tempo, setTempo, handleClick]
}

export default useClickBpm