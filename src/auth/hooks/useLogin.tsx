import { users } from "../../shared/data/users"

export const useLogin = () => {

  const loginUser = async (email: string) => {
    const user = users.find(user => user.email === email)
    return user
  }

  return {
    loginUser
  }
}
