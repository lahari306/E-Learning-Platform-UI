import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition hover:bg-gray-100 ${
        isActive ? 'bg-gray-900 text-white hover:bg-gray-900' : 'text-gray-700'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-lg font-bold tracking-tight">E‑Learn</NavLink>
          <nav className="flex items-center gap-2">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/courses">Courses</NavItem>
            <NavItem to="/progress">My Progress</NavItem>
          </nav>
        </div>
      </div>
    </header>
  )
}
