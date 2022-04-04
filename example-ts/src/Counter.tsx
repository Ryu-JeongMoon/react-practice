import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({initialValue}: any) => {
  const [count, setCount] = useState(initialValue)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <OddEvenResult count={count}/>
    </div>
  )
}

Counter.defaultProps = {
  initialValue: 0
}

export default Counter;