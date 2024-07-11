import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect, useRef } from 'react'
import Even from './components/Even'


import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. mount : 탄생
  useEffect(() => {
    console.log("mount");
  }, [])

  //2. update : 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true; 
      return;
    }
    console.log("update");
  })

  //3. unmount : 죽음

  // useEffect(() => {
  //   console.log(`count: ${count} / input : ${input}`)
  // }, [count, input]);
  //의존성 배열 : dependency array(deps)
  //useEffect를 이용하지 않고 버튼 이벤트에 console로 출력하면 안되나? 
  // => 안됨. 왜냐하면 setCount가 일어나지만 반영은 되지 않기 때문에

  const onClickButton = (value) => {
    setCount(count + value)
    console.log(count); //실질적으로 변경 안된 값이 출력됨. -> useEffect를 사용해야 됨. 
  }

  return (
    <div className="App">
    <h1>simple counter</h1>
    <section>
      <input value={input} onChange={(e) => {
      setInput(e.target.value)
    }}></input>
    </section>
    <section>
      <Viewer count = {count}/>
      {count % 2 === 0? <Even/> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    
    </div>
  )
}

export default App
