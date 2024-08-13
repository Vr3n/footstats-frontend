import Link from 'next/link'
import React from 'react'

const LINKS = [
  {
    'href': '/',
    'text': 'Home'
  },
  {
    'href': '/',
    'text': 'Tournaments'
  },
  {
    'href': '/',
    'text': 'About'
  },
]

const NavLinks = ({ href, text }: { href: string, text: string }) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="py-4 transparent shadow-md">
      <nav className="flex justify-between items-baseline container ">
        <h2 className="text-2xl font-bold text-gray-900">FootStats</h2>
        <ul className="flex justify-between gap-8 delay-200">
          {
            LINKS.map((link, idx) => (
              <li className='cursor-pointer text-gray-500 hover:text-gray-900'
                key={idx}
              >
                <NavLinks href={link.href} text={link.text} />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
