// function chuẩn hóa tên người, viết hoa chữ cái đầu tiên
// let a = 'nguYen tHI HONG'
// let b = chuanHoa(a);
// console.log(a);
// console.log(b);
// console.log(a);
function chuanHoa(str) {
    let str1 = str.trim().toLowerCase();
    // console.log(str1);
    let chuanhoa = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i - 1] == ' ' || i == 0) {
            chuanhoa += str1.charAt(i).toUpperCase();
        } else {
            chuanhoa += str1.charAt(i)
        }

    }
    return chuanhoa;
}

// function tìm chữ 'a' hoặc 'A' có xuất hiện trong firstName hay không
function findAa(str) {
    let str1 = str.trim().toLowerCase();
    return str1.indexOf('a');
}

// bai tap 27
// cho một mảng là một tập hợp các học viên trong lớp, mảng là một tập hợp Object của học viên
// gồm 3 thông tin: id, firstName, lastName, hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên
// của tên Viết Hoa, và tìm tất cả các học viên có tên tồn tại chữ cái 'a' hoặc 'A', và tên dài 
// hơn hoặc bằng 3 ký tự
const students = [
    { id: 'TH3XX1', firstName: 'NgAN', lastName: 'Duong Thuy' },
    { id: 'TH3XX2', firstName: 'Ha', lastName: 'do ThI THU' },
    { id: 'TH3XX5', firstName: 'MiNH', lastName: 'nguyen nhat' },
]

console.log('Truoc chuan hoa: ');
console.log(students);
//----------------------------------------

// const format = (student) => {
//     student.firstName = chuanHoa(student.firstName);
//     student.lastName = chuanHoa(student.lastName);
//     return student;
// }

// const studentMap = students.map(format);
// console.log('sau chuan hoa: ');
// console.log(1,students);
// console.log(2,studentMap);
//----------------------------------------

function formatStudent(a) {
    let student = a;
    student.id = a.id;
    student.firstName = chuanHoa(a.firstName);
    student.lastName = chuanHoa(a.lastName);
    return student;
}


// const chuanhoa = students.map((item, index) => {
//     return formatStudent(item);
// });
// console.log('da chuan hoa: ');
// console.log(chuanhoa);

// console.log('sau chuan hoa: ');
// console.log(student);

// console.log(chuanHoaStudent);

// const chuanhoa = student.map((item, index) => {
//     // return chuanHoa(index.lastName + ' ' + index.firstName);
//     return item.firstName;
// });
// console.log(chuanhoa);
const findName = students.filter( (item, index) => {
    return (item.firstName.length > 2 && findAa(item.firstName) >= 0) 
});
console.log(findName);



// reduce()
const arrReduce = [3, 4, 5, 6];
const sum = arrReduce.reduce((a, b) => { return a + b }, 0);
// a = 0; b = 3 => 0 + 3 = 3
// a = 3; b = 4 => 7
// a = 7; b = 5 => 12

// const listAnimals = [{ name: 'dog', age: 1, weight: 3 },
// { name: 'dog2', age: 1, weight: 3 },
// { name: 'dog3', age: 1, weight: 3 },
// { name: 'dog4', age: 1, weight: 3 },];

// const weight1 = listAnimals.reduce((a, b) => { return a + b.weight }, 0); // vi a la gia tri khoi tao la 0
// console.log(weight1);