import { useState } from 'react'

function Formulario({ onRegistrar }) {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  function manejarEnvio(event) {
    event.preventDefault()
    onRegistrar({ nombre, descripcion, categoria: 'General' })
    setNombre('')
    setDescripcion('')
  }

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  )
}

export default Formulario