import { useState } from "react";
import useInput from "../hooks/useInput";

//3가지 hook 관련 팁 
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출될 수 는 없다 
//3. 나만의 훅(custom Hook)을 직접 만들 수 있다. 

//const state = useState(); //1. 훅은 반드시 함수 컴포넌트 내에서만 사용 가능 



const HookExam = ()=> {

    // if(true) { //2. 조건부 호출 x
    //     const state = useState();
    // }
    // for(;;) {
    //     const state = useState();
    // }
    const state = useState();

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <>
        <input value={input} onChange={onChange}></input>
        <input value={input2} onChange={onChange2}></input>
        </>
    )
};

export default HookExam;