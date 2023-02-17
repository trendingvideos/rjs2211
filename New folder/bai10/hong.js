// bai 21, 22 23 24 25


const array = ['tung', 'trung', 'doan', 123, false, true, { data: 'Du lieu' }];
const emptyArray = [];
const listNumber = [1, 2, 3, 4];
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sumArray21 = (arr) => {
    let sum21 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum21 += arr[i];
    }
    return sum21;
}
console.log(sumArray21(a));
// bai 22
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const findMinMax = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            // max = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max + ' ' + min);
}
findMinMax(b);

// bai23
const arr23 = [9, 2, 3, 4, 5, 6, 7, 8, 9,9, 8, 7, 6, 5, 4, 3, 2, 1,9,9];
const timNMax = (a) => {
    let nmax=0;
    let max = a[0];
    for (let i = 0; i< a.length; i++) {
        if (max < a[i]) {
            max = a[i];
            nmax = 1;
        } else if (max == a[i]) {
            nmax += 1;
        }
    }
    console.log(max + ' xuat hien ' + nmax);
    // console.log(nmax);
    return nmax;
}
timNMax(arr23);
// bai 24
const songuyento = (a) => {
    let check = true;
    if (a == 1) {
        check = false;
    } else if (a >= 3) {
        for (let i = 2; i <= a / 2; i++) {
            if (a % i == 0) {
                check = false;
            }
        }
    }
    return check;
}



// console.log(songuyento(4));
const timsonguyento = (arr) => {
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        if (songuyento(arr[i])) {
            // console.log(arr[i] + ' la so nguyen to');
            b.splice(b.length,1,arr[i]);
        }
    }
    console.log(b);
}
const arr24 = [1,2,3,2,3,4,6,7]
timsonguyento(arr24);