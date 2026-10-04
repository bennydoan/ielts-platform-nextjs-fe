import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getMe, logOut as logOutApi } from "@/libs/auth";

type AuthState = {
  isLoggedIn: boolean;
  email: string | null;
  fullName: string | null;
  role: string | null;
  isLoading: boolean;
  login: (fullName: string, role: string, email: string) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((user) => {
        setIsLoggedIn(true);
        setFullName(user.fullName);
        setRole(user.role);
        setEmail(user.email);
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  function login(fullName: string, role: string, email: string) {
    setIsLoggedIn(true);
    setFullName(fullName);
    setRole(role);
    setEmail(email);
  }

  async function logout() {
    await logOutApi();
    setIsLoggedIn(false);
    setFullName(null);
    setRole(null);
    setEmail(null);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, fullName, role, isLoading, login, email, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider"); // if you call useAuth in a component that is not wrapped inside a AuthProvider => error
  return ctx;
}
