export const BasicTypes = () => {
  const name: string = 'John Doe'
  const age: number = 31
  const isActive: boolean = true
  const powers: string[] = ['Speed', 'Fly', 'Invisibility']

  return (
    <>
      <h3 className="text-2xl">Basic types</h3>
      {name} - {age} - {isActive ? 'Active' : 'Inactive'}
      <p>{powers.join(', ')}</p>
    </>
  )
}
