import { useContext, useState } from "react"
import { LoginForm } from "../components/loginForm"
import { RegisterForm } from "../components/registerForm"
import { AuthContext } from "../context/authContext"
import { Redirect } from "wouter"

enum AuthTabs {
  LOGIN = 'login',
  REGISTER = 'register'
}

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<AuthTabs>(AuthTabs.LOGIN)
  const { user } = useContext(AuthContext)

  if (user) return <Redirect to="/users" />


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rouded-lg overflow-hidden">
        <div className="flex border-b">
          <button
            className={`w-1/2 py-4 text-center font-medium ${
              activeTab === AuthTabs.LOGIN
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'bg-gray-100 text-gray-500'
              }`}
            onClick={() => setActiveTab(AuthTabs.LOGIN)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-4 text-center font-medium ${
              activeTab === AuthTabs.REGISTER
                ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                : 'bg-gray-100 text-gray-500'
              }`}
            onClick={() => setActiveTab(AuthTabs.REGISTER)}
          >
            Sign Up
          </button>
        </div>

        <div className="p-6">
          {activeTab === AuthTabs.LOGIN
            ? <LoginForm />
            : <RegisterForm />
          }
        </div>
      </div>
    </div>
  )
}
