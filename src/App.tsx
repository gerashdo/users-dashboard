import { Route, Switch } from 'wouter'
import { Toaster } from 'sonner'
import { AuthPage } from './auth/pages/AuthPage'
import { UsersPage } from './users/pages/UsersPage'

import './App.css'

function App() {
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
