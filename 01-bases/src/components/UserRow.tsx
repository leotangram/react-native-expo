import { User } from '../interfaces/regres.response'
import { FC } from 'react'

export const UserRow: FC<User> = ({ avatar, email, first_name, last_name }) => {
  return (
    <tr className="p-2">
      <td>
        <img src={avatar} alt="User avatar" className="rounded-full w-14" />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  )
}
