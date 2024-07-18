import './App.css'
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

import { useReducer } from 'react';

const mockData = [
  {
    id : 1, 
    createdDate : new Date().getTime(), 
    emotionId : 1, 
    content : "1번 일기 내용",
  }, 
  {
    id : 2, 
    createdDate : new Date().getTime(), 
    emotionId : 2, 
    content : "2번 일기 내용",
  }
]

function reducer(state, action){
  return state;
}
function App() {

  const nav = useNavigate();

  const [data, dispatch] = useReducer(reducer, mockData);

  const onClickButton = () => {
    nav("/new")
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="*" element = {<Notfound />} />
    </Routes>
    </>
    
  )
}

export default App
