import Link from "next/link";
import React from "react"
import Navbar from "./navbar";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-10 p-5 bg-white ">
      <Link href="/" className="text-2xl">Homepage Title</Link>
      <Navbar />
    </header>
  )
}

export default Header;
