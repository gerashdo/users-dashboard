import { createContext, useEffect, useState } from "react"
import { GetUserResponse } from "../interfaces/api"
import { useGetUserQuery } from "../hooks/useGetUserQuery";

interface AuthContextType {
  user: GetUserResponse | null
  isLoading: boolean
  loginAction: (user: GetUserResponse) => Promise<void>
  logoutAction: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  loginAction: async () => {},
  logoutAction: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const localStorageUser = localStorage.getItem('user') || ''
  const [user, setUser] = useState<GetUserResponse | null>(null)
  const {data, isLoading} = useGetUserQuery(localStorageUser, !user && !!localStorageUser)

  useEffect(() => {
    if (!data?.data) return
    setUser(data.data)
  }, [data])

  const loginAction = async (user: GetUserResponse) => {
    setUser(user)
    localStorage.setItem('user', user._id)
  }

  const logoutAction = () => {
    setUser(null);
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, loginAction, logoutAction }}>{children}</AuthContext.Provider>
  );
};
