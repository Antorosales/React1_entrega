

const Counter = ({count,sumar,restar,onAdd}) => {
  return (
    <div>
       <button onClick={sumar}>sumar</button>
        <div>Counter: {count}</div>
        <button onClick={restar}>restar</button>
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default Counter
