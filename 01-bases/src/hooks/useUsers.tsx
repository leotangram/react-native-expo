import { useEffect, useRef, useState } from 'react'
import { User } from '../interfaces/regres.response'
import { loadUsersAction } from '../actions/load-users.action'

export const useUsers = () => {
  const currentPageRef = useRef(1)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    loadUsersAction(1).then(users => setUsers(users))
  }, [])

  const nextPage = async () => {
    currentPageRef.current++
    const users = await loadUsersAction(currentPageRef.current)

    if (users.length > 0) {
      setUsers(users)
    } else {
      currentPageRef.current--
    }
  }

  const prevPage = async () => {
    if (currentPageRef.current < 1) return

    currentPageRef.current--
    const users = await loadUsersAction(currentPageRef.current)
    setUsers(users)
  }

  return {
    users,
    nextPage,
    prevPage
  }
}
