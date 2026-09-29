import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Usuarios from './components/Usuarios'

function App() {
  const [tecnologias, setTecnologias] = useState([
    {
      id: 1,
      nombre: 'React',
      descripcion: 'Biblioteca para construir interfaces',
      categoria: 'Frontend',
    },
    {
      id: 2,
      nombre: 'JavaScript',
      descripcion: 'Lenguaje de la web',
      categoria: 'Lenguaje',
    },
    {
      id: 3,
      nombre: 'CSS',
      descripcion: 'Estilos de la interfaz',
      categoria: 'Frontend',
    },
    {
      id: 4,
      nombre: 'HTML',
      descripcion: 'Estructura de las páginas web',
      categoria: 'Frontend',
    },
  ])

  function eliminarTecnologia(id) {
    setTecnologias(tecnologias.filter((tec) => tec.id !== id))
  }

  function agregarTecnologia(datos) {
    const nueva = {
      id: Date.now(),
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      categoria: datos.categoria,
    }
    setTecnologias([...tecnologias, nueva])
  }

  return (
    <div className="contenedor">
      <Header />
      <Formulario onRegistrar={agregarTecnologia} />
      <main>
        {tecnologias.map((tec) => (
          <Card
            key={tec.id}
            nombre={tec.nombre}
            descripcion={tec.descripcion}
            categoria={tec.categoria}
            onEliminar={() => eliminarTecnologia(tec.id)}
          />
        ))}
      </main>
      <Usuarios />
      <Footer />
    </div>
  )
}

export default App