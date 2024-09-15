import { useContext } from "react"
import { AxiosError } from "axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AuthContext } from "../context/authContext"
import { useDisplayMessage } from "../../shared/hooks/useDisplayMessage"
import { loginUser } from "../api/auth"
import { ErrorResponseBody } from "../../shared/interfaces/request"
import { getLoginError } from "../../shared/utils/parseRequestError"

export const useLogin = () => {
  const queryClient = useQueryClient()
  const { displayMessage } = useDisplayMessage()
  const {loginAction} = useContext(AuthContext)

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      loginAction(data.data)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error: AxiosError<ErrorResponseBody>) => {
      const errorCode = error.response?.status || 500
      const errorMessage = getLoginError(errorCode)
      displayMessage(errorMessage, 'error')
    }
  })

  const login = (email: string, password: string) => {
    loginMutation.mutate({ email, password })
  }

  return {
    login,
  }
}
