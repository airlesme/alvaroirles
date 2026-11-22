import { useEffect } from 'react'

export default function Seccion({ titulo }) {
  useEffect(() => {
    document.title = `${titulo} · Álvaro Irles`
    return () => { document.title = 'Álvaro Irles · Narrador de historias' }
  }, [titulo])

  return (
    <section className="seccion">
      <h1>{titulo}</h1>
      {/* PENDIENTE: contenido de la sección. */}
    </section>
  )
}
