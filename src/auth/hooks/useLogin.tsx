import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginUser } from "../api/auth"
import { AuthContext } from "../context/authContext"
import { useContext } from "react"
import { AxiosError } from "axios"

export const useLogin = () => {
  const queryClient = useQueryClient()
  const {loginAction} = useContext(AuthContext)

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      loginAction(data.data)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error: AxiosError) => {
      console.log(error.response?.data)
    }
  })

  const login = (email: string, password: string) => {
    loginMutation.mutate({ email, password })
  }

  return {
    login,
  }
}
