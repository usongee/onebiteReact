//1. 배열 순회

//1.1 배열 인덱스
let arr1 = [1,2,3];
for(let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
}


//1.2 for of 반복문
let arr2 = [4,5,6,7,8]
for(let item of arr2) {
    console.log(item);
}

//2. 객체 순회
let person = {
    name : "이정화",
    age : 27,
    hobby : "축구",
}

//2.1 Object.keys 사용 -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
        const value = person[key];
        console.log(key, value);
}

//2.2 Object.values 사용 -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values)    {
    console.log(value);
}

//2.3 for in
for (let key in person) {
    let value = person[key]
    console.log(key, value);
}