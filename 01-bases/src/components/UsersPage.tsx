import { useUsers } from '../hooks/useUsers'
import { UserRow } from './UserRow'

export const UsersPage = () => {
  const { users, nextPage, prevPage } = useUsers()

  return (
    <>
      <h3 className="text-2xl">Users:</h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} {...user} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
          className="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-[5px]"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          className="p-2 bg-blue-500 text-white hover:bg-blue-700 rounded-[5px]"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  )
}
