
//5가지 요소 순회 및 탐색 메서드
//1. forEach : 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 
let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr) {  //현재 요소 값, 카운트, 전체 배열

    console.log(item, idx * 2);
})
let doubleArr = [];

arr1.forEach((item) => {
    doubleArr.push(item *2) ;
});
console.log(doubleArr); 

//2. includes  : 배열에 특정 요소가 있는지 확인하는 그런 메서드 
let arr2 = [1,2,3];
let isInclude = arr2.includes(2);
console.log(isInclude);

//3. indexOf : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드    //얕은 인덱스 찾을 때
let arr3 = [1,2,3];
let indexOf = arr3.indexOf(2);
console.log(indexOf); //1
//첫 번째부터 순회하기 때문에 같은 값이 있으면 첫 번째 인덱스 반환
//값이 없다면, -1 반환

//4. findIndex : 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드 
let arr4 = [1,2,3];
const findIndex = arr4.findIndex(
    (item) => item%2 !== 0
);

console.log(findIndex)

//indexOf 와 findIndex의 차이? 얕은 찾기와 깊은 찾기 

let objectArr = [
    {name : "이정환"},
    {name : "홍길동"},
]

console.log(
    objectArr.indexOf({
        name : "이정환"
    }) //이건 못찾음 
)

console.log(
    objectArr.findIndex(
        (item) => item.name === "이정환"
    )
)

//5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 변환
let arr5 = [
    {name : "이정환"},
    {name : "홍길동"},
]

const finded = arr5.find((item) => item.name ==="이정환");

console.log(finded);