import { useState, useRef } from "react";

//간단한 회원가입 폼 
//1. 사용자 이름
//2. 생년월일 
//3. 국적
//4. 자기소개

const Resister = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    });

    const countRef = useRef(0); //초기값 설정 가능 
    const inputRef = useRef();

    // console.log(refObj);
    // console.log(refObj.current);
    console.log(input);

    // const onChangeName = (e) => {
    //     //console.log(e);
    //     //console.log(e.target.value)
    //     //setName(e.target.value);
    //     setInput({
    //         ...input, //기존의 input을 유지하기 위해 - 없다면 다른건 다 삭제되고 name만 남게됨
    //         name : e.target.value
    //     })
    // }

    let count = 0;

    const onChange = (e) => {
        //countRef.current++;
        count++;
        console.log(count);
        console.log(e.target.name, e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.valuev //event가 발생한 곳의 name 속성 : 값
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            //이름을 입력하는 dom 요소 포커스
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <button onClick={() => {
                refObj.current++;
                console.log(refObj.current)
            }}> ref + 1 </button>

            <div>
            <input 
            ref={inputRef}
            value={input.name} 
            name = "name"
            onChange={onChange} 
            placeholder={"이름"} 
            />  {input.name}
            </div>

            <div>
            <input type="date"
            name = "birth"
                value={input.birth}
                onChange={onChange}
                /> {input.birth}
            </div> 

            <div>
                <select onChange={onChange}
                value={input.country}  name = "country"> 
              
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select> {input.country}
            </div>

            <div>
                <textarea value={input.bio} 
                name = "bio"
                onChange={onChange}></textarea>
                {input.bio}
            </div>
            <div>
                <button onClick={onSubmit}>제출</button>
            </div>
            
        </div>
    )
}

export default Resister;