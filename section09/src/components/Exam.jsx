import { useReducer } from "react";

function reducer(state, action) {
    console.log(state, action);
    if(action.type==='INCREASE') {
        return state + action.data;
    }
}


const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        //액션객체
        dispatch({
            type: "INCREASE",
            data : 1,
        })
    }

    return (
    <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
    </div>
    )
}
export default Exam;