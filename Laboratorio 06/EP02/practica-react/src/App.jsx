import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'


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

  return (
    <div className="contenedor">
      <Header />
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
      <Footer />
    </div>
  )
}

export default App