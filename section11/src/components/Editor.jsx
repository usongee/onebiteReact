import "./Editor.css"
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor= ()  => {

    const { onCreate } = useContext(TodoContext);
    console.log(TodoContext)

    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeydown=(e) => { //엔터키 쳐서 입력하기 
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    return (
        <div className="Editor">
            <input ref={contentRef} 
            value={content} 
            onChange={onChangeContent} 
            onKeyDown={onKeydown}
            placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;