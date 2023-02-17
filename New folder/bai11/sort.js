const arrSort = [7, 0, 2, 1, 22, 10, 33];
const newSort = arrSort.sort((a, b) => {
    return a-b;
});
console.log(newSort);