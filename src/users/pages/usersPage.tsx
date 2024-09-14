import { useContext, useState } from "react"
import { Redirect } from "wouter"
import { AuthContext } from "../../auth/context/authContext"
import { UserTable } from "../components/UserTable"
import { Toolbar } from "../components/Toolbar"
import { Navbar } from "../components/Navbar"
// import { isUserInDeletionList } from "../utils/userUtils"
import { useUsersQuery } from "../hooks/useUsersQuery"
import { useUpdateUser } from "../hooks/useUpdateUser"
import { useQueryClient } from "@tanstack/react-query"


export const UsersPage = () => {
  const queryClient = useQueryClient()
  const { user, logoutAction } = useContext(AuthContext)
  const { users, error, isLoading } = useUsersQuery()
  const { startUpdateUser } = useUpdateUser()
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  if (!user) return <Redirect to="/auth" />

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const onSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user._id))
    } else {
      setSelectedUsers([])
    }
  }

  const onSelectUser = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id])
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id))
    }
  }

  const toggleUserStatus = async (ids: string[], isActive: boolean) => {
    await Promise.all(ids.map((id) => startUpdateUser(id, { isActive })))

    await queryClient.invalidateQueries({
      queryKey: ['users'],
      type: 'all',
      exact: true,
    })
    setSelectedUsers([])
  }

  const onBlock = async () => {
    toggleUserStatus(selectedUsers, false)
  }

  const onUnblock = () => {
    toggleUserStatus(selectedUsers, true)
  }

  const onDelete = () => {
    // setUsers(users.filter((user) => !selectedUsers.includes(user.id)))
    // if (isUserInDeletionList(selectedUsers, Number(user._id))) logoutAction()
    // setSelectedUsers([])
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar currentUser={user} onLogout={logoutAction} />
      <main className="flex-grow container mx-auto p-4">
        <Toolbar
          selectedUsers={selectedUsers}
          onBlock={onBlock}
          onUnblock={onUnblock}
          onDelete={onDelete}
        />
        <UserTable
          users={users}
          selectedUsers={selectedUsers}
          onSelectAll={onSelectAll}
          onSelectUser={onSelectUser}
        />
      </main>
    </div>
  )
}
