import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { secciones } from './secciones.js'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])

  return (
    <div className="pagina">
      <header className="cabecera">
        <Link to="/" className="firma">Álvaro Irles</Link>
        <nav aria-label="Secciones">
          {secciones.map((s) => (
            <NavLink key={s.ruta} to={`/${s.ruta}`}>{s.titulo}</NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="pie">
        <div>
          <p className="pie-titulo">Contacto</p>
          {/* PENDIENTE: forma de contacto (sin correo público de momento). */}
          <p className="marcador">Próximamente</p>
        </div>
        <p className="pie-firma">© {new Date().getFullYear()} Álvaro Irles</p>
      </footer>
    </div>
  )
}
