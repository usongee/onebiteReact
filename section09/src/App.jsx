import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import Exam from './components/Exam';
import './App.css'
import { useState, useRef } from 'react';

const mockData = [
  {
    id:0,
    isDone:false,
    content:"React 공부하기",
    date:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"빨래하기",
    date:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"노래하기",
    date:new Date().getTime(),
  }
]

function App() {
  const [todos,setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date : new Date().getTime(),
    };

    setTodos([newTodo, ...todos]); //[새로운 할일, 기존의 할일] -> 계속 상태가 업데이트 되는거라고 보면 됨
  }

  const onUpdate = (targetId)=> {
    //todos State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(todos.map((todo)=> 
      todo.id===targetId ? {...todo, isDone:!todo.isDone} : todo 
      //{
      // if(targetId===todo.id) {
      //   return {
      //   ...todo,
      //   isDone : !todo.isDone
      //   }
      // }
      // return todo;
      //}
    ))
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=> todo.id !== targetId ))
  }

  return (

    <div className="App">
      <Exam/>
      {/* <Header/>
      <Editor onCreate = {onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> */}
    </div>
  )
}

export default App;
