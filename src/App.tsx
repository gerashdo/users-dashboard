import { Route, Switch } from 'wouter'
import './App.css'
import { AuthPage } from './auth/pages/authPage'
import { UsersPage } from './users/pages/usersPage'

function App() {

  return (
    <>
      <Switch>
        <Route path={'/'} component={AuthPage} />
        <Route path={'/users'} component={UsersPage} />
      </Switch>
    </>
  )
}

export default App
