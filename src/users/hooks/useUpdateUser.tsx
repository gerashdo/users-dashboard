import { useMutation } from "@tanstack/react-query"
import { updateUser } from "../api/user"
import { UpdateUserRequest } from "../interfaces/api"


export const useUpdateUser = () => {
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const startUpdateUser = async (id: string, data: UpdateUserRequest) => {
    const result = await mutation.mutateAsync({id, data})
    if (result.status === 200) {
      return true
    }
    return false
  }

  return {
    startUpdateUser,
  }
}
