import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../api/user"
import { UpdateUserRequest } from "../interfaces/api"


export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const startUpdateUser = (id: string, data: UpdateUserRequest) => {
    mutation.mutate({id, data})
  }

  return {
    startUpdateUser,
  }
}
