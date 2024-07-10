import './App.css'
// import Header from "./components/Header.jsx" //파일 확장자 생략 가능
// import Main from "./components/Main.jsx"
// import Footer from "./components/Footer.jsx"
// import Button from "./components/Button.jsx"
// import Bulb from "./components/Bulb.jsx"
// import Counter from "./components/Counter.jsx"
import Resister from './components/Resister.jsx'
//import {useState} from "react";

/* 
function App() { //app(이름) component //부모 컴포넌트(렌더링 되려면 app컴포넌트에 있어야됨)

const buttonProps = { //spread 연산자 : ...사용
    text : "메일",
    color : "red",
    a : 1,
    b : 2,
    c : 3,
  }
  return (
    <>
    test
    <Header />
    <Main />
    <Footer />
    <Button {...buttonProps} /> 
    <Button text={"카페"}/>
    <Button text={"블로그"}>
      <div>자식요소</div> */{/* props : childeren으로 넘어감 */}
    {/*</Button> */}            {/*반대로 자식->부모는 불가 */}
 //   </>
//  )
//}


function App() {
  return (
  <>
    {/* <Bulb />
    <Counter/> */}
    <Resister/>
  </>
  )
}

export default App;
