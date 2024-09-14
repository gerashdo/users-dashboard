import { useContext, useState } from "react"
import { Redirect } from "wouter"
import { AuthContext } from "../../auth/context/authContext"
import { UserTable } from "../components/UserTable"
import { Toolbar } from "../components/Toolbar"
import { Navbar } from "../components/Navbar"
import { isUserInDeletionList } from "../utils/userUtils"
import { User } from "../../shared/interfaces/user"
import { users as initialUsers } from "../../shared/data/users"


export const UsersPage = () => {
  const { user, logoutAction } = useContext(AuthContext)
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  if (!user) return <Redirect to="/auth" />

  const onSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user.id))
    } else {
      setSelectedUsers([])
    }
  }

  const onSelectUser = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id])
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id))
    }
  }

  const onBlock = () => {
    setUsers(users.map((user) => {
      if (selectedUsers.includes(user.id)) {
        return {...user, status: 'blocked'}
      }
      return user
    }))
    setSelectedUsers([])
  }

  const onUnblock = () => {
    setUsers(users.map((user) => {
      if (selectedUsers.includes(user.id)) {
        return {...user, status: 'active'}
      }
      return user
    }))
    setSelectedUsers([])
  }

  const onDelete = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)))
    if (isUserInDeletionList(selectedUsers, Number(user._id))) logoutAction()
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
