let str = '   NGuyen ThAc TunG   ';
let str1 = str.trim().toLowerCase();
// console.log(str1);
let chuanhoa = '';
for (let i = 0; i < str1.length; i++) {
    if (str1[i-1] ==' ' || i == 0) {
        chuanhoa += str1.charAt(i).toUpperCase();
    } else {
        chuanhoa += str1.charAt(i)
    }

}
console.log(chuanhoa);
let str10 = '10.5'
let number20 = 20;

console.log('10.5' + 20);
console.log(str10 - number20);
console.log(Math.round(10.2));
console.log(Math.floor(Math.random() * 6) + 1);
let min = 10;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);