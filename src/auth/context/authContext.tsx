import { createContext, useState } from "react"
import { UserLoginResponse } from "../interfaces/api"

interface AuthContextType {
  user: UserLoginResponse | null;
  loginAction: (user: UserLoginResponse) => Promise<void>;
  logoutAction: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loginAction: async () => {},
  logoutAction: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserLoginResponse | null>(null);

  const loginAction = async (user: UserLoginResponse) => {
    setUser(user)
  }

  const logoutAction = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginAction, logoutAction }}>{children}</AuthContext.Provider>
  );
};
