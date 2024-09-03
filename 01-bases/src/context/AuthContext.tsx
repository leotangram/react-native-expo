import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react'

enum AuthStatus {
  Checking = 'checking',
  Authenticated = 'authenticated',
  Unauthenticated = 'unauthenticated'
}

interface AuthState {
  status: AuthStatus
  token?: string
  user?: User
  isChecking: boolean
  isAuthenticated: boolean
  loginWithEmailPassword: (email: string, password: string) => void
  logout: () => void
}

interface User {
  name: string
  email: string
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState(AuthStatus.Checking)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.Unauthenticated)
    }, 1500)
  }, [])

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log('password', password)
    setUser({
      name: 'John Doe',
      email
    })
    setStatus(AuthStatus.Authenticated)
  }

  const logout = () => {
    setUser(undefined)
    setStatus(AuthStatus.Unauthenticated)
  }

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        // Getter
        isChecking: status === AuthStatus.Checking,
        isAuthenticated: status === AuthStatus.Authenticated,
        //Method
        loginWithEmailPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
