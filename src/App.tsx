import { Route, Switch } from 'wouter'
import { AuthPage } from './auth/pages/authPage'
import { UsersPage } from './users/pages/usersPage'

import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route path={'/users'} component={UsersPage} />
        <Route path={'/auth'} component={AuthPage} />
        <Route path="*" component={AuthPage} />
      </Switch>
    </>
  )
}

export default App
