'use client';
import "../global.css";
import { useRouter } from "next/navigation";
import { logout, useSession } from "../lib/utils/loginUtils";

export default function Dashboard() {
  const username = useSession();
  const router = useRouter();

  const handleLogOut = () => {
    logout(router);
  };

  return (
    <div>
      <p>{username ? `Logged in as ${username}` : "Not logged in"}</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
