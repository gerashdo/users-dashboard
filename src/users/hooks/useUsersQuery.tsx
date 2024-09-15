import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../auth/api/users"
import { useEffect, useState } from "react"
import { formatDateTime } from "../../shared/utils/dateFormat";
import { GetUsersResponse } from "../interfaces/api";


export const useUsersQuery = () => {
  const [users, setUsers] = useState<GetUsersResponse[]>([])
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  useEffect(() => {
    if (data) {
      setUsers(data.data.map((user) => ({
        ...user,
        createdAt: formatDateTime(user.createdAt),
        lastLoginTime: user.lastLoginTime ? formatDateTime(user.lastLoginTime) : 'Never',
      })))
    }
  }, [data])

  return { users, error, isLoading }
}
