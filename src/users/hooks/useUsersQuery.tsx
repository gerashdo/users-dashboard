import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../auth/api/users"
import { useEffect, useState } from "react"
import { UserLoginResponse } from "../../auth/interfaces/api";
import { formatDateTime } from "../../shared/utils/dateFormat";


export const useUsersQuery = () => {
  const [users, setUsers] = useState<UserLoginResponse[]>([])
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  useEffect(() => {
    if (data) {
      setUsers(data.data.map((user: UserLoginResponse) => ({
        ...user,
        createdAt: formatDateTime(user.createdAt),
        updatedAt: formatDateTime(user.updatedAt),
      })))
    }
  }, [data])

  return { users, error, isLoading }
}
