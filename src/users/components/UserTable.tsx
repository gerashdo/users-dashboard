import { UserLoginResponse } from "../../auth/interfaces/api";

interface UserDashboardProps {
  users: UserLoginResponse[];
  selectedUsers: string[];
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectUser: (id: string, checked: boolean) => void;
}

export const UserTable = ({
  users,
  selectedUsers,
  onSelectAll,
  onSelectUser,
}: UserDashboardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-start">
                <input
                  type="checkbox"
                  checked={users.length > 0 && selectedUsers.length === users.length}
                  onChange={onSelectAll}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </th>
              <th className="py-3 px-6 text-start">ID</th>
              <th className="py-3 px-6 text-start">Name</th>
              <th className="py-3 px-6 text-start">Email</th>
              <th className="py-3 px-6 text-start">Last Login</th>
              <th className="py-3 px-6 text-start">Registration Time</th>
              <th className="py-3 px-6 text-start">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map((user) => (
              <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user._id)}
                    onChange={(e) => onSelectUser(user._id, e.target.checked)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user._id}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.name}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.email}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.lastLoginTime}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">{user.createdAt}</td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <span className={`py-1 px-3 rounded-full text-xs ${user.isActive ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'}`}>
                    {user.isActive ? 'Active' : 'Blocked'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
