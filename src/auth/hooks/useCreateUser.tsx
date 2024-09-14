import { useMutation } from "@tanstack/react-query"
import { createUser } from "../api/users"
import { AxiosError } from "axios"


export const useCreateUser = () => {
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error: AxiosError) => {
      console.log(error)
    }
  })

  const signUp = async (name: string, email: string, password: string) => {
    const result = await mutation.mutateAsync({ name, email, password })
    if (result.status === 201) {
      return true
    }
    return false
  }

  return {
    signUp,
  }
}