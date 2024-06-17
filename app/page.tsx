'use client';
import "./global.css";
import { ChangeEvent, useState, useEffect } from "react";
import { seedInitialData, fetchUsers, formatRole, handleLogin, useRedirectIfLoggedIn } from "./lib/utils/loginUtils";
import { User } from "@/initialData";
import { useRouter } from "next/navigation";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
  
    useRedirectIfLoggedIn(router);

    const handleFetchUsers = () => {
      fetchUsers(setUsers);
    };
  
    const handleLoginClick = () => {
      handleLogin(username, password, setError, router);
    };
  
    useEffect(() => {
      handleFetchUsers();
    }, []);
  
    return (
      <div className="App">
        <button onClick={seedInitialData}>Seed initial data</button>
        <button onClick={handleFetchUsers}>Fetch users</button>
        <ol>
          {users.map(({ id, username, role }) => (
            <li key={id}>
              {username}, role: {formatRole(role)}
            </li>
          ))}
        </ol>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button onClick={handleLoginClick}>Sign in</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    );
  }
