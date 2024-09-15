import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { updateUser } from "../api/user"
import { useDisplayMessage } from "../../shared/hooks/useDisplayMessage"
import { getUpdateUserMessage } from "../utils/parseRequestError"
import { UpdateUserRequest } from "../interfaces/api"
import { ErrorResponseBody } from "../../shared/interfaces/request"


export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const {displayMessage} = useDisplayMessage()
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
    onError: (error: AxiosError<ErrorResponseBody>) => {
      const statusCode = error.response?.status || 500
      const errorMessage = getUpdateUserMessage(statusCode)
      displayMessage(errorMessage, 'error')
    }
  })

  const startUpdateUser = (id: string, data: UpdateUserRequest) => {
    mutation.mutate({id, data})
  }

  return {
    startUpdateUser,
  }
}
