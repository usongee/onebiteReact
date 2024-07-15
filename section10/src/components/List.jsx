import "./List.css"
import { useState } from "react";
import TodoItem from "./TodoItem";

const List= ( {todos, onUpdate, onDelete } ) => {
    
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

    const getAnalyzedData = () => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todos.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {totalCount, doneCount, notDoneCount};
    }

    const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List❤️😍😍</h4>
            <div>
                <div>{totalCount}</div>
                <div>{doneCount}</div> 
                <div>{notDoneCount}</div>
            </div>
            <input 
                placeholder="검색어를 입력해주세요"
                value={search} onChange={onChangeSearch}
                ></input>
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem key={todos.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
                        
                    );
                })}
            </div>
        </div>
    )
}

export default List;