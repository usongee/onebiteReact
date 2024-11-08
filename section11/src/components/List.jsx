import "./List.css"
import { useState, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const List= ( ) => {

    const {todos} = useContext(TodoContext);
    
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilterData = ()=> {
        if(search=="") {
            return todos;
        }
        return todos.filter((todo)=> 
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }
    const filteredTodos = getFilterData();

    const {totalCount, doneCount, notDoneCount} = 
    useMemo(()=>{ //콜백함수의 반환값을 그대로 반환
        console.log("getAnalyzed 호출")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount};
    }, [todos]);

    return (
        <div className="List">
            <h4>Todo List❤️😍😍</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div> 
                <div>notDone : {notDoneCount}</div>
            </div>
            <input 
                placeholder="검색어를 입력해주세요"
                value={search} onChange={onChangeSearch}
                ></input>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todos.id} {...todo} />
                        
                    );
                })}
            </div>
        </div>
    )
}

export default List;