import { User } from '../interfaces/regres.response'

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await fetch(`https://reqres.in/api/users?page=${page}`, {
      method: 'GET'
    }).then(res => res.json())

    return data as User[]
  } catch (error) {
    console.error(error)
    return []
  }
}
