import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row space-x-4">
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/posts">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/apps">
            Apps
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
