import Link from "next/link";
import { OAuth, OAuthUtils } from "./supabase_auth";

export default function Navbar() {
  const { showAuth, loggedIn, handleLoginClick, handleLogoutClick } = OAuthUtils();

  return (
    <>
      {showAuth ? (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white text-black justify-center rounded-lg shadow-lg p-4 max-w-xs">
              <OAuth />
            </div>
          </div>
        </div>
      ) : (
        <nav className="flex flex-wrap w-full items-center h-12 justify-center bg-slate-800 text-white rounded-b-lg fixed">
          <ul className="flex flex-row items-center justify-center gap-4 my-1">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/arch-computer">
              Computer Architecture
            </Link>
            <Link href="/math">
              Mathematic
            </Link>
            <a onClick={loggedIn ? () => 
                handleLogoutClick : handleLoginClick} 
                className="rounded-lg bg-gray-500 text-black p-1"
            >
              {loggedIn ? "Logout" : "Login In"}
            </a>
          </ul>
        </nav>
      )}
    </>
  );
}
