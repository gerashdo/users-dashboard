import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { deleteUser } from "../api/user"
import { useDisplayMessage } from "../../shared/hooks/useDisplayMessage"
import { getDeleteUserMessage } from "../utils/parseRequestError"
import { ErrorResponseBody } from "../../shared/interfaces/request"


export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const {displayMessage} = useDisplayMessage()
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
    onError: (error: AxiosError<ErrorResponseBody>) => {
      const code = error.response?.status || 500
      const message = getDeleteUserMessage(code)
      displayMessage(message, 'error')
    }
  })

  const deleteUserById = (id: string) => {
    mutation.mutate(id)
  }

  return {
    deleteUserById,
  }
}
