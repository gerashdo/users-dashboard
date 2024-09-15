import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUser } from "../api/user"


export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']})
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const deleteUserById = (id: string) => {
    mutation.mutate(id)
  }

  return {
    deleteUserById,
  }
}
