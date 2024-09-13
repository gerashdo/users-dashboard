
import { users } from "../../shared/data/users"

export const useSignUp = () => {
  const signUpUser = async (name: string, email: string, password: string) => {
    console.log('Sign Up', email, password)
    users.push({
      id: users.length + 1,
      name,
      email,
      lastLoginTime: new Date().toISOString(),
      registrationTime: new Date().toISOString(),
      status: 'active'
    })
  }

  return {
    signUpUser
  }
}
