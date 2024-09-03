import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState<number>(10)

  const increaseBy = (num: number) => {
    setCount(currenNumber => Math.max(num + currenNumber, 0))
  }

  return { count, increaseBy }
}
