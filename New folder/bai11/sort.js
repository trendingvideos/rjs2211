// const arrSort = [7, 0, 2, 1, 22, 10, 33];
// const newSort = arrSort.sort((a, b) => {
//     return a-b;
// });
// console.log(newSort);
const arrName = ['hong', 'hoa', 'yen', 'an', 'binh', 'hoan'];
const newSortName = arrName.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(newSortName);