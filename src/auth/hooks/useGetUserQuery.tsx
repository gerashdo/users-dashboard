import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../api/users"


export const useGetUserQuery = (id: string, enabled: boolean) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
    enabled,
  })

  return {
    data,
    isLoading,
    isError,
  }
}
