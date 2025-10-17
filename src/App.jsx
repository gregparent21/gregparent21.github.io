import { Outlet, NavLink } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="top-0 backdrop-blur border-b">
        <nav className="max-w-5xl mx-auto flex gap-6 p-4">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
