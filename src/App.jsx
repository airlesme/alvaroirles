import { Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Seccion from './pages/Seccion.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import { secciones } from './secciones.js'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        {secciones.map((s) => (
          <Route key={s.ruta} path={s.ruta} element={<Seccion titulo={s.titulo} />} />
        ))}
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
