import { Route, Switch } from 'wouter'
import { Toaster } from 'sonner'
import { AuthPage } from './auth/pages/AuthPage'
import { UsersPage } from './users/pages/UsersPage'

import './App.css'
import { useContext } from 'react'
import { AuthContext } from './auth/context/authContext'
import { Spinner } from './shared/components/Spinner'

function App() {
  const {isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Switch>
        <Route path={'/users'} component={UsersPage} />
        <Route path={'/auth'} component={AuthPage} />
        <Route path="*" component={AuthPage} />
      </Switch>
      <Toaster position='top-left' />
    </>
  )
}

export default App
