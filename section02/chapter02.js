//단락평가

// function returnFalse() {
//     console.log("false 함수");
//     return false;
// }

// function returnFalse1() {
//     console.log("false 함수");
//     return undefined;
// }
// function returnTrue() {
//     console.log("true 함수");
//     return true;
// }

// function returnTrue1() {
//     console.log("true 함수");
//     return 10;
// }
// console.log(returnFalse() && returnTrue()); //returnTrue 호출안됨(접근조차x)
// console.log(returnTrue() && returnFalse()); //단락평가 작동x

// console.log(returnTrue() || returnFalse());

// console.log(returnFalse1() && returnTrue1()); //값 자체가 출력됨
// console.log(returnTrue1() && returnFalse1()); 
// console.log(returnTrue1() || returnFalse1());

//단락 평가 활용 사례

// function printName(person) {
//     if(!person) {
//         console.log("person에 값이 없음")
//     }
//     console.log(person.name);
// }

function printName(person) {
    const name =person && person.name 
    console.log(name || "person의 값이 없음");
}
printName();
printName({name :"이정환"});