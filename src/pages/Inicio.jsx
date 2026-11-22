import { Link } from 'react-router-dom'
import { secciones } from '../secciones.js'

export default function Inicio() {
  const puertas = secciones.filter((s) => s.puerta)
  const opiniones = secciones.find((s) => s.ruta === 'opiniones')

  return (
    <>
      <section className="presentacion">
        <div className="presentacion-texto">
          <h1>
            Álvaro Irles.
            <span>Narrador de historias.</span>
          </h1>
          <p className="lema">
            Observo el mundo con mirada crítica y lo cuento con palabras,
            imágenes y código.
          </p>
        </div>
        {/* PENDIENTE: retrato de estudio. Sustituir el marco por
            <img src="/retrato.jpg" alt="Álvaro Irles" /> */}
        <figure className="retrato" aria-hidden="true">
          <div className="retrato-marco" />
        </figure>
      </section>

      <section className="puertas" aria-label="Secciones">
        {puertas.map((s) => (
          <Link key={s.ruta} to={`/${s.ruta}`} className="puerta">
            <span className="puerta-titulo">{s.titulo}</span>
            <span className="puerta-flecha" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <section className="opiniones">
        <h2>{opiniones.titulo}</h2>
        {/* PENDIENTE: lista de textos cortos. */}
        <Link to={`/${opiniones.ruta}`} className="enlace">Leer opiniones</Link>
      </section>
    </>
  )
}
