import { useContext } from "react"
import { AuthContext } from "../../auth/context/authContext"
import { Redirect } from "wouter"

export const UsersPage = () => {
  const { user } = useContext(AuthContext)
  if (!user) return <Redirect to="/auth" />

  return (
    <div>
      <h1>Users Page</h1>
    </div>
  )
}
