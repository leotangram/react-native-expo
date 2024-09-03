const addTwoNumbers = (a: number, b: number): number => a + b

export const BasicFunctions = () => {
  return (
    <>
      <h3 className="text-2xl">BasicFunctions</h3>
      <span>The result of sum 2 & 8 = {addTwoNumbers(2, 8)}</span>
    </>
  )
}
