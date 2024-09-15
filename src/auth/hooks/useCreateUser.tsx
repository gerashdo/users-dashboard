import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { createUser } from "../api/users"
import { useDisplayMessage } from "../../shared/hooks/useDisplayMessage"
import { getSignUpError } from "../utils/parseRequestError"
import { ErrorResponseBody } from "../../shared/interfaces/request"


export const useCreateUser = () => {
  const queryClient = useQueryClient()
  const {displayMessage} = useDisplayMessage()
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['users']})
      displayMessage('User created successfully', 'success', 4000)
    },
    onError: (error: AxiosError<ErrorResponseBody>) => {
      const responseCode = error.response?.status || 500
      const errorMessage = getSignUpError(responseCode)
      displayMessage(errorMessage, 'error')
    }
  })

  const signUp = async (name: string, email: string, password: string) => {
    const result = await mutation.mutateAsync({name, email, password})
    if (result.status === 201) {
      return true
    }
    return false
  }

  return {
    signUp,
  }
}
