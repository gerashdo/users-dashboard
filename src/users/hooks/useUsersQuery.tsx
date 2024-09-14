import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../auth/api/users"
import { useEffect, useRef } from "react"
import { UserLoginResponse } from "../../auth/interfaces/api";
import { formatDateTime } from "../../shared/utils/dateFormat";


export const useUsersQuery = () => {
  const usersRef = useRef<UserLoginResponse[]>([])
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  useEffect(() => {
    if (!data) return
    usersRef.current = data.data.map(user => ({
      ...user,
      createdAt: formatDateTime(user.createdAt),
      lastLoginTime: formatDateTime(user.lastLoginTime),
    }))
  }, [data])

  return { users: usersRef.current, error, isLoading }
}
