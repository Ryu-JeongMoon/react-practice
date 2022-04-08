import {useEffect, useState} from "react";

const LifeCycleSample = () => {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    console.log('Mount!')
  }, [])

  useEffect(() => {
    console.log('Update!')
  })

  useEffect(() => {
    console.log(`count is updated : ${count}`)
  }, [count])

  useEffect(() => {
    console.log(`text is updated : ${text}`)
  }, [text])

  return <div style={{padding: 20}}>
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
}

export default LifeCycleSample

/*
useEffect( callback function, deps )
deps 위치에는 변경을 감지할 값을 배열 [] 안에 넣어주도록 한다
빈 배열 -> Mount 할 때
넣지 않을 시 -> Update 할 때
count 넣을 시 -> count 값 변경될 때
 */