import { initialData, User } from "@/initialData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const seedInitialData = () => {
  Object.entries(initialData).forEach(([key, value]) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
};

export const useRedirectIfLoggedIn = (router: any) => { 
    useEffect(() => {
      const sessionUser = localStorage.getItem("sessionUser");
      if (sessionUser) {
        router.push('/user');
      }
    }, [router]);
  };

export const fetchUsers = (setUsers: (users: User[]) => void) => {
  try {
    const localStorageUsers = localStorage.getItem("users");
    if (!localStorageUsers) {
      throw new Error("No users found!");
    }
    setUsers(JSON.parse(localStorageUsers));
  } catch (e) {
    console.error(e);
  }
};

export const formatRole = (role: User["role"]) => {
  const ROLES: Record<User["role"], string> = {
    EMPLOYEE: "Employee",
    LEADER: "Leader",
  };
  return ROLES[role];
};

export const handleLogin = (
    username: string,
    password: string,
    setError: (error: string | null) => void,
    router: any
  ) => {
    const localStorageUsers = localStorage.getItem("users");
    if (localStorageUsers) {
      const users: User[] = JSON.parse(localStorageUsers);
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem("sessionUser", JSON.stringify(user));
        router.push('/user');
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("No users found!");
    }
  };

  export const useSession = () => {
    const [username, setUsername] = useState<string | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      const sessionUser = localStorage.getItem("sessionUser");
      if (sessionUser) {
        const user: User = JSON.parse(sessionUser);
        setUsername(user.username);
      } else {
        router.push('/');
      }
    }, [router]);
  
    return username;}

    export const logout = (router: any) => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem("sessionUser");
          router.push('/');
        }
      };
