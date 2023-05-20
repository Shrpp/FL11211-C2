import Link from 'next/link';
import loginInForm from '../pages/auth/loginIn';
import signUpForm from '../pages/auth/signUp';

export default function Navbar() {
    return (
      <nav className="flex flex-wrap w-full items-center h-12 justify-center bg-slate-800 text-white rounded-b-lg fixed">
        <ul className="flex flex-row items-center justify-center gap-4 my-1">
            <Link href="/" className="">Home</Link>
            <Link href="/arch-computer">Computer Architecture</Link>
            <Link href="/math">Mathematic</Link>
            {!user && (
              <>
                <li>
                  <Link href="/login">
                    Login In
                  </Link>
                </li>
                <li>
                  <Link href="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <span>{user.email}</span>
              </li>
            )}
        </ul>
      </nav>
    );
}
