import Link from "next/link";

export default function Navbar(params) {
    return (
      <nav className="flex flex-wrap w-full items-center h-12 justify-center bg-slate-800 text-white rounded-b-lg fixed">
        <ul className="flex flex-row items-center justify-center gap-4 my-1">
            <Link href="/" className="">Home</Link>
            <Link href="/arch-computer">Computer Architecture</Link>
            <Link href="/math">Mathematic</Link>
        </ul>
      </nav>
    );
}
