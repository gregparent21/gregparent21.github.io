import { Outlet, NavLink } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 backdrop-blur border-b">
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
      <footer className="max-w-5xl mx-auto p-6 text-sm opacity-70">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  )
}
