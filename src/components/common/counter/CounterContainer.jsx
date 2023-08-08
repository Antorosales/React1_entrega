import { useState } from "react"
import Counter from "./Counter"

const CounterContainer = ({stock, onAdd, initial=1}) => {

  
  const [count, setContador] = useState(initial);
   
  const sumar = () => {
    count < stock ? setContador(count + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    count > 1 && setContador(count - 1);
  };

  return (
    <Counter count={count} sumar={sumar} restar={restar} onAdd={onAdd} />
  )
}

export default CounterContainer
