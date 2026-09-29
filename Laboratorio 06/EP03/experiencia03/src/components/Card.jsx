function Card({ nombre, descripcion, categoria, onEliminar }) {
  return (
    <article className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Categoría: {categoria}</p>
      <button type="button" onClick={onEliminar}>
        Eliminar
      </button>
    </article>
  )
}

export default Card