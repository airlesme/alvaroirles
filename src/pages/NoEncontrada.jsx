import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section className="seccion">
      <h1>Página no encontrada</h1>
      <Link to="/" className="enlace">Volver al inicio</Link>
    </section>
  )
}
