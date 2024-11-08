import "./Main.css"


//JSX 주의사항 
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 
//  ex) {10}, {number} (o) / {if() {}}, 조건문, 반복문 (x)
//2. 숫자, 문자열, 배열 값만 렌더링 된다. 
//  ex) {[]) (o) / {true}, {undefined}, {null}, {obj} (객체는 바로 렌더링x) (x)
//3. 모든 태그는 닫혀있어야 한다.  ex) <img> 
//4. 최상위 태그는 반드시 하나여야만 한다 
//  ex) <main>
const Main = ()=> {
    //const obj = {a : 1};
    //const number = 10;

    // return (
        //<div></div> 4번 주의사항 : 오류 발생 => <> 만약 한다면 빈 태그로 묶어주기 
        // <main>
        //     <h1>main</h1>
        //     <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2> 
        //     {obj.a} {/* 객체 렌더링 하는 법 */}
        // </main>
    // );  

    const user = {
        name : "이정환", 
        isLogin : true,
    }; //조건에 따른 다른 ui
    // return (
    // <>
    //     {user.isLogin ? ( 
    //     <div>로그아웃</div> 
    // ) :( 
    //     <div>로그아웃</div> 
    //     ) }
    // </>
    // );

    if(user.isLogin) {  //위의 코드와 같은거 
        return <div className = "logout" //style = {{
            //backgroundColor : "red", //css : background-color (x) -> 연결어는 카멜식으로 적기 
            //borderBottom : "5px solid blue",
        //}}
        >로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
};

export default Main;