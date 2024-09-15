import { UserLoginResponse } from "../../auth/interfaces/api"


interface NavbarProps {
  onLogout: () => void
  currentUser: UserLoginResponse
}

export const Navbar = ({currentUser, onLogout}: NavbarProps) => {
  return (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-gray-800">User Management</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">Welcome, {currentUser.name}</span>
          <button
            onClick={onLogout}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </nav>)
}
