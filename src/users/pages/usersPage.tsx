import { useContext, useState } from "react"
import { Redirect } from "wouter"
import { AuthContext } from "../../auth/context/authContext"
import { Navbar } from "../components/Navbar"
import { UserTable } from "../components/UserTable"
import { Toolbar } from "../components/Toolbar"
import { useUsersQuery } from "../hooks/useUsersQuery"
import { useUpdateUser } from "../hooks/useUpdateUser"
import { useDeleteUser } from "../hooks/useDeleteUser"
import { useDisplayMessage } from "../../shared/hooks/useDisplayMessage"
import { isUserInList } from "../utils/userUtils"


export const UsersPage = () => {
  const {user, logoutAction} = useContext(AuthContext)
  const {users, error, isLoading} = useUsersQuery()
  const {displayMessage} = useDisplayMessage()
  const {startUpdateUser} = useUpdateUser()
  const {deleteUserById} = useDeleteUser()
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  if (!user || !user.isActive) return <Redirect to="/auth" />
  if (error) displayMessage('The users could not be loaded', 'error')

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

  const toggleUserStatus = async (isActive: boolean) => {
    selectedUsers.map((id) => startUpdateUser(id, { isActive }))
    setSelectedUsers([])
  }

  const onBlock = () => {
    toggleUserStatus(false)
    if (isUserInList(selectedUsers,user._id)) logoutAction()
  }

  const onUnblock = () => {
    toggleUserStatus(true)
  }

  const onDelete = async () => {
    selectedUsers.map((id) => deleteUserById(id))
    if (isUserInList(selectedUsers,user._id)) logoutAction()
    setSelectedUsers([])
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
        {
          isLoading && <div>Loading...</div>
        }
        {
          !isLoading && !error && (
            <UserTable
              users={users}
              selectedUsers={selectedUsers}
              onSelectAll={onSelectAll}
              onSelectUser={onSelectUser}
            />
          )
        }
      </main>
    </div>
  )
}
