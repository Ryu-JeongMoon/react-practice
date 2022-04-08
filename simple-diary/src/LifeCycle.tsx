import {useEffect, useState} from "react";

const UnmountTest = () => {
  useEffect(() => {
    return () => {
      console.log('Unmount!')
    }
  }, [])

  return <div>Unmount Testing Component</div>
}

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  return <div style={{padding: 20}}>
    <button onClick={toggle}>ON/OFF</button>
    {isVisible && <UnmountTest/>}
  </div>
}

export default LifeCycle

/*
useEffect 의 callback 안에서 return 값으로 함수를 넘겨주고
그 안에서 무언가 실행하는 경우 Unmount 할 때 실행됨
 */