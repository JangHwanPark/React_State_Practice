// Computed property names
// 객체 속성 키를 문자열로 변환할 수 있는 표현식(변수, 함수) 동적으로 지정하는 문법
let propertyName = "property_name";
let value = "value";
console.log(`사용전 : propertyName: ${propertyName}, value: ${value}`);

let car = {
    [propertyName]: value
}
console.log(`사용후 : car: ${JSON.stringify(car)}, propertyName: ${propertyName}, value: ${value}`);

let reverse = {
    [value]: propertyName
}
console.log(`반대로 넣기 : car: ${JSON.stringify(reverse)}, propertyName: ${propertyName}, value: ${value}`);

// 함수 사용 예제
function createPropertyName(prefix, id) {
    return `${prefix}_${id}`
}

let prefix = "user";
let id = 102;
let fnValue = "JPark";

let resObj = {
    [createPropertyName(prefix, id)]: fnValue
}

console.log(resObj)