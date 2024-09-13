import { createContext, useState } from "react";
import { User } from "../../shared/interfaces/user";
import { useLogin } from "../hooks/useLogin";

interface AuthContextType {
  user: User | null;
  loginAction: (email: string, password?: string) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(null);
  const { loginUser } = useLogin();

  const loginAction = async (email: string, password?: string) => {
    const user = await loginUser(email);
    console.log(password)
    if (!user) return
    setUser(user);
  }

  const logoutAction = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginAction, logoutAction }}>{children}</AuthContext.Provider>
  );
};
