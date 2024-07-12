import "./List.css"
import { useState } from "react";
import TodoItem from "./TodoItem";

const List= ( {todos, onUpdate} ) => {
    
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

    return (
        <div className="List">
            <h4>Todo List❤️</h4>
            <input 
                placeholder="검색어를 입력해주세요"
                value={search} onChange={onChangeSearch}
                ></input>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todos.id} {...todo} onUpdate={onUpdate}/>
                        
                    );
                })}
            </div>
        </div>
    )
}

export default List;