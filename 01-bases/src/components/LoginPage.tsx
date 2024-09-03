import { useAuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext()

  if (isChecking) {
    return <h1>Verificando usuario</h1>
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3 className="text-2xl">Welcome</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            className="bg-blue-500 p-2 text-white hover:bg-blue-700 rounded-xl mt-5"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h3 className="text-2xl">Login</h3>
          <button
            className="bg-blue-500 p-2 text-white hover:bg-blue-700 rounded-xl mt-5"
            onClick={() =>
              loginWithEmailPassword('john.doe@email.com', '12345678')
            }
          >
            Login
          </button>
        </>
      )}
    </>
  )
}
