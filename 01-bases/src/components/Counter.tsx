import { useCounter } from '../hooks/useCounter'

export const Counter = () => {
  const { count, increaseBy } = useCounter()

  return (
    <>
      <h3 className="text-2xl">
        Counter <small>{count}</small>
      </h3>

      <div className="flex gap-8">
        <button
          className="bg-blue-500 rounded-xl w-10 text-white hover:bg-blue-700"
          onClick={() => increaseBy(-1)}
        >
          -1
        </button>
        <button
          className="bg-blue-500 rounded-xl w-10 text-white hover:bg-blue-700"
          onClick={() => increaseBy(+1)}
        >
          +1
        </button>
      </div>
    </>
  )
}
