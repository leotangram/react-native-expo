interface Person {
  age: number
  firstName: string
  lastName: string
  address?: Address
}

interface Address {
  country: string
  houseNumber: number
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 31,
    firstName: 'John',
    lastName: 'Doe',
    address: {
      country: 'USA',
      houseNumber: 123
    }
  }

  return (
    <>
      <h3 className="text-2xl">Literal Objects</h3>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
