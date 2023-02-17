
// // bai toan pha coffee

// // const doingCoffee = (cb) => {
// //     setTimeout(() => {
// //         console.log('Doing...');
// //         const b = 'toi co coc 1'
// //         const c = 'toi co coc 2'
// //         cb(b, c);
// //     }, 3000);
// // };
// // console.log('Start');
// // doingCoffee((b, c) => {
// //     console.log('Done', b, c);
// // });



// // tinh dien tich hinh thang (a + b) *h /2
// // cong 3s
// // nhan 2s
// // chia 1s
// // tra ve ket qua cuoi cung
// // su dung callback de xu ly
// const dt = 100;

// const tong = (a, b, cb) => {
//     console.log('Start cong');
//     setTimeout(() => {
//         console.log('Cong xong', a + b);
//         const sum = a + b;
//         cb(sum);
//         // return a + b;
//     }, 3000);
// };
// // tongHaicanh(5, 6);


// const nhan = (a, b, cb) => {
//     console.log('Start Nhan');
//     setTimeout(() => {
//         console.log('Nhan xong', a * b);
//         const mul = a*b;
//         cb(mul);
//         // return a * b;
//     }, 2000);
// };
// // nhan1(5, 6);

// const chia = (a,b, cb) => {
//     console.log('Start Chia');
//     setTimeout(() => {
//         console.log('Chia xong', a / b);
//         const div = a/b;
//         cb(div);
//         // return a/b;
//     }, 1000);
// };
// // chia1(30,2);



// const tinhDientich = (a, b, h) => {
//     tong(a, b, (kqSum) => {
//         nhan(kqSum, h, (kqMul) => {
//             chia(kqMul, 2, (kqDiv) => {
//                 console.log(kqDiv)
//             });
//         });
//     });
// };

// const tru = (a,b, cb) => {
//     console.log('Start Tru');
//     setTimeout(() => {
//         console.log('Tru xong', a - b);
//         const kqtr = a-b;
//         cb(kqtr);
//         // return a/b;
//     }, 500);
// };

// //dienTich(5,6,3,4,2,5,10);
// //(a + b) * h * (c/ d) + (e- f) /2
// //                                          

// console.log('Start');
// tinhDientich(5, 6, 10);
// // http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// tinh dien tich hinh thang (a + b) *h /2
// cong 3s
// nhan 2s
// chia 1s
// tra ve ket qua cuoi cung
// su dung promise (lời hứa) de xử lý thành công/ thất bại
// 
const tong = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start cong')
        setTimeout(() => {
            const sum = a + b;
            console.log('cong done', sum);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('ban phai nhap number');
            }
            resolve(sum);
        }, 3000);
    })
}

const nhan = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start cong')
        setTimeout(() => {
            const sum = a + b;
            console.log('cong done', sum);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('ban phai nhap number');
            }
            resolve(sum);
        }, 2000);
    })
}

const chia = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Start chia')
        setTimeout(() => {
            const div = a / b;
            console.log('chia done', sum);
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('ban phai nhap number');
            }
            resolve(sum);
        }, 1000);
    })
}
const a = tong(3, 5);
console.log('gia tri a', a);
// promise có 1 cái hay đó là .then() và .catch()
// nếu giá trị thành công thì vào then(), thất bại thì vào catch()
// tong(3,6)
// .then((data) => {
//     console.log('data ok');
// })
// .catch((error) => {
//     console.log('bi loi', error);
// })


// const ketqua = (a, b, h, h) => {
//     tong (a, b)
//         .then((resul) => 
//             nhan(resul, h).then((dataNhan) => {
//                 chia(dataNhan,g).then((ketquaCuoi) => {
//                     console.log('ket qua cuoi',ketquaCuoi);
//         });
//     }),
//         ).catch((err) => {
//             console.log(err);
//         });
//     };
//     ketqua(5, 10, 2, 0);

const ketqua = (a, b, h, g) => {
    return tong(a, b)
    .then ((resultTong) => nhan (resultTong, h))
    .then((resultNhan) => chia(resultNhan, g))
    .then((resultChia) => {
        console.log('ketquacuoi', resultChia);
    })
    .catch((e) => {
        console.log('bi loi', e)
    });
};