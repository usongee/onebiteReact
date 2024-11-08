//1. spread 연산자 : 흩뿌리다, 펼치다라는 뜻 : ...arr1
//객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

//배열
let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];

console.log(arr2);

//객체
let obj1 = {
    a:1,
    b:2,    
};
let obj2 = {
    ...obj1,
    c:3,
    d:4,
};
console.log(obj2);


























//함수
function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1);

//2. Rest 매개변수 : 나머지 매개변수

function funcB(one, ...rest) { //rest의 매개변수 명은 마음대로 정하면 됨. rest 뒤에는 아무 매개변수도 올 수 없음 
    console.log(rest);
    console.log(one);
}
funcB(...arr1);