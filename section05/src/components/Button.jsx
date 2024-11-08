// const Button = (props) => {
//     console.log(props);
//     return <button style={{color : props.color}}>
//         {props.text} - {props.color.toUpperCase()}
//         </button>
// }

const Button = ({ text, color, children }) => { //객체 구조분해 할당
    //이벤트 객체
    
    const onClickButton = (e) => {
        console.log(text);
        console.log(e);
    }
    
    return (
    <button 
        //onClick = {()=> { //이벤트 핸들링
        //    console.log(text);
        //}}
        onClick = {onClickButton}
        //onMouseEnter = {onClickButton} //마우스 클릭 시 실행되는 이벤트
    style={{color : color}}
    >
        {text} - {color.toUpperCase()}
        {children}
        </button>
)}

Button.defaultProps = { //.toUpperCase()를 하기위해 기본값 설정
    color : "black", // 만약 기본값이 없다면 오류가 발생
};

export default Button;