import { Fragment } from 'react/jsx-runtime'
import { BasicFunctions, BasicTypes, ObjectLiterals } from './typescript'
import { AuthProvider } from './context/AuthContext'
import { Counter, FormsPage, LoginPage, UsersPage } from './components'

const components = [
  BasicTypes,
  ObjectLiterals,
  BasicFunctions,
  Counter,
  LoginPage,
  UsersPage,
  FormsPage
]

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>
        {components.map(Component => (
          <Fragment key={Component.name}>
            <Component />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </Fragment>
        ))}
      </div>
    </AuthProvider>
  )
}

export default App
